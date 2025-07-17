import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quiz } from "@/types/quizzes.types";
import Image from "next/image";
import { Button } from "./ui/button";
type QuizCardProps = {
  quiz: Quiz;
};

const QuizCard = ({ quiz }: QuizCardProps) => {
  return (
    <Card className="flex flex-row items-center justify-between gap-4 p-4 shadow-md hover:shadow-lg transition-shadow w-full">
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{quiz.title}</h2>
        <p className="text-muted-foreground text-sm">
          Total Questions: {quiz.questions}
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <Button>Tale Quiz</Button>
        <Button>Edit Quiz</Button>
        <Button>Delete Quiz</Button>
      </div>
    </Card>
  );
};

export default QuizCard;
