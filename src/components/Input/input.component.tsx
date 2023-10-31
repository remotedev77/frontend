import styled from "@emotion/styled";
import { ChangeEvent, FC } from "react";

// const Custom = styled.input`
//   margin-bottom: 35px;
//   display: flex;
//   width: 1000px;
//   padding: 15px 20px;
//   align-items: center;
//   gap: 10px;
//   color: #505050;
//   font-family: Inter, sans-serif;
//   font-size: 30px;
//   font-style: normal;
//   font-weight: 300;
//   line-height: normal;
//   border-radius: 15px;
//   border: 1px solid #000;
// `;

interface InputProps {
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  placeholder: string;
  noMargins?: boolean;
  type?: string;
  required?: boolean;
  textSize?: number;
}

export const Input: FC<InputProps> = (props) => {
  const Custom = styled.input`
    margin-bottom: ${props.noMargins ? null : 35}px;
    display: flex;
    width: ${props.textSize ? props.textSize * 33 : `1000`}px;
    padding: 15px 20px;
    align-items: center;
    gap: 10px;
    color: #505050;
    font-family: Inter, sans-serif;
    font-size: ${props.textSize ? props.textSize : 30}px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border-radius: 15px;
    border: 1px solid #000;
  `;
  return <Custom {...props} />;
};
