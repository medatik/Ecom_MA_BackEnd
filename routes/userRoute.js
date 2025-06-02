const express = require('express');
const router = express.Router();
const { users_management_with_webhooks } = require('../controllers/userController');
const { verifyWebhook } = require('../middleware/webhooks');

router.post("/clerk-webhooks", express.raw({ type: 'application/json' }), verifyWebhook, users_management_with_webhooks);


module.exports = router;
