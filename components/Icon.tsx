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
  lightBulb: {
    width: 42,
    height: 60,
    strokeColor: "#FA7902",
    paths: [
      "M35.2668 34.4576C33.1462 37.3661 30.9116 40.431 29.6783 43.9883H12.3271C11.0882 40.3892 8.80929 37.2789 6.65063 34.3327L6.62354 34.2957L6.62286 34.2948C6.01051 33.461 5.40694 32.6391 4.82776 31.8074L4.8267 31.8059C2.61386 28.6408 1.31714 24.7851 1.31714 20.625C1.31714 9.7893 10.127 1 21 1C31.8725 1 40.6828 9.78893 40.6828 20.6367C40.6828 24.796 39.3865 28.6407 37.1723 31.819L37.1721 31.8192C36.593 32.6508 35.9894 33.4727 35.377 34.3065L35.3749 34.3094L35.2668 34.4576ZM29.4012 50.625C29.4012 55.2498 25.6445 59 21 59C16.3554 59 12.5987 55.2498 12.5987 50.625V49.75H29.4012V50.625ZM9.71842 23.5C11.3022 23.5 12.5987 22.2112 12.5987 20.625C12.5987 16.0002 16.3554 12.25 21 12.25C22.5837 12.25 23.8802 10.9612 23.8802 9.375C23.8802 7.78883 22.5837 6.5 21 6.5C13.1761 6.5 6.83816 12.8162 6.83816 20.625C6.83816 22.2112 8.13463 23.5 9.71842 23.5Z",
    ],
  },
  linkedIn: {
    width: 40,
    height: 40,
    paths: [
      "M20 0C8.93333 0 0 8.93333 0 20C0 31.0667 8.93333 40 20 40C31.0667 40 40 31.0667 40 20C40 8.93333 31.0667 0 20 0ZM8.93333 7.33333C9.46667 6.93333 10.1333 6.66667 10.6667 6.66667C11.2 6.66667 12 6.93333 12.4 7.33333C12.8 7.86667 13.0667 8.4 13.0667 9.06667C13.0667 9.73333 12.8 10.4 12.2667 10.8C12 11.3333 11.3333 11.6 10.6667 11.6C10 11.6 9.33333 11.3333 8.93333 10.9333C8.53333 10.4 8.26667 9.73333 8.26667 9.06667C8.26667 8.4 8.53333 7.86667 8.93333 7.33333ZM13.2 28.8H8.26667V13.4667H13.2V28.8ZM31.7333 28.8H26.8V20.6667C26.8 15.7333 20.9333 16.1333 20.9333 20.6667V28.8H16.1333V13.4667H21.0667V15.4667C23.0667 11.7333 31.8667 11.4667 31.8667 19.0667V28.8H31.7333Z",
    ],
  },
  puzzle: {
    width: 60,
    height: 60,
    strokeColor: "#FA7902",
    strokeWidth: 1,
    paths: [
      "M24.8829 2C28.5953 2.1 31.6054 5.2 31.6054 8.9V10.7V12.7H33.612H42.1405C43.5452 12.7 44.9498 13.3 45.9532 14.3C46.9565 15.3 47.5585 16.6 47.4582 18V26.5V28.5H49.4649H51.2709C55.0836 28.5 58.194 31.5 58.194 35.2C58.194 39 55.1839 42.1 51.3712 42.1H49.4649H47.4582V44.1V52.6C47.4582 55.6 45.0502 58 42.1405 58H32.107V53.9C32.107 53.1 31.9064 52.2 31.6054 51.5C31.3043 50.7 30.8027 50.1 30.2007 49.5C28.796 48.1 26.7893 47.4 24.7826 47.4H24.6823C22.8763 47.4 21.0702 48.1 19.5652 49.3C18.1605 50.6 17.3579 52.2 17.3579 54.1V58.1H7.52508C6.1204 58.1 4.71572 57.5 3.61204 56.5C2.6087 55.5 2.00669 54.1 2.00669 52.7V42.9H6.1204C7.92642 42.9 9.63211 42.2 10.9365 40.8C11.6388 40.1 12.2408 39.2 12.6421 38.3C13.0435 37.4 13.2441 36.4 13.2441 35.4C13.1438 31.3 9.83278 28 6.02007 28H2.00669V18C2.00669 16.6 2.6087 15.2 3.61204 14.2C4.61538 13.2 6.02007 12.7 7.52508 12.7H16.0535H18.0602V10.7V8.8C18.0602 7.9 18.2609 7 18.5619 6.2C18.9632 5.4 19.4649 4.6 20.0669 4C20.6689 3.4 21.4716 2.9 22.2742 2.5C23.0769 2.2 23.9799 2 24.8829 2ZM24.8829 0C23.7793 0 22.5753 0.2 21.5719 0.6C20.4682 1 19.4649 1.7 18.6622 2.5C17.8595 3.3 17.1572 4.3 16.7559 5.4C16.3545 6.5 16.0535 7.6 16.0535 8.8V10.7H7.52508C5.61873 10.7 3.71237 11.4 2.30769 12.8C0.802675 14.2 0 16.1 0 18V30H6.02007C8.7291 30 11.1371 32.4 11.1371 35.2C11.1371 36 11.0368 36.7 10.7358 37.4C10.4348 38.1 10.0334 38.7 9.53177 39.2C8.62876 40.1 7.42475 40.7 6.1204 40.7H0V52.5C0 54.5 0.802676 56.4 2.20736 57.8C3.61204 59.2 5.51839 60 7.52508 60H19.3645V54C19.3645 52.4 20.1672 51.3 20.8696 50.7C21.9732 49.8 23.2776 49.3 24.6823 49.3H24.7826C26.2876 49.3 27.7926 49.9 28.796 50.9C29.1973 51.3 29.4983 51.8 29.699 52.3C29.8997 52.8 30 53.4 30 53.9V60H41.9398C45.9532 60 49.2642 56.7 49.2642 52.6V44.1H51.1706C55.9866 44.1 60 40.1 60 35.2C60 30.4 55.9866 26.5 51.0702 26.5H49.2642V18C49.2642 14 45.8528 10.7 41.9398 10.7H33.4114V8.9C33.612 4.1 29.699 0.1 24.8829 0Z",
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
            stroke={icons[icon].strokeColor}
          />
        );
      })}
    </svg>
  );
};

export default Icon;