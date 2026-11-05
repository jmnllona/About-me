import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import helmet from "helmet";
// import {hello} from "./scripts/downloadPokemonImages.js";
// hello();
import authRoutes from "./routes/authRoutes.js";
import db from "./db.js";
import pokemonRoutes from "./routes/pokemonRoutes.js";
const app = express();
const isProduction = process.env.NODE_ENV === "production";
const allowedOrigins = (process.env.CLIENT_ORIGIN ?? "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
if (isProduction && !process.env.SESSION_SECRET) {
    throw new Error("SESSION_SECRET is required in production.");
}
if (isProduction)
    app.set("trust proxy", 1);
app.use(helmet());
app.use(express.json());
// import pool from "./db.js";
// pool.query("SELECT NOW()")
//   .then(() => console.log("✅ Database connected!"))
//   .catch((err) => console.error("❌ Database connection failed:", err));
app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin))
            return callback(null, true);
        return callback(new Error("Origin is not allowed by CORS."));
    },
    methods: ["GET", "POST"],
    credentials: true,
}));
const PgSession = connectPgSimple(session);
app.use(session({
    store: new PgSession({ pool: db, tableName: "session", createTableIfMissing: false }),
    name: "sid",
    secret: process.env.SESSION_SECRET ?? "development-only-change-me-before-production",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: isProduction,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24 * 14,
    },
}));
// Routes MUST come before any catch-all route
app.use("/api/", pokemonRoutes);
app.use("/api/auth", authRoutes);
const PORT = process.env["PORT"] || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map