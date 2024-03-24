import { Link } from "react-router-dom";

import { ExamTypes } from "@/common/types";

type ExamLinkProps = {
  examType: string;
  examId: ExamTypes;
  examName: string;
} & React.PropsWithChildren;

const ExamLink = ({ children, examType, examId, examName }: ExamLinkProps) => {
  return (
    <Link
      to={{ pathname: examType ? `exam/${examType}` : "", search: `name=${examName}` }}
      state={examId}
      className="w-full"
    >
      {children}
    </Link>
  );
};
export default ExamLink;
