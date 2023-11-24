import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-[100vh]">
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
      <Link className="absolute top-[37%] w-[20%] left-[59%]" href="/shop">
        <img
          src="/homeIcons/shop.png"
          alt="transportation icon"
          className="w-full h-auto animate-prjj"
        />
      </Link>
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
    </main>
  );
}
