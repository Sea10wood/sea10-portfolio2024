import Image from "next/image";
import earthmoon from "../../public/Images/Earth-moon.png";
import sea10wood from "../../public/Images/sticker_Sea10.png";

const Sea10Logo = () => {
  return (
    <div >
      <div className="absolute bottom-2 right-2 " style={{ display: "relative" }}>
        <Image
          src={earthmoon}
          alt="Sea10's Earth Logo"
          sizes="80vw"
          style={{
            width: "90%",
            height: "80%",
          }}
        />
      </div>

      <div className="absolute bottom-4 right-2 fuwa" style={{ display: "relative" }}>
        <Image
          src={sea10wood}
          alt="Sea10's Earth Logo"
          sizes="80vw"
          style={{
            width: "90%",
            height: "80%",
          }}
        />
      </div>
    </div>
  );
};
export default Sea10Logo;
