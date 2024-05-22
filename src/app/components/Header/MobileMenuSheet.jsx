"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navbarItems } from "@/utils/constants";
import NavLink from "./NavLink";

const MobileMenuSheet = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const mappedNavbarItems = navbarItems.map((i) => {
    return (
      <Link
        className="max-w-max text-white hover: font-semibold relative after:bg-primary after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
        key={i.label}
        href={i.href}
        onClick={() => setSheetOpen(false)}
      >
        {i.label}
      </Link>
    );
  });

  return (
    <Sheet className="border-none" open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger>
        <HiMenuAlt3 size={33} color="#FFF" onClick={() => setSheetOpen(true)} />
      </SheetTrigger>

      <SheetContent className="bg-black">
        <SheetHeader className="flex flex-row items-center w-full justify-between">
          <SheetTitle className="uppercase text-white font-bold text-lg text-start">
            <Link href={"/"} onClick={() => setSheetOpen(false)}>
              open road
            </Link>
          </SheetTitle>

          <SheetClose className="text-white relative bottom-1">
            <HiX size={33} color="#FFF" />
          </SheetClose>
        </SheetHeader>

        <section className="flex flex-col gap-y-10 mt-8 max-w-max">
          {mappedNavbarItems}
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuSheet;
