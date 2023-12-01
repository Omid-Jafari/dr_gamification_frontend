"use client";

// import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// import SideBar from "./components/sideBar";
import dynamic from "next/dynamic";
const SideBar = dynamic(() => import("./components/sideBar/sideBar") as any, {
  ssr: false,
});
const Header = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const audioRef = useRef<any>();
  const [muted, setMuted] = useState(true);
  const props = {
    showMenu: showMenu,
    setShowMenu: setShowMenu,
    user: user,
  };

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
    <>
      <SideBar {...(props as any)} />
      <div className="w-full flex items-center justify-between p-2 sm:p-5 absolute top-0 left-0">
        <button
          onClick={() => window.location.pathname !== "/" && router.back()}
        >
          <img src="/back.svg" alt="" />
        </button>
        <button
          onClick={() => {
            // audioRef.current.play();
            setMuted(!muted);
          }}
        >
          <img src="/sound.svg" alt="" />
        </button>
        <Link href={"/records"}>
          <img src="/group.svg" alt="" />
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
              src="/header/boronz.png"
              alt=""
              className="object-contain"
            />
          ) : 1200 <= user.score && user.score < 2000 ? (
            <Image
              width={18}
              height={25}
              src="/header/silver.png"
              alt=""
              className="object-contain"
            />
          ) : 2000 <= user.score && user.score < 3000 ? (
            <Image
              width={18}
              height={25}
              src="/header/gold.png"
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
        <audio
          muted={muted}
          src="/KidsEducation.mp3"
          ref={audioRef}
          loop
          autoPlay={false}
          playsInline={true}
        >
          {/* <source  type="audio/mp3" /> */}
        </audio>
      </div>
    </>
  );
};

export default Header;
