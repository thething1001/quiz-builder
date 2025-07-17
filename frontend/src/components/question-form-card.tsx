import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useWatch } from "react-hook-form";

const questionTypes = ["BOOLEAN", "INPUT", "CHECKBOX"] as const;

const QuestionFormCard = ({
  index,
  control,
  remove,
}: {
  index: number;
  control: any;
  remove: (index: number) => void;
}) => {
  const questionType = useWatch({
    control,
    name: `questions.${index}.type`,
  });

  const options = useWatch({
    control,
    name: `questions.${index}.options`,
    defaultValue: [],
  });

  return (
    <Card className="w-5/7 flex flex-col gap-4 p-4">
      <FormField
        control={control}
        name={`questions.${index}.type`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Question Type</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select question type" />
                </SelectTrigger>
                <SelectContent>
                  {questionTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`questions.${index}.text`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Question Text #{index + 1}</FormLabel>
            <FormControl>
              <Input placeholder="Enter question text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {questionType === "BOOLEAN" && (
        <FormField
          control={control}
          name={`questions.${index}.correct`}
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Correct Answer</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-x-4"
                >
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="True" />
                    </FormControl>
                    <FormLabel className="font-normal">True</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="False" />
                    </FormControl>
                    <FormLabel className="font-normal">False</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {questionType === "INPUT" && (
        <FormField
          control={control}
          name={`questions.${index}.correct`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correct Answer</FormLabel>
              <FormControl>
                <Input placeholder="Enter correct answer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {questionType === "CHECKBOX" && (
        <div className="space-y-4">
          <FormField
            control={control}
            name={`questions.${index}.options`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Options (comma separated)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Option 1, Option 2, Option 3"
                    value={
                      Array.isArray(field.value) ? field.value.join(", ") : ""
                    }
                    onChange={(e) =>
                      field.onChange(
                        e.target.value.split(",").map((o) => o.trim())
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`questions.${index}.correct`}
            render={({ field }) => (
              <FormItem>
                {options.length > 0 && (
                  <>
                    <FormLabel>Check Correct Answers</FormLabel>
                    <div className="space-y-2">
                      {options.map((option: string) => (
                        <FormField
                          key={option}
                          control={control}
                          name={`questions.${index}.correct`}
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={option}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...(field.value || []),
                                            option,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value: string) =>
                                                value !== option
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {option}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}

      <Button
        type="button"
        variant="destructive"
        onClick={() => remove(index)}
        className="self-end"
      >
        Remove
      </Button>
    </Card>
  );
};

export default QuestionFormCard;
