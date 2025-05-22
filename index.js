// Importer les dépendances
const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/dbConfig');

// Import models (order matters for references)
require('./models/Category');
require('./models/Product');
require('./models/Promotion');

// Import routes
const productRoutes = require('./routes/productRoutes');
const promotionRoutes = require('./routes/promotionRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Créer l'application Express
const app = express();
const PORT = process.env.PORT || 3005;

// Connect to MongoDB
connectDB();

// Configurer les middlewares
app.use(cors()); // Activer CORS
app.use(express.json()); // Pour parser les requêtes JSON
app.use(express.urlencoded({ extended: true })); // Pour parser les données de formulaire
app.use(express.static(path.join(__dirname, 'public'))); // Pour servir des fichiers statiques

// Routes
app.use('/api/products', productRoutes);
app.use('/api/promotions', promotionRoutes);
app.use('/api/categories', categoryRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something broke!',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Not Found',
    message: 'The requested resource was not found'
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});