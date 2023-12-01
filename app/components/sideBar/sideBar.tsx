import Image from "next/image";
import { User, updateUserScore } from "../../redux/user";
import { Dispatch, SetStateAction, useRef } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import SideBarConfirm from "./sideBarConfirm";

const SideBar = ({
  showMenu,
  setShowMenu,
  user,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  user: User;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logoutConfirmRef: any = useRef();
  let correctAnswers = 0;
  let wrongAnswers = 0;
  for (let question of user.questions) {
    for (let answer of question.answers) {
      if (answer == 50) {
        correctAnswers++;
      } else if (answer == -20) {
        wrongAnswers++;
      }
    }
  }
  const openConfirmRef = () => {
    logoutConfirmRef.current && logoutConfirmRef.current.openModal();
  };
  const logOutFunc = () => {
    localStorage.removeItem("UserId");
    dispatch(
      updateUserScore({
        _id: "",
        name: "",
        phoneNumber: 0,
        score: 0,
        friends: [],
        policeMale: 0,
        questions: [],
        createdAt: "",
        updatedAt: "",
      })
    );
    setShowMenu(false);
    setTimeout(() => {
      router.push("/");
    }, 500);
  };
  return (
    <>
      <SideBarConfirm logOutFunc={logOutFunc} ref={logoutConfirmRef} />
      <div
        className={`w-full h-[100dvh] z-40 flex justify-end transition-all duration-1000 absolute left-0 top-0 ${
          showMenu ? "bg-[#57959ba7] max-h-[10000px]" : "bg-[#57959b00] max-h-0"
        }`}
      >
        <div
          className={`w-[70%] h-[100dvh] bg-[#FFDD5C] relative transition-all duration-1000 flex flex-col p-3 gap-2 ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          <div className="w-full flex items-center p-2 sm:p-5 h-[48px] gap-2">
            <div className="sm:w-28 sm:h-28 w-10 h-10 relative">
              {user.policeMale ? (
                <Image fill src="/PoliceMan.png" alt="" />
              ) : (
                <Image fill src="/policeWoman.png" alt="" />
              )}
            </div>
            <p className="ml-auto">{user.name}</p>
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="p-0 m-0 "
              style={{ cursor: "pointer" }}
            >
              <div className={`${showMenu && "open"}`} id="nav-icon4">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          <div className="w-full h-[2px] bg-[#7f7d7d8d]"></div>
          <div className="flex-1 flex justify-center items-stretch flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="">امتیاز:</p>
              <p className="">{user.score}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="">پاسخ های صحیح:</p>
              <p className="">{correctAnswers}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="">پاسخ های غلط:</p>
              <p className="">{wrongAnswers}</p>
            </div>
          </div>

          <button
            className="mt-auto w-full form_btn mb-5"
            onClick={openConfirmRef}
          >
            خروج از حساب کاربری
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
