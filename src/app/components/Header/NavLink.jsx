"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`
        hover: font-semibold relative after:bg-primary after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer
       ${href === pathname ? "text-primary after:hidden" : ""}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
