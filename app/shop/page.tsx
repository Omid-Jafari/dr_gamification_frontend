"use client";

import { useRef } from "react";
import QuestionModal from "../components/common/questionModal";
import {
  fifthQuest,
  forthQuest,
  fristQuest,
  secondQuest,
  seventhQuest,
  sixthQuest,
  thirdQuest,
} from "../constant/questions/shop";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ConfirmModal from "../components/common/confirmModal";
import GuideModal from "../components/common/guideModal";
import WheelSpinnerModal from "../components/common/wheelSpinnerModal";
import CongratsModal from "../components/common/congratsModal";

const Shop = () => {
  const guideRef: any = useRef(null);
  const confirmRef: any = useRef(null);
  const wheelRef: any = useRef(null);
  const fristQuestRef: any = useRef(null);
  const secondQuestRef: any = useRef(null);
  const thirdQuestRef: any = useRef(null);
  const forthQuestRef: any = useRef(null);
  const fifthQuestRef: any = useRef(null);
  const sixthQuestRef: any = useRef(null);
  const seventhQuestRef: any = useRef(null);
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
  const openFifthQuestRef = () => {
    fifthQuestRef.current && fifthQuestRef.current.openModal();
  };
  const openSixthQuestRef = () => {
    sixthQuestRef.current && sixthQuestRef.current.openModal();
  };
  const openSeventhQuestRef = () => {
    seventhQuestRef.current && seventhQuestRef.current.openModal();
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
    <div className=" w-full h-[100vh] bg-[url(/shop/shop.jpg)] bg-no-repeat sm:bg-[length:auto_100%] bg-[length:100%_100%]">
      <CongratsModal ref={congratsRef} />
      <ConfirmModal ref={confirmRef} openWheelRef={openWheelRef} />
      <GuideModal ref={guideRef} />
      <WheelSpinnerModal congratsRefOpen={congratsRefOpen} ref={wheelRef} />
      {checkAnswered("shopFirstQuest") && (
        <>
          <QuestionModal
            question={fristQuest}
            whichQuest={"shopFirstQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={fristQuestRef}
          />
          <button
            type="button"
            onClick={openFristQuestRef}
            className="absolute bottom-[7%] w-[20%] left-[53%]"
          >
            <img
              src="/homeIcons/shop.png"
              alt="shop icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
      {checkAnswered("shopSecondQuest") && (
        <>
          <QuestionModal
            question={secondQuest}
            whichQuest={"shopSecondQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={secondQuestRef}
          />
          <button
            type="button"
            onClick={openSecondQuestRef}
            className="absolute bottom-[8%] w-[20%] right-[15%]"
          >
            <img
              src="/homeIcons/shop.png"
              alt="shop icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
      {checkAnswered("shopThirdQuest") && (
        <>
          <QuestionModal
            question={thirdQuest}
            whichQuest={"shopThirdQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={thirdQuestRef}
          />
          <button
            type="button"
            onClick={openThirdQuestRef}
            className="absolute bottom-[11%] w-[20%] left-[14%]"
          >
            <img
              src="/homeIcons/shop.png"
              alt="shop icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
      {checkAnswered("shopForthQuest") && (
        <>
          <QuestionModal
            question={forthQuest}
            whichQuest={"shopForthQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={forthQuestRef}
          />
          <button
            type="button"
            onClick={openForthQuestRef}
            className="absolute bottom-[10%] w-[20%] left-[37%]"
          >
            <img
              src="/homeIcons/shop.png"
              alt="shop icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
      {checkAnswered("shopFifthQuest") && (
        <>
          <QuestionModal
            question={fifthQuest}
            whichQuest={"shopFifthQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={fifthQuestRef}
          />
          <button
            type="button"
            onClick={openFifthQuestRef}
            className="absolute bottom-[17%] w-[20%] left-[44%]"
          >
            <img
              src="/homeIcons/shop.png"
              alt="shop icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
      {checkAnswered("shopSixthQuest") && (
        <>
          <QuestionModal
            question={sixthQuest}
            whichQuest={"shopSixthQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={sixthQuestRef}
          />
          <button
            type="button"
            onClick={openSixthQuestRef}
            className="absolute bottom-[18%] w-[20%] right-[2%]"
          >
            <img
              src="/homeIcons/shop.png"
              alt="shop icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
      {checkAnswered("shopSeventhQuest") && (
        <>
          <QuestionModal
            question={seventhQuest}
            whichQuest={"shopSeventhQuest"}
            openConfirmRef={openConfirmRef}
            openGuideRef={openGuideRef}
            ref={seventhQuestRef}
          />
          <button
            type="button"
            onClick={openSeventhQuestRef}
            className="absolute bottom-[20%] w-[20%] left-[26%]"
          >
            <img
              src="/homeIcons/shop.png"
              alt="shop icon"
              className="w-full h-auto animate-prjj"
            />
          </button>
        </>
      )}
    </div>
  );
};

export default Shop;
