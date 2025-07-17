import { Quiz } from "@/types/quizzes.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllQuizzes = async (): Promise<Quiz[]> => {
  const res = await fetch(`${API_BASE_URL}/quizzes`);
  if (!res.ok) {
    throw new Error("Failed to fetch quizzes");
  }
  return res.json();
};
