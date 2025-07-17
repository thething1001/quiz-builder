import { Request, Response } from "express";
import * as QuizzesService from "@/services/quizzes.service";

export const postNewQuiz = async (req: Request, res: Response) => {
  try {
    const quiz = await QuizzesService.createQuiz(req.body);
    res.status(201).json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create quiz" });
  }
};

export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await QuizzesService.getAllQuizzes();
    res.json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch quizzes" });
  }
};

export const getQuizById = async (req: Request, res: Response) => {
  try {
    const quiz = await QuizzesService.getQuizById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch quiz" });
  }
};

export const deleteQuizById = async (req: Request, res: Response) => {
  try {
    console.log("Deleting quiz with ID:", req.params.id);
    await QuizzesService.deleteQuizById(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete quiz" });
  }
};