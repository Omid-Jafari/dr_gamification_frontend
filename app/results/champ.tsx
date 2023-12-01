import Image from "next/image";
import { useState } from "react";

const Champ = ({
  open,
  user,
  handleNextModal,
}: {
  open: boolean;
  user: any;
  handleNextModal: any;
}) => {
  const [openSection, setOpenSection] = useState(open);
  let sortedFriends = user?.friends
    .slice()
    ?.sort((a: { score: number }, b: { score: number }) => b.score - a.score);

  const closeSection = () => {
    setOpenSection(false);
    handleNextModal({});
  };

  return (
    <div
      className={`relative bg-[url(/results/resultBG.png)] bg-[length:99%_65%] bg-center bg-no-repeat w-full h-[100dvh] flex flex-col items-center justify-center gap-4 animate__animated ${
        openSection
          ? "animate__fadeInDownBig animate__delay-1s"
          : "animate__fadeOutLeftBig"
      }`}
    >
      <div className=" absolute left-1/2 -translate-x-1/2 top-[17.5%] flex flex-col justify-center items-center gap-1">
        {user.policeMale ? (
          <img
            src="/PoliceMan.png"
            className="sm:w-28 sm:h-28 w-24 h-24"
            alt=""
          />
        ) : (
          <img
            src="/policeWoman.png"
            className="sm:w-28 sm:h-28 w-24 h-24"
            alt=""
          />
        )}
        <p
          className="text-white font-bold text-sm max-w-[6rem] truncate sm:max-w-[7rem]"
          title={user.name}
        >
          {user.name}
        </p>
      </div>

      <p className="absolute right-[10%] top-[27%] text-xs sm:text-sm">
        <span className="font-bold">امتیازات</span>
        <br />
        نفر &nbsp;
        {user?.secondTimeResult
          ? user?.secondTimeResult?.rank
          : user?.firstTimeResult?.rank}
      </p>
      <div className="flex items-center gap-1 absolute top-[27.5%] left-[9%]">
        {600 <= user.score && (
          <Image
            width={18}
            height={25}
            src="/header/boronz.png"
            alt=""
            className="object-contain"
          />
        )}
        {1200 <= user.score && (
          <Image
            width={18}
            height={25}
            src="/header/silver.png"
            alt=""
            className="object-contain"
          />
        )}
        {2000 <= user.score && (
          <Image
            width={18}
            height={25}
            src="/header/gold.png"
            alt=""
            className="object-contain"
          />
        )}
        {3000 <= user.score && (
          <Image
            width={18}
            height={25}
            src="/header/green.png"
            alt=""
            className="object-contain"
          />
        )}
      </div>
      <div className="flex items-center gap-1 results_btn_style py-1 px-2 text-xs sm:text-sm absolute top-[34%] right-[9%]">
        امتیاز: &nbsp;{user.score}
        <Image width={20} height={20} src="/group.svg" alt="" />
      </div>
      <div className="flex items-center gap-1 results_btn_style py-1 px-2 text-xs sm:text-sm absolute top-[34%] left-[9%]">
        زمان:
        <span className="" dir="ltr">
          {user.secondTimeResult
            ? `${
                Math.floor(
                  (+user?.secondTimeResult?.time % (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
                )
                  ? `${Math.floor(
                      (+user?.secondTimeResult?.time % (1000 * 60 * 60 * 24)) /
                        (1000 * 60 * 60)
                    )}:`
                  : ""
              }${Math.floor(
                (+user?.secondTimeResult?.time % (1000 * 60 * 60)) / (1000 * 60)
              )}':${Math.floor(
                (+user?.secondTimeResult?.time % (1000 * 60)) / 1000
              )}"`
            : user.firstTimeResult
            ? `${
                Math.floor(
                  (+user?.firstTimeResult?.time % (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
                )
                  ? `${Math.floor(
                      (+user?.firstTimeResult?.time % (1000 * 60 * 60 * 24)) /
                        (1000 * 60 * 60)
                    )}:`
                  : ""
              }${Math.floor(
                (+user?.firstTimeResult?.time % (1000 * 60 * 60)) / (1000 * 60)
              )}':${Math.floor(
                (+user?.firstTimeResult?.time % (1000 * 60)) / 1000
              )}"`
            : ""}
        </span>
        <Image width={20} height={20} src="/results/timeIcon.svg" alt="" />
      </div>
      <div className="flex items-center gap-1 results_btn_style py-1 px-2 text-xs sm:text-sm absolute top-[39%] right-[9%]">
        پاسخ های صحیح: &nbsp;
        {user.secondTimeResult
          ? user.secondTimeResult?.correctAnswers
          : user.firstTimeResult?.correctAnswers}
      </div>
      <div className="flex items-center gap-1 results_btn_style py-1 px-2 text-xs sm:text-sm absolute top-[39%] left-[9%]">
        پاسخ های اشتباه: &nbsp;
        {user.secondTimeResult
          ? user.secondTimeResult?.wrongAnswers
          : user.firstTimeResult?.wrongAnswers}
      </div>
      <div className="flex flex-col justify-center items-center gap-1 absolute bottom-[38%] left-1/2 -translate-x-1/2">
        <img
          className="max-w-[67px] sm:max-w-[90px]"
          src={sortedFriends[0]?.avatarSrc}
          alt=""
        />
        <span className="">{sortedFriends[0]?.name}</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 absolute bottom-[31%] left-[18%]">
        <img
          className="max-w-[67px] sm:max-w-[90px]"
          src={sortedFriends[1]?.avatarSrc}
          alt=""
        />
        <span className="">{sortedFriends[1]?.name}</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 absolute bottom-[31%] right-[18%]">
        <img
          className="max-w-[67px] sm:max-w-[90px]"
          src={sortedFriends[2]?.avatarSrc}
          alt=""
        />
        <span className="">{sortedFriends[2]?.name}</span>
      </div>
      <span
        className="absolute bottom-[22.5%] left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm rounded-full bg-[rgba(3,168,158,0.42)] px-2"
        dir="ltr"
      >
        {sortedFriends[0]?.score} امتیاز
      </span>
      <span
        className="absolute bottom-[22.5%] right-[23%] text-white text-xs sm:text-sm"
        dir="ltr"
      >
        {sortedFriends[1]?.score} امتیاز
      </span>
      <span
        className="absolute bottom-[22.5%] left-[23%] text-white text-xs sm:text-sm"
        dir="ltr"
      >
        {sortedFriends[2]?.score} امتیاز
      </span>
      <button
        type="button"
        onClick={closeSection}
        className="w-1/2 spinner_btn shadow-light flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2 bottom-[10%]"
      >
        شروع پرسشنامه
      </button>
    </div>
  );
};

export default Champ;
