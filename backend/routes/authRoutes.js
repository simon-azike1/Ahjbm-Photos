import { Router } from "express";
import { signToken } from "../utils/token.js";
import { verifyToken } from "../utils/token.js";

const router = Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body || {};
  const expectedUsername = process.env.ADMIN_USERNAME || "admin";
  const expectedPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (username !== expectedUsername || password !== expectedPassword) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  const token = signToken({ role: "admin", username });
  return res.json({
    token,
    user: { username, role: "admin" },
  });
});

router.get("/me", (req, res) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  try {
    const payload = verifyToken(token);
    if (payload?.role !== "admin") {
      return res.status(403).json({ message: "Forbidden: admin access required." });
    }
    return res.json({ authenticated: true, user: payload });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized.", error: error.message });
  }
});

export default router;
