"use client";

import Icon from "@/components/Icon";
import { useState } from "react";
import clsx from "clsx";
import { KeyboardEvent } from "react";
import Link from "next/link";
import DrawerItem from "./DrawerItem";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="sm:hidden cursor-pointer group outline-none"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        <Icon
          icon={isOpen ? "x" : "burgerMenu"}
          className="stroke-white group-hover:stroke-orange group-focus:stroke-orange transition-all"
        />
      </div>
      <div
        className={clsx(
          // Todo: Adjust bg-opacity when page has content
          "bg-transparent sm:hidden bg-opacity-50 top-20 fixed right-0 bottom-0 transition-all flex items-center justify-center overflow-hidden",
          isOpen ? "w-full" : "w-0"
        )}
      >
        <div className="flex flex-col gap-4 text-center text-2xl h-3/5">
          <DrawerItem text="About me" />
          <DrawerItem text="Skills" />
          <DrawerItem text="Portfolio" />
          <DrawerItem text="Contact" />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
