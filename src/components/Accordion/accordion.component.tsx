import { useState } from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { AnswerResultDTO } from "../../types";

const Container = styled.div`
  width: 100%;
  position: relative;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  padding: 15px;
  color: #505050;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: 1024px) {
    padding: 30px;
    font-size: 14px;
    gap: 20px;
  }
`;

const AccordionTitle = styled.div``;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  display: grid;
  grid-template-rows: ${(props) => (props.isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease-out;
  font-size: 12px;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const AnswerLists = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const AnswerList = styled.li`
  list-style: disc;
  list-style-position: inside;
`;

const TriggerButton = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  position: absolute;
  left: 50%;
  translate: -50% 50%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #f3673e;
  border-radius: 9999px;

  transition: all 0.3s ease-out;
  rotate: ${(props) => (props.isOpen ? "180deg" : "0deg")};

  @media only screen and (min-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;

const Badge = styled.div<{ $type: boolean | undefined }>`
  padding: 5px 10px;
  width: fit-content;
  border-radius: 90px;
  background: ${(props) =>
    props.$type === null ? "#FFC42E" : props.$type ? "#6ACB00" : "#f87063"};
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.15);

  color: #fff;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

type AccordionProps = {
  index: number | string;
} & AnswerResultDTO;

export const Accordion = observer((x: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTriggerBtn = () => setIsOpen(!isOpen);
  return (
    <Container>
      <Wrapper>
        <Badge $type={x.is_correct}>Вопрос №: {x.index}</Badge>

        <AccordionTitle>{x.question}</AccordionTitle>

        <AccordionContent isOpen={isOpen}>
          <div style={{ overflow: "hidden" }}>
            <b>Ответы:</b>
            <AnswerLists>
              {x.correct_answer?.map((list, index) => (
                <AnswerList key={index}>{list}</AnswerList>
              ))}
            </AnswerLists>

            <p style={{ marginTop: 20 }}>
              <i>
                <b>Объяснение:</b> объяснение объянение
              </i>
            </p>
          </div>
        </AccordionContent>

        <TriggerButton isOpen={isOpen} onClick={handleTriggerBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
          >
            <path
              d="M9.2686 9.69448L16.5385 1.97992C16.6598 1.8512 16.7275 1.68018 16.7275 1.50234C16.7275 1.32451 16.6598 1.15349 16.5385 1.02477L16.5303 1.01646C16.4714 0.953847 16.4006 0.903986 16.3221 0.869914C16.2436 0.835841 16.1591 0.818271 16.0737 0.818271C15.9882 0.818271 15.9037 0.835841 15.8252 0.869914C15.7467 0.903986 15.6759 0.953847 15.6171 1.01646L8.77162 8.28113L1.92891 1.01646C1.87008 0.953846 1.79926 0.903985 1.72076 0.869913C1.64227 0.83584 1.55774 0.818269 1.47232 0.818269C1.3869 0.818269 1.30237 0.83584 1.22388 0.869913C1.14538 0.903985 1.07456 0.953846 1.01573 1.01646L1.00751 1.02477C0.886151 1.15349 0.818448 1.3245 0.818448 1.50234C0.818448 1.68018 0.886151 1.8512 1.00751 1.97992L8.27738 9.69448C8.34132 9.76232 8.41821 9.81634 8.5034 9.85324C8.58859 9.89015 8.68031 9.90918 8.77299 9.90918C8.86568 9.90918 8.95739 9.89015 9.04259 9.85324C9.12778 9.81634 9.20467 9.76232 9.2686 9.69448Z"
              fill="white"
            />
          </svg>
        </TriggerButton>
      </Wrapper>
    </Container>
  );
});
