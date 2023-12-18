import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/common/components/ui/form";

import { Button } from "@/common/components/ui/button";
import { useToast } from "@/common/components/ui/use-toast";
import { UploadFile } from "@/common/components/upload-file";

import { UploadQuestion, UploadQuestionSchema } from "../../models";
import { toastMessages } from "@/common/lib/utils";

import useQuestionStore from "@/services/state/questionsStore";
import { questionsEndpoints } from "@/services/api/endpoints";
import { postData } from "@/services/api/requests";

const UploadForm = () => {
  const { toast } = useToast();
  const { mutate, setUploadDialogOpen } = useQuestionStore();
  const { trigger: UploadQuestions, isMutating } = useSWRMutation(
    questionsEndpoints.uploadFile,
    (path: string, { arg }: { arg: UploadQuestion }) =>
      postData(
        path,
        { arg },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
  );

  const form = useForm<UploadQuestion>({ resolver: zodResolver(UploadQuestionSchema), mode: "onChange" });

  const onSubmit = async (values: UploadQuestion) => {
    try {
      await UploadQuestions(values);
      toast(toastMessages.success);
      mutate();
      setUploadDialogOpen();
    } catch (error) {
      toast(toastMessages.error);
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="filename"
            render={({ field }) => (
              <FormItem className="pt-1">
                <FormControl>
                  <UploadFile setFile={field.onChange} />
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

export { UploadForm };
