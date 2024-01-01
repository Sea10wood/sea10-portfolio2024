import Header from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={` font-bold justify-between px-6 min-w-screen min-h-screen relative overflow-hidden bg-gradient-to-b from-cyan-500 from-10% via-sky-500 via-30% to-sky-900 to-90% `}
      >
      <Header />
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>

        <p>Hello world</p>
      </main>
    </>
  );
}
