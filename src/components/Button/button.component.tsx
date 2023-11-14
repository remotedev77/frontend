import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

interface ButtonProps extends PropsWithChildren {
  onClick(): void;
  primary?: boolean;
  size?: number;
  width?:number;
  type?: "button" | "submit" | "reset" | undefined
  borderRadius?:string
}

export const Button: FC<ButtonProps> = (x) => {
  const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    padding: ${x.size ? `${x.size}px ${x.size - 10}px` : `24px`};
    width: ${x.width ? `${x.width}px`: `100%`};
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: ${x.borderRadius?x.borderRadius:40}px;
    font-family: Inter, sans-serif;
    font-size: ${x.size ? x.size : 24}px;
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
  return <StyledButton type={x.type} onClick={x.onClick}>{x.children}</StyledButton>;
};
