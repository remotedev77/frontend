
import styled from "@emotion/styled";
import Arrow from "./arrow.svg"
export const FilterSectionContainer = styled.div`
          width: 100%;
          display: flex;
          flex-flow: column;
          margin-bottom:30px ;
        `
export const MainFilterControlls = styled.div`
  width: 100%;
  display: flex;
  gap: 60px;
  margin-bottom:20px;
`
export const SubFilters = styled.div`
        color: #505050;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        width: 100%;
        flex-flow: nowrap;
`


export const AddButton = styled.button`
          cursor: pointer;
          height: 40px;
          padding: 10px 30px;
          border-radius: 5px;
          background: #F3673E;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);
          border: none;
          color: #FFF;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        `
export const FilterButton = styled.button`
          cursor: pointer;
          height: 40px;
          padding: 10px 30px;
          border-radius: 5px;
        background: #FFF;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.20);
          border: none;
          color: #000;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        `

