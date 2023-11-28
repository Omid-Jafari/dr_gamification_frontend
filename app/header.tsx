"use client";

// import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const audioRef = useRef<any>();
  const [muted, setMuted] = useState(true);

  const getTime = () => {
    const now = new Date().getTime();
    const createdTime = user.secondCreatedAt
      ? new Date(user.secondCreatedAt).getTime()
      : new Date(user.createdAt).getTime();
    let distance;
    distance = now - createdTime;
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [getTime]);
  return (
    <div className="w-full flex items-center justify-between p-3 sm:p-5 absolute top-0 left-0">
      <button onClick={() => window.location.pathname !== "/" && router.back()}>
        <img src="/Back.svg" alt="" />
      </button>
      <button
        onClick={() => {
          // audioRef.current.play();
          setMuted(!muted);
        }}
      >
        <img src="/Sound.svg" alt="" />
      </button>
      <Link href={"/records"}>
        <img src="/Group.svg" alt="" />
      </Link>
      <div className="relative">
        <span className="absolute z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 left-2/3 text-[#1E7BD1]">
          {hours || minutes || seconds
            ? `${hours ? `${hours}:` : ""}` + minutes + ":" + seconds
            : ""}
        </span>
        <img src="/header/timer.png" alt="" className="h-8" />
      </div>
      <div className="relative">
        <span
          className="absolute z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 left-2/3 text-[#1E7BD1]"
          dir="ltr"
        >
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
      <audio
        muted={muted}
        src="/KidsEducation.mp3"
        ref={audioRef}
        loop
        autoPlay={true}
        playsInline={true}
      >
        {/* <source  type="audio/mp3" /> */}
      </audio>
    </div>
  );
};

export default Header;
