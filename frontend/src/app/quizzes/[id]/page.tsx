"use client";
import { useEffect, useState } from "react";
import { getQuizByID } from "@/services/quizzes.service";
import { DetailedQuiz } from "@/types/quizzes.types";
import { useParams } from "next/navigation";
import QuestionsList from "@/components/question-list";

export default function Home() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<DetailedQuiz | null>(null);

  useEffect(() => {
    if (!id || typeof id !== "string") return;

    async function fetchQuiz() {
      try {
        const data = await getQuizByID(id as string);
        setQuiz(data);
      } catch (err) {
        console.error("Failed to fetch quizzes", err);
      }
    }

    fetchQuiz();
  }, [id]);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <section className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">{quiz?.title}</h1>
        <p className="text-center">{quiz?.createdAt}</p>
      </section>

      <QuestionsList questions={quiz?.questions || []} />
    </main>
  );
}
