"use client";

import { useDispatch, useSelector } from "react-redux";
import { assignUser } from "@/app/redux/user";
import FirstSigninSection from "./firstSigninSection";
import { useEffect, useState } from "react";
import ThirdSigninSection from "./thirdSigninSection";
import ForthSigninSection from "./forthSigninSection";
import { useMutation, useQuery } from "react-query";
import { signinUser, userData } from "@/app/api/ApiClient";
import toast from "react-hot-toast";
import ModalContainer from "../common/modalContainer";
import SecondSigninSection from "./secondSigninSection";
import { RootState } from "@/app/redux/store";
import { useRouter } from "next/navigation";
import QuestionModalContainer from "../common/questionModalContainer";
import HelpModal from "./helpModal";

const SigninContainer = () => {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState(0);
  const [openHelp, setOpenHelp] = useState(false);
  const [creatingUser, setCreatingUser] = useState<object>();
  const [backAction, setBackAction] = useState(false);
  const router = useRouter();
  const localStorageId =
    typeof window !== "undefined" ? localStorage.getItem("UserId") : null;
  const [signOpen, setSignOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    setSignOpen(!localStorageId);
  }, [localStorageId]);
  useEffect(() => {
    if (user.questions.length === 21) {
      router.push("/results");
    }
  }, [user.questions, router]);
  const getUserDataQuery = useQuery({
    queryKey: ["getUserDataQuery"],
    queryFn: () => userData(localStorageId),
    refetchOnWindowFocus: false,
    enabled: !!localStorageId,
    onSuccess: (data) => {
      dispatch(
        assignUser({
          user: data?.data,
        })
      );
      toast.success(`${data?.data?.name} خوش آمدید`);
      setSignOpen(false);
    },
    onError: (error) => {
      localStorage.removeItem("UserId");
      setSignOpen(true);
    },
  });
  const addUserMutation = useMutation({
    mutationKey: ["addUserMutation"],
    mutationFn: signinUser,
    onSuccess: (res) => {
      dispatch(
        assignUser({
          user: res?.data,
        })
      );
      localStorage.setItem("UserId", res?.data?._id);
      setOpenHelp(true);
    },
    onError: () => {},
  });

  const handleModal = (data: any, isLast = false) => {
    setBackAction(false);
    if (isLast) {
      addUserMutation.mutate({ ...creatingUser, ...data });
    } else {
      setTimeout(() => {
        setActiveSection(activeSection + 1);
      }, 350);
    }
    setCreatingUser((prev: object) => ({ ...prev, ...data }));
  };
  const handleBackModal = (data: any, isLast = false) => {
    setBackAction(true);
    setTimeout(() => {
      setActiveSection(activeSection - 1);
    }, 350);
  };

  const signinFormSections = [
    <FirstSigninSection
      backAction={backAction}
      open={activeSection === 0}
      creatingUser={creatingUser}
      handleModal={handleModal}
      handleBackModal={handleBackModal}
      key="FirstSigninChapterKey"
    />,
    <SecondSigninSection
      backAction={backAction}
      open={activeSection === 1}
      creatingUser={creatingUser}
      handleModal={handleModal}
      handleBackModal={handleBackModal}
      key="secondSigninChapterKey"
    />,
    <ThirdSigninSection
      backAction={backAction}
      open={activeSection === 2}
      creatingUser={creatingUser}
      handleModal={handleModal}
      handleBackModal={handleBackModal}
      key="secondSigninChapterKey"
    />,
    <ForthSigninSection
      backAction={backAction}
      open={activeSection === 3}
      creatingUser={creatingUser}
      handleModal={handleModal}
      handleBackModal={handleBackModal}
      isLoading={getUserDataQuery?.isLoading}
      key="secondSigninChapterKey"
    />,
  ];

  return (
    <>
      <ModalContainer open={signOpen}>
        <div className="w-full h-[100dvh] flex justify-center items-center">
          {signinFormSections?.map(
            (comp, index) => index === activeSection && comp
          )}
        </div>
      </ModalContainer>
      <QuestionModalContainer open={openHelp}>
        <HelpModal setOpenHelp={setOpenHelp} />
      </QuestionModalContainer>
    </>
  );
};

export default SigninContainer;
