import "animate.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-[100vh]">
      <Link
        className="absolute top-[15%] w-[20%] left-[40%]"
        href="/transportation"
      >
        <img
          src="/transportation.svg"
          alt="transportation icon"
          className="w-full h-auto animate-prjj"
        />
      </Link>
    </main>
  );
}
