const { verifyToken } = require("@clerk/clerk-sdk-node");

const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or invalid token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
      template: "default", // Optional, but recommended if you're using a template
    });

    req.userId = payload.user_id;
    req.email = payload.user_email;
    // console.log("payload", payload);
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = requireAuth;
