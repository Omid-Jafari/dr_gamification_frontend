import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import QuestionnaireQuest from "./questionnaireQuest";

const QuestionsComp = ({
  open,
  handleNextModal,
  questsAnswers,
  handleBackModal,
  questionnaire,
}: {
  open: boolean;
  handleNextModal: any;
  questsAnswers: any;
  handleBackModal: any;
  questionnaire: { name: string; question: string }[];
}) => {
  const [openSection, setOpenSection] = useState(open);
  const closeSection = (data: any) => {
    setOpenSection(false);
    handleNextModal(data);
  };
  const formik = useFormik({
    initialValues: {
      [questionnaire[0]?.name]: questsAnswers[questionnaire[0]?.name] || null,
      [questionnaire[1]?.name]: questsAnswers[questionnaire[1]?.name] || null,
      [questionnaire[2]?.name]: questsAnswers[questionnaire[2]?.name] || null,
    },
    validationSchema: Yup.object({
      [questionnaire[0]?.name]: Yup.number().required(
        "پاسخ به این سوال الزامیست"
      ),
      [questionnaire[1]?.name]: Yup.number().required(
        "پاسخ به این سوال الزامیست"
      ),
      [questionnaire[2]?.name]: Yup.number().required(
        "پاسخ به این سوال الزامیست"
      ),
    }),

    onSubmit: (data) => {
      closeSection(data);
    },
  });
  return (
    <div
      className={`relative bg-[url(/common/biggerModalBG.png)] w-full h-[100vh] bg-no-repeat bg-top bg-[length:99%_90%] sm:bg-[length:95%_90%] flex flex-col items-center justify-center animate__animated ${
        openSection ? "animate__fadeInDownBig" : "animate__fadeOutUpBig"
      }`}
    >
      <form className="flex flex-col w-4/5 gap-5">
        <QuestionnaireQuest quest={questionnaire[0]} formik={formik} />
        <QuestionnaireQuest quest={questionnaire[1]} formik={formik} />
        <QuestionnaireQuest quest={questionnaire[2]} formik={formik} />
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

export default QuestionsComp;
