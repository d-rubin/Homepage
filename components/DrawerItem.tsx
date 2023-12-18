import Link from "next/link";
import { generateHref } from "@/utils/helper";

const DrawerItem = ({
  text,
  onClick,
}: {
  text: string;
  onClick: (bool: boolean) => void;
}) => {
  return (
    <Link
      href={generateHref(text)}
      onClick={() => onClick(false)}
      className="outline-none hover:scale-125 focus:scale-125 transition-all"
    >
      {text}
    </Link>
  );
};

export default DrawerItem;
