import { Question } from "@/types/quizzes.types";
import QuestionCard from "./question-card";

type QuestionListProps = {
  questions: Question[];
};
const QuestionsList = ({ questions }: QuestionListProps) => {
  return (
    <section className="container flex flex-col items-center w-full mb-4">
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </section>
  );
};

export default QuestionsList;
