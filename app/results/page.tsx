"use client";

import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { finishedQuestions, usersData } from "../api/ApiClient";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateUserScore } from "../redux/user";
import Champ from "./champ";
import FirstQuest from "./firstQuest";
import SecondQuest from "./secondQuest";
import ThirdQuest from "./thirdQuest";
import { questionnaire } from "../constant/questionnaire/quests";
import QuestionsComp from "./questionsComp";
import ConfirmFinish from "./confirmFinish";

const Results = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const now = new Date();
  const [activeSection, setActiveSection] = useState(0);
  const [questsAnswers, setQuestsAnswers] = useState<any>({});
  const [ageAndGender, setAgeAndGender] = useState<any>({});
  const [lastSecOpen, setLastSecOpen] = useState(false);

  const finishedQuestionsQuery = useQuery({
    queryKey: ["finishedQuestionsQuery"],
    queryFn: () =>
      finishedQuestions({
        _id: user._id,
        body: { time: now.getTime() },
      }),
    refetchOnWindowFocus: false,
    enabled: !!user._id && (!user.firstTimeResult || !user.secondTimeResult),
    onSuccess: (data) => {
      dispatch(updateUserScore({ ...data.data }));
    },
    onError: (error) => {},
  });
  const finishedQuestionsMutation = useMutation({
    mutationKey: ["finishedQuestionsMutation"],
    mutationFn: finishedQuestions,
    onSuccess: (data) => {
      dispatch(updateUserScore({ ...data.data }));
      closeResultFunc();
    },
    onError: (error) => {},
  });

  const closeResultFunc = () => {
    setOpen(false);
    setLastSecOpen(false);
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };
  const handleNextModal = (data: any, isLast = false) => {
    if (activeSection === 8) {
      // addUserMutation.mutate({ ...creatingUser, ...data });
      setTimeout(() => {
        setActiveSection(activeSection + 1);
        setLastSecOpen(open);
      }, 250);
    } else {
      setTimeout(() => {
        setActiveSection(activeSection + 1);
      }, 250);
    }
    setQuestsAnswers((prev: object) => ({ ...prev, ...data }));
  };
  const handleAgeAndGender = (data: any) => {
    setTimeout(() => {
      setActiveSection(activeSection + 1);
    }, 250);
    setAgeAndGender((prev: object) => ({ ...prev, ...data }));
  };
  const handleBackModal = () => {
    setTimeout(() => {
      setActiveSection(activeSection - 1);
    }, 250);
  };
  const finishGame = (reset: boolean) => {
    let questionnaireBody = [];
    for (let quest of questionnaire) {
      questionnaireBody.push({
        ...quest,
        answer:
          questsAnswers[quest?.name] || questsAnswers[quest?.name] === 0
            ? questsAnswers[quest?.name]
            : null,
      });
    }
    finishedQuestionsMutation.mutate({
      _id: user._id,
      reset: reset,
      body: {
        time: now.getTime(),
        questionnaire: {
          questionnaireBody: questionnaireBody,
          age: ageAndGender?.age,
          gender: ageAndGender.gender,
        },
      },
    });
  };
  const resultAndQuests = [
    <Champ
      open={activeSection === 0}
      user={user}
      key="champscompo"
      handleNextModal={handleNextModal}
    />,
    <FirstQuest
      open={activeSection === 1}
      user={user}
      key="FirstQuestcompo"
      handleNextModal={handleNextModal}
    />,
    <SecondQuest
      open={activeSection === 2}
      user={user}
      key="SecondQuestcompo"
      handleNextModal={handleNextModal}
    />,
    <ThirdQuest
      open={activeSection === 3}
      ageAndGender={ageAndGender}
      key="ThirdQuestCompo"
      handleAgeAndGender={handleAgeAndGender}
      handleBackModal={handleBackModal}
    />,
    <QuestionsComp
      open={activeSection === 4}
      questsAnswers={questsAnswers}
      key="QuestionsComp1"
      handleNextModal={handleNextModal}
      handleBackModal={handleBackModal}
      questionnaire={[questionnaire[0], questionnaire[1], questionnaire[2]]}
    />,
    <QuestionsComp
      open={activeSection === 5}
      questsAnswers={questsAnswers}
      key="QuestionsComp2"
      handleNextModal={handleNextModal}
      handleBackModal={handleBackModal}
      questionnaire={[questionnaire[3], questionnaire[4], questionnaire[5]]}
    />,
    <QuestionsComp
      open={activeSection === 6}
      questsAnswers={questsAnswers}
      key="QuestionsComp3"
      handleNextModal={handleNextModal}
      handleBackModal={handleBackModal}
      questionnaire={[questionnaire[6], questionnaire[7], questionnaire[8]]}
    />,
    <QuestionsComp
      open={activeSection === 7}
      questsAnswers={questsAnswers}
      key="QuestionsComp4"
      handleNextModal={handleNextModal}
      handleBackModal={handleBackModal}
      questionnaire={[questionnaire[9], questionnaire[10], questionnaire[11]]}
    />,
    <QuestionsComp
      open={activeSection === 8}
      questsAnswers={questsAnswers}
      key="QuestionsComp5"
      handleNextModal={handleNextModal}
      handleBackModal={handleBackModal}
      questionnaire={[questionnaire[12], questionnaire[13], questionnaire[14]]}
    />,
    <ConfirmFinish
      open={activeSection === 9}
      user={user}
      finishGame={finishGame}
      loading={finishedQuestionsMutation.isLoading}
      lastSecOpen={lastSecOpen}
      key="QuestionsComp6"
    />,
  ];

  return (
    <div
      className={`absolute top-0 left-0 w-full h-[100vh] z-20 px-2 overflow-hidden transition-all duration-[.7s] ${
        open
          ? "bg-[#57959ba7] max-h-[10000px] duration-[.7s]"
          : "bg-[#57959b00] max-h-0 duration-[1.7s]"
      }`}
    >
      <img
        src="/common/ModalBlueBg.svg"
        className={`absolute top-0 left-0 w-full h-[100vh] object-cover animate__animated animate__delay ${
          open
            ? "animate__fadeIn animate__slow"
            : "animate__fadeOut animate__fast"
        }`}
        alt=""
      />
      {resultAndQuests?.map((comp, index) => index === activeSection && comp)}
    </div>
  );
};

export default Results;
