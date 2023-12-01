import { forwardRef, useImperativeHandle, useState } from "react";
import ConfirmModalContainer from "../common/confirmModalContainer";

const SideBarConfirm = ({ logOutFunc }: any, ref: any) => {
  const [open, setOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal(body: any) {
      setOpen(true);
    },
  }));
  return (
    <ConfirmModalContainer open={open}>
      <div className="w-full h-[100dvh] flex justify-center items-center">
        <div
          className={`w-[80%] max-h-[80%] overflow-auto flex flex-col gap-[20px] `}
        >
          <p className="pb-3 text-center">مطمئنی می خوای خارج شی؟</p>

          <div className="flex items-center gap-2 py-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setTimeout(() => {
                  logOutFunc();
                }, 500);
              }}
              className="form_btn shadow-light flex items-center justify-center gap-1 flex-grow"
            >
              آره مطمئنم
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="form_btn_white shadow-light flex items-center justify-center gap-1 flex-grow"
            >
              خارج نمیشم
            </button>
          </div>
        </div>
      </div>
    </ConfirmModalContainer>
  );
};

export default forwardRef(SideBarConfirm);
