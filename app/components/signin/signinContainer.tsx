"use client";

import { useDispatch } from "react-redux";
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

const SigninContainer = () => {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState(0);
  const [creatingUser, setCreatingUser] = useState<object>();
  const localStorageId =
    typeof window !== "undefined" ? localStorage.getItem("UserId") : null;
  const [signOpen, setSignOpen] = useState(false);
  useEffect(() => {
    setSignOpen(!localStorageId);
  }, [localStorageId]);

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
    },
    onError: () => {},
  });

  const handleModal = (data: any, isLast = false) => {
    if (isLast) {
      addUserMutation.mutate({ ...creatingUser, ...data });
    } else {
      setActiveSection(activeSection + 1);
    }
    setCreatingUser((prev: object) => ({ ...prev, ...data }));
  };
  const handleBackModal = (data: any, isLast = false) => {
    setActiveSection(activeSection - 1);
  };

  const signinFormSections = [
    <FirstSigninSection
      creatingUser={creatingUser}
      handleModal={handleModal}
      handleBackModal={handleBackModal}
      key="FirstSigninChapterKey"
    />,
    <SecondSigninSection
      creatingUser={creatingUser}
      handleModal={handleModal}
      handleBackModal={handleBackModal}
      key="secondSigninChapterKey"
    />,
    <ThirdSigninSection
      creatingUser={creatingUser}
      handleModal={handleModal}
      handleBackModal={handleBackModal}
      key="secondSigninChapterKey"
    />,
    <ForthSigninSection
      creatingUser={creatingUser}
      handleModal={handleModal}
      handleBackModal={handleBackModal}
      isLoading={getUserDataQuery?.isLoading}
      key="secondSigninChapterKey"
    />,
  ];
  return (
    <ModalContainer open={signOpen}>
      <div className="w-full h-[100vh] flex justify-center items-center">
        {signinFormSections?.map(
          (comp, index) => index === activeSection && comp
        )}
      </div>
    </ModalContainer>
  );
};

export default SigninContainer;
