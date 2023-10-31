import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1.2rem;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
const PageWrapper = styled.div`
  padding: 50px 60px;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const AdminPage = observer(() => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <CardWrapper>
        <Card $type="active" onClick={() => navigate("/users")}>
          <CardContent>
            <CardHeading>
              <CardTitle>Добавить пользователя</CardTitle>
            </CardHeading>
          </CardContent>
        </Card>
        <Card $type="active" onClick={() => navigate("/questions")}>
          <CardContent>
            <CardHeading>
              <CardTitle>Редактировать вопросы</CardTitle>
            </CardHeading>
          </CardContent>
        </Card>
      </CardWrapper>
    </PageWrapper>
  );
});
