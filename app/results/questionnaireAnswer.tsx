const QuestionnaireAnswer = ({
  quest,
  formik,
  value,
  valueText,
}: {
  quest: any;
  formik: any;
  value: number;
  valueText: string;
}) => {
  return (
    <button
      type="button"
      onClick={() => formik.setFieldValue(quest?.name, value)}
      className="flex items-center gap-1 text-[#212B36] font-light text-sm"
    >
      <span
        className={`rounded-full w-5 h-5 border-[2px] border-[#0A0A0A] p-[2px] flex items-center justify-center`}
      >
        {formik.values[quest?.name] === value && (
          <span className="w-3 h-3 rounded-full bg-[#0A0A0A]"></span>
        )}
      </span>
      <span>{valueText}</span>
    </button>
  );
};

export default QuestionnaireAnswer;
