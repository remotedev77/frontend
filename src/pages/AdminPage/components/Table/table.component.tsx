import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { HeaderRow, HeaderRowProps } from "./HeaderRow";
import { FC, PropsWithChildren } from "react";

const InfoTable = styled.table`
  border-spacing: 0;
`;
const TableHeader = styled.thead``;
const TableBody = styled.tbody``;

export const Row = styled.tr``;
export const Cell = styled.td`
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 380px;
  height: 1.2em;
  white-space: nowrap;
  color: #000;
  border-bottom: 1px black solid;
  border-left: 1px black solid;
  border-right: 1px black solid;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

interface TableProps extends HeaderRowProps, PropsWithChildren {}

export const Table: FC<TableProps> = observer((x) => {
  return (
    <InfoTable>
      <TableHeader>
        <HeaderRow cells={x.cells} />
      </TableHeader>
      <TableBody>{x.children}</TableBody>
    </InfoTable>
  );
});
