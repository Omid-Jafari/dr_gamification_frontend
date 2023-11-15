"use client";

// import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const router = useRouter();

  return (
    <div className="w-full h-[120px] flex items-center justify-between px-5">
      <button onClick={() => router.back()}>
        <img src="/Back.svg" alt="" />
      </button>
      <button onClick={() => {}}>
        <img src="/Sound.svg" alt="" />
      </button>
      <button onClick={() => {}}>
        <img src="/Group.svg" alt="" />
      </button>
    </div>
  );
};

export default Header;
