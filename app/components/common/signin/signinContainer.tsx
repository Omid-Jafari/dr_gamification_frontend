"use client";

import { RootState } from "@/app/redux/store";
import ModalContainer from "../modalContainer";
import { useSelector, useDispatch } from "react-redux";
import { assignUser } from "@/app/redux/user";
import { useFormik } from "formik";
import * as Yup from "yup";

const SigninContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const handleModal = () => {
    dispatch(
      assignUser({
        user: {
          id: 84884,
          name: "samad",
          phoneNumber: 546544,
          score: 45,
          friends: [],
        },
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
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

    onSubmit: (data) => {},
  });
  return (
    <ModalContainer open={user.id === 0}>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <form className="w-[80%]">
          <input
            className="bg-[#fff] items-center flex gap-2 outline-none w-full h-[50px] px-4 placeholder:text-[#93999D] rounded-[32px] shadow-light"
            placeholder="شماره همراه"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className="text-red-600 w-full text-sm px-3 py-2">
              {formik.errors.phoneNumber}
            </div>
          )}
          <button type="button" onClick={handleModal}>
            handle
          </button>
        </form>
      </div>
    </ModalContainer>
  );
};

export default SigninContainer;
