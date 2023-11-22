import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import GuideModal from "./guideModal";
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
      className={`absolute top-0 left-0 w-full h-[100vh] z-30 overflow-hidden transition-all duration-[1s] ${
        open ? "bg-[#57959ba7] max-h-[10000px]" : "bg-[#57959b00] max-h-0"
      }`}
    >
      <FactModal setCongratsOpen={setOpen} ref={factRef} />
      <div
        className={`w-full h-[100vh] flex flex-col items-center justify-center gap-20 animate__animated bg-center bg-no-repeat bg-full bg-[url(/spinner/congrats.jpg)] ${
          open ? "animate__fadeIn" : "animate__fadeOut"
        }`}
      >
        {data?.score >= 0 ? (
          <img className="max-w-[70%]" src="/congrats/congrats.png" alt="" />
        ) : (
          <img
            className="max-w-[70%]"
            src="/congrats/antiCongrats.png"
            alt=""
          />
        )}
        <img className="max-w-[26%]" src="/congrats/coin.png" alt="" />
        <p dir="ltr" className="text-white font-bold text-6xl">
          {data?.score}
        </p>
      </div>
    </div>
  );
};

export default forwardRef(CongratsModal);
