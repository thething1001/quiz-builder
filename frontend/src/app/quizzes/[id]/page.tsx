"use client";
import QuestionsList from "@/components/question-list";
import { Skeleton } from "@/components/ui/skeleton";
import { useDetailedQuiz } from "@/lib/hooks";
import { notFound } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: quiz, isLoading, error } = useDetailedQuiz();

  useEffect(() => {
    if (error) {
      notFound();
    }
  }, [error]);

  return (
    <main className="flex-1 flex flex-col items-center gap-4">
      <section className="container mx-auto p-4 flex flex-col items-center">
        {isLoading ? (
          <>
            <Skeleton className="w-full min-h-30 max-w-2/7"></Skeleton>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center">{quiz?.title}</h1>
            <p className="text-center">{`Total questions: ${quiz?.questions.length}`}</p>
          </>
        )}
      </section>
      <QuestionsList questions={quiz?.questions || []} />
    </main>
  );
}
