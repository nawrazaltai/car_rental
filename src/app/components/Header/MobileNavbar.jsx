import Link from "next/link";
import MobileMenuSheet from "./MobileMenuSheet";

const MobileNavbar = () => {
  return (
    <nav className="flex w-full justify-between items-center p-6 bg-black lg:hidden">
      <Link
        href={"/"}
        className="uppercase text-white text-lg w-1/5 flex items-center font-bold"
      >
        logo
      </Link>

      <MobileMenuSheet />
    </nav>
  );
};

export default MobileNavbar;
