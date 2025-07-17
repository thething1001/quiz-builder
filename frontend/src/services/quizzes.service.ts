import { QuizCreationFormSchema } from "@/types/quizzes.schemas";
import { DetailedQuiz, Quiz } from "@/types/quizzes.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllQuizzes = async (): Promise<Quiz[]> => {
  const res = await fetch(`${API_BASE_URL}/quizzes`);
  if (!res.ok) {
    throw new Error("Failed to fetch quizzes");
  }
  return res.json();
};

export const getQuizByID = async (quizId: string): Promise<DetailedQuiz> => {
  const res = await fetch(`${API_BASE_URL}/quizzes/${quizId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch quizzes");
  }
  return res.json();
};

export const deleteQuizByID = async (quizId: string): Promise<void> => {
  const res = await fetch(`${API_BASE_URL}/quizzes/${quizId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete quiz");
  }
};

export const postNewQuiz = async (
  data: QuizCreationFormSchema,
): Promise<void> => {
  const res = await fetch(`${API_BASE_URL}/quizzes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      questions: data.questions.map((question) => {
        switch (question.type) {
          case "BOOLEAN":
          case "INPUT":
            return {
              text: question.text,
              type: question.type,
              options: [],
              correct: [question.correct],
            };
          case "CHECKBOX":
            return {
              text: question.text,
              type: question.type,
              options: question.options,
              correct: question.correct,
            };
          default:
            throw new Error("Unsupported question type");
        }
      }),
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to post new quiz");
  }
};
