const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      enum: ["commercial", "admin", "product manager", "customer"],
      default: "customer",
    },
    phoneNumber: {
      type: String,
      trim: true,
      match: [/^\+?[1-9]\d{1,14}$/, "Please provide a valid phone number"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Middleware to validate email uniqueness before saving

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Method to check if password is correct
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to check if user email is unique
userSchema.methods.isEmailUnique = async function (email) {
  const user = await this.constructor.find({ email });
  return user.length === 0;
};

// ✅ Indexes for performance
// userSchema.index({ email: 1 });
userSchema.index({ role: 1 });
userSchema.index({ isActive: 1 });

// mongoose.connection.collection("users").dropIndex("phoneNumber_1")
//   .then(() => console.log("Dropped existing phoneNumber index"))
//   .catch((err) => {
//     if (err.codeName === "IndexNotFound") {
//       console.log("No existing phoneNumber index found");
//     } else {
//       console.error("Error dropping phoneNumber index:", err);
//     }
//   });

// mongoose.connection.collection("users").dropIndex("email_1")
//   .then(() => console.log("Dropped existing phoneNumber index"))
//   .catch((err) => {
//     if (err.codeName === "IndexNotFound") {
//       console.log("No existing phoneNumber index found");
//     } else {
//       console.error("Error dropping phoneNumber index:", err);
//     }
//   });

const User = mongoose.model("User", userSchema);

// User.collection
//   .createIndex(
//     { phoneNumber: 1 },
//     {
//       unique: true,
//       partialFilterExpression: {
//         role: "customer",
//         phoneNumber: { $type: "string" },
//       },
//     }
//   )
//   .catch((err) => {
//     if (err.codeName !== "IndexOptionsConflict") {
//       console.error(
//         "Failed to create partial index for phoneNumber:",
//         err.message
//       );
//     }
//   });

// User.collection
//   .createIndex(
//     { email: 1 },
//     {
//       unique: true,
//       partialFilterExpression: {
//         role: { $ne: "customer" },
//         email: { $type: "string" },
//       },
//     }
//   )
//   .catch((err) => {
//     if (err.codeName !== "IndexOptionsConflict") {
//       console.error(
//         "Failed to create partial index for email:",
//         err.message
//       );
//     }
//   });

module.exports = User;
