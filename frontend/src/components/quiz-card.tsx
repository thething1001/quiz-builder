"use client";

import { Card } from "@/components/ui/card";
import { Quiz } from "@/types/quizzes.types";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

type QuizCardProps = {
  quiz: Quiz;
  onDelete: (id: string) => void;
};

const QuizCard = ({ quiz, onDelete }: QuizCardProps) => {
  return (
    <Card className="flex flex-row items-center justify-between gap-4 p-4 shadow-md hover:shadow-lg transition-shadow w-full">
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{quiz.title}</h2>
        <p className="text-muted-foreground text-sm">
          Total Questions: {quiz.questions}
        </p>
      </div>
      <div className="flex flex-col items-end gap-4 md:flex-row">
        <Link href={`/quizzes/${quiz.id}`}>
          <Button>View</Button>
        </Link>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete the quiz and all its questions.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => onDelete(quiz.id)}>
                Yes, delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Card>
  );
};

export default QuizCard;
