import { Question } from "@/app/constant/questions/transportation";
import QuestionModalContainer from "./questionModalContainer";
import { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import QuestionChoices from "./questionChoices";
import * as Yup from "yup";
import { useFormik } from "formik";
import Loading from "./loading";

const QuestionModal = (
  {
    question,
    whichQuest,
    openConfirmRef,
    openGuideRef,
  }: {
    question: Question;
    whichQuest: string;
    openConfirmRef: any;
    openGuideRef: any;
  },
  ref: any
) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [answered, setAnswered] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const visibleQuests = useMemo(() => {
    let array = [0, 1, 2];
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }, []);

  useImperativeHandle(ref, () => ({
    openModal() {
      setOpen(!open);
    },
  }));
  const formik = useFormik({
    initialValues: {
      score0: null,
      score1: null,
      score2: null,
    },
    validationSchema: Yup.object({
      score0: Yup.number().required("پاسخ به این سوال الزامیست"),
      score1: Yup.number().required("پاسخ به این سوال الزامیست"),
      score2: Yup.number().required("پاسخ به این سوال الزامیست"),
    }),
    onSubmit: (data) => {
      setAnswered(true);
      if (data?.score0 && data?.score1 && data?.score2) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          if (data?.score0 && data?.score1 && data?.score2) {
            setOpen(false);
            const newArray = [data.score0, data.score1, data.score2];
            openConfirmRef({
              confirmBody: {
                score: data.score0 + data.score1 + data.score2,
                questions: [
                  ...user.questions,
                  {
                    name: whichQuest,
                    answers: [
                      newArray[visibleQuests[0]],
                      newArray[visibleQuests[1]],
                      newArray[visibleQuests[2]],
                    ],
                  },
                ],
                friends: [
                  {
                    ...user.friends[0],
                    score: user.friends[0].score + data.score0,
                  },
                  {
                    ...user.friends[1],
                    score: user.friends[1].score + data.score1,
                  },
                  {
                    ...user.friends[2],
                    score: user.friends[2].score + data.score2,
                  },
                ],
              },
              wheelBody: {
                questions: [
                  ...user.questions,
                  {
                    name: whichQuest,
                    answers: [
                      newArray[visibleQuests[0]],
                      newArray[visibleQuests[1]],
                      newArray[visibleQuests[2]],
                    ],
                  },
                ],
              },
            });
          }
        }, 2000);
      }
    },
  });
  return (
    <QuestionModalContainer open={open}>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <button
          type="button"
          className="absolute top-[7.5%] right-[3%]"
          onClick={() => setOpen(false)}
        >
          <img
            className="w-10 h-10 sm:w-12 sm:h-12"
            src="/questions/close.png"
            alt=""
          />
        </button>
        <div
          className={`w-[80%] max-h-[80%] overflow-auto flex flex-col gap-[20px] `}
        >
          <p className="pb-3">{question.questionText}</p>
          {question.chices.map((choice, index) => {
            return (
              <QuestionChoices
                key={`QChoiceKey${index}`}
                choice={choice}
                index={visibleQuests[index]}
                formik={formik}
                answered={answered}
              />
            );
          })}
          <button
            type="button"
            onClick={() => !answered && formik.handleSubmit()}
            className="form_btn shadow-light flex items-center justify-center gap-1"
          >
            {loading ? (
              <Loading />
            ) : (
              <>
                <img src="/flash.svg" alt="" />
                بعدی
              </>
            )}
          </button>
        </div>
        <button
          onClick={() => openGuideRef(question.guide)}
          type="button"
          className="absolute bottom-[2.5%] sm:left-[6%] left-[5%]"
        >
          <img
            className="w-12 h-12 sm:w-auto sm:h-auto"
            src="/questions/guide.png"
            alt=""
          />
        </button>
        <div className="absolute bottom-0 sm:right-0 right-0 pointer-events-none">
          {user.policeMale ? (
            <img
              className="w-auto h-36 sm:h-48"
              src="/questions/malPolice.png"
              alt=""
            />
          ) : (
            <img
              className="w-auto h-36 sm:h-48"
              src="/questions/femPolice.png"
              alt=""
            />
          )}
        </div>
      </div>
    </QuestionModalContainer>
  );
};

export default forwardRef(QuestionModal);
