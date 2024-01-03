import Link from "next/link";
import Image from "next/image";
import X from "../../public/Images/x-logo-white.png";
import Instagram from "../../public/Images/Instagram_Glyph_White.png";
import GitHub from "../../public/Images/github.png";

const Footer = () => {
  return (
    <div
      className="absolute flex items-center space-x-6"
      style={{ width: "1%", left: "32px", bottom: "3vw" }}
    >
      <Link
        href="https://github.com/Sea10wood"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={GitHub}
          alt="GitHub-Logo"
          style={{
            width: "16%",
            height: "auto",
            minWidth: "44px",
          }}
        />
      </Link>

      <Link
        href="https://www.instagram.com/sea10____/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={Instagram}
          alt="Instagram-Logo"
          style={{
            width: "16%",
            height: "auto",
            minWidth: "44px",
          }}
        />
      </Link>

      <Link
        href="https://twitter.com/10derSea"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={X}
          alt="X-Logo"
          style={{
            width: "16%",
            height: "auto",
            minWidth: "44px",
          }}
        />
      </Link>
    </div>
  );
};
export default Footer;
