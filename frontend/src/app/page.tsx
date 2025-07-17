"use client";
import QuizzesList from "@/components/quizzes-list";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center">
      <section className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">
          Welcome to Quiz Builder App
        </h1>
        <p className="text-center">
          Create and manage your quizzes easily with our Quiz Builder App
        </p>
      </section>

      <QuizzesList />
    </main>
  );
}
