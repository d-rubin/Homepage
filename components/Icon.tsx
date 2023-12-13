type TIcon = {
  width: number;
  height: number;
  paths: string[];
  strokeWidth?: number;
  strokeColor?: string;
  lineCap?: "round" | "butt" | "square" | "inherit";
};

const icons: { [key: string]: TIcon } = {
  burgerMenu: {
    width: 32,
    height: 31,
    strokeColor: "#FFFFFF",
    paths: ["M1 1.5127H31", "M1 15.5127H31", "M1 29.5127H31"],
  },
  x: {
    width: 35,
    height: 32,
    paths: ["M7 5L27.6506 26.7612", "M7 27L27.46 5.05939"],
  },
};

const Icon = ({ icon, className }: { icon: string; className?: string }) => {
  if (!(icon in icons)) return null;

  return (
    <svg
      viewBox={`0 0 ${icons[icon].width || "0"} ${icons[icon].height || "0"}`}
      width={icons[icon].width}
      height={icons[icon].height}
      className={className}
    >
      {icons[icon].paths.map((path) => {
        return (
          <path
            key={path}
            d={path}
            strokeLinecap={icons[icon].lineCap || "round"}
            strokeWidth={icons[icon].strokeWidth || 2}
          />
        );
      })}
    </svg>
  );
};

export default Icon;
