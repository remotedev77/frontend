import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { FC } from "react";

interface SearchBarProps {
  onSearch(): void;
  onSearchChange(value: string): void;
  placeholder?: string;
}

export const SearchBar: FC<SearchBarProps> = observer((x) => {
  const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 5px 20px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
    color: #505050;
    border: none;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;
  const Container = styled.div`
    position: relative;
    width: 620px;
    height: 40px;
  `;
  const SearchButton = styled.button`
    cursor: pointer;
    position: absolute;
    right: 0px;
    border: none;
    background: none;
  `;

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder={x.placeholder}
        onChange={(e) => x.onSearchChange(e.target.value)}
      />
      <SearchButton onClick={x.onSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="40"
          viewBox="0 0 58 40"
          fill="none"
        >
          <rect width="58" height="40" rx="5" fill="#C8C8C8" />
          <path
            d="M37.5 28L33.6046 24.4133C32.9353 24.9778 32.1655 25.4146 31.2952 25.7238C30.425 26.033 29.5504 26.1875 28.6712 26.1875C26.5274 26.1875 24.7129 25.453 23.2277 23.984C21.7426 22.5141 21 20.7187 21 18.5977C21 16.4768 21.7417 14.6805 23.2251 13.2088C24.7093 11.7363 26.5229 11 28.6659 11C30.8097 11 32.6251 11.735 34.112 13.2049C35.599 14.6748 36.3425 16.4711 36.3425 18.5938C36.3425 19.5142 36.1778 20.4051 35.8484 21.2664C35.5182 22.1276 35.0853 22.8644 34.5498 23.4765L38.4452 27.0619L37.4987 28H37.5ZM28.6712 24.8612C30.4473 24.8612 31.9472 24.2561 33.1709 23.0459C34.3936 21.8357 35.005 20.3512 35.005 18.5924C35.005 16.8346 34.3936 15.3505 33.1709 14.1403C31.9481 12.9301 30.4487 12.325 28.6726 12.325C26.8964 12.325 25.3966 12.9301 24.1729 14.1403C22.9502 15.3505 22.3388 16.8346 22.3388 18.5924C22.3388 20.3503 22.9502 21.8344 24.1729 23.0446C25.3957 24.2548 26.8951 24.8612 28.6712 24.8612Z"
            fill="white"
          />
        </svg>
      </SearchButton>
    </Container>
  );
});
