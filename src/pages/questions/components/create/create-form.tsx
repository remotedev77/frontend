import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/common/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/common/components/ui/select";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";
import { Checkbox } from "@/common/components/ui/checkbox";
import { useToast } from "@/common/components/ui/use-toast";

import { notes, toastMessages } from "@/common/lib/utils";

import useQuestionStore from "@/services/state/questionsStore";
import { questionsEndpoints } from "@/services/api/endpoints";
import { postData } from "@/services/api/requests";
import { CreateQuestion, CreateQuestionSchema, Note } from "../../models";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Textarea } from "@/common/components/ui/textarea";

const CreateForm = () => {
  const { toast } = useToast();

  const { mutate, setCreateDialogOpen } = useQuestionStore();

  const { trigger: createQuestion, isMutating } = useSWRMutation(questionsEndpoints.base, postData);

  const form = useForm<CreateQuestion>({
    resolver: zodResolver(CreateQuestionSchema),
    mode: "onChange",
    defaultValues: {
      note: Note.Single,
      question_code: 0,
      question: "",
      // image
      work_function: "",
      answers: [{ answer: "", is_correct: true }],
      correct_answer_description: "",
    },
  });

  const onSubmit = async (values: CreateQuestion) => {
    try {
      await createQuestion(values);
      toast(toastMessages.success);
      mutate();
      setCreateDialogOpen();
    } catch (error) {
      toast(toastMessages.error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Тип вопроса</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(val) => {
                      field.onChange(val);
                      form.setValue("answers", [{ answer: "", is_correct: true }]);
                    }}
                    defaultValue={field.value}
                    {...field}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выбирать" />
                    </SelectTrigger>
                    <SelectContent>
                      {notes?.map(({ name, value }) => (
                        <SelectItem key={value} value={value}>
                          {name}
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
            control={form.control}
            name="question_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Код вопроса</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Код вопроса"
                    autoComplete="true"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Текст вопроса</FormLabel>
                <FormControl>
                  <Textarea placeholder="Текст вопроса" autoComplete="true" className="h-40 resize-none " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="work_function"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Примечание</FormLabel>
                <FormControl>
                  <Input placeholder="Примечание" autoComplete="true" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="answers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Варианты</FormLabel>

                {field.value.map(({ answer, is_correct }, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name="answers"
                    render={({ field }) => {
                      const currentAnswers = structuredClone(field.value);
                      return (
                        <FormItem key={index} className="flex flex-col items-start">
                          <FormControl>
                            <div className="flex flex-row items-center w-full gap-4">
                              {form.watch("note") === Note.Single ? (
                                <input
                                  type="radio"
                                  checked={is_correct}
                                  onChange={() => {
                                    const newValues = currentAnswers.map((value) => ({ ...value, is_correct: false }));
                                    newValues?.splice(index, 1, {
                                      answer,
                                      is_correct: !currentAnswers?.[index].is_correct,
                                    });
                                    field.onChange(newValues);
                                  }}
                                  className="p-1.5 rounded-full appearance-none checked:bg-primary ring-offset-2 ring-1 ring-primary"
                                />
                              ) : (
                                <Checkbox
                                  checked={is_correct}
                                  onCheckedChange={(checked) => {
                                    checked
                                      ? currentAnswers?.splice(index, 1, { answer, is_correct: true })
                                      : currentAnswers?.splice(index, 1, { answer, is_correct: false });
                                    return field.onChange(currentAnswers);
                                  }}
                                />
                              )}
                              <Input
                                placeholder={`${index + 1} вариант ответа`}
                                autoComplete="true"
                                className="w-full"
                                {...field}
                                value={field.value?.[index]?.answer}
                                onChange={(e) => {
                                  currentAnswers.splice(index, 1, { is_correct, answer: e.target.value });
                                  field.onChange(currentAnswers);
                                }}
                              />

                              {index > 0 ? (
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  className="p-1 h-fit w-fit"
                                  onClick={() => {
                                    currentAnswers.splice(index, 1);
                                    field.onChange(currentAnswers);
                                  }}
                                >
                                  <Cross2Icon className="w-4 h-4" />
                                </Button>
                              ) : null}
                            </div>
                          </FormControl>
                          {form?.formState?.errors.answers?.[index]?.answer?.message && (
                            <FormMessage customMessage={form?.formState?.errors.answers?.[index]?.answer?.message} />
                          )}
                        </FormItem>
                      );
                    }}
                  />
                ))}

                <Button
                  type="button"
                  size="sm"
                  className="flex ml-auto"
                  onClick={() => {
                    const newAnswers = [...field.value, { answer: "", is_correct: false }];
                    field.onChange(newAnswers);
                  }}
                >
                  Добавить вариант ответа
                </Button>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="correct_answer_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание</FormLabel>
                <FormControl>
                  <Textarea placeholder="Описание" autoComplete="true" className="h-20 resize-none " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="flex ml-auto"
          disabled={isMutating || !form.formState.isDirty || !form.formState.isValid}
        >
          Добавить
        </Button>
      </form>
    </Form>
  );
};

export { CreateForm };
