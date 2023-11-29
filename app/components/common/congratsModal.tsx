import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import FactModal from "./factModal";

const CongratsModal = (props: any, ref: any) => {
  const factRef: any = useRef(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ score: 0, fact: { imgSrc: "", txt: "" } });
  const openFactRef = (data: any) => {
    factRef.current && factRef.current.openModal(data);
  };
  useImperativeHandle(ref, () => ({
    openModal(body: any) {
      setOpen(true);
      setData(body);
      setTimeout(() => {
        openFactRef(body.fact);
      }, 2000);
    },
  }));

  return (
    <div
      className={`absolute top-0 left-0 w-full h-[100dvh] z-30 overflow-hidden transition-all duration-[1s] ${
        open ? "bg-[#57959ba7] max-h-[10000px]" : "bg-[#57959b00] max-h-0"
      }`}
    >
      <FactModal setCongratsOpen={setOpen} ref={factRef} />
      <div
        className={`w-full h-[100dvh] flex flex-col items-center justify-center gap-20 animate__animated bg-center bg-no-repeat bg-full bg-[url(/spinner/congrats.svg)] transition-all duration-[1s] ${
          open
            ? "animate__fadeIn bg-[#57959ba7]"
            : "animate__fadeOut bg-[#57959b00]"
        }`}
      >
        {data?.score == 0 ? (
          <img className="w-[70%]" src="/congrats/nothing.svg" alt="" />
        ) : data?.score >= 0 ? (
          <img className="w-[70%]" src="/congrats/congrats.svg" alt="" />
        ) : (
          <img className="w-[70%]" src="/congrats/antiCongrats.svg" alt="" />
        )}
        <img className="max-w-[26%]" src="/congrats/coin.png" alt="" />
        <p dir="ltr" className="text-white font-bold text-6xl">
          {data?.score == 0 ? "پوچ" : data?.score}
        </p>
      </div>
    </div>
  );
};

export default forwardRef(CongratsModal);
