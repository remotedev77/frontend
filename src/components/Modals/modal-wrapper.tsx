import {observer} from "mobx-react";
import styled from "@emotion/styled";
import {FC, PropsWithChildren} from "react";

export const ModalInput = styled.input`
  display: flex;
  width: 450px;
  height: 35px;
  border-radius: 5px;
  border: 0.5px solid #000;
  color: #505050;
  padding-left: 10px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const Label = styled.label`
  font-family: Inter;
  color: #505050;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  max-width: 450px;
  line-height: normal;
`
export const ModalTextarea = styled.textarea`
  width: 450px;
  min-height: 110px;
  padding: 15px 20px 15px 10px;
`
export const CustomSelect = styled.select`
  border-radius: 5px;
  border: 0.5px solid #000;
  width: 450px;
  height: 35px;
  font-family: Inter;
  padding-left: 10px;
  font-size: 16px;
  option{
    color: #B4B4B4;
    font-family: Inter;
    font-size: 16px;
    font-weight: 300;
  }
    
`

interface ModalTitleProps extends PropsWithChildren{
    size?: number
    align?:"start" | "end" | "left" | "right" | "center" | "justify" | "match-parent" | "justify-all"| null
}
export const ModalTitle:FC<ModalTitleProps> =x => {
   const MT = styled.p`
  color: #505050;
  width: 450px;
  text-align: ${x.align?x.align:'center'};
  font-family: Inter;
  font-size: ${x.size?x.size:27}px;
  font-weight: 600;
