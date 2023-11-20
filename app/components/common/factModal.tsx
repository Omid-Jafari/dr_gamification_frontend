import { forwardRef, useImperativeHandle, useState } from "react";
import FactModalContainer from "./factModalContainer";

const FactModal = ({ setCongratsOpen }: any, ref: any) => {
  const [open, setOpen] = useState(false);
  const [factBody, setFactBody] = useState<any>();

  useImperativeHandle(ref, () => ({
    openModal(body: any) {
      setOpen(true);
      setFactBody(body);
    },
  }));

  return (
    <FactModalContainer open={open}>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <button
          type="button"
          className="absolute top-[33%] sm:top-[29%] right-[0%]"
          onClick={() => {
            setOpen(false);
            setCongratsOpen(false);
          }}
        >
          <img
            className="w-10 h-10 sm:w-12 sm:h-12"
            src="/questions/close.png"
            alt=""
          />
        </button>
        <div className="flex w-4/5 flex-col justify-center items-center gap-5">
          <img src={factBody?.imgSrc} alt="" />
          <div className={`w-[80%] max-h-[80%] text-center `}>
            {factBody?.txt}
          </div>
        </div>
      </div>
    </FactModalContainer>
  );
};

export default forwardRef(FactModal);
