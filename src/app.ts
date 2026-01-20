import express from "express";
import cors from "cors";
import healthRouter from "./routes/health";
import { errorHandler } from "./middleware/error";

export const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/health", healthRouter);

app.use(errorHandler);
