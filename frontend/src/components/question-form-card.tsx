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
import { Control, useFormContext, useWatch } from "react-hook-form";

const questionTypes = ["BOOLEAN", "INPUT", "CHECKBOX"] as const;

const QuestionFormCard = ({
  index,
  control,
  remove,
}: {
  index: number;
  control: Control<any>;
  remove: (index: number) => void;
}) => {
  const questionType = useWatch({
    control,
    name: `questions.${index}.type`,
  });

  const correct = useWatch({
    control,
    name: `questions.${index}.correct`,
    defaultValue: [],
  });

  const { setValue } = useFormContext();

  const onTypeChange = (index: number, type: string) => {
    if (type === "BOOLEAN") {
      setValue(`questions.${index}.correct`, "True");
    } else if (type === "INPUT") {
      setValue(`questions.${index}.correct`, "");
    } else if (type === "CHECKBOX") {
      setValue(`questions.${index}.correct`, []);
      setValue(`questions.${index}.options`, []);
    }
  };

  return (
    <Card className="w-6/7 flex flex-col gap-4 p-4">
      <FormField
        control={control}
        name={`questions.${index}.type`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Question Type</FormLabel>
            <FormControl>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  onTypeChange(index, value);
                }}
                value={field.value}
              >
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
                <FormLabel className="flex flex-row justify-between">
                  <p>Add options and check correct</p>
                  <Button
                    type="button"
                    onClick={() => {
                      field.onChange([...(field.value || []), ""]);
                    }}
                  >
                    New Option
                  </Button>
                </FormLabel>
                <FormControl className="flex flex-col gap-2 mt-2">
                  <div className="space-y-2">
                    {field.value?.map((option: string, optIndex: number) => (
                      <div
                        key={optIndex}
                        className="flex flex-row gap-2 items-center"
                      >
                        <Checkbox
                          checked={correct?.includes(option)}
                          onCheckedChange={(checked) => {
                            const updated = checked
                              ? [...(correct || []), option]
                              : correct?.filter(
                                  (val: string) => val !== option,
                                );
                            setValue(`questions.${index}.correct`, updated, {
                              shouldValidate: true,
                            });
                          }}
                        />
                        <Input
                          value={option}
                          placeholder="Enter option text"
                          onChange={(e) => {
                            const newValue = e.target.value;
                            const updatedOptions = [...field.value];
                            const oldValue = updatedOptions[optIndex];

                            updatedOptions[optIndex] = newValue;
                            field.onChange(updatedOptions);

                            if (correct.includes(oldValue)) {
                              const updatedCorrect = correct.map(
                                (val: string) =>
                                  val === oldValue ? newValue : val,
                              );
                              setValue(
                                `questions.${index}.correct`,
                                updatedCorrect,
                                { shouldValidate: true },
                              );
                            }
                          }}
                          className="flex-1"
                        />
                        <Button
                          variant="destructive"
                          type="button"
                          onClick={() => {
                            const updatedOptions = field.value.filter(
                              (_: string, i: number) => i !== optIndex,
                            );
                            field.onChange(updatedOptions);

                            const removedOption = field.value[optIndex];
                            setValue(
                              `questions.${index}.correct`,
                              correct?.filter(
                                (val: string) => val !== removedOption,
                              ),
                            );
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`questions.${index}.correct`}
            render={() => (
              <FormItem>
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
        className="self-start"
      >
        Remove
      </Button>
    </Card>
  );
};

export default QuestionFormCard;
