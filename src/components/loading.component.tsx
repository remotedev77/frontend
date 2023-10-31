import { ThreeDots } from "react-loader-spinner";

export const Loading = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#F3673E"
      ariaLabel="three-dots-loading"
      wrapperClass="position-center"
      visible={true}
    />
  );
};
