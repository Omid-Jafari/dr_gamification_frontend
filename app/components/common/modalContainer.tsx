"use client";

import "animate.css";

const ModalContainer = ({
  open = false,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-[100vh] z-20 px-2 overflow-hidden transition-all ${
        open
          ? "bg-[#57959ba7] max-h-[10000px] duration-[.7s]"
          : "bg-[#57959b00] max-h-0 duration-[1.7s]"
      }`}
    >
      <img
        src="/ModalBlueBg.svg"
        className={`absolute top-0 left-0 w-full h-full animate__animated animate__delay ${
          open
            ? "animate__fadeIn animate__slow"
            : "animate__fadeOut animate__fast"
        }`}
        alt=""
      />
      <div
        className={`bg-[url(/modalBG.png)] bg-contain w-full h-[100vh] bg-no-repeat animate__animated ${
          open ? "animate__fadeInDownBig" : "animate__fadeOutUpBig"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
