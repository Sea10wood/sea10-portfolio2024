import Header from "@/components/Header";
import Sea10Logo from "@/components/Sea10Logo";
import Speach from "@/components/Speach";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={` font-bold justify-between px-6 min-w-screen max-h-screen relative overflow-hidden bg-gradient-to-b from-cyan-500 from-10% via-sky-500 via-30% to-sky-900 to-90% `}
      >
      <Header />
      <Speach/>
      <div style={{ width: '100vw', height: '100vh' }}>
      <Sea10Logo/>
    </div>
      
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>


       
      </main>
    </>
  );
}
