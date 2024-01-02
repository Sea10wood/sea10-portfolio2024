import Image from "next/image";

import Logo from "../../public/Images/Logo.avif";


const Header = () => {
  return (
    <>
      <header className="py-0 px-0 flex justify-between items-center">
        <div className="relative " style={{ width: "100vw" }}>
          <Image
            src={Logo}
            alt="Sea10's Logo"
            style={{
              width: "16vw",
              height: "auto",
              minWidth: "80px",
              maxWidth: "160px",
            }}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
