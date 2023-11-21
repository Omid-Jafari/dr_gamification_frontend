import { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useMutation } from "react-query";
import { updateUser } from "@/app/api/ApiClient";
import ConfirmModalContainer from "./confirmModalContainer";
import { updateUserScore } from "@/app/redux/user";
import Loading from "./loading";

const ConfirmModal = ({ openWheelRef }: { openWheelRef: any }, ref: any) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [confirmBody, setConfirmBody] = useState<any>();
  const [whichQuest, setWhichQuest] = useState("");
  const { user } = useSelector((state: RootState) => state.user);

  const updateUserMutation = useMutation({
    mutationKey: ["updateUserMutation"],
    mutationFn: updateUser,
    onSuccess: () => {
      dispatch(
        updateUserScore({
          ...confirmBody,
          score: user.score + confirmBody.score,
        })
      );
      setOpen(false);
    },
    onError: () => {},
  });
  useImperativeHandle(ref, () => ({
    openModal(body: any) {
      setOpen(true);
      setConfirmBody(body.confirmBody);
      setWhichQuest(body.whichQuest);
    },
  }));

  return (
    <ConfirmModalContainer open={open}>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div
          className={`w-[80%] max-h-[80%] overflow-auto flex flex-col gap-[20px] `}
        >
          {confirmBody?.score > 0 ? (
            <p className="pb-3 text-center">
              جوابت درست بود <br /> دوست داری چی جایزه بگیری؟
            </p>
          ) : (
            <p className="pb-3 text-center">
              جوابت اشتباه بود <br />
              ازت امتیاز کم کنیم یا شانستو امتحان میکنی؟
            </p>
          )}

          <div className="flex items-center gap-2 py-2">
            <button
              type="button"
              onClick={() =>
                updateUserMutation.mutate({
                  _id: user._id,
                  body: {
                    ...confirmBody,
                    score: user.score + confirmBody.score,
                  },
                })
              }
              className="form_btn shadow-light flex items-center justify-center gap-1 flex-grow"
            >
              {updateUserMutation.isLoading ? (
                <Loading />
              ) : (
                `${confirmBody?.score} سکه`
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                openWheelRef({
                  whichQuest: whichQuest,
                  fortune: confirmBody?.score > 0,
                });
                setOpen(false);
                console.log("whichQuest", whichQuest);
              }}
              className="form_btn shadow-light flex items-center justify-center gap-1 flex-grow"
            >
              یک دور چرخونک
            </button>
          </div>
        </div>
      </div>
    </ConfirmModalContainer>
  );
};

export default forwardRef(ConfirmModal);
