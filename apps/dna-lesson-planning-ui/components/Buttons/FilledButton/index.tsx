// Styles
import styles from "./FilledButton.module.scss";

export const FilledButton: ({
  text,
  handleClick,
  classNames
}: {
  text: string;
  handleClick: () => void;
  classNames?: string;
}) => JSX.Element = ({ text, handleClick, classNames }) => (
  <button
    className={`${styles.filledButton} ${classNames ? classNames : ""}`}
    onClick={handleClick}
    type="button"
  >
    <span>{text}</span>
  </button>
);
