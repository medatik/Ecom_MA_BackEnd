const User = require("../models/User");
const { clerkClient } = require("@clerk/clerk-sdk-node");


exports.users_management_with_webhooks = async (req, res) => {
  const { type, data } = req.evt;

  try {
    switch (type) {
      case "user.created":
        await handleUserCreated(data);
        break;

      case "user.updated":
        await handleUserUpdated(data);
        break;

      case "user.deleted":
        await handleUserDeleted(data);
        break;

      default:
        console.log(`Unhandled webhook type: ${type}`);
    }

    res.status(200).json({ message: "Webhook processed successfully" });
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Handler functions
async function handleUserCreated(data) {
  console.log('User created:', data.id);
  
  const userData = {
    clerkId: data.id,
    email: data.email_addresses[0]?.email_address,
    firstName: data.first_name,
    lastName: data.last_name,
    imageUrl: data.image_url,
    createdAt: new Date(data.created_at),
    updatedAt: new Date(data.updated_at)
  };

  const user = new User(userData);
  await user.save();
  console.log('User saved to database:', user._id);
}

async function handleUserUpdated(data) {
  console.log('User updated:', data.id);
  
  const updateData = {
    email: data.email_addresses[0]?.email_address,
    firstName: data.first_name,
    lastName: data.last_name,
    imageUrl: data.image_url,
    updatedAt: new Date(data.updated_at)
  };

  await User.findOneAndUpdate(
    { clerkId: data.id },
    updateData,
    { new: true }
  );
  console.log('User updated in database');
}

async function handleUserDeleted(data) {
  console.log('User deleted:', data.id);
  
  await User.findOneAndDelete({ clerkId: data.id });
  console.log('User deleted from database');
}
