import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-0 px-0 flex justify-between items-center">
      <div className="flex flex-auto ">
        <Image
          src="/Images/Logo.avif"
          alt="Sea10's Logo"
          height={100}
          width={100}
        />
      </div>

      <div className="flex justify-end gap-4 items-center">
        <span className="h-12"></span>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/10derSea"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Images/x-logo-white.png"
              alt="X-Logo"
              width={16}
              height={16}
            />
          </a>
          <a
            href="https://www.instagram.com/sea10____/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Images/Instagram_Glyph_White.png"
              alt="Instagram-Logo"
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
