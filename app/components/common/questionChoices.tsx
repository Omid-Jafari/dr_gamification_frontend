import { RootState } from "@/app/redux/store";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const QuestionChoices = ({
  choice,
  index,
  formik,
  answered,
}: {
  choice: any;
  index: number;
  formik: any;
  answered: boolean;
}) => {
  const { user } = useSelector((state: RootState) => state.user);
  const [choosed, setChoosed] = useState<number>();

  return (
    <>
      <div
        key={`questionChoices${index}`}
        className="gradient-fade p-[1px] rounded-lg text-xs"
      >
        <div
          className={`w-full rounded-lg flex items-center p-2 gap-2 transition-all ${
            // if it is answered checks for if is it true or not otherwise stay yellow
            answered
              ? formik.values[`score${index}`] > 0
                ? "bg-[#4DBA79]"
                : "bg-[#EB2F05]"
              : "bg-[#FED659]"
          }`}
        >
          <div className="relative aspect-square w-[25%]">
            <Image
              fill
              objectFit="contain"
              src={choice.choiceImg}
              alt={`questionChoicesImg${index}`}
            />
          </div>

          <div className="w-3/4 flex-col flex-shrink-0 gap-2">
            <div className="flex items-center w-full gap-2 p-1">
              <div className="relative aspect-square w-[16.66%]">
                <Image
                  fill
                  objectFit="contain"
                  src={user.friends[index]?.avatarSrc}
                  alt={`questionChoicesImg${index}`}
                />
              </div>
              <span className="w-5/6 text-justify">
                {user.friends[index]?.name + " " + choice.choiceTxt}
              </span>
            </div>
            <div className="flex items-center w-full justify-between p-1">
              <button
                type="button"
                className="flex items-center gap-1"
                onClick={() => {
                  if (!answered) {
                    setChoosed(1);
                    if (choice.answer === 1) {
                      formik.setFieldValue(`score${index}`, 50);
                    } else {
                      formik.setFieldValue(`score${index}`, -20);
                    }
                  }
                }}
              >
                <span
                  className={`rounded-full w-5 h-5 border-[2px] border-[#0A0A0A] p-[2px] flex items-center justify-center`}
                >
                  {choosed === 1 && (
                    <span className="w-3 h-3 rounded-full bg-[#0A0A0A]"></span>
                  )}
                </span>
                <span>پاداش</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1"
                onClick={() => {
                  if (!answered) {
                    setChoosed(0);
                    if (choice.answer === 0) {
                      formik.setFieldValue(`score${index}`, 50);
                    } else {
                      formik.setFieldValue(`score${index}`, -20);
                    }
                  }
                }}
              >
                <span
                  className={`rounded-full w-5 h-5 border-[2px] border-[#0A0A0A] p-[2px] flex items-center justify-center`}
                >
                  {choosed === 0 && (
                    <span className="w-3 h-3 rounded-full bg-[#0A0A0A]"></span>
                  )}
                </span>
                <span>جریمه</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {formik.errors[`score${index}`] && formik.touched[`score${index}`] && (
        <div className="text-red-600 w-full text-sm px-3 py-2 animate__animated animate__headShake">
          {formik.errors[`score${index}`]}
        </div>
      )}
    </>
  );
};

export default QuestionChoices;
