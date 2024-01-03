import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sea10Logo from "@/components/Sea10Logo";
import Speach from "@/components/Speach";
import { Contributions } from "@/components/organisms/Contributions";
import Image from "next/image";
import Rotate from "../../public/Images/rotate.png";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const handleOrientationChange = () => {
      const landscapeImage = document.getElementById("landscapeImage");

      if (Math.abs(window.orientation) === 90) {
    
        if (landscapeImage) landscapeImage.style.display = "none";
      } else {
       
        if (landscapeImage) landscapeImage.style.display = "block";
      }
    };

    // Attach the event listener
    window.addEventListener("load", handleOrientationChange);
    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("load", handleOrientationChange);
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);
  return (
    <>
      <main
        className={` font-bold justify-between px-6 min-w-screen max-h-screen relative overflow-hidden bg-gradient-to-b from-cyan-500 from-10% via-sky-500 via-30% to-sky-900 to-90%`}
      >
        <div
          id="landscapeImage"
          style={{ display: "none", width: "100vw", height: "auto" }}
          className="z-20 fix"
        >
          <Image src={Rotate} alt="Rotate_suggest_Image" layout="fill" />
        </div>
        <div className="z-10">
          <Header />

          <Speach />

          <div style={{ width: "100vw", height: "100vh" }}>
            <Sea10Logo />
          </div>
        </div>
        <Footer />

        {/* <Contributions /> */}
      </main>

      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </>
  );
}
