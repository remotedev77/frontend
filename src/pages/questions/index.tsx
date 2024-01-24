import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { CreateQuestion } from "./components/create/create-question";
import { DataTable } from "@/common/components/ui/data-table";
import { TableHeader } from "@/common/components/table-header";
import { columns } from "./components/columns";

import useQuestionStore from "@/services/state/questionsStore";
import { useGetQuestions } from "./hooks/useGetQuestions";
import { Question } from "./models";
import { UploadQuestions } from "./components/upload/upload-questions";
import { QuestionDetails } from "./components/question-details";
import { useForm } from "react-hook-form";
import { FilterParams } from "@/common/types";
import Filters from "./components/filters";

const Questions = () => {
  const { id } = useParams<{ id: string }>();
  const filterForm = useForm<FilterParams>({ values: { direction_id: Number(id) } });
  const { setMutate, setDetailsDialogOpen, setQuestionDetails } = useQuestionStore();
  const { data, isLoading, isValidating, error, mutate, pagination } = useGetQuestions(filterForm.watch());

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
        searchControl={filterForm.control}
        CreateDialog={CreateQuestion}
        UploadDialog={UploadQuestions}
        downloadLink={"/excel/Questions-Template.xlsx"}
      />
      <Filters form={filterForm} />
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
