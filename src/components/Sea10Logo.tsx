import Image from "next/image";

const Sea10Logo = () => {
  return (
    <div>
      <div className="  absolute bottom-4 right-8 ">
        <Image
          src="/Images/Earth-moon.png"
          alt="Sea10's Earth Logo"
          width={300}
          height={300}
        />
      </div>

      <div className="absolute bottom-8 right-8 fuwa">
        <Image
          src="/Images/sticker_Sea10.png"
          alt="Sea10's Earth Logo"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
export default Sea10Logo;
