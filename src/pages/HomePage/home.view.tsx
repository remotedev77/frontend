import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import {
  CardsIcon,
  EllipseShape,
  IconProps,
  WatchIcon,
  WatchWithBeltIcon,
} from "../../assets/lib";
import { useNavigate } from "react-router-dom";
import useGetUserData from "../../hooks/useGetUserData";
import { Header } from "../../components";
import { Category } from "../../containers";
import { Statistics } from "../../containers/Statistics";
import { RootStoreContext } from "../../app.view";

type Card = {
  title: string;
  desc?: string;
  type: "current" | "active" | "deactive";
  Icon: ({ style }: IconProps) => JSX.Element;
  link: string;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1.2rem;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const TestSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 70%;
`;

const OverviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30%;
`;

const Card = styled.div<{ $type?: string }>`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 11rem;
  border-radius: 1.875rem;
  box-shadow: 0px 4px 46px 0px rgba(22, 21, 21, 0.25);
  background: ${(props) =>
    (props.$type === "current" && "#FFFFFF") ||
    (props.$type === "active" &&
      "linear-gradient(254deg, #FF9272 29.87%, #F3673E 76.65%)") ||
    (props.$type === "deactive" &&
      "linear-gradient(254deg, #BABABA 29.87%, #989898 76.65%)") ||
    "#FFFFFF"};
`;

const CardContent = styled.div<{ $type?: string }>`
  position: relative;
  display: flex;
  flex-grow: 1;
  padding: 0 1rem;
`;

const CardHeading = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  display: flex;
  gap: 0.5rem 0;
  padding: 1rem 0;
  flex-direction: column;
`;

const CardTitle = styled.div<{ $type?: string }>`
  color: ${(props) => (props.$type === "current" ? "#505050" : "#FFFFFF")};
  font-weight: 600;
  font-size: 2rem;
`;

const CardSubtitle = styled.div`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  max-width: 400px;
`;

export const CardOverview = styled.div<{ $height?: string }>`
  display: flex;
  width: 100%;
  height: ${(props) => props.$height || "11rem"};
  position: relative;
  overflow: hidden;
  display: flex;
  border-radius: 1.875rem;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
  padding: 2rem 2rem;
`;

const CardOverviewHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardOverviewTitle = styled.div`
  color: #505050;
  font-weight: 600;
  font-size: 1.5rem;
  display: flex;
  width: 100%;
  gap: 6px;
`;

export const CardOverviewSubtitle = styled.div`
  color: #505050;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: 1rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Home = observer(() => {
  const navigate = useNavigate();
  const { userStore } = useContext(RootStoreContext);
  const {
    userData,
    // isLoading: userLoading
  } = useGetUserData();

  const [cards, setCards] = useState<Card[]>(() => [
    {
      title: "Итоговое тестирование",
      desc: "Пройдите симулятор экзамена успешно более 2-х раз, чтобы открыть доступ к итоговому тестированию ",
      type: "deactive",
      Icon: WatchIcon,
      link: "/",
    },
    {
      title: "Симулятор экзамена",
      Icon: WatchWithBeltIcon,
      type: "current",
      link: "/simulator",
    },
    {
      title: "Марафон",
      Icon: CardsIcon,
      type: "current",
      link: "/marathon",
    },
  ]);

  useEffect(() => {
    const updateTestCount = (): Partial<Card> => {
      if (!userData) {
        return {};
      }
      const type = userData?.final_test ? "active" : "deactive";
      const link = userData?.final_test ? "/test" : "/";
      const Icon = userData?.final_test ? WatchIcon : () => <></>;
      return { type, link, Icon };
    };

    setCards((prev) => [
      { ...prev[0], ...updateTestCount() },
      ...prev.slice(1),
    ]);
  }, [userData, userData?.final_test]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <CardContainer>
          <CardWrapper>
            <TestSection>
              {cards.map(({ title, desc, type, Icon, link }) => (
                <Card key={title} $type={type} onClick={() => navigate(link)}>
                  {type !== "current" ? (
                    <>
                      <EllipseShape
                        style={`position:absolute; top:-3rem; left:-8rem;stroke:#FFFFFF;rotate:-7deg`}
                      />
                      <EllipseShape
                        style={`position:absolute; top:-1.5rem; left:-10rem;stroke:#FFFFFF;rotate:-8deg
                  `}
                      />
                    </>
                  ) : (
                    <EllipseShape
                      style={`position:absolute; left:-24rem; top:5rem;rotate:-8deg;`}
                    />
                  )}
                  <CardContent>
                    <CardHeading>
                      {type === "deactive" && (
                        <CardSubtitle>{desc}</CardSubtitle>
                      )}
                      <CardTitle $type={type}>{title}</CardTitle>
                    </CardHeading>
                    <Icon style="display:flex;width:60%" />
                  </CardContent>
                </Card>
              ))}
            </TestSection>

            <OverviewSection>
              <CardOverview>
                {/* add Skeleton */}
                <CardOverviewHeader>
                  <CardOverviewTitle>
                    <p>{userData?.first_name}</p>
                    <p>{userData?.last_name}</p>
                    <p>{userData?.father_name}</p>
                  </CardOverviewTitle>
                  <CardOverviewSubtitle>
                    Итоговое тестирование -{" "}
                    {userStore?.isFinalExamPassed ? "сдано" : "не сдано"}
                  </CardOverviewSubtitle>
                </CardOverviewHeader>
                {/*  */}
              </CardOverview>

              <Statistics />
            </OverviewSection>
          </CardWrapper>
        </CardContainer>

        <Category />
      </Wrapper>
    </Container>
  );
});
