import z from "zod";

const baseQuestionSchema = z.object({
  text: z.string().min(1, "Question text is required"),
});

export const quizCreationFormSchema = z.object({
  title: z.string().min(1, "Quiz title is required"),
  questions: z
    .array(
      z.discriminatedUnion("type", [
        baseQuestionSchema.extend({
          type: z.literal("BOOLEAN"),
          correct: z.enum(["True", "False"]),
        }),
        baseQuestionSchema.extend({
          type: z.literal("INPUT"),
          correct: z.string().min(1, "Correct answer is required"),
        }),
        baseQuestionSchema.extend({
          type: z.literal("CHECKBOX"),
          options: z
            .array(z.string())
            .min(2, "You must provide at least two options.")
            .refine((arr) => arr.every((val) => val.trim() !== ""), {
              message: "All checkboxes field are required",
            }),
          correct: z
            .array(z.string())
            .min(1, "You must select at least one correct option."),
        }),
      ])
    )
    .min(1, "Add at least one question"),
});

export type QuizCreationFormSchema = z.infer<typeof quizCreationFormSchema>;
