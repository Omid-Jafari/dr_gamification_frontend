import { useState } from "react";
import Loading from "../components/common/loading";
import { User } from "../redux/user";

const ConfirmFinish = ({
  open,
  finishGame,
  loading,
  user,
  lastSecOpen,
}: {
  open: boolean;
  finishGame: any;
  loading: boolean;
  user: User;
  lastSecOpen: boolean;
}) => {
  return (
    <div
      className={`relative bg-[url(/common/confirmBG.png)] w-full h-[100dvh] bg-center bg-no-repeat bg-contain flex flex-col items-center justify-center animate__animated ${
        lastSecOpen ? "animate__fadeInDownBig" : "animate__fadeOutUpBig"
      }`}
    >
      <form className="flex flex-col w-4/5 gap-5">
        <p className="">
          {user.firstTimeResult && user.secondCreatedAt
            ? "ممنونم که بازی کردی.رو دکمه ی اتمام بازی بزن تا پاسخ هات ثبت بشن و تو قرعه کشی شرکت کنی"
            : "دوست داری یه بار دیگه بازی کنی تا امتیاز بیشتری به دست بیاری و شانست برای بردن جایزه بیشتر بشه؟"}
        </p>
        <div className="flex justify-center items-center gap-5">
          {user.firstTimeResult && user.secondCreatedAt ? (
            <button
              type="button"
              onClick={() => finishGame(false)}
              className="form_btn shadow-light flex items-center justify-center gap-1 flex-grow"
            >
              {loading ? <Loading /> : "اتمام بازی"}
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => finishGame(true)}
                className="form_btn shadow-light flex items-center justify-center gap-1 flex-grow"
              >
                {loading ? <Loading /> : "بزن بریم"}
              </button>
              <button
                type="button"
                onClick={() => finishGame(false)}
                className="form_btn_white shadow-light flex items-center justify-center flex-grow"
              >
                {loading ? <Loading /> : "نه ممنون!"}
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ConfirmFinish;
