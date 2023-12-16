"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import uncheckedImg from "@/public/check_box_checked.svg";
import checkedImg from "@/public/check_box_unchecked.svg";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const ContactForm = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={(formValues) => console.log(formValues)}
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="bg-[#141D2F] outline-none border-2 rounded-xl border-red px-4 py-3 placeholder-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="bg-[#141D2F] outline-none border-2 rounded-xl border-red px-4 py-3 placeholder-white"
      />
      <textarea
        name="message"
        placeholder="Your message"
        className="bg-[#141D2F] outline-none border-2 rounded-xl border-red px-4 py-3 placeholder-white h-40"
      />
      <span className="flex gap-4 items-start">
        <Image
          src={checked ? checkedImg : uncheckedImg}
          alt="Checkbox"
          className="hover:cursor-pointer mt-1 transition-all"
          onClick={handleClick}
        />
        <label htmlFor="privacy">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I've red the{" "}
          <Link
            href="/privacy-policy"
            target="_blank"
            className="text-red border-b-[1px] border-b-transparent hover:border-b-red focus:border-b-red transition-all outline-none"
          >
            privacy policy
          </Link>{" "}
          and agree to the processing of my data as outlined
        </label>
      </span>
      <input
        checked={checked}
        name="privacy"
        type="checkbox"
        className="hidden"
      />
      <button
        type="submit"
        aria-disabled={!checked}
        className={twMerge(
          clsx(
            "outline-none px-7 py-3 rounded-xl text-xl border-2 transition-all",
            !checked
              ? "bg-gray-400 border-gray-400"
              : "hover:scale-110 focus:scale-110 bg-orange hover:bg-red focus:bg-red border-orange hover:border-red focus:border-red"
          )
        )}
      >
        Send message :)
      </button>
    </form>
  );
};

export default ContactForm;
