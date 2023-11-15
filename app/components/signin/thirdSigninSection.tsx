import { useFormik } from "formik";
import * as Yup from "yup";

const ThirdSigninSection = (props: any) => {
  const { handleModal } = props;
  const formik = useFormik({
    initialValues: {
      FFriendName: "",
      SFriendName: "",
      TFriendName: "",
    },
    validationSchema: Yup.object({
      FFriendName: Yup.string().required("لطفا نام را وارد کنید"),
      SFriendName: Yup.string().required("لطفا نام را وارد کنید"),
      TFriendName: Yup.string().required("لطفا نام را وارد کنید"),
    }),
    onSubmit: (data) => {
      handleModal({
        friends: [
          { name: data.FFriendName },
          { name: data.SFriendName },
          { name: data.TFriendName },
        ],
      });
    },
  });
  return (
    <form
      key="secondSigninChapterKey"
      className={`w-[80%] flex flex-col gap-[10px] `}
    >
      <p className="text-sm">نام سه تا از دوستات رو بنویس:</p>
      <fieldset className="relative">
        <input
          className="bg-[#fff] outline-none w-full h-[50px] px-4 placeholder:text-[#93999D] rounded-[32px] shadow-light indent-10"
          placeholder="نام"
          name="FFriendName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.FFriendName}
        />
        <img
          src="/PersonIcon.png"
          className="absolute top-0 right-0 h-[50px]"
          alt=""
        />
        {formik.errors.FFriendName && formik.touched.FFriendName && (
          <div className="text-red-600 w-full text-sm px-3 py-2">
            {formik.errors.FFriendName}
          </div>
        )}
      </fieldset>
      <fieldset className="relative">
        <input
          className="bg-[#fff] outline-none w-full h-[50px] px-4 placeholder:text-[#93999D] rounded-[32px] shadow-light indent-10"
          placeholder="نام"
          name="SFriendName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.SFriendName}
        />
        <img
          src="/PersonIcon.png"
          className="absolute top-0 right-0 h-[50px]"
          alt=""
        />
        {formik.errors.SFriendName && formik.touched.SFriendName && (
          <div className="text-red-600 w-full text-sm px-3 py-2">
            {formik.errors.SFriendName}
          </div>
        )}
      </fieldset>
      <fieldset className="relative">
        <input
          className="bg-[#fff] outline-none w-full h-[50px] px-4 placeholder:text-[#93999D] rounded-[32px] shadow-light indent-10"
          placeholder="نام"
          name="TFriendName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.TFriendName}
        />
        <img
          src="/PersonIcon.png"
          className="absolute top-0 right-0 h-[50px]"
          alt=""
        />
        {formik.errors.TFriendName && formik.touched.TFriendName && (
          <div className="text-red-600 w-full text-sm px-3 py-2">
            {formik.errors.TFriendName}
          </div>
        )}
      </fieldset>
      <button
        type="button"
        onClick={(e) => formik.handleSubmit()}
        className="form_btn shadow-light flex items-center justify-center gap-1"
      >
        <img src="/flash.svg" alt="" />
        بعدی
      </button>
    </form>
  );
};

export default ThirdSigninSection;
