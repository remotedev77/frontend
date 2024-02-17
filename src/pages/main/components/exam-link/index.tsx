import { Link } from "react-router-dom";

import { ExamTypes } from "@/common/types";

type ExamLinkProps = {
  examType: string;
  examId: ExamTypes;
} & React.PropsWithChildren;

const ExamLink = ({ children, examType, examId }: ExamLinkProps) => {
  return (
    <Link to={examType ? `exam/${examType}` : ""} state={examId} className="w-full">
      {children}
    </Link>
  );
};
export default ExamLink;
