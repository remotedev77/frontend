import styled from "@emotion/styled";
import {observer} from "mobx-react";
import {FC} from "react";
interface CellInfo{
    width:number
    name:string
}
interface CellProps{
    width:number
}
export interface HeaderRowProps{
    cells:CellInfo[]
}
export const HeaderRow:FC<HeaderRowProps> = observer(x =>{
    const Row = styled.tr`
          
        `
    const HeaderCell = styled.th<CellProps>`
          color: #000;
          height: 60px;
          border: 1px black solid;
          width: ${props => props.width}px;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
      content: "aaa";
          line-height: normal;
    `
    return <Row>
        {x.cells.map((cell, i) =><HeaderCell key={i} width={cell.width}>{cell.name}</HeaderCell>)}
    </Row>
})
