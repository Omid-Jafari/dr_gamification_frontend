import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Header from "./header";
import SigninContainer from "./components/signin/signinContainer";
import { Providers } from "./redux/provider";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DR Gamification",
  description:
    "A game which tries to prove that kids learn much more when they're playing.",
  openGraph: {
    type: "website",
    url: "https://drgamification.com",
    title: "رفتار پایدار زیست محیطی",
    description:
      "یک بازی است که سعی به اثبات این دارد که یادگیری کودکان با بازی بیشتر است.",
    // title: "DR Gamification",
    // description:
    //   "DR Gamification is a game which is trying to prove that kids will learn much more when they're playing games.",
    siteName: "DR Gamification",
    images: [
      {
        url: "https://drgamification.com/thumb.png",
        width: 1800,
        height: 1600,
        alt: "DR gamification logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={
          // inter.className +
          " w-full h-[100dvh] flex justify-center overflow-hidden font-Iransans text-[#0A0A0A]"
        }
      >
        <div className="relative w-full sm:w-auto">
          <Providers>
            <>
              <SigninContainer />
              <img
                src="/homePageBG.jpg"
                alt="homePageBG icon"
                className={`w-full sm:w-auto h-[100dvh] sm:object-contain object-fill`}
              />
              <div className="absolute w-full top-0 left-0 overflow-hidden">
                <Header />

                {children}
              </div>
            </>
          </Providers>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
