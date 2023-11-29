import { useState } from "react";
import Loading from "../common/loading";
import Image from "next/image";

const ForthSigninSection = (props: {
  backAction: boolean;
  open: boolean;
  creatingUser: object | undefined;
  handleModal: any;
  handleBackModal: any;
  isLoading: Boolean;
}) => {
  const {
    backAction,
    open,
    creatingUser,
    handleModal,
    handleBackModal,
    isLoading,
  } = props;
  const [openSection, setOpenSection] = useState(open);
  const [policeMale, setPoliceMale] = useState(1);

  const checkForAnimation = () => {
    if (openSection && !backAction) {
      return "animate__bounceInRight";
    } else if (openSection && backAction) {
      return "animate__bounceInLeft";
    } else if (!openSection && !backAction) {
      return "";
    } else {
      return "animate__bounceOutRight";
    }
  };

  return (
    <form
      key="secondSigninChapterKey"
      className={`w-[80%] flex-col flex gap-[20px] animate__animated ${checkForAnimation()}`}
    >
      <p className="text-sm">عزیزم برای محافظت از شهر کاراکترت رو انتخاب کن:</p>
      <fieldset className="w-full flex justify-center items-center gap-[10px]">
        <button
          type="button"
          onClick={() => setPoliceMale(1)}
          className="flex flex-col items-center justify-center gap-2"
        >
          <img src="/PoliceMan.png" className="w-full " alt="" />
          {policeMale ? (
            <Image width={40} height={40} src="/signin/Tick.png" alt="" />
          ) : (
            <Image width={40} height={40} src="/signin/Untick.png" alt="" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setPoliceMale(0)}
          className="flex flex-col items-center justify-center gap-2"
        >
          <img src="/policeWoman.png" className="w-full " alt="" />
          {!policeMale ? (
            <Image width={40} height={40} src="/signin/Tick.png" alt="" />
          ) : (
            <Image width={40} height={40} src="/signin/Untick.png" alt="" />
          )}
        </button>
      </fieldset>
      <div className="flex justify-center items-center gap-5">
        <button
          type="button"
          onClick={() => {
            handleModal({ policeMale }, true);
            setOpenSection(false);
          }}
          className="form_btn shadow-light flex items-center justify-center flex-grow"
        >
          {isLoading ? <Loading /> : "شروع بازی"}
        </button>
        <button
          type="button"
          onClick={() => {
            setOpenSection(false);
            handleBackModal();
          }}
          className="form_btn_white shadow-light flex items-center justify-center flex-grow"
        >
          قبلی
        </button>
      </div>
    </form>
  );
};

export default ForthSigninSection;
