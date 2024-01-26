import React from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/common/components/ui/card";
import { CategoriesType } from "@/common/types";

type CategoryCardProps = {
  title?: CategoriesType;
  count?: number;
  icon?: React.JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
};

const CategoryCard = ({ title, count, icon: Icon }: CategoryCardProps) => {
  return (
    <Card className="relative overflow-hidden">
      {Icon && <Icon className="absolute right-0 h-full w-fit" />}
      <CardHeader className="pt-4 pb-3">
        <CardTitle className="text-3xl text-transparent bg-gradient-to-r from-gray-400 to-gray-300 sm:text-4xl lg:text-5xl bg-clip-text">
          ({count})
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0 max-sm:hidden">
        <CardDescription className="sm:text-base">категория:</CardDescription>
      </CardContent>
      <CardFooter className="pb-4">
        <CardTitle className="card-title">{title}</CardTitle>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