`
    return <MT>{x.children}</MT>
}

interface InfofieldProps{
    type:string
    info:string | null
}
export const InfoField:FC<InfofieldProps> = x =>{
    const Info = styled.p`
      overflow: hidden;
      text-overflow: ellipsis;
      color: #505050;
      width: 450px;
      font-size: 14px;
      font-weight: 400;
    `
    return <Info><b>{`${x.type}: `}</b>{x.info}</Info>
}

interface FileUploadProps{
    setFile(file:File): void
    fileName:string|null
    description?:string
}
export const FileUpload:FC<FileUploadProps> = observer(x=>{
    const LaberWrapper = styled.label`
      border-radius: 5px;
      border: 0.5px solid #000;
      display: flex;
      width: 450px;
      height: 109px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      color: #B4B4B4;
      font-size: 16px;
      font-weight: 300;
      line-height: normal;
      text-decoration-line: underline;
    `
    const FileInput = styled.input`
      display: none;
    `

    return <LaberWrapper>
        {x.fileName?x.fileName:
            <>{x.description?x.description:"загрузить файл"}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path d="M9.80264 4.17891C9.96929 4.01229 9.96929 3.74214 9.80264 3.57552C9.63605 3.4089 9.36587 3.4089 9.19929 3.57552L4.03116 8.74362C3.21523 9.55954 3.33575 10.5338 3.87646 11.0746C4.14829 11.3464 4.52902 11.5125 4.94919 11.5125C5.3986 11.5125 5.89311 11.3224 6.34735 10.8681L13.1986 4.01683C14.0783 3.13718 14.0783 1.70589 13.1986 0.826239L13.0309 0.658572C12.6063 0.233901 12.0397 0 11.4356 0C10.8316 0 10.265 0.233901 9.84035 0.658572L5.80395 4.69505L5.80388 4.69512L4.73461 5.76438L3.32449 7.1745L3.32442 7.1746L0.863079 9.63595C0.306532 10.1925 0 10.9351 0 11.727C0 12.5188 0.306532 13.2614 0.863079 13.818L1.09502 14.0499C1.6716 14.6265 2.4287 14.9148 3.18605 14.9147C3.94322 14.9146 4.70064 14.6264 5.27707 14.0499L12.5835 6.7435C12.7501 6.57688 12.7501 6.30674 12.5835 6.14012C12.4169 5.9735 12.1467 5.9735 11.9801 6.14012L4.67369 13.4466C4.26349 13.8568 3.72484 14.0619 3.18601 14.0618C2.64733 14.0618 2.10847 13.8567 1.69837 13.4466L1.46639 13.2146C1.07101 12.8192 0.853257 12.2909 0.853257 11.7269C0.853257 11.163 1.07101 10.6346 1.46639 10.2393L3.92774 7.77792L3.92784 7.77785L10.4438 1.26199C10.7073 0.998449 11.0595 0.853327 11.4356 0.853327C11.8118 0.853327 12.1641 0.998449 12.4276 1.26199L12.5953 1.42966C13.1422 1.97659 13.1422 2.86655 12.5953 3.41348L5.744 10.2648C5.23607 10.7727 4.74307 10.7345 4.47988 10.4712C4.23857 10.2299 4.19285 9.78872 4.63458 9.34696L9.80264 4.17891Z" fill="#B4B4B4"/>
        </svg></>
        }

        <FileInput type="file" onChange={e=>x.setFile(e.target.files![0])} accept=".csv"/>
    </LaberWrapper>
})

interface ButtonSectionProps{
    onDelete():void
    onEdit():void
}
export const ButtonSection:FC<ButtonSectionProps> = x =>{
    const DeleteBotton = styled.button`
      cursor: pointer;
      border-radius: 5px;
      background: #F3673E;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
      border: none;
      padding: 10px 20px;
      justify-content: space-between;
      color: #FFF;
      display: flex;
    `
    const EditButton = styled.button`
        border: none;
        background: none;
        cursor: pointer;
    `
    const Container = styled.div`
        display: flex;
        width: 100%;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
    `
    return <Container>
        <DeleteBotton onClick={x.onDelete}>
        удалить
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8.5 4H11.5C11.5 3.60218 11.342 3.22064 11.0607 2.93934C10.7794 2.65804 10.3978 2.5 10 2.5C9.60218 2.5 9.22064 2.65804 8.93934 2.93934C8.65804 3.22064 8.5 3.60218 8.5 4ZM7.5 4C7.5 3.33696 7.76339 2.70107 8.23223 2.23223C8.70107 1.76339 9.33696 1.5 10 1.5C10.663 1.5 11.2989 1.76339 11.7678 2.23223C12.2366 2.70107 12.5 3.33696 12.5 4H17.5C17.6326 4 17.7598 4.05268 17.8536 4.14645C17.9473 4.24021 18 4.36739 18 4.5C18 4.63261 17.9473 4.75979 17.8536 4.85355C17.7598 4.94732 17.6326 5 17.5 5H16.446L15.252 15.344C15.1676 16.0752 14.8173 16.7498 14.2679 17.2396C13.7184 17.7293 13.008 17.9999 12.272 18H7.728C6.99195 17.9999 6.28161 17.7293 5.73214 17.2396C5.18266 16.7498 4.8324 16.0752 4.748 15.344L3.554 5H2.5C2.36739 5 2.24021 4.94732 2.14645 4.85355C2.05268 4.75979 2 4.63261 2 4.5C2 4.36739 2.05268 4.24021 2.14645 4.14645C2.24021 4.05268 2.36739 4 2.5 4H7.5ZM5.741 15.23C5.79743 15.7174 6.03105 16.167 6.39742 16.4934C6.76379 16.8198 7.23735 17.0001 7.728 17H12.272C12.7627 17.0001 13.2362 16.8198 13.6026 16.4934C13.969 16.167 14.2026 15.7174 14.259 15.23L15.439 5H4.561L5.741 15.23ZM8.5 7.5C8.63261 7.5 8.75979 7.55268 8.85355 7.64645C8.94732 7.74021 9 7.86739 9 8V14C9 14.1326 8.94732 14.2598 8.85355 14.3536C8.75979 14.4473 8.63261 14.5 8.5 14.5C8.36739 14.5 8.24021 14.4473 8.14645 14.3536C8.05268 14.2598 8 14.1326 8 14V8C8 7.86739 8.05268 7.74021 8.14645 7.64645C8.24021 7.55268 8.36739 7.5 8.5 7.5ZM12 8C12 7.86739 11.9473 7.74021 11.8536 7.64645C11.7598 7.55268 11.6326 7.5 11.5 7.5C11.3674 7.5 11.2402 7.55268 11.1464 7.64645C11.0527 7.74021 11 7.86739 11 8V14C11 14.1326 11.0527 14.2598 11.1464 14.3536C11.2402 14.4473 11.3674 14.5 11.5 14.5C11.6326 14.5 11.7598 14.4473 11.8536 14.3536C11.9473 14.2598 12 14.1326 12 14V8Z" fill="white"/>
            </svg>
    </DeleteBotton>
        <EditButton onClick={x.onEdit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_308_2531)"/>
                <path d="M23.4717 11.8305L17.2462 18.056C14.6412 20.6676 12.6684 23.8407 11.4791 27.3324C11.4224 27.4976 11.4133 27.6754 11.453 27.8454C11.4927 28.0155 11.5795 28.1709 11.7035 28.2939L11.7067 28.2971C11.793 28.384 11.8956 28.4531 12.0086 28.5002C12.1217 28.5473 12.2429 28.5716 12.3654 28.5717C12.4684 28.5716 12.5708 28.5547 12.6683 28.5214C16.16 27.3321 19.3331 25.3593 21.9447 22.7543L28.1699 16.5288C28.793 15.9058 29.143 15.0607 29.143 14.1796C29.143 13.2985 28.793 12.4535 28.17 11.8305C27.8615 11.522 27.4952 11.2773 27.0922 11.1103C26.6891 10.9434 26.2571 10.8574 25.8208 10.8574C24.9397 10.8574 24.0947 11.2074 23.4717 11.8305ZM21.0983 21.908C18.7453 24.2549 15.9112 26.0635 12.7916 27.209C13.9371 24.0893 15.7456 21.2552 18.0924 18.9022L21.8009 15.1937L24.8068 18.1995L21.0983 21.908ZM27.3237 15.6826L25.653 17.3533L22.6472 14.3475L24.3179 12.6767C24.5152 12.4789 24.7495 12.3218 25.0075 12.2147C25.2655 12.1075 25.5421 12.0522 25.8215 12.052C26.1009 12.0518 26.3775 12.1067 26.6357 12.2135C26.8938 12.3203 27.1284 12.477 27.3259 12.6745C27.5235 12.8721 27.6801 13.1066 27.787 13.3648C27.8938 13.6229 27.9487 13.8996 27.9485 14.179C27.9482 14.4584 27.893 14.735 27.7858 14.993C27.6786 15.251 27.5216 15.4853 27.3237 15.6826Z" fill="white"/>
                <defs>
                    <linearGradient id="paint0_linear_308_2531" x1="20" y1="-2.34368e-07" x2="35.7282" y2="79.0291" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F3673E"/>
                        <stop offset="1" stop-color="#FFB6A0"/>
                    </linearGradient>
                </defs>
            </svg>
        </EditButton>
    </Container>
}

interface ModalWrapper extends PropsWithChildren {
    onClick(): void
    offSet:number
}

export const ModalWrapper: FC<ModalWrapper> = observer(x => {

    const Wrapper = styled.div`
      overflow: scroll;
      margin-top: ${x.offSet}px;
      background: rgba(0, 0, 0, 0.25);
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      height: 100vh;
      width: 100vw;
    `
    const Container = styled.div`
      position: relative;
      display: flex;
      width: 600px;
      padding: 40px 0px 30px 0px;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      height: max-content;
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
    `


    const CloseButton = styled.button`
      border: none;
      background: none;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    `

    return <Wrapper>
        <Container>
            <CloseButton onClick={x.onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15.2285 14.2487C15.375 14.1024 15.5735 14.0202 15.7806 14.0202C15.9876 14.0202 16.1862 14.1024 16.3326 14.2487L22.0306 19.9466L27.7285 14.2487C27.8 14.1719 27.8863 14.1103 27.9821 14.0676C28.0779 14.0249 28.1814 14.002 28.2863 14.0001C28.3912 13.9983 28.4954 14.0176 28.5926 14.0569C28.6899 14.0962 28.7783 14.1546 28.8525 14.2288C28.9267 14.303 28.9851 14.3914 29.0244 14.4887C29.0637 14.5859 29.083 14.6901 29.0812 14.795C29.0793 14.8999 29.0564 15.0034 29.0137 15.0992C28.971 15.195 28.9094 15.2813 28.8326 15.3528L23.1347 21.0507L28.8326 26.7487C28.9094 26.8202 28.971 26.9064 29.0137 27.0023C29.0564 27.0981 29.0793 27.2015 29.0812 27.3064C29.083 27.4113 29.0637 27.5155 29.0244 27.6128C28.9851 27.7101 28.9267 27.7985 28.8525 27.8727C28.7783 27.9468 28.6899 28.0053 28.5926 28.0446C28.4954 28.0839 28.3912 28.1032 28.2863 28.1014C28.1814 28.0995 28.0779 28.0765 27.9821 28.0338C27.8863 27.9911 27.8 27.9296 27.7285 27.8528L22.0306 22.1549L16.3326 27.8528C16.1845 27.9908 15.9887 28.066 15.7863 28.0624C15.5839 28.0588 15.3908 27.9768 15.2476 27.8337C15.1045 27.6905 15.0225 27.4974 15.0189 27.295C15.0154 27.0926 15.0905 26.8968 15.2285 26.7487L20.9264 21.0507L15.2285 15.3528C15.0822 15.2063 15 15.0078 15 14.8007C15 14.5937 15.0822 14.3951 15.2285 14.2487Z"
                          fill="#505050"/>
                </svg>
            </CloseButton>
            {x.children}
        </Container>
    </Wrapper>
})
