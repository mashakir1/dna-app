import { MouseEventHandler } from "react";
import styles from "./clickableIcon.module.scss";

interface ClickableIconProps {
  icon: JSX.Element;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const ClickableIcon: (props: ClickableIconProps) => JSX.Element = (
  { icon, onClick }
) => {
  return <div onClick={onClick} className={`${styles.clickableIcon} flex`}>
    {icon}
  </div>;
};
