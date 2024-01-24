import React from "react";
import { Link } from "react-router-dom";

import { Card, CardFooter, CardTitle } from "@/common/components/ui/card";

type ExamCardProps = {
  to?: string;
  title?: string;
  icon?: React.JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
};

const ExamCard = ({ to = "", title = "", icon: Icon }: ExamCardProps) => {
  return (
    <Link to={to} className="w-full">
      <Card className="relative flex items-end overflow-hidden size-full min-h-24 sm:min-h-36">
        {Icon && <Icon className="absolute right-0 h-full w-fit" />}

        <CardFooter className="pb-2 sm:pb-4">
          <CardTitle className="pt-6 text-base sm:text-lg lg:text-xl">{title}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ExamCard;
