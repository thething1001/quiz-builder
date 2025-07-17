import { Button } from "./ui/button";
import QuizCard from "./quiz-card";
import { deleteQuizByID, getAllQuizzes } from "@/services/quizzes.service";
import { Quiz } from "@/types/quizzes.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

const QuizzesList = () => {
  const queryClient = useQueryClient();

  const {
    data: quizzes,
    isLoading,
    error,
  } = useQuery<Quiz[]>({
    queryKey: ["quizzes"],
    queryFn: getAllQuizzes,
  });

  const { mutate: deleteQuiz } = useMutation({
    mutationFn: deleteQuizByID,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
    onError: (error) => {
      console.error("Failed to delete quiz:", error);
    },
  });

  const onDelete = (id: string) => {
    console.log("Deleting quiz with ID:", id);
    deleteQuiz(id);
  };

  return (
    <section className="container mx-auto p-4 flex flex-col gap-2">
      <div className="flex flex-row mb-4 justify-between">
        <h2 className="text-xl font-semibold text-left md:text-left">
          Available quizzes:
        </h2>
        <Link href="/create"><Button>Create New</Button></Link>
      </div>

      <div className="flex flex-col gap-4  ">
        {quizzes?.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
};

export default QuizzesList;
