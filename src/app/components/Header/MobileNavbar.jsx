import Link from "next/link";

const MobileNavbar = () => {
  // const navbarItems = [
  //   { label: "Cars", href: "/" },
  //   { label: "About", href: "/" },
  //   { label: "How it works", href: "/" },
  //   { label: "Location", href: "/" },
  // ];

  // const mappedNavbarItems = navbarItems.map((i) => {
  //   return (
  //     <Link key={i.label} href={i.href}>
  //       {i.label}
  //     </Link>
  //   );
  // });

  return (
    <nav className="flex w-full justify-between p-6 bg-black lg:hidden">
      <div className="uppercase text-white text-lg w-1/5 flex items-center font-bold">
        logo
      </div>

      <div></div>

      {/* <div className="text-white text-md flex justify-around w-1/3 items-center">
        {mappedNavbarItems}
      </div> */}

      {/* <div className="gap-x-2 w-1/5 flex justify-end">
        <Link
          href="/"
          className="text-white border border-white rounded-md p-3"
        >
          Get started
        </Link>
        <Link className="text-blue-700 bg-white rounded-md p-3" href="/signin">
          Sign in
        </Link>
      </div> */}
    </nav>
  );
};

export default MobileNavbar;
