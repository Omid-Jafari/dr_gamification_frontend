import Image from "next/image";
import { useState } from "react";

const FirstQuest = ({
  open,
  user,
  handleNextModal,
}: {
  open: boolean;
  user: any;
  handleNextModal: any;
}) => {
  const [openSection, setOpenSection] = useState(open);
  const closeSection = () => {
    setOpenSection(false);
    handleNextModal({});
  };

  return (
    <div
      className={`relative bg-[url(/common/biggerModalBG.png)] w-full h-[100vh] bg-no-repeat bg-top bg-[length:99%_90%] sm:bg-[length:95%_90%] flex flex-col items-center justify-center animate__animated ${
        openSection ? "animate__fadeInDownBig" : "animate__fadeOutUpBig"
      }`}
    >
      <div className="flex flex-col w-4/5 gap-3">
        <p className="font-medium">شماره موبایلتو برام مینویسی!</p>
        <span className="">می‌خوام بعدا تو قرعه‌کشی جایزه‌ها تو هم باشی.</span>
        <img src="/questionnaire/firstQuest.png" className="w-full" alt="" />
        <input
          className="bg-[#fff] outline-none w-full h-[50px] px-4 placeholder:text-[#93999D] rounded-[32px] shadow-light"
          name="phoneNumber"
          disabled
          value={`0${user.phoneNumber}`}
        />
        <button
          type="button"
          onClick={closeSection}
          className="form_btn shadow-light flex items-center justify-center gap-1"
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export default FirstQuest;
