import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const navbarItems = [
    { label: "Cars", href: "/cars" },
    { label: "About", href: "/about" },
    { label: "How it works", href: "/howitworks" },
    { label: "Location", href: "/location" },
  ];

  const mappedNavbarItems = navbarItems.map((i) => {
    return (
      <NavLink key={i.label} href={i.href}>
        {i.label}
      </NavLink>
    );
  });

  return (
    <nav className="w-full justify-between p-6 px-8 bg-black hidden lg:flex">
      <Link
        href="/"
        className="uppercase text-white text-lg w-1/5 flex items-center font-bold"
      >
        logo
      </Link>

      <div className="text-white text-md flex gap-x-8 items-center">
        {mappedNavbarItems}
      </div>

      <div className="gap-x-2 w-1/5 flex justify-end">
        <Link
          href="/signin"
          className="text-white rounded-md font-bold p-3 hover:text-primary transition"
        >
          Sign in
        </Link>

        <Link
          className="transition-colors font-bold bg-white rounded-md p-3 hover:bg-primary"
          href="/register"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
