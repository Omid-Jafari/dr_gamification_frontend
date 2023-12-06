"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export default function Home() {
  const { user } = useSelector((state: RootState) => state.user);
  const checkForFinished = (name: string, questLength: number) => {
    return (
      user.questions.filter((quest) => quest.name.includes(name)).length ===
      questLength
    );
  };
  return (
    <main className="w-full h-[100dvh]">
      {checkForFinished("trans", 4) ? undefined : (
        <Link
          className="absolute top-[15%] w-[20%] left-[40%]"
          href="/transportation"
        >
          <img
            src="/homeIcons/transportation.png"
            alt="transportation icon"
            className="w-full h-auto animate-prjj"
          />
        </Link>
      )}
      {checkForFinished("shop", 7) ? undefined : (
        <Link className="absolute top-[37%] w-[20%] left-[59%]" href="/shop">
          <img
            src="/homeIcons/shop.png"
            alt="transportation icon"
            className="w-full h-auto animate-prjj"
          />
        </Link>
      )}
      {checkForFinished("consumption", 6) ? undefined : (
        <Link
          className="absolute bottom-[38%] w-[20%] left-[26%]"
          href="/consumption"
        >
          <img
            src="/homeIcons/consumption.png"
            alt="consumption icon"
            className="w-full h-auto animate-prjj"
          />
        </Link>
      )}
      {checkForFinished("recycle", 4) ? undefined : (
        <Link
          className="absolute bottom-[22%] w-[20%] right-[12%]"
          href="/recycle"
        >
          <img
            src="/homeIcons/recycle.png"
            alt="recycle icon"
            className="w-full h-auto animate-prjj"
          />
        </Link>
      )}
    </main>
  );
}
