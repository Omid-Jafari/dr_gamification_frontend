import Loading from "../components/common/loading";

const ConfirmFinish = ({
  finishGame,
  loading,
  lastSecOpen,
}: {
  finishGame: any;
  loading: boolean;
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
          دوست داری یه بار دیگه بازی کنی تا امتیاز بیشتری به دست بیاری و شانست
          برای بردن جایزه بیشتر بشه؟
        </p>
        <div className="flex justify-center items-center gap-5">
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
        </div>
      </form>
    </div>
  );
};

export default ConfirmFinish;
