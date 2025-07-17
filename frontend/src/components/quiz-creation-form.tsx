"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { Card } from "./ui/card";
import { postNewQuiz } from "@/services/quizzes.service";
import {
  QuizCreationFormSchema,
  quizCreationFormSchema,
} from "@/types/quizzes.schemas";
import QuestionFormCard from "./question-form-card";
import { redirect } from "next/navigation";
import { QuestionType } from "@/types/quizzes.types";

export default function QuizCreationForm() {
  const form = useForm<QuizCreationFormSchema>({
    resolver: zodResolver(quizCreationFormSchema),
    defaultValues: {
      title: "",
      questions: [{ type: QuestionType.INPUT, text: "", correct: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  const onSubmit = (data: QuizCreationFormSchema) => {
    console.log(data);
    postNewQuiz(data);
    redirect("/");
  };

  return (
    <div className="w-full md:w-6/7">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <Card className="w-full md:w-6/7 p-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quiz Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter quiz title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>

          {fields.map((field, index) => (
            <QuestionFormCard key={field.id} index={index} remove={remove} />
          ))}

          <div className="flex flex-row gap-4">
            <Button
              type="button"
              onClick={() =>
                append({ type: QuestionType.INPUT, text: "", correct: "True" })
              }
            >
              Add Question
            </Button>

            <Button type="submit" disabled={fields.length === 0}>
              Create Quiz
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
