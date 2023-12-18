"use client";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

const Notification = ({ trigger }: { trigger: boolean }) => {
  const [bottom, setBottom] = useState("-200px");

  useEffect(() => {
    if (trigger) {
      setBottom("200px");
      setTimeout(() => setBottom("-100px"), 3000);
    }
  }, [trigger]);

  return (
    <div
      style={{ bottom: bottom }}
      className="left-0 right-0 z-40 flex justify-center fixed -bottom-24 transition-all duration-1000"
    >
      <div
        className={twMerge(
          clsx(
            "border-2 bg-[#141D2F] border-green-500 flex items-center h-20 w-fit rounded-3xl px-6 py-3 text-2xl"
          )
        )}
      >
        Email was send successfully!
      </div>
    </div>
  );
};

export default Notification;
