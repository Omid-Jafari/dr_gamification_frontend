"use client";

import "animate.css";

const QuestionModalContainer = ({
  open = false,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`absolute left-0 top-0 w-full h-[100vh] z-20 px-2 overflow-hidden transition-all duration-[1s] ${
        open ? "bg-[#57959ba7] max-h-[10000px]" : "bg-[#57959b00] max-h-0"
      }`}
    >
      <div
        className={`bg-[url(/biggerModalBG.png)] w-full h-[100vh] bg-no-repeat animate__animated bg-top bg-[length:99%_90%] sm:bg-[length:95%_90%] ${
          open ? "animate__fadeInDownBig" : "animate__fadeOutUpBig"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default QuestionModalContainer;
