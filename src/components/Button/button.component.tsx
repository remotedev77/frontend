import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

interface ButtonProps extends PropsWithChildren {
  onClick(): void;
  primary?: boolean;
  size?: number;
}

export const Button: FC<ButtonProps> = (x) => {
  const StyledButton = styled.button`
    @media only screen and (min-width: 1024px) {
      padding: ${x.size ? `${x.size}px ${x.size - 10}px` : `16px`};
      font-size: 18px;
    }
    cursor: pointer;
    border: none;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: 40px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    box-shadow: 0px 11px 23px 0px rgba(0, 0, 0, 0.25);
    ${x.primary
      ? `color: #FFF;
        background: #F3673E;`
      : `color: #000;
        background: #FFF;`}
  `;
  return <StyledButton onClick={x.onClick}>{x.children}</StyledButton>;
};
