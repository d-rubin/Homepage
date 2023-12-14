import Link from "next/link";
import clsx from "clsx";

const LinkButton = ({
  label,
  href,
  variant,
  color = "orange",
}: {
  label: string;
  href: string;
  variant: "default" | "outline";
  color: "red" | "orange";
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "outline-none px-7 py-3 rounded-xl text-xl",
        color !== "orange" ? "bg-red" : "bg-orange"
      )}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
