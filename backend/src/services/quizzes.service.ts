import prisma from "@/prisma";

export const createQuiz = async (data: {
  title: string;
  questions: {
    text: string;
    type: "BOOLEAN" | "INPUT" | "CHECKBOX";
    options?: string[];
    correct: string[];
  }[];
}) => {
  return await prisma.quiz.create({
    data: {
      title: data.title,
      questions: {
        create: data.questions.map((q) => ({
          text: q.text,
          type: q.type,
          options: q.options ?? [],
          correct: q.correct,
        })),
      },
    },
    include: {
      questions: true,
    },
  });
};

export const getAllQuizzes = async () => {
  const quizzes = await prisma.quiz.findMany({
    include: {
      _count: {
        select: { questions: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return quizzes.map((quiz) => ({
    id: quiz.id,
    title: quiz.title,
    questions: quiz._count.questions,
  }));
};

export const getQuizById = async (id: string) => {
  return await prisma.quiz.findUnique({
    where: { id },
    include: {
      questions: true,
    },
  });
};

export const deleteQuizById = async (id: string) => {
  return await prisma.quiz.delete({
    where: { id },
  });
};
