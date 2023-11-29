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
              <div className="absolute w-full top-0 left-0">
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
