import { useFormik } from "formik";
import * as Yup from "yup";

const ThirdSigninSection = (props: any) => {
  const { creatingUser, handleModal, handleBackModal } = props;
  const formik = useFormik({
    initialValues: {
      FFriendName: creatingUser?.friends[0]?.name || "",
      fAvatarSrc: creatingUser?.friends[0]?.avatarSrc || "",
      SFriendName: creatingUser?.friends[1]?.name || "",
      sAvatarSrc: creatingUser?.friends[1]?.avatarSrc || "",
      TFriendName: creatingUser?.friends[2]?.name || "",
      tAvatarSrc: creatingUser?.friends[2]?.avatarSrc || "",
    },
    validationSchema: Yup.object({
      FFriendName: Yup.string().required("لطفا نام را وارد کنید"),
      SFriendName: Yup.string().required("لطفا نام را وارد کنید"),
      TFriendName: Yup.string().required("لطفا نام را وارد کنید"),
    }),
    onSubmit: (data) => {
      handleModal({
        friends: [
          { name: data.FFriendName, avatarSrc: data.fAvatarSrc },
          { name: data.SFriendName, avatarSrc: data.sAvatarSrc },
          { name: data.TFriendName, avatarSrc: data.tAvatarSrc },
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
          src={formik.values.fAvatarSrc}
          className="absolute top-0 right-0 h-[50px]"
          alt=""
        />
        {formik.errors.FFriendName && formik.touched.FFriendName && (
          <div className="text-red-600 w-full text-sm px-3 py-2">
            {formik.errors.FFriendName as string}
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
          src={formik.values.sAvatarSrc}
          className="absolute top-0 right-0 h-[50px]"
          alt=""
        />
        {formik.errors.SFriendName && formik.touched.SFriendName && (
          <div className="text-red-600 w-full text-sm px-3 py-2">
            {formik.errors.SFriendName as string}
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
          src={formik.values.tAvatarSrc}
          className="absolute top-0 right-0 h-[50px]"
          alt=""
        />
        {formik.errors.TFriendName && formik.touched.TFriendName && (
          <div className="text-red-600 w-full text-sm px-3 py-2">
            {formik.errors.TFriendName as string}
          </div>
        )}
      </fieldset>
      <div className="flex justify-center items-center gap-5">
        <button
          type="button"
          onClick={(e) => formik.handleSubmit()}
          className="form_btn shadow-light flex items-center justify-center flex-grow"
        >
          بعدی
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

export default ThirdSigninSection;
