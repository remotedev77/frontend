import {observer} from "mobx-react";
import styled from "@emotion/styled";
import {FC} from "react";

interface option {
    value: string | number
    key: string
}

interface DropdownProps {
    placeholder: string
    options: option[]
    onOptionChange(option:string|null):void
    filter():void
}

export const Dropdown: FC<DropdownProps> = observer(x => {
    const Select = styled.select`
      margin-left: 50px;
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
      min-width: 150px;

      
      option {
        color: #b4b4b4;
        font-size: 16px;
        font-weight: 300;
      }
    `


    return (
        <Select
            onChange={(e) =>{
                if (e.target.selectedOptions[0].accessKey !== 'default') {
                    console.log(e.target.selectedOptions[0].accessKey)
                    x.onOptionChange(e.target.selectedOptions[0].accessKey);
                } else {
                    x.onOptionChange(null)
                }
                x.filter()
            }}
        >
            <option selected accessKey='default'>{x.placeholder}</option>
            {x.options.map(o=><option key={o.key} accessKey={o.key}>{o.value}</option>)}
        </Select>
    )
})
