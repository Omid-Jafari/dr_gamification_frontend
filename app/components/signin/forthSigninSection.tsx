import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Loading from "../common/loading";

const ForthSigninSection = (props: {
  creatingUser: object | undefined;
  handleModal: any;
  handleBackModal: any;
  isLoading: Boolean;
}) => {
  const { creatingUser, handleModal, handleBackModal, isLoading } = props;
  const [policeMale, setPoliceMale] = useState(1);

  return (
    <form
      key="secondSigninChapterKey"
      className="w-[80%] flex-col flex gap-[20px]"
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
            <img src="/signin/Tick.png" className="max-w-[40px]" alt="" />
          ) : (
            <img src="/signin/Untick.png" className="max-w-[40px]" alt="" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setPoliceMale(0)}
          className="flex flex-col items-center justify-center gap-2"
        >
          <img src="/policeWoman.png" className="w-full " alt="" />
          {!policeMale ? (
            <img src="/signin/Tick.png" className="max-w-[40px]" alt="" />
          ) : (
            <img src="/signin/Untick.png" className="max-w-[40px]" alt="" />
          )}
        </button>
      </fieldset>
      <div className="flex justify-center items-center gap-5">
        <button
          type="button"
          onClick={() => handleModal({ policeMale }, true)}
          className="form_btn shadow-light flex items-center justify-center flex-grow"
        >
          {isLoading ? <Loading /> : "شروع بازی"}
        </button>
        <button
          type="button"
          onClick={() => handleBackModal()}
          className="form_btn_white shadow-light flex items-center justify-center flex-grow"
        >
          قبلی
        </button>
      </div>
    </form>
  );
};

export default ForthSigninSection;
