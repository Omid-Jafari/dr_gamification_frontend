import { forwardRef, useImperativeHandle, useState } from "react";
import WheelOfFortuneComp from "./wheelOfFortuneComp";

const WheelSpinnerModal = (
  { congratsRefOpen }: { congratsRefOpen: any },
  ref: any
) => {
  const [open, setOpen] = useState(false);
  const [whichQuest, setWhichQuest] = useState("");

  useImperativeHandle(ref, () => ({
    openModal({ whichQuest }: { whichQuest: string }) {
      setOpen(true);
      setWhichQuest(whichQuest);
      console.log("afasdfsdfsd", whichQuest);
    },
  }));

  return (
    <div
      className={`absolute top-0 left-0 w-full h-[100vh] z-20 overflow-hidden transition-all duration-[1s]  animate__animated ${
        open
          ? "bg-[#57959ba7] max-h-[10000px] animate__fadeInDownBig"
          : "bg-[#57959b00] max-h-0 animate__fadeOutUpBig"
      }`}
    >
      <img
        src="/spinner/rouletteBG.png"
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full"
        alt=""
      />
      <div
        className={`w-full h-[100vh] flex flex-col items-center justify-start gap-44 absolute top-[19%] ${
          open ? "" : ""
        }`}
      >
        <WheelOfFortuneComp
          whichQuest={whichQuest}
          congratsRefOpen={congratsRefOpen}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
};

export default forwardRef(WheelSpinnerModal);
