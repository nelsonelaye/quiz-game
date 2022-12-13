import React from "react";
import style from "./Alert.module.scss";
import { props as AppProps } from "./Alert.types";

const Alert = ({ text, status }: AppProps) => {
  if (status.toLowerCase() === "success") {
    return (
      <div className={style["container"]} style={{ backgroundColor: "lime" }}>
        {text}
      </div>
    );
  }
  return (
    <div
      className={style["container"]}
      style={{ backgroundColor: "rgba(255, 0, 0, 0.8)" }}
    >
      {text}
    </div>
  );
};

export default Alert;
