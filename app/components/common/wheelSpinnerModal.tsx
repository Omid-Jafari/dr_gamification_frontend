import { forwardRef, useImperativeHandle, useState } from "react";
import dynamic from "next/dynamic";

const WheelOfFortuneComp = dynamic(
  () => import("./wheelOfFortuneComp") as any,
  {
    ssr: false,
  }
);

const WheelSpinnerModal = (
  { congratsRefOpen }: { congratsRefOpen: any },
  ref: any
) => {
  const [open, setOpen] = useState(false);
  const [wheelBody, setWheelBody] = useState({});
  const [fortune, setFortune] = useState(true);

  useImperativeHandle(ref, () => ({
    openModal({ wheelBody, fortune }: { wheelBody: object; fortune: boolean }) {
      setOpen(true);
      setWheelBody(wheelBody);
      setFortune(fortune);
    },
  }));
  const props = {
    wheelBody: wheelBody,
    fortune: fortune,
    congratsRefOpen: congratsRefOpen,
    setOpen: setOpen,
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-[100dvh] z-20 overflow-hidden transition-all duration-[1s]  animate__animated ${
        open
          ? "bg-[#57959ba7] max-h-[10000px] duration-[.7s]"
          : "bg-[#57959b00] max-h-0 duration-[1.7s]"
      }`}
    >
      <img
        src="/common/ModalBlueBg.svg"
        className={`absolute top-0 left-0 w-full h-[100dvh] object-cover animate__animated animate__delay ${
          open
            ? "animate__fadeIn animate__slow"
            : "animate__fadeOut animate__fast"
        }`}
        alt=""
      />
      <div
        className={`w-full h-[100dvh] animate__animated ${
          open ? "animate__fadeInDownBig" : "animate__fadeOutUpBig"
        }`}
      >
        <img
          src="/spinner/rouletteBG.png"
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full"
          alt=""
        />
        <div
          className={`w-full h-[100dvh] flex flex-col items-center justify-start gap-44 absolute top-[19%] ${
            open ? "" : ""
          }`}
        >
          <WheelOfFortuneComp {...(props as any)} />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(WheelSpinnerModal);
