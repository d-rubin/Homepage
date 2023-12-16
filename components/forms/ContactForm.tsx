"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, KeyboardEvent } from "react";
import uncheckedImg from "@/public/check_box_checked.svg";
import checkedImg from "@/public/check_box_unchecked.svg";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Your name is required"),
  email: z
    .string()
    .min(1, "Your email is required")
    .email("This is not a valid email address"),
  message: z.string().min(1, "Your message is required"),
  privacy: z.literal(true),
});

const ContactForm = () => {
  const {
    register,
    formState: { isSubmitting, isValid, errors },
    handleSubmit,
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const [checked, setChecked] = useState<boolean>(false);
  const { privacy, ...restErrors } = errors;

  const handleClick = () => {
    setChecked(!checked);
  };

  const handleKeyDown = (event: KeyboardEvent) => {};

  const onSubmit = (fieldValues: FieldValues) => {
    const valid = contactSchema.safeParse(fieldValues);
    console.log(valid);
    if (!valid.success) {
      const { error } = valid;
      if (error.name) setError("name", { message: error.name });
      // @ts-ignore
      if (error["email"]) setError("email", { message: error["email"] });
      if (error["message"]) setError("message", { message: error["message"] });
    }
    //   else setError("secondPassword", { message: "Something went wrong." });
    // } else {
    //   const response = await registerFetch(fieldValues);
    //
    //   if (response.status === 201) {
    //     setTrigger(!trigger);
    //     setTimeout(() => push("/summary"));
    //   } else if ("name" in response) {
    //     setError(response.name!, { message: response.message });
    //   }
    // }
    console.log(valid);
    reset();
  };
  console.log(privacy, restErrors);

  return (
    <form
      className="flex flex-col gap-6 md:w-1/2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="flex gap-2 flex-col">
        <input
          type="text"
          {...register("name", { required: true })}
          autoComplete="off"
          placeholder="Your name"
          className="bg-[#141D2F] outline-none border-2 rounded-xl border-red px-4 py-3 placeholder-white"
        />
        <p
          className={twMerge(
            clsx(
              "text-xs text-transparent",
              restErrors.name?.message && "text-red"
            )
          )}
        >
          {/* @ts-ignore */}
          {restErrors.name?.message}
        </p>
      </span>
      <span className="flex gap-2 flex-col">
        <input
          type="email"
          {...register("email", { required: true })}
          autoComplete="off"
          placeholder="Your email"
          className="bg-[#141D2F] outline-none border-2 rounded-xl border-red px-4 py-3 placeholder-white"
        />
        <p
          className={twMerge(
            clsx(
              "text-xs text-transparent",
              restErrors.email?.message && "text-red"
            )
          )}
        >
          {/* @ts-ignore */}
          {restErrors.email?.message}
        </p>
      </span>
      <span className="flex gap-2 flex-col">
        <textarea
          {...register("message", { required: true })}
          autoComplete="off"
          placeholder="Your message"
          className="bg-[#141D2F] outline-none border-2 rounded-xl border-red px-4 py-3 placeholder-white h-40"
        />
        <p
          className={twMerge(
            clsx(
              "text-xs text-transparent",
              restErrors.message?.message && "text-red"
            )
          )}
        >
          {/* @ts-ignore */}
          {restErrors.message?.message}
        </p>
      </span>
      <span className="flex gap-4 items-start">
        <Image
          src={checked ? checkedImg : uncheckedImg}
          alt="Checkbox"
          className="hover:cursor-pointer mt-1 transition-all"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        />
        <span className="flex flex-col gap-2">
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
          <p
            className={twMerge(
              clsx("text-xs text-transparent", privacy && "text-red")
            )}
          >
            Please accept the privacy policy
          </p>
        </span>
      </span>
      <input
        {...register("privacy")}
        checked={checked}
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
              : "hover:scale-105 focus:scale-105 bg-orange hover:bg-red focus:bg-red border-orange hover:border-red focus:border-red",
            isSubmitting &&
              "bg-gray-400 animate-pulse text-gray-400 border-gray-400"
          )
        )}
      >
        Send message :)
      </button>
    </form>
  );
};

export default ContactForm;
