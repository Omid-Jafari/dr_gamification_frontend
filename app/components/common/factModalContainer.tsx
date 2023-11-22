"use client";

import "animate.css";

const FactModalContainer = ({
  open = false,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`absolute left-0 top-0 w-full h-[100vh] z-30 px-2 overflow-hidden transition-all duration-[1s] ${
        open ? "bg-[#57959ba7] max-h-[10000px]" : "bg-[#57959b00] max-h-0"
      }`}
    >
      <div
        className={`bg-[url(/common/confirmBG.png)] w-full h-[100vh] bg-center bg-no-repeat bg-contain animate__animated ${
          open ? "animate__bounceInRight" : "animate__bounceOutLeft"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FactModalContainer;
