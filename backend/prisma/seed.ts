import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();

  await prisma.quiz.create({
    data: {
      title: "Sample Quiz 1: General Knowledge",
      questions: {
        create: [
          {
            text: "The sky is blue.",
            type: "BOOLEAN",
            correct: ["True"],
          },
          {
            text: "What is the capital of France?",
            type: "INPUT",
            correct: ["Paris"],
          },
          {
            text: "Select all prime numbers.",
            type: "CHECKBOX",
            options: ["2", "3", "4", "5"],
            correct: ["2", "3", "5"],
          },
        ],
      },
    },
  });

  await prisma.quiz.create({
    data: {
      title: "Sample Quiz 2: General Knowledge",
      questions: {
        create: [
          {
            text: "The sky is blue.",
            type: "BOOLEAN",
            correct: ["True"],
          },
          {
            text: "What is the capital of France?",
            type: "INPUT",
            correct: ["Paris"],
          },
          {
            text: "Select all prime numbers.",
            type: "CHECKBOX",
            options: ["2", "3", "4", "5"],
            correct: ["2", "3", "5"],
          },
        ],
      },
    },
  });

  await prisma.quiz.create({
    data: {
      title: "Sample Quiz 3: General Knowledge",
      questions: {
        create: [
          {
            text: "The sky is blue.",
            type: "BOOLEAN",
            correct: ["True"],
          },
          {
            text: "What is the capital of France?",
            type: "INPUT",
            correct: ["Paris"],
          },
          {
            text: "Select all prime numbers.",
            type: "CHECKBOX",
            options: ["2", "3", "4", "5"],
            correct: ["2", "3", "5"],
          },
        ],
      },
    },
  });

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
