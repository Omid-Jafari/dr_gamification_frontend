import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const FirstSigninSection = (props: any) => {
  const { backAction, open, creatingUser, handleModal } = props;
  const [openSection, setOpenSection] = useState(open);
  const formik = useFormik({
    initialValues: {
      name: creatingUser?.name || "",
      phoneNumber: creatingUser?.phoneNumber || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("لطفا نام را وارد کنید"),
      phoneNumber: Yup.string()
        .required("لطفا شماره موبایل را وارد کنید")
        .matches(
          /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/,
          "الگوی شماره موبایل وارد شده اشتباه می باشد. شماره موبایل باید 11 رقمی باشد و با 09 یا +98 شروع شود"
        ),
    }),

    onSubmit: (data) => {
      handleModal(data);
      setOpenSection(false);
    },
  });
  const checkForAnimation = () => {
    if (openSection && !backAction) {
      return "";
    } else if (openSection && backAction) {
      return "animate__bounceInLeft";
    } else if (!openSection && !backAction) {
      return "animate__bounceOutLeft";
    } else {
      return "animate__bounceOutRight";
    }
  };

  return (
    <form
      key="FirstSigninChapterKey"
      className={`w-[80%] flex flex-col gap-[15px] animate__animated ${checkForAnimation()}`}
    >
      <fieldset className="relative">
        <input
          className="bg-[#fff] outline-none w-full h-[50px] px-4 placeholder:text-[#93999D] rounded-[32px] shadow-light indent-10"
          placeholder="شماره همراه"
          name="phoneNumber"
          onChange={(e) =>
            formik.setFieldValue(
              "phoneNumber",
              e.target.value.replace(/[۰-۹]/g, (d: any) =>
                "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()
              )
            )
          }
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        <img
          src="/signin/PhoneIcon.png"
          className="absolute top-0 right-0 h-[50px]"
          alt=""
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
          <div className="text-red-600 w-full text-sm px-3 py-2 animate__animated animate__headShake">
            {formik.errors.phoneNumber as string}
          </div>
        )}
      </fieldset>
      <fieldset className="relative">
        <input
          className="bg-[#fff] outline-none w-full h-[50px] px-4 placeholder:text-[#93999D] rounded-[32px] shadow-light indent-10"
          placeholder="نام"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <img
          src="/signin/PersonIcon.png"
          className="absolute top-0 right-0 h-[50px]"
          alt=""
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-red-600 w-full text-sm px-3 py-2 animate__animated animate__headShake">
            {formik.errors.name as string}
          </div>
        )}
      </fieldset>
      <button
        type="button"
        onClick={() => formik.handleSubmit()}
        className="form_btn shadow-light flex items-center justify-center gap-1"
      >
        بعدی
      </button>
    </form>
  );
};

export default FirstSigninSection;
