import Header from "@/components/Header";
import Sea10Logo from "@/components/Sea10Logo";
import Speach from "@/components/Speach";
import { Contributions } from "@/components/organisms/Contributions";
import { Box, Typography } from "@mui/material";
export default function Home() {
  return (
    <>
      <main
        className={` font-bold justify-between px-6 min-w-screen max-h-screen relative overflow-hidden bg-gradient-to-b from-cyan-500 from-10% via-sky-500 via-30% to-sky-900 to-90%`}
      >
        <div className="z-10">
          <Header />

          <Speach />

          <div style={{ width: "100vw", height: "100vh" }}>
            <Sea10Logo />
          </div>
        </div>
        <div className="z-3 relative">
        <Contributions />
      </div>
       
      </main>

      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </>
  );
}
