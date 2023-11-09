import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import BlackCardsIcon from "../../assets/icons/black-card.svg?react";
import GreenCardsIcon from "../../assets/icons/green-card.svg?react";
import YellowCardsIcon from "../../assets/icons/yellow-card.svg?react";
import RedCardsIcon from "../../assets/icons/red-card.svg?react";
import useGetStatistics from "../../hooks/useGetStatistics";
import { Link } from "react-router-dom";

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 1.5rem;
  width: 100%;
  height: 100%;
`;

const CategoryHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  height: 100%;
  justify-content: space-between;

  @media only screen and (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const CategoryTitle = styled.h2`
  color: #505050;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%; /* 16px */
  @media only screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: normal;
  }
`;

const CategorySubTitle = styled.p`
  color: #b4b4b4;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  display: none;

  @media only screen and (min-width: 1024px) {
    display: block;
  }
`;

const CategoryCount = styled.p`
  color: #505050;
  font-size: 30px;
  font-weight: 600;
  background: linear-gradient(
    65deg,
    #aaa -48.06%,
    rgba(170, 170, 170, 0) 120.82%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (min-width: 1024px) {
    font-size: 52px;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: space-between;
  .links {
    width: 47%;
  }
  @media only screen and (min-width: 1024px) {
    flex-wrap: nowrap;
    gap: 24px;

    .links {
      width: 100%;
    }
  }
`;

const CategoryCard = styled.div`
  display: flex;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: #fff;
  width: 100%;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
  min-height: 90px;
  align-items: center;

  .cardIcon {
    position: absolute;
    top: 0rem;
    right: -20%;
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 1024px) {
    padding: 16px;
    border-radius: 25px;

    .cardIcon {
      position: absolute;
      top: 0rem;
      right: -65px;
      width: 100%;
      height: 100%;
    }
  }
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
      icon: <BlackCardsIcon className="cardIcon" />,
      link: `/category/1`,
    },
    {
      title: "Знаю",
      count: 0,
      icon: <GreenCardsIcon className="cardIcon" />,
      link: "/category/2",
    },
    {
      title: "Делаю ошибки",
      count: 0,
      icon: <YellowCardsIcon className="cardIcon" />,
      link: "/category/3",
    },
    {
      title: "Не знаю",
      count: 0,
      icon: <RedCardsIcon className="cardIcon" />,
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
      <CategoryContainer>
        {categories?.map(({ title, count, icon, link }) => (
          <Link
            className="links"
            key={title}
            to={count === 0 ? "/" : link}
            state={title}
          >
            <CategoryCard>
              <CategoryHeader>
                <CategoryCount>({count})</CategoryCount>
                <CategorySubTitle>категория:</CategorySubTitle>
                <CategoryTitle>{title}</CategoryTitle>
              </CategoryHeader>
              {icon}
            </CategoryCard>
          </Link>
        ))}
      </CategoryContainer>
    </CategoryWrapper>
  );
};
