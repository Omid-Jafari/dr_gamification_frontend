"use client";

const ModalContainer = ({
  open = false,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-[100vh] z-20 px-2 overflow-hidden transition-all

      duration-700 ${
        open ? "bg-[#57959ba7] max-h-[10000px]" : "bg-[#57959b00] max-h-0"
      }`}
    >
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
