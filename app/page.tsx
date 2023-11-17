import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-[100vh] bg-[url(/homePageBG.jpg)] bg-no-repeat sm:bg-[length:auto_100%] bg-[length:100%_100%]">
      <Link
        className="absolute top-[15%] w-[20%] left-[40%]"
        href="/transportation"
      >
        <img
          src="/transportation.png"
          alt="transportation icon"
          className="w-full h-auto animate-prjj"
        />
      </Link>
    </main>
  );
}
