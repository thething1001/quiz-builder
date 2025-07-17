export enum QuestionType {
  BOOLEAN = "BOOLEAN",
  INPUT = "INPUT",
  CHECKBOX = "CHECKBOX",
}

export type Quiz = {
  id: string;
  title: string;
  questions: number;
};

export type DetailedQuiz = {
  id: string;
  title: string;
  questions: Question[];
  createdAt: string; // ISO date string
};

export type Question = {
  id: string;
  text: string;
  type: QuestionType;
  options: string[];
  correct: string[];
  quizId: string;
};
