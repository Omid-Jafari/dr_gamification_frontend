import { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useMutation } from "react-query";
import { updateUser } from "@/app/api/ApiClient";
import { updateUserScore } from "@/app/redux/user";
import Loading from "./loading";
import GuideModalContainer from "./guideModalContainer";

const GuideModal = (props: any, ref: any) => {
  const [open, setOpen] = useState(false);
  const [guidetxt, setGuidetxt] = useState<any>();

  useImperativeHandle(ref, () => ({
    openModal(body: any) {
      setOpen(true);
      setGuidetxt(body);
    },
  }));

  return (
    <GuideModalContainer open={open}>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <button
          type="button"
          className="absolute top-[33%] sm:top-[29%] right-[0%]"
          onClick={() => setOpen(false)}
        >
          <img
            className="w-10 h-10 sm:w-12 sm:h-12"
            src="/questions/close.png"
            alt=""
          />
        </button>
        <div className={`w-[80%] max-h-[80%] text-center `}>{guidetxt}</div>
      </div>
    </GuideModalContainer>
  );
};

export default forwardRef(GuideModal);
