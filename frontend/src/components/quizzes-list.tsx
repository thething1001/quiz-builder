import { Quiz } from "@/types/quizzes.types";
import { Button } from "./ui/button";
import QuizCard from "./quiz-card";

type QuizzesListProps = {
  quizzes: Quiz[];
};
const QuizzesList = ({ quizzes }: QuizzesListProps) => {
  return (
    <section className="container mx-auto p-4 flex flex-col gap-2">
      <div className="flex flex-row mb-4 justify-between">
        <h2 className="text-xl font-semibold text-left md:text-left">
          Available quizzes:
        </h2>
        <Button>Create New</Button>
      </div>

      <div className="flex flex-col gap-4  ">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </section>
  );
};

export default QuizzesList;
