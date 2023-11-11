import styled from "@emotion/styled";
import { ChangeEvent, FC } from "react";

interface InputProps {
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  placeholder: string;
  noMargins?: boolean;
  type?: string;
  required?: boolean;
  textSize?: number;
  value?: string;
}

export const Input: FC<InputProps> = (props) => {
  const Custom = styled.input`
    margin-bottom: 15px;
    display: flex;
    width: 100%;
    padding: 8px 20px;
    align-items: center;
    gap: 10px;
    color: #505050;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border-radius: 15px;
    border: 1px solid #000;

    @media only screen and (min-width: 1024px) {
      font-size: 16px;
    }
  `;
  return <Custom {...props} autoComplete="true" />;
};
