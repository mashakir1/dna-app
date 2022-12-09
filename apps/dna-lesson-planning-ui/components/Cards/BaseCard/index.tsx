// Imports
import { ReactNode } from "react";

// Styles
import styles from "./BaseCard.module.scss";

interface BaseCardProps {
  bordered?: boolean;
  children: ReactNode;
  classNames?: string
  onClick?: () => void
}

export const BaseCard: (props: BaseCardProps) => JSX.Element = ({
  bordered, children, classNames, onClick
}) => (
  <div className={`${
    bordered ? styles.bordered : ""
  } ${
    styles.card
  } ${
    classNames ? classNames : ""
  }`} onClick={onClick}>{children}</div>
);
