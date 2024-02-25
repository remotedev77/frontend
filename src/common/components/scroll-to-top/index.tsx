import { useEffect, useState } from "react";

import { ArrowUpIcon } from "@radix-ui/react-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <button
      className="fixed grid text-white rounded-full size-10 right-8 place-content-center bottom-8 bg-primary"
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="size-6" />
    </button>
  ) : null;
};

export { ScrollToTop };
