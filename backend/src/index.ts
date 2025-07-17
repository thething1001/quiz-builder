import express from "express";
import cors from "cors";
import { PORT } from "@/env";
import quizzesRouter from "./routes/quizzes.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", quizzesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
