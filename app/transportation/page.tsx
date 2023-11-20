"use client";

import { useRef } from "react";
import QuestionModal from "../components/common/questionModal";
import { fristQuest } from "../constant/questions/transportation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ConfirmModal from "../components/common/confirmModal";
import GuideModal from "../components/common/guideModal";
import WheelSpinnerModal from "../components/common/wheelSpinnerModal";
import CongratsModal from "../components/common/congratsModal";

const Transportation = () => {
  const guideRef: any = useRef(null);
  const confirmRef: any = useRef(null);
  const wheelRef: any = useRef(null);
  const fristQuestRef: any = useRef(null);
  const congratsRef: any = useRef(null);
  const congratsRefOpen = (data: {}) => {
    congratsRef.current && congratsRef.current.openModal(data);
  };
  const openGuideRef = (data: string) => {
    guideRef.current && guideRef.current.openModal(data);
  };
  const openConfirmRef = (data: any) => {
    confirmRef.current && confirmRef.current.openModal(data);
  };
  const openWheelRef = (data: any) => {
    wheelRef.current && wheelRef.current.openModal(data);
  };
  const openFristQuestRef = () => {
    fristQuestRef.current && fristQuestRef.current.openModal();
  };
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <div className=" w-full h-[100vh] bg-[url(/transportation/transportation.jpg)] bg-no-repeat sm:bg-[length:auto_100%] bg-[length:100%_100%]">
      <CongratsModal ref={congratsRef} />
      <ConfirmModal ref={confirmRef} openWheelRef={openWheelRef} />
      <GuideModal ref={guideRef} />
      <WheelSpinnerModal congratsRefOpen={congratsRefOpen} ref={wheelRef} />
      {!user.transFirstQuest && (
        <>
          <QuestionModal
            question={fristQuest}
            whichQuest={"transFirstQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={fristQuestRef}
          />
          <button
            type="button"
            onClick={openFristQuestRef}
            className="absolute top-[56%] w-[20%] left-[3%]"
          >
            <img
              src="/transportation.png"
              alt="transportation icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
    </div>
  );
};

export default Transportation;
