import { forwardRef, useImperativeHandle, useState } from "react";
import FactModalContainer from "./factModalContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const FactModal = ({ setCongratsOpen }: any, ref: any) => {
  const [open, setOpen] = useState(false);
  const [factBody, setFactBody] = useState<any>();
  const { user } = useSelector((state: RootState) => state.user);

  useImperativeHandle(ref, () => ({
    openModal(body: any) {
      setOpen(true);
      setFactBody(body);
    },
  }));

  return (
    <FactModalContainer open={open}>
      <div className="w-full h-[100dvh] flex justify-center items-center">
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
            src="/questions/close.svg"
            alt=""
          />
        </button>
        <div className="flex w-4/5 flex-col justify-center items-center gap-5">
          <img src={factBody?.imgSrc} alt="" />
          <div
            className={`sm:w-[80%] w-[90%] text-sm sm:text-base max-h-[80%] text-center `}
          >
            {factBody?.txt}
          </div>
        </div>
        <div className="absolute bottom-0 sm:right-0 right-0 pointer-events-none">
          {user.policeMale ? (
            <img
              className="w-auto h-36 sm:h-48"
              src="/questions/malPolice.png"
              alt=""
            />
          ) : (
            <img
              className="w-auto h-36 sm:h-48"
              src="/questions/femPolice.png"
              alt=""
            />
          )}
        </div>
      </div>
    </FactModalContainer>
  );
};

export default forwardRef(FactModal);
