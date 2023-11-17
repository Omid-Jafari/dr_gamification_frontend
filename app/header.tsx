"use client";

// import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-between p-3 sm:p-5 absolute top-0 left-0">
      <button onClick={() => window.location.pathname !== "/" && router.back()}>
        <img src="/Back.svg" alt="" />
      </button>
      <button onClick={() => {}}>
        <img src="/Sound.svg" alt="" />
      </button>
      <button onClick={() => {}}>
        <img src="/Group.svg" alt="" />
      </button>
      <div className="relative">
        <span className="absolute z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 left-2/3 text-[#1E7BD1]">
          22:55
        </span>
        <img src="/header/timer.png" alt="" className="h-8" />
      </div>
      <div className="relative">
        <span className="absolute z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 left-2/3 text-[#1E7BD1]">
          {user.score}
        </span>
        <img src="/header/score.png" alt="" className="h-8" />
      </div>
      <div className="h-8 w-8 rounded-full border-2 border-[rgba(91,91,91,.36)] bg-white flex justify-center items-center">
        {user.score < 600 ? (
          <></>
        ) : 600 <= user.score && user.score < 1200 ? (
          <Image
            width={18}
            height={25}
            src="/header/Boronz.png"
            alt=""
            className="object-contain"
          />
        ) : 1200 <= user.score && user.score < 2000 ? (
          <Image
            width={18}
            height={25}
            src="/header/Silver.png"
            alt=""
            className="object-contain"
          />
        ) : 2000 <= user.score && user.score < 3000 ? (
          <Image
            width={18}
            height={25}
            src="/header/Gold.png"
            alt=""
            className="object-contain"
          />
        ) : (
          <Image
            width={18}
            height={25}
            src="/header/green.png"
            alt=""
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
