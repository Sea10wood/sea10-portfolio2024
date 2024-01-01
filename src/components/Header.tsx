import Image from "next/image";

const Header = () => {
  return (
    <header className="py-0 px-0 flex justify-between items-center">
      <div className="flex flex-auto ">
        <Image
          src="/Images/Logo.avif"
          alt="Sea10's Logo"
          height={100}
          width={100}
          priority
        />
      </div>

      <div className="flex justify-end gap-4 items-center">
        <span className="h-12"></span>
        <div className="flex space-x-4">
          <Image
            src="/Images/x-logo-white.png"
            alt="Instagram-Logo"
            width={16}
            height={16}
          />
          <Image
            src="/Images/Instagram_Glyph_White.png"
            alt="X-Logo"
            width={16}
            height={16}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
