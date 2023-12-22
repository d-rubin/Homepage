"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, KeyboardEvent, useRef } from "react";
import uncheckedImg from "@/public/check_box_checked.svg";
import checkedImg from "@/public/check_box_unchecked.svg";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Notification from "@/components/Notification";

const contactSchema = z.object({
  name: z.string().min(1, "Your name is required"),
  email: z
    .string()
    .min(1, "Your email is required")
    .email("This is not a valid email address"),
  message: z.string().min(1, "Your message is required"),
  privacy: z.boolean().optional(),
});

const ContactForm = () => {
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [privacyError, setPrivacyError] = useState<boolean>(false);
  const { privacy, ...restErrors } = errors;

  const handleClick = () => {
    setChecked(!checked);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === " ") setChecked(!checked);
  };

  const handleTrigger = () => {
    setTrigger(true);
    setTimeout(() => setTrigger(false), 3000);
  };

  const onSubmit = async (fieldValues: FieldValues) => {
    if (!checked) setPrivacyError(true);
    else {
      const valid = contactSchema.safeParse(fieldValues);

      if (!valid.success) {
        const { error } = valid;
        if (error.name) setError("name", { message: error.name });
        // @ts-ignore
        if (error["email"]) setError("email", { message: error["email"] });
        if (error["message"])
          setError("message", { message: error["message"] });
      } else {
        const response = await fetch("api/send-mail", {
          method: "POST",
          body: JSON.stringify(valid.data),
        });
        if (response.status === 200) handleTrigger();
        else console.error(response);
        reset();
      }
      buttonRef.current?.blur();
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="flex gap-2 flex-col">
          <input
            type="text"
            {...register("name", { required: true })}
            autoComplete="off"
            placeholder="Your name"
            className={
              "bg-[#141D2F] outline-none border-[1px] rounded-xl border-red px-4 py-2 placeholder-white hover:border-orange transition-all"
            }
          />
          <p
            className={twMerge(
              clsx(
                "text-xs text-transparent",
                restErrors.name?.message && "text-red"
              )
            )}
          >
            Your name is required
          </p>
        </span>
        <span className="flex gap-2 flex-col">
          <input
            type="email"
            {...register("email", { required: true })}
            autoComplete="off"
            placeholder="Your email"
            className="bg-[#141D2F] outline-none border-[1px] rounded-xl border-red px-4 py-2 placeholder-white hover:border-orange transition-all"
          />
          <p
            className={twMerge(
              clsx(
                "text-xs text-transparent",
                restErrors.email?.message && "text-red"
              )
            )}
          >
            Your email is required
          </p>
        </span>
        <span className="flex gap-2 flex-col">
          <textarea
            {...register("message", { required: true })}
            autoComplete="off"
            placeholder="Your message"
            className="bg-[#141D2F] outline-none border-[1px] rounded-xl border-red px-4 py-2 placeholder-white h-40 hover:border-orange transition-all"
          />
          <p
            className={twMerge(
              clsx(
                "text-xs text-transparent",
                restErrors.message?.message && "text-red"
              )
            )}
          >
            Your message is required
          </p>
        </span>
        <span className="flex gap-4 items-start">
          <span className="group">
            <span className="h-5 w-5 relative block">
              <Image
                src={checked ? checkedImg : uncheckedImg}
                alt="Checkbox"
                fill
                className="hover:cursor-pointer mt-1 transition-all outline-none group-focus-within:scale-125"
                onClick={handleClick}
              />
            </span>
            <input
              {...register("privacy")}
              checked={checked}
              type="checkbox"
              className="h-0 w-0"
              onKeyDown={handleKeyDown}
            />
          </span>
          <span className="flex flex-col gap-1">
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
                clsx(
                  "text-xs text-transparent",
                  !checked && privacyError && "text-red"
                )
              )}
            >
              Please accept the privacy policy
            </p>
          </span>
        </span>
        <button
          type="submit"
          ref={buttonRef}
          aria-disabled={!checked}
          className={twMerge(
            clsx(
              "outline-none px-7 py-3 rounded-xl text-xl border-2 transition-all",
              !checked && !isSubmitting
                ? "bg-gray-400 border-gray-400"
                : "hover:scale-105 focus:scale-105 bg-orange hover:bg-red focus:bg-red border-orange hover:border-red focus:border-red",
              isSubmitting &&
                "bg-gray-400 animate-pulse text-gray-400 border-gray-400 hover:border-gray-400 hover:bg-gray-400 focus:border-gray-400 focus:bg-gray-400 pointer-events-none"
            )
          )}
        >
          Send message :)
        </button>
      </form>
      <Notification trigger={trigger} />
    </>
  );
};

export default ContactForm;
