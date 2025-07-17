"use client";
import QuizzesList from "@/components/quizzes-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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
    </QueryClientProvider>
  );
}
