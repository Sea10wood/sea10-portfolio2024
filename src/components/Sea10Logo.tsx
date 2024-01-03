import Image from "next/image";
import earthmoon from "../../public/Images/Earth-moon.png";
import sea10wood from "../../public/Images/sticker_Sea10.png";

const Sea10Logo = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Image
        src={earthmoon}
        alt="Sea10's Earth Logo"
        style={{
          width: "50%",
          height: "auto",
        }}
        className="bottom-2 right-2 absolute"
      />

      <Image
        src={sea10wood}
        alt="Sea10's Earth Logo"
        style={{
          width: "50%",
          height: "auto",
        }}
        className="bottom-4 right-2 fuwa absolute"
      />
    </div>
  );
};
export default Sea10Logo;
