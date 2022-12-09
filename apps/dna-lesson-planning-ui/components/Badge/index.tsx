// Styles
import styles from "./badge.module.scss";

export const Badge: ({
  text,
  classNames,
}: {
  text: string;
  classNames?: string;
}) => JSX.Element = ({ text, classNames }) => (
  <div className={`${styles.badge} ${classNames} button`}>
    <span>{text}</span>
  </div>
);
