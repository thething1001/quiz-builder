import { Router } from "express";
import {
  postNewQuiz,
  getAllQuizzes,
  getQuizById,
  deleteQuizById,
} from "@/controllers/quizzes.controller";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Quiz Builder API!" });
});

router.post("/quizzes", postNewQuiz);
router.get("/quizzes", getAllQuizzes);
router.get("/quizzes/:id", getQuizById);
router.delete("/quizzes/:id", deleteQuizById);

export default router;
