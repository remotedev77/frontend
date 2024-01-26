import React from "react";

import { Card, CardFooter, CardTitle } from "@/common/components/ui/card";

type ExamCardProps = {
  title?: string;
  icon?: React.JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
};

const ExamCard = ({ title = "", icon: Icon }: ExamCardProps) => {
  return (
    <Card className="relative flex items-end overflow-hidden size-full min-h-24 sm:min-h-36">
      {Icon && <Icon className="absolute right-0 h-full top-3 w-fit" />}

      <CardFooter className="pb-2 sm:pb-4">
        <CardTitle className="pt-6 card-title">{title}</CardTitle>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
