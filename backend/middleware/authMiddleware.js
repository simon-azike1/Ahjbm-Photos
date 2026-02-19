import { verifyToken } from "../utils/token.js";

const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: missing token." });
  }

  try {
    const payload = verifyToken(token);
    if (payload?.role !== "admin") {
      return res.status(403).json({ message: "Forbidden: admin access required." });
    }
    req.admin = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: invalid token.", error: error.message });
  }
};

export default adminAuth;
