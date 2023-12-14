type TIcon = {
  width: number;
  height: number;
  paths: string[];
  strokeWidth?: number;
  strokeColor?: string;
  lineCap?: "round" | "butt" | "square" | "inherit";
};

const icons: { [key: string]: TIcon } = {
  arrowDown: {
    width: 16,
    height: 16,
    strokeWidth: 1,
    paths: [
      "M8.99998 12.172L13.657 7.515C14.0475 7.12453 14.6805 7.12453 15.071 7.515C15.4615 7.90547 15.4614 8.53854 15.071 8.929L8.70709 15.2929C8.31657 15.6834 7.6834 15.6834 7.29288 15.2929L0.928985 8.929C0.538519 8.53853 0.538519 7.90547 0.928985 7.515C1.31945 7.12453 1.95252 7.12453 2.34299 7.515L6.99998 12.172V1C6.99998 0.447715 7.4477 0 7.99998 0C8.55227 0 8.99998 0.447715 8.99998 1V12.172Z",
    ],
  },
  burgerMenu: {
    width: 32,
    height: 31,
    strokeColor: "#FFFFFF",
    paths: ["M1 1.5127H31", "M1 15.5127H31", "M1 29.5127H31"],
  },
  email: {
    width: 40,
    height: 40,
    paths: [
      "M20 0C8.93333 0 0 8.93333 0 20C0 31.0667 8.93333 40 20 40C31.0667 40 40 31.0667 40 20C40 8.93333 31.0667 0 20 0ZM32 27.4667C32 28.1333 31.4667 28.6667 30.8 28.6667H9.33333C8.53333 28.6667 8 28 8 27.3333V14.4L20 20.6667L32 14.4V27.4667ZM32 12.9333L20 19.2L8 12.9333V12.6667C8 12 8.53333 11.3333 9.33333 11.3333H30.6667C31.4667 11.3333 32 12 32 12.6667V12.9333Z",
    ],
  },
  github: {
    width: 42,
    height: 41,
    paths: [
      "M20.5064 0.259766C9.17661 0.259766 2.993e-06 9.43637 2.993e-06 20.7661C-0.00232288 25.071 1.35099 29.2673 3.86795 32.7597C6.38491 36.252 9.93769 38.8632 14.0223 40.2226C15.0476 40.401 15.4311 39.7858 15.4311 39.2465C15.4311 38.7605 15.4044 37.1466 15.4044 35.4282C10.2532 36.3776 8.92028 34.1732 8.51015 33.0187C8.27843 32.4281 7.27977 30.6092 6.40825 30.1212C5.69052 29.7377 4.6652 28.7882 6.38159 28.7636C7.99749 28.737 9.14995 30.2503 9.53547 30.8655C11.381 33.9661 14.3299 33.0946 15.5069 32.5573C15.6874 31.2244 16.2246 30.3283 16.8152 29.8156C12.2526 29.3029 7.48483 27.5332 7.48483 19.6896C7.48483 17.4585 8.27843 15.6149 9.58673 14.1774C9.38167 13.6648 8.66395 11.5629 9.7918 8.74325C9.7918 8.74325 11.5082 8.20599 15.4311 10.8472C17.1004 10.3839 18.8252 10.1507 20.5576 10.1541C22.3007 10.1541 24.0437 10.3838 25.6842 10.8452C29.6051 8.17933 31.3235 8.7453 31.3235 8.7453C32.4513 11.5649 31.7336 13.6668 31.5286 14.1795C32.8348 15.6149 33.6305 17.4339 33.6305 19.6896C33.6305 27.5599 28.8381 29.3029 24.2755 29.8156C25.0178 30.4554 25.6596 31.6858 25.6596 33.6093C25.6596 36.351 25.633 38.5554 25.633 39.2485C25.633 39.7858 26.0185 40.4256 27.0438 40.2205C31.1144 38.8462 34.6515 36.23 37.1574 32.7401C39.6632 29.2503 41.0116 25.0625 41.0128 20.7661C41.0128 9.43637 31.8362 0.259766 20.5064 0.259766Z",
    ],
  },
  linkedIn: {
    width: 40,
    height: 40,
    paths: [
      "M20 0C8.93333 0 0 8.93333 0 20C0 31.0667 8.93333 40 20 40C31.0667 40 40 31.0667 40 20C40 8.93333 31.0667 0 20 0ZM8.93333 7.33333C9.46667 6.93333 10.1333 6.66667 10.6667 6.66667C11.2 6.66667 12 6.93333 12.4 7.33333C12.8 7.86667 13.0667 8.4 13.0667 9.06667C13.0667 9.73333 12.8 10.4 12.2667 10.8C12 11.3333 11.3333 11.6 10.6667 11.6C10 11.6 9.33333 11.3333 8.93333 10.9333C8.53333 10.4 8.26667 9.73333 8.26667 9.06667C8.26667 8.4 8.53333 7.86667 8.93333 7.33333ZM13.2 28.8H8.26667V13.4667H13.2V28.8ZM31.7333 28.8H26.8V20.6667C26.8 15.7333 20.9333 16.1333 20.9333 20.6667V28.8H16.1333V13.4667H21.0667V15.4667C23.0667 11.7333 31.8667 11.4667 31.8667 19.0667V28.8H31.7333Z",
    ],
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
