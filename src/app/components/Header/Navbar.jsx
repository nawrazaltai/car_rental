import Link from "next/link";

const Navbar = () => {
  const navbarItems = [
    { label: "Cars", href: "/" },
    { label: "About", href: "/" },
    { label: "How it works", href: "/" },
    { label: "Location", href: "/" },
  ];

  const mappedNavbarItems = navbarItems.map((i) => {
    return (
      <Link key={i.label} href={i.href}>
        {i.label}
      </Link>
    );
  });

  return (
    <div className="flex w-full bg-blue-700 justify-between p-6">
      <div className="uppercase text-white text-lg w-1/5 flex items-center">
        logo
      </div>
      <div className="text-white text-md flex justify-around w-1/3 items-center">
        {mappedNavbarItems}
      </div>

      <div className="gap-x-2 w-1/5 flex justify-end">
        <Link
          href="/"
          className="text-white border border-white rounded-md p-3"
        >
          Get started
        </Link>
        <Link className="text-blue-700 bg-white rounded-md p-3" href="/">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
