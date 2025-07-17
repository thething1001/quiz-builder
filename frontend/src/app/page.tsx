'use client';
import { useEffect, useState } from "react";
import QuizzesList from "@/components/quizzes-list";
import { getAllQuizzes } from "@/services/quizzes.service";
import { Quiz } from "@/types/quizzes.types";

export default function Home() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const data = await getAllQuizzes();
        setQuizzes(data);
      } catch (err) {
        console.error("Failed to fetch quizzes", err);
      }
    }

    fetchQuizzes();
  }, []);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <section className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">
          Welcome to Quiz Builder App
        </h1>
        <p className="text-center">
          Create and manage your quizzes easily with our Quiz Builder App
        </p>
      </section>

      <QuizzesList quizzes={quizzes} />
    </main>
  );
}
