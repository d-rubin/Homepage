import Link from "next/link";
import { generateHref } from "@/utils/helper";

const DrawerItem = ({ text }: { text: string }) => {
  return (
    <Link
      href={generateHref(text)}
      className="outline-none hover:scale-125 focus:scale-125 transition-all"
    >
      {text}
    </Link>
  );
};

export default DrawerItem;
