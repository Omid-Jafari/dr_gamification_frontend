import { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useMutation } from "react-query";
import { updateUser } from "@/app/api/ApiClient";
import { updateUserScore } from "@/app/redux/user";
import GuideModalContainer from "./guideModalContainer";

const GuideModal = (props: any, ref: any) => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [guidetxt, setGuidetxt] = useState<any>();
  const updateUserMutation = useMutation({
    mutationKey: ["updateUserMutation"],
    mutationFn: updateUser,
    onSuccess: () => {
      dispatch(updateUserScore({ score: user.score - 85 }));
    },
    onError: () => {},
  });

  useImperativeHandle(ref, () => ({
    openModal(body: any) {
      setOpen(true);
      setGuidetxt(body);
      updateUserMutation.mutate({
        _id: user._id,
        body: { score: user.score - 85 },
      });
    },
  }));

  return (
    <GuideModalContainer open={open}>
      <div className="w-full h-[100dvh] flex justify-center items-center">
        <button
          type="button"
          className="absolute top-[33%] sm:top-[29%] right-[0%]"
          onClick={() => setOpen(false)}
        >
          <img
            className="w-10 h-10 sm:w-12 sm:h-12"
            src="/questions/close.svg"
            alt=""
          />
        </button>
        <div
          className={`sm:w-[80%] w-[90%] text-sm sm:text-base max-h-[80%] text-center `}
        >
          {guidetxt}
        </div>
      </div>
    </GuideModalContainer>
  );
};

export default forwardRef(GuideModal);
