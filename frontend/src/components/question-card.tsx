import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Question, QuestionType } from "@/types/quizzes.types";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

type QuizCardProps = {
  question: Question;
};

const QuestionCard = ({ question }: QuizCardProps) => {
  const renderQuestionContent = () => {
    switch (question.type) {
      case QuestionType.BOOLEAN:
        return (
          <RadioGroup disabled value={question.correct[0].toLocaleLowerCase()}>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="true" id={`${question.id}-radio-1`} />
              <Label htmlFor={`${question.id}-radio-1`}>True</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="false" id={`${question.id}-radio-2`} />
              <Label htmlFor={`${question.id}-radio-2`}>False</Label>
            </div>
          </RadioGroup>
        );
      case QuestionType.INPUT:
        return (
          <Input
            type="text"
            value={question.correct.join(", ")}
            disabled
          ></Input>
        );
      case QuestionType.CHECKBOX:
        return (
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center gap-3">
                <Checkbox
                  id={`${question.id}-option-${index}`}
                  checked={question.correct.includes(option)}
                  disabled
                />
                <Label htmlFor={`${question.id}-option-${index}`}>
                  {option}
                </Label>
              </div>
            ))}
          </div>
        );
      default:
        return <p className="text-muted-foreground">Unknown question type.</p>;
    }
  };

  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <CardTitle>{question.text}</CardTitle>
        <CardDescription>
          Correct answer(s): {question.correct.join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent>{renderQuestionContent()}</CardContent>
    </Card>
  );
};

export default QuestionCard;
