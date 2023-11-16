import { useEffect, useState } from "react";

const useOutSideClick = (
  ref: React.MutableRefObject<null | HTMLElement>,
  defaultState: boolean
) => {
  const [isOpen, setIsOpen] = useState(defaultState || false);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event?.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return { isOpen, setIsOpen };
};

export default useOutSideClick;
