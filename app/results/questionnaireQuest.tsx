import QuestionnaireAnswer from "./questionnaireAnswer";

const QuestionnaireQuest = ({ quest, formik }: { quest: any; formik: any }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[#0A0A0A]">{quest?.question}</p>
      <div className="grid grid-cols-2 gap-3">
        <QuestionnaireAnswer
          quest={quest}
          formik={formik}
          value={0}
          valueText="کاملا موافقم"
        />
        <QuestionnaireAnswer
          quest={quest}
          formik={formik}
          value={1}
          valueText="موافقم"
        />
        <QuestionnaireAnswer
          quest={quest}
          formik={formik}
          value={2}
          valueText="نظری ندارم"
        />
        <QuestionnaireAnswer
          quest={quest}
          formik={formik}
          value={3}
          valueText="مخالفم"
        />
        <QuestionnaireAnswer
          quest={quest}
          formik={formik}
          value={4}
          valueText="کاملا مخالفم"
        />
      </div>
      {formik.errors[quest?.name] && formik.touched[quest?.name] && (
        <div className="text-red-600 w-full text-sm px-3">
          {formik.errors[quest?.name] as string}
        </div>
      )}
    </div>
  );
};

export default QuestionnaireQuest;
