import React, { FC } from "react";
import { IconContext } from "react-icons";
import { IoIosSunny, IoIosMoon, IoIosContrast } from "react-icons/io";
import iconStyle from "./Icon.module.scss";

type Props = {
  icon: "moon" | "sun" | "contrast";
  className?: string | null;
};

const Icon: FC<Props> = ({ icon, className }) => (
  <IconContext.Provider value={{ className: `${iconStyle.icon} ${className}` }}>
    {icon === "moon" ? (
      <IoIosMoon />
    ) : icon === "sun" ? (
      <IoIosSunny />
    ) : icon === "contrast" ? (
      <IoIosContrast />
    ) : null}
  </IconContext.Provider>
);

export default Icon;
