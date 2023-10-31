import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  BlackCardsIcon,
  GreenCardsIcon,
  YellowCardsIcon,
  RedCardsIcon,
} from "../../assets/lib";
import useGetStatistics from "../../hooks/useGetStatistics";
import { Link } from "react-router-dom";

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.5rem;
  width: 100%;
`;

const CategoryHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CategoryTitle = styled.h2`
  color: #505050;
  font-size: 1.5rem;
  font-weight: 600;
`;

const CategorySubTitle = styled.p`
  color: #505050;
  font-size: 1.2rem;
  font-weight: 600;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.8rem;
`;

const CategoryCard = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 1.2rem;
  background: #fff;
  height: 6rem;
  width: 100%;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
`;

type Category = {
  title: string;
  count: string | number;
  icon: React.ReactElement;
  link: string;
};

export const Category = () => {
  const { statisticsData } = useGetStatistics();
  const [categories, setCategories] = useState<Category[]>([
    {
      title: "Не решал",
      count: 0,
      icon: (
        <BlackCardsIcon style="position:absolute; top:0rem; right:0; width:35; height:100%" />
      ),
      link: `/category/1`,
    },
    {
      title: "Знаю",
      count: 0,
      icon: (
        <GreenCardsIcon style="position:absolute; top:0rem; right:0; width:35; height:100%" />
      ),
      link: "/category/2",
    },
    {
      title: "Делаю ошибки",
      count: 0,
      icon: (
        <YellowCardsIcon style="position:absolute; top:0rem; right:0; width:35; height:100%" />
      ),
      link: "/category/3",
    },
    {
      title: "Не знаю",
      count: 0,
      icon: (
        <RedCardsIcon style="position:absolute; top:0rem; right:0; width:35; height:100%" />
      ),
      link: "/category/4",
    },
  ]);

  useEffect(() => {
    setCategories((prevCategories) => {
      return prevCategories?.map((prev) => {
        const updatedCount: number =
          statisticsData?.category_counts?.find(
            ({ category }) => category === prev.title
          )?.category_count || 0;
        return { ...prev, count: updatedCount };
      });
    });
  }, [statisticsData]);

  return (
    <CategoryWrapper>
      <CategoryTitle>Категории вопросов:</CategoryTitle>

      <CategoryContainer>
        {categories?.map(({ title, count, icon, link }) => (
          <Link
            style={{ width: "100%" }}
            key={title}
            to={count === 0 ? "/" : link}
            state={title}
          >
            <CategoryCard>
              <CategoryHeader>
                <CategoryTitle>{title}</CategoryTitle>
                <CategorySubTitle>({count})</CategorySubTitle>
              </CategoryHeader>
              {icon}
            </CategoryCard>
          </Link>
        ))}
      </CategoryContainer>
    </CategoryWrapper>
  );
};
