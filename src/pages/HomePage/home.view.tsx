import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { EllipseShape } from "../../assets/lib";

import CardsIcon from "../../assets/icons/cards.svg?react";
import Watch from "../../assets/icons/watch.svg?react";
import { useNavigate } from "react-router-dom";
import useGetUserData from "../../hooks/useGetUserData";
import { Header } from "../../components";
import { Category } from "../../containers";
import { Statistics } from "../../containers/Statistics";
import { RootStoreContext } from "../../app.view";
import useGetStatistics from "../../hooks/useGetStatistics";

type Card = {
  title: string;
  desc?: string;
  type: "current" | "active" | "deactive";
  link: string;
};

const Container = styled.div`
  @media only screen and (min-width: 1024px) {
  }
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 1rem;

  @media only screen and (min-width: 1024px) {
    margin-top: 60px;
    margin-bottom: 0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    gap: 24px;
  }
`;

const TestSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`;

const OverviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

const Card = styled.div<{ $type?: string }>`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 90px;
  border-radius: 20px;
  box-shadow: 0px 4px 46px 0px rgba(22, 21, 21, 0.25);
  background: ${(props) =>
    (props.$type === "current" && "#FFFFFF") ||
    (props.$type === "active" &&
      "linear-gradient(254deg, #FF9272 29.87%, #F3673E 76.65%)") ||
    (props.$type === "deactive" &&
      "linear-gradient(254deg, #BABABA 29.87%, #989898 76.65%)") ||
    "#FFFFFF"};

  @media only screen and (min-width: 1024px) {
    height: 170px;
    border-radius: 30px;
  }
`;

const CardContent = styled.div<{ $type?: string }>`
  position: relative;
  display: flex;
  flex-grow: 1;
  padding: 10px 8px;

  .watchIcon {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: -10px;
    right: -100px;
  }

  .cardsIcon {
    position: absolute;
    width: 100%;
    top: -30px;
    right: -150px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 16px;

    .watchIcon {
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: -30px;
      right: -170px;
    }

    .cardsIcon {
      position: absolute;
      width: 60%;
      height: auto;
      top: -20px;
      right: -60px;
    }
  }
`;

const CardBadge = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background: #fff;

    position: absolute;
    right: 20px;
    bottom: 20px;

    height: 40px;
    padding: 10px 20px;
    align-items: center;
    gap: 12px;

    color: #505050;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    svg {
      margin-top: 5px;
    }
  }
`;

const CardHeading = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  display: flex;
  gap: 0.5rem 0;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
  }
`;

const CardTitle = styled.div<{ $type?: string }>`
  color: ${(props) => (props.$type === "current" ? "#505050" : "#FFFFFF")};
  font-weight: 600;
  font-size: 16px;

  @media only screen and (min-width: 1024px) {
    font-size: ${(props) => (props.$type === "current" ? "24px" : "32px")};
  }
`;

const CardSubtitle = styled.div`
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  max-width: 480px;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const CardOverview = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  color: #505050;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  border-radius: 20px;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 1024px) {
    height: 170px;
    font-size: 27px;
    border-radius: 30px;
    padding: 24px;
    width: 70%;
  }
`;

const CardOverviewHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardOverviewTitle = styled.div`
  color: #505050;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  width: 100%;
  gap: 6px;

  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const CardOverviewStatus = styled.div`
  color: #505050;
  font-weight: 600;
  font-size: 14px;
  display: none;
  margin-top: auto;
  width: 100%;
  gap: 6px;

  @media only screen and (min-width: 1024px) {
    font-size: 24px;
    display: flex;
  }
`;

