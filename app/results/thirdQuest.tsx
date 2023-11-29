import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ThirdQuest = ({
  open,
  handleAgeAndGender,
  ageAndGender,
  handleBackModal,
}: {
  open: boolean;
  handleAgeAndGender: any;
  ageAndGender: any;
  handleBackModal: any;
}) => {
  const [openSection, setOpenSection] = useState(open);
  const closeSection = (data: any) => {
    setOpenSection(false);
    handleAgeAndGender(data);
  };
  const formik = useFormik({
    initialValues: {
      gender: ageAndGender?.gender || null,
      age: ageAndGender?.age || null,
    },
    validationSchema: Yup.object({
      gender: Yup.number().required("لطفا جنسیت را وارد کنید"),
      age: Yup.number().required("لطفا گروه سنی را وارد کنید"),
    }),

    onSubmit: (data) => {
      closeSection(data);
    },
  });

  return (
    <div
      className={`relative bg-[url(/common/biggerModalBG.png)] w-full h-[100dvh] bg-no-repeat bg-top bg-[length:99%_90%] sm:bg-[length:95%_90%] flex flex-col items-center justify-center animate__animated ${
        openSection ? "animate__fadeInDownBig" : "animate__fadeOutUpBig"
      }`}
    >
      <form className="flex flex-col w-4/5 gap-8">
        <div className="flex flex-col gap-4">
          <p className="">لطفا جنسیت خودت رو مشخص کن:</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => formik.setFieldValue("gender", 1)}
              className={`p-2 rounded-[32px] shadow-light border transition-all ${
                formik.values.gender === 1
                  ? "bg-[#C7EAEF] border-[#43B9C9]"
                  : "bg-white border-white"
              }`}
            >
              پسر
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldValue("gender", 0)}
              className={`p-2 rounded-[32px] shadow-light border transition-all ${
                formik.values.gender === 0
                  ? "bg-[#C7EAEF] border-[#43B9C9]"
                  : "bg-white border-white"
              }`}
            >
              دختر
            </button>
          </div>
          {formik.errors.gender && formik.touched.gender && (
            <div className="text-red-600 w-full text-sm px-3 py-2">
              {formik.errors.gender as string}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <p className="">در کدام گروه سنی قرار داری؟</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => formik.setFieldValue("age", 0)}
              className={`p-2 rounded-[32px] shadow-light border transition-all ${
                formik.values.age === 0
                  ? "bg-[#C7EAEF] border-[#43B9C9]"
                  : "bg-white border-white"
              }`}
            >
              زیر 9 سال
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldValue("age", 1)}
              className={`p-2 rounded-[32px] shadow-light border transition-all ${
                formik.values.age === 1
                  ? "bg-[#C7EAEF] border-[#43B9C9]"
                  : "bg-white border-white"
              }`}
            >
              10 تا 12 سال
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldValue("age", 2)}
              className={`p-2 rounded-[32px] shadow-light border transition-all ${
                formik.values.age === 2
                  ? "bg-[#C7EAEF] border-[#43B9C9]"
                  : "bg-white border-white"
              }`}
            >
              بالاتر از 13 سال
            </button>
          </div>
          {formik.errors.age && formik.touched.age && (
            <div className="text-red-600 w-full text-sm px-3 py-2">
              {formik.errors.age as string}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-5">
          <button
            type="button"
            onClick={() => formik.handleSubmit()}
            className="form_btn shadow-light flex items-center justify-center gap-1 flex-grow"
          >
            بعدی
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
    </div>
  );
};

export default ThirdQuest;
