import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#48b7e9] md:px-16 px-5 py-3 flex justify-between items-center shadow-xl fixed top-0 right-0 w-full">
      <Image
        src={"/assets/logo.png"}
        alt="Logo"
        width={50}
        height={50}
        priority
      />

      <div className="flex gap-3 items-center">
        <Link
          href={"/"}
          className="text-white hover:text-gray-100 text-sm uppercase font-medium"
        >
          Login
        </Link>
        <Link
          href={"/"}
          className="text-white hover:text-gray-100 text-sm uppercase font-medium"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
