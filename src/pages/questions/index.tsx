import { useEffect } from "react";

import { CreateQuestion } from "./components/create/create-question";
import { DataTable } from "@/common/components/ui/data-table";
import { TableHeader } from "@/common/components/table-header";
import { columns } from "./components/columns";

import useQuestionStore from "@/services/state/questionsStore";
import { useGetQuestions } from "./hooks/useGetQuestions";
import { Question } from "./models";
import { UploadQuestions } from "./components/upload/upload-questions";
import { QuestionDetails } from "./components/question-details";

const Questions = () => {
  const { setMutate, setDetailsDialogOpen, setQuestionDetails } = useQuestionStore();
  const { data, isLoading, isValidating, error, mutate, pagination } = useGetQuestions();

  const handleUserDetail = (userData: Question) => {
    setQuestionDetails(userData);
    setDetailsDialogOpen();
  };

  useEffect(() => {
    setMutate(mutate);
  }, [mutate, setMutate]);

  if (error) return <>Error</>;

  return (
    <div className="space-y-4">
      <QuestionDetails />
      <TableHeader
        searchProps={{ placeholder: "Поиск" }}
        CreateDialog={CreateQuestion}
        UploadDialog={UploadQuestions}
        downloadLink={"/excel/Questions-Template.xlsx"}
      />
      <DataTable
        columns={columns}
        data={data}
        pagination={pagination}
        loading={isLoading || isValidating}
        handleDetails={handleUserDetail}
      />
    </div>
  );
};

export { Questions };
