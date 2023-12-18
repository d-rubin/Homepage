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
        className="md:hidden block cursor-pointer group outline-none"
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
          "bg-[#414856] md:hidden bg-opacity-75 top-20 fixed right-0 bottom-0 transition-all flex items-center justify-center overflow-hidden",
          isOpen ? "w-full" : "w-0"
        )}
      >
        <div className="flex flex-col gap-4 text-center text-2xl h-3/5">
          <DrawerItem text="About me" onClick={setIsOpen} />
          <DrawerItem text="Skills" onClick={setIsOpen} />
          <DrawerItem text="Portfolio" onClick={setIsOpen} />
          <DrawerItem text="Contact" onClick={setIsOpen} />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
