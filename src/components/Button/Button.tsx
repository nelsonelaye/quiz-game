import React from "react";
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import style from "./Button.module.scss";
import { props as AppProps } from "./Button.types";

const Button = ({ children, bg, disable, onClick }: AppProps) => {
  if (disable) {
    return (
      <button
        className={style["container"]}
        style={{ backgroundColor: bg }}
        onClick={onClick}
        disabled
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={style["container"]}
        style={{ backgroundColor: bg }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;
