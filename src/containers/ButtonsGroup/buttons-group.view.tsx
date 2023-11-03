import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  primary?: boolean;
  onClick(): void;
  left?: boolean;
  right?: boolean;
  middle?: boolean;
  isTime?: boolean;
}

const Group = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  grid-column: span 1 / span 2;
  grid-column-start: 2;
`;

const Button: FC<ButtonProps> = (props) => {
  const Styled = styled.button`
    display: flex;
    width: ${props.middle || props.primary ? "100%" : "fit-content"};
    cursor: ${props.isTime ? "default" : "pointer"};
    margin: ${props.left
      ? "0 auto 0 0"
      : props.right
      ? "0 0 0 auto"
      : "0 auto"};
    border-radius: 9999px;
    border: ${props.primary || props.middle ? `none` : `1px solid #505050`};
    background: ${props.primary ? `#F3673E` : `#FFF`};
    box-shadow: ${props.middle
      ? "0px 4px 17px 0px rgba(0, 0, 0, 0.25)"
      : "none"};
    padding: 14px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    color: ${props.primary ? "#FFF" : "#505050"};
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `;
  return <Styled onClick={props.onClick}>{props.children}</Styled>;
};

interface ButtonsGroupProps {
  left?(): void;
  right(): void;
  middle: {
    amount: 2 | 3;
    left(): void;
    right(): void;
    middle?(): void;
  };
  // second
  time?: {
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export const ButtonsGroup: FC<ButtonsGroupProps> = observer((x) => {
  return (
    <Group>
      {x.left ? (
        <Button left onClick={x.left}>
          Вернуться в меню
        </Button>
      ) : null}

      <MiddleContainer>
        {x.middle.amount === 3 ? (
          <>
            <Button primary onClick={x.middle.left}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                viewBox="0 0 58 48"
                fill="none"
              >
                <path
                  d="M58 24C58 24.6365 57.7454 25.2469 57.2922 25.697C56.839 26.147 56.2243 26.3999 55.5834 26.3999H8.25153L25.8775 43.9009C26.102 44.1239 26.2801 44.3886 26.4017 44.6799C26.5232 44.9712 26.5857 45.2835 26.5857 45.5988C26.5857 45.9141 26.5232 46.2264 26.4017 46.5177C26.2801 46.809 26.102 47.0737 25.8775 47.2967C25.653 47.5197 25.3864 47.6965 25.0931 47.8172C24.7997 47.9379 24.4853 48 24.1678 48C23.8503 48 23.5358 47.9379 23.2425 47.8172C22.9491 47.6965 22.6826 47.5197 22.458 47.2967L0.708753 25.6979C0.484067 25.475 0.305822 25.2103 0.184209 24.919C0.062596 24.6277 0 24.3154 0 24C0 23.6846 0.062596 23.3723 0.184209 23.081C0.305822 22.7897 0.484067 22.525 0.708753 22.3021L22.458 0.703295C22.9115 0.252983 23.5265 -4.74481e-09 24.1678 0C24.8091 4.74481e-09 25.4241 0.252983 25.8775 0.703295C26.331 1.15361 26.5857 1.76436 26.5857 2.4012C26.5857 3.03804 26.331 3.64879 25.8775 4.09911L8.25153 21.6001H55.5834C56.2243 21.6001 56.839 21.853 57.2922 22.303C57.7454 22.7531 58 23.3635 58 24Z"
                  fill="white"
                />
              </svg>
            </Button>
            <Button
              isTime={x.time ? true : false}
              middle
              onClick={x.middle.middle!}
            >
              {x.time
                ? `${x.time.hours}${x.time.minutes}${x.time.seconds}`
                : "Проверить ответ"}
            </Button>
            <Button primary onClick={() => x.middle.right()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                viewBox="0 0 58 48"
                fill="none"
              >
                <path
                  d="M1.83227e-06 24C1.88087e-06 23.3635 0.254602 22.7531 0.7078 22.303C1.161 21.853 1.77567 21.6001 2.41659 21.6001L49.7485 21.6001L32.1225 4.09911C31.898 3.87613 31.7199 3.61143 31.5983 3.3201C31.4768 3.02877 31.4143 2.71653 31.4143 2.4012C31.4143 2.08587 31.4768 1.77363 31.5983 1.4823C31.7199 1.19097 31.898 0.926267 32.1225 0.703294C32.347 0.480321 32.6136 0.303453 32.9069 0.182783C33.2003 0.0621084 33.5147 -2.45118e-06 33.8322 -2.41939e-06C34.1498 -2.38761e-06 34.4642 0.0621085 34.7575 0.182783C35.0509 0.303453 35.3174 0.480322 35.542 0.703294L57.2912 22.3021C57.5159 22.525 57.6942 22.7897 57.8158 23.081C57.9374 23.3723 58 23.6846 58 24C58 24.3154 57.9374 24.6277 57.8158 24.919C57.6942 25.2103 57.5159 25.475 57.2912 25.6979L35.542 47.2967C35.0885 47.747 34.4735 48 33.8322 48C33.1909 48 32.5759 47.747 32.1225 47.2967C31.669 46.8464 31.4143 46.2356 31.4143 45.5988C31.4143 44.962 31.669 44.3512 32.1225 43.9009L49.7485 26.3999L2.41659 26.3999C1.77567 26.3999 1.161 26.147 0.7078 25.697C0.254602 25.2469 1.78368e-06 24.6365 1.83227e-06 24Z"
                  fill="white"
                />
              </svg>
            </Button>
          </>
        ) : (
          <></>
        )}
      </MiddleContainer>

      {x.right ? (
        <Button right onClick={x.right}>
          Завершить
        </Button>
      ) : null}
    </Group>
  );
});
