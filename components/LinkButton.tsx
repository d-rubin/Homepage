import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const LinkButton = ({
  label,
  href,
  variant = "default",
  color = "orange",
  target,
  ...restProps
}: {
  label: string;
  href: string;
  variant?: "default" | "outline";
  color?: "red" | "orange";
  target?: "_blank" | "_self";
} & LinkProps<HTMLAnchorElement>) => {
  return (
    <Link
      href={href}
      target={target}
      className={twMerge(
        clsx(
          "outline-none px-7 py-3 rounded-xl text-xl border-2 hover:scale-110 focus:scale-110 transition-all",
          color !== "orange"
            ? "bg-red hover:bg-orange focus:bg-orange border-red hover:border-orange focus:border-orange"
            : "bg-orange hover:bg-red focus:bg-red border-orange hover:border-red focus:border-red",
          variant === "outline" &&
            "border-orange bg-[#141D2F] hover:bg-orange focus:bg-orange hover:border-orange focus:border-orange"
        )
      )}
      {...restProps}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
