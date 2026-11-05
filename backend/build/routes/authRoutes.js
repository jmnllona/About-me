import { Router } from "express";
import rateLimit from "express-rate-limit";
import { currentUser, login, logout, register, verifyEmail } from "../auth/authController.js";
const router = Router();
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: { message: "Too many attempts. Please try again in 15 minutes." },
});
router.post("/register", authLimiter, register);
router.post("/login", authLimiter, login);
router.get("/me", currentUser);
router.post("/logout", logout);
router.post("/verify", verifyEmail);
export default router;
//# sourceMappingURL=authRoutes.js.map