export const CardOverviewSubtitle = styled.div`
  color: #505050;
  font-weight: 600;
  font-size: 10px;
  display: flex;
  align-items: flex-end;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Home = observer(() => {
  const navigate = useNavigate();
  const { userStore } = useContext(RootStoreContext);
  const {
    userData,
    // isLoading: userLoading
  } = useGetUserData();

  const { statisticsData } = useGetStatistics();

  const [cards, setCards] = useState<Card[]>(() => [
    {
      title: "Итоговое тестирование",
      desc: "Пройдите симулятор экзамена успешно более 2-х раз, чтобы открыть доступ к итоговому тестированию ",
      type: "deactive",

      link: "/",
    },
    {
      title: "Симулятор экзамена",

      type: "current",
      link: "/simulator",
    },
    {
      title: "Марафон",

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

      return { type, link };
    };

    setCards((prev) => [
      { ...prev[0], ...updateTestCount() },
      ...prev.slice(1),
    ]);
  }, [userData, userData?.final_test]);

  return (
    <Container className="container">
      <Header />
      <Wrapper>
        <CardContainer>
          <CardWrapper>
            <OverviewSection>
              <CardOverview>
                {/* add Skeleton */}
                <CardOverviewHeader>
                  <CardOverviewTitle>
                    <p>{userData?.first_name}</p>
                    <p>{userData?.last_name}</p>
                    <p>{userData?.father_name}</p>
                  </CardOverviewTitle>

                  <CardOverviewSubtitle>ООО Лукойл</CardOverviewSubtitle>

                  <CardOverviewStatus>
                    Готовность к экзамену -{" "}
                    {statisticsData?.statistic
                      ?.find(({ category }) => category.includes("Знаю"))
                      ?.statistic.toFixed(2)}
                    %
                  </CardOverviewStatus>
                </CardOverviewHeader>
              </CardOverview>

              <Statistics />
            </OverviewSection>

            <Card
              $type={cards?.[0]?.type}
              onClick={() => navigate(cards?.[0]?.link)}
            >
              {cards?.[0]?.type !== "current" ? (
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

              <CardBadge>
                {userStore?.isFinalExamPassed ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_305_323)">
                        <path
                          d="M11 17.7663C14.3016 21.463 17.5029 24.791 20.5801 29C23.9257 22.1142 27.35 15.2045 33 7.72162L31.4776 7C26.7067 12.2357 23.0002 17.1917 19.7795 23.0815C17.5399 20.9937 13.9203 18.0393 11.7103 16.5213L11 17.7663Z"
                          fill="#B9FF6D"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_305_323"
                          x="0"
                          y="0"
                          width="44"
                          height="44"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="5.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_305_323"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_305_323"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>{" "}
                    Сдано
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_305_636)">
                        <path
                          d="M6.19957 0.842196C5.95878 0.61698 5.64029 0.494371 5.31121 0.500199C4.98213 0.506027 4.66815 0.639837 4.43542 0.873439C4.20269 1.10704 4.06937 1.4222 4.06357 1.75251C4.05776 2.08282 4.17991 2.4025 4.40429 2.6442L10.7047 8.9682L4.40429 15.2922C4.27949 15.4089 4.17939 15.5497 4.10996 15.7061C4.04054 15.8625 4.00321 16.0313 4.0002 16.2025C3.99719 16.3737 4.02856 16.5438 4.09245 16.7025C4.15634 16.8613 4.25143 17.0055 4.37205 17.1266C4.49267 17.2476 4.63635 17.3431 4.79451 17.4072C4.95268 17.4713 5.1221 17.5028 5.29266 17.4998C5.46321 17.4968 5.63142 17.4593 5.78723 17.3896C5.94305 17.3199 6.08328 17.2195 6.19957 17.0942L12.5 10.7702L18.8004 17.0942C18.9167 17.2195 19.057 17.3199 19.2128 17.3896C19.3686 17.4593 19.5368 17.4968 19.7073 17.4998C19.8779 17.5028 20.0473 17.4713 20.2055 17.4072C20.3637 17.3431 20.5073 17.2476 20.628 17.1266C20.7486 17.0055 20.8437 16.8613 20.9076 16.7025C20.9714 16.5438 21.0028 16.3737 20.9998 16.2025C20.9968 16.0313 20.9595 15.8625 20.89 15.7061C20.8206 15.5497 20.7205 15.4089 20.5957 15.2922L14.2953 8.9682L20.5957 2.6442C20.8201 2.4025 20.9422 2.08282 20.9364 1.75251C20.9306 1.4222 20.7973 1.10704 20.5646 0.873439C20.3319 0.639837 20.0179 0.506027 19.6888 0.500199C19.3597 0.494371 19.0412 0.61698 18.8004 0.842196L12.5 7.1662L6.19957 0.842196Z"
                          fill="#F5574D"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_305_636"
                          x="0"
                          y="0.5"
                          width="25"
                          height="25"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_305_636"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_305_636"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>{" "}
                    Не сдано
                  </>
                )}
              </CardBadge>
              <CardContent>
                <CardHeading>
                  {cards?.[0]?.type === "deactive" && (
                    <CardSubtitle>{cards?.[0]?.desc}</CardSubtitle>
                  )}
                  <CardTitle $type={cards?.[0]?.type}>
                    {cards?.[0]?.title}
                  </CardTitle>
                </CardHeading>
                {/* <Icon style="display:flex;width:60%" /> */}
              </CardContent>
            </Card>
            <TestSection>
              <Card
                $type={cards?.[1]?.type}
                onClick={() => navigate(cards?.[1]?.link)}
              >
                <CardContent>
                  <CardHeading>
                    {cards?.[1]?.type === "deactive" && (
                      <CardSubtitle>{cards?.[1]?.desc}</CardSubtitle>
                    )}
                    <CardTitle $type={cards?.[1]?.type}>
                      {cards?.[1]?.title}
                    </CardTitle>
                  </CardHeading>
                  <Watch className="watchIcon" />
                </CardContent>
              </Card>

              <Card
                $type={cards?.[2]?.type}
                onClick={() => navigate(cards?.[2]?.link)}
              >
                <CardContent>
                  <CardHeading>
                    {cards?.[2]?.type === "deactive" && (
                      <CardSubtitle>{cards?.[2]?.desc}</CardSubtitle>
                    )}
                    <CardTitle $type={cards?.[2]?.type}>
                      {cards?.[2]?.title}
                    </CardTitle>
                  </CardHeading>
                  <CardsIcon className="cardsIcon" />
                </CardContent>
              </Card>
            </TestSection>
          </CardWrapper>
        </CardContainer>

        <Category />
      </Wrapper>
    </Container>
  );
});
