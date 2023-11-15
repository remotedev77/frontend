import styled from "@emotion/styled";
export const FilterSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 30px;
`;
export const MainFilterControlls = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
`;
export const SubFilters = styled.div`
  color: #505050;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  width: 100%;
  flex-flow: nowrap;
`;

export const AddButton = styled.button`
  cursor: pointer;
  height: 40px;
  padding: 10px 30px;
  border-radius: 5px;
  background: #f3673e;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  border: none;
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const FilterButton = styled.button`
  cursor: pointer;
  height: 40px;
  padding: 10px 30px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
  border: none;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
