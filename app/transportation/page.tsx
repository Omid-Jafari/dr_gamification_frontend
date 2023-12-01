"use client";

import { useRef } from "react";
import QuestionModal from "../components/common/questionModal";
import {
  forthQuest,
  fristQuest,
  secondQuest,
  thirdQuest,
} from "../constant/questions/transportation";
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
  const secondQuestRef: any = useRef(null);
  const thirdQuestRef: any = useRef(null);
  const forthQuestRef: any = useRef(null);
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
  const openSecondQuestRef = () => {
    secondQuestRef.current && secondQuestRef.current.openModal();
  };
  const openThirdQuestRef = () => {
    thirdQuestRef.current && thirdQuestRef.current.openModal();
  };
  const openForthQuestRef = () => {
    forthQuestRef.current && forthQuestRef.current.openModal();
  };
  const { user } = useSelector((state: RootState) => state.user);

  const checkAnswered = (questParam: string) => {
    const isQuestion = user.questions.findIndex(
      (quest) => quest.name === questParam
    );
    if (isQuestion === -1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className=" w-full h-[100dvh] bg-[url(/transportation/transportation.jpg)] bg-no-repeat sm:bg-[length:auto_100%] bg-[length:100%_100%]">
      <CongratsModal ref={congratsRef} />
      <ConfirmModal ref={confirmRef} openWheelRef={openWheelRef} />
      <GuideModal ref={guideRef} />
      <WheelSpinnerModal congratsRefOpen={congratsRefOpen} ref={wheelRef} />
      {checkAnswered("transFirstQuest") && (
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
            className="absolute bottom-[3%] w-[20%] left-[56%]"
          >
            <img
              src="/homeIcons/transportation.png"
              alt="transportation icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
      {checkAnswered("transSecondQuest") && (
        <>
          <QuestionModal
            question={secondQuest}
            whichQuest={"transSecondQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={secondQuestRef}
          />
          <button
            type="button"
            onClick={openSecondQuestRef}
            className="absolute top-[56%] w-[20%] left-[3%]"
          >
            <img
              src="/homeIcons/transportation.png"
              alt="transportation icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
      {checkAnswered("transThirdQuest") && (
        <>
          <QuestionModal
            question={thirdQuest}
            whichQuest={"transThirdQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={thirdQuestRef}
          />
          <button
            type="button"
            onClick={openThirdQuestRef}
            className="absolute bottom-[11%] w-[20%] left-[44%]"
          >
            <img
              src="/homeIcons/transportation.png"
              alt="transportation icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
      {checkAnswered("transForthQuest") && (
        <>
          <QuestionModal
            question={forthQuest}
            whichQuest={"transForthQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={forthQuestRef}
          />
          <button
            type="button"
            onClick={openForthQuestRef}
            className="absolute top-[56%] w-[20%] left-[30%]"
          >
            <img
              src="/homeIcons/transportation.png"
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
