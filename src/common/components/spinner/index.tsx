import { Bars } from "react-loader-spinner";

const Spinner = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#F3693F"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      visible={true}
    />
  );
};

export { Spinner };
