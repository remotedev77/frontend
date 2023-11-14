import {observer} from "mobx-react";
import styled from "@emotion/styled";
import {AdminPageVm} from "../../admin-page.vm.ts";
import {FC} from "react";

interface SideBarProps{
    vm: typeof AdminPageVm
}
export const SideBar:FC<SideBarProps> = observer(x => {
    const Container = styled.div`
      position: sticky;
      top: 0;
      min-width: 250px;
      box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.25);
      height: calc(100vh - 57px);
    `
    const Menu = observer(() =>{
        const ButtonGroup = styled.div`
            margin-top: 35px;
            width: 100%;
            display: flex;
            flex-flow: column;
            align-items: center;
        `
        const MenuButton = styled.button`
          cursor: pointer;
          margin: 5px 0;
          width: 170px;
          height: 40px;
          border: none;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);
        `
        const SelectedButton = styled.button`
          width: 170px;
          margin: 5px 0;
          height: 40px;
          border: none;
          color: white;
          background: #f3673e;
          border-radius: 5px;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);

        `
        const Wrapper = styled.div`
          display: flex;
          align-items: center;
          flex-flow: column;
          justify-content: space-between;
          height: 100%;
        `
        return (
            <Wrapper>
                <ButtonGroup>
                    {x.vm.tableTypes.map((t, i) => x.vm.selectedTable === t
                        ? <SelectedButton key={t}>{x.vm.translation[i]}</SelectedButton>
                        : <MenuButton key={t}
                                      onClick={() => x.vm.setSelectedTable(t)}>{x.vm.translation[i]}</MenuButton>)}
                </ButtonGroup>
                <MenuButton>Отчеты</MenuButton>
            </Wrapper>
        )
    })


    return(
        <Container>
            <Menu/>
        </Container>
    )
})
