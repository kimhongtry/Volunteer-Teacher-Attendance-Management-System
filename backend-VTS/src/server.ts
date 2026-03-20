import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

/* ✅ ADD HERE (routes section) */
app.get("/db", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

/* You can also keep your other route */
app.get("/v1/api", (req: Request, res: Response) => {
  res.json({ message: "Backend connected successfully!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
