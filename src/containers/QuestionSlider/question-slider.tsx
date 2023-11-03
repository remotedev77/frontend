import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";
import { ExamType, VM } from "../../types";
import { observer } from "mobx-react";

const QuestionSliderContainer = styled.div`
  padding: 0 40px;
  display: flex;
  gap: 10px;
  height: 70px;
  overflow: hidden;
  overflow-x: auto;
`;

type QuestionSlider = {
  vm: VM;
};

export const QuestionSlider = observer((x: QuestionSlider) => {
  return (
    <QuestionSliderContainer>
      {x.vm.exam_type === ExamType.MARATHON
        ? x.vm?.questions
            ?.slice(0, x.vm.checkedAnswers.length + 1)
            ?.map(({ id }, index) => (
              <QuestionSquare
                vm={x.vm}
                answer={
                  x?.vm?.checkedAnswers.find(
                    ({ questionId }) => id === questionId
                  )?.isCorrect
                }
                key={id}
                questionId={id}
                number={index}
              >
                {index}
              </QuestionSquare>
            ))
        : x.vm?.questions?.map(({ id }, index) => (
            <QuestionSquare
              vm={x.vm}
              answer={
                x?.vm?.checkedAnswers.find(
                  ({ questionId }) => id === questionId
                )?.isCorrect
              }
              key={id}
              questionId={id}
              number={index}
            >
              {index}
            </QuestionSquare>
          ))}
    </QuestionSliderContainer>
  );
});

interface ISquareProps extends PropsWithChildren {
  number: number;
  answer?: boolean;
  vm: VM;
  questionId: number;
}

const QuestionSquare: FC<ISquareProps> = observer((props) => {
  const Square = styled.div`
    position: relative;
    cursor: pointer;
    display: inline-flex;
    box-sizing: border-box;
    width: 42px;
    height: 42px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    padding: 20px;

    &[data-selected="true"] {
      background: #e7e7e7;
    }

    ${props.answer !== undefined
      ? `background: ${props.answer ? "#B9FF6D" : "#F5574D"} !important`
      : ``};

    &[data-state="true"]::after {
      background: url("data:image/svg+xml,%3Csvg width='23' height='19' viewBox='0 0 23 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath id='Polygon 1' d='M11.5 0L22.3253 18.75H0.674683L11.5 0Z' fill='%235C5C5C'/%3E%3C/svg%3E")
        no-repeat;
      background-size: 16px 16px;
      object-fit: cover;
      width: 16px;
      height: 16px;
      content: "";
      position: absolute;
      bottom: -10px;
    }
  `;

  return (
    <Square
      data-selected={
        props.vm.selectedAnswers.find(({ q_id }) => props.questionId === q_id)
          ? true
          : false
      }
      data-state={props.number === props.vm.questionNumber}
      onClick={() => {
        if (props.vm.questionNumber !== props.number) {
          props.vm.changeSelectedQuestion(props.number);
        }
      }}
    >
      {props.number + 1}
    </Square>
  );
});
