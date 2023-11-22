import { useFormik } from "formik";
import * as Yup from "yup";

const SecondSigninSection = (props: any) => {
  const { creatingUser, handleModal, handleBackModal } = props;
  const formik = useFormik({
    initialValues: {
      avatar:
        creatingUser?.friends?.length > 0
          ? [
              creatingUser?.friends[0]?.avatarSrc,
              creatingUser?.friends[1]?.avatarSrc,
              creatingUser?.friends[2]?.avatarSrc,
            ]
          : [],
    },
    validationSchema: Yup.object({
      avatar: Yup.array().length(3, "لطفا سه تصویر انتخاب کنید"),
    }),
    onSubmit: (data) => {
      handleModal(
        creatingUser?.friends !== undefined
          ? {
              friends: [
                {
                  name: creatingUser?.friends[0]?.name || "",
                  avatarSrc: data.avatar[0],
                },
                {
                  name: creatingUser?.friends[1]?.name || "",
                  avatarSrc: data.avatar[1],
                },
                {
                  name: creatingUser?.friends[2]?.name || "",
                  avatarSrc: data.avatar[2],
                },
              ],
            }
          : {
              friends: [
                {
                  name: "",
                  avatarSrc: data.avatar[0],
                },
                {
                  name: "",
                  avatarSrc: data.avatar[1],
                },
                {
                  name: "",
                  avatarSrc: data.avatar[2],
                },
              ],
            }
      );
    },
  });
  const toggleImage = (src: string) => {
    const imageSrc = formik.values.avatar.findIndex((aSrc) => aSrc === src);
    if (imageSrc === -1) {
      formik.values.avatar.length <= 2 &&
        formik.setFieldValue("avatar", [...formik.values.avatar, src]);
    } else {
      formik.setFieldValue("avatar", [
        ...formik.values.avatar.slice(0, imageSrc),
        ...formik.values.avatar.slice(imageSrc + 1),
      ]);
    }
  };

  return (
    <form
      key="secondSigninChapterKey"
      className={`w-[84%] flex flex-col gap-[10px] mt-[-32%] sm:mt-0`}
    >
      <p className="text-sm">سه تا از تصاویر رو انتخاب کن:</p>
      <div className="flex flex-wrap justify-center items-center">
        <button
          type="button"
          className="w-1/3 flex flex-col justify-center items-center p-2 gap-2"
          onClick={() => toggleImage("/fAvatars/fBoy.png")}
        >
          <img
            className="max-w-[90px] sm:max-w-none"
            src="/fAvatars/fBoy.png"
            alt=""
          />
          {formik.values.avatar.findIndex(
            (aSrc) => aSrc === "/fAvatars/fBoy.png"
          ) === -1 ? (
            <img
              src="/signin/Untick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          ) : (
            <img
              src="/signin/Tick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          )}
        </button>
        <button
          type="button"
          className="w-1/3 flex flex-col justify-center items-center p-2 gap-2"
          onClick={() => toggleImage("/fAvatars/sBoy.png")}
        >
          <img
            className="max-w-[90px] sm:max-w-none"
            src="/fAvatars/sBoy.png"
            alt=""
          />
          {formik.values.avatar.findIndex(
            (aSrc) => aSrc === "/fAvatars/sBoy.png"
          ) === -1 ? (
            <img
              src="/signin/Untick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          ) : (
            <img
              src="/signin/Tick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          )}
        </button>
        <button
          type="button"
          className="w-1/3 flex flex-col justify-center items-center p-2 gap-2"
          onClick={() => toggleImage("/fAvatars/tBoy.png")}
        >
          <img
            className="max-w-[90px] sm:max-w-none"
            src="/fAvatars/tBoy.png"
            alt=""
          />
          {formik.values.avatar.findIndex(
            (aSrc) => aSrc === "/fAvatars/tBoy.png"
          ) === -1 ? (
            <img
              src="/signin/Untick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          ) : (
            <img
              src="/signin/Tick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          )}
        </button>
        <button
          type="button"
          className="w-1/3 flex flex-col justify-center items-center p-2 gap-2"
          onClick={() => toggleImage("/fAvatars/fGirl.png")}
        >
          <img
            className="max-w-[90px] sm:max-w-none"
            src="/fAvatars/fGirl.png"
            alt=""
          />
          {formik.values.avatar.findIndex(
            (aSrc) => aSrc === "/fAvatars/fGirl.png"
          ) === -1 ? (
            <img
              src="/signin/Untick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          ) : (
            <img
              src="/signin/Tick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          )}
        </button>
        <button
          type="button"
          className="w-1/3 flex flex-col justify-center items-center p-2 gap-2"
          onClick={() => toggleImage("/fAvatars/sGirl.png")}
        >
          <img
            className="max-w-[90px] sm:max-w-none"
            src="/fAvatars/sGirl.png"
            alt=""
          />
          {formik.values.avatar.findIndex(
            (aSrc) => aSrc === "/fAvatars/sGirl.png"
          ) === -1 ? (
            <img
              src="/signin/Untick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          ) : (
            <img
              src="/signin/Tick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          )}
        </button>
        <button
          type="button"
          className="w-1/3 flex flex-col justify-center items-center p-2 gap-2"
          onClick={() => toggleImage("/fAvatars/tGirl.png")}
        >
          <img
            className="max-w-[90px] sm:max-w-none"
            src="/fAvatars/tGirl.png"
            alt=""
          />
          {formik.values.avatar.findIndex(
            (aSrc) => aSrc === "/fAvatars/tGirl.png"
          ) === -1 ? (
            <img
              src="/signin/Untick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          ) : (
            <img
              src="/signin/Tick.png"
              className="max-w-[35px] sm:max-w-[40px]"
              alt=""
            />
          )}
        </button>
      </div>
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
      {formik.errors.avatar && formik.touched.avatar && (
        <div className="text-red-600 w-full text-sm px-3 py-2">
          {formik.errors.avatar as string}
        </div>
      )}
    </form>
  );
};

export default SecondSigninSection;
