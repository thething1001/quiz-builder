import { Question } from "@/types/quizzes.types";
import QuestionCard from "./question-card";
import { useDetailedQuiz } from "@/lib/hooks";
import { Skeleton } from "./ui/skeleton";

type QuestionListProps = {
  questions: Question[];
};

const QuestionsList = ({ questions }: QuestionListProps) => {
  const { isLoading } = useDetailedQuiz();

  return (
    <section className="container flex flex-col items-center w-full mb-4 gap-4">
      {isLoading ? (
        <>
          <Skeleton className="max-w-md w-full min-h-30"></Skeleton>
          <Skeleton className="max-w-md w-full min-h-30"></Skeleton>
          <Skeleton className="max-w-md w-full min-h-30"></Skeleton>
        </>
      ) : (
        <>
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </>
      )}
    </section>
  );
};

export default QuestionsList;
