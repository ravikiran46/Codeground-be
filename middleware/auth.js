const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.header("Authorization");

  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Invalid authorization header" });
  }

  const token = authorizationHeader.replace("Bearer ", "");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Authorization token not found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { authMiddleware };
