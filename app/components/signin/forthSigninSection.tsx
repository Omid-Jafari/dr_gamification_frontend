import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Loading from "../common/loading";

const ForthSigninSection = (props: {
  handleModal: any;
  isLoading: Boolean;
}) => {
  const { handleModal, isLoading } = props;
  const [policeMale, setPoliceMale] = useState(1);
  console.log("isLoading", isLoading);
  return (
    <form
      key="secondSigninChapterKey"
      className="w-[80%] flex-col flex gap-[10px]"
    >
      <fieldset className="w-full flex justify-center items-center gap-[10px]">
        <button
          type="button"
          onClick={() => setPoliceMale(1)}
          className="flex flex-col items-center justify-center gap-2"
        >
          <img src="/PoliceMan.png" className="w-full " alt="" />
          {policeMale ? (
            <img src="/Tick.png" className="max-w-[40px]" alt="" />
          ) : (
            <img src="/Untick.png" className="max-w-[40px]" alt="" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setPoliceMale(0)}
          className="flex flex-col items-center justify-center gap-2"
        >
          <img src="/policeWoman.png" className="w-full " alt="" />
          {!policeMale ? (
            <img src="/Tick.png" className="max-w-[40px]" alt="" />
          ) : (
            <img src="/Untick.png" className="max-w-[40px]" alt="" />
          )}
        </button>
      </fieldset>
      <button
        type="button"
        onClick={() => handleModal({ policeMale }, true)}
        className="form_btn shadow-light flex items-center justify-center gap-1 w-full"
      >
        {isLoading ? <Loading /> : "شروع بازی"}
      </button>
    </form>
  );
};

export default ForthSigninSection;
