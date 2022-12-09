import styles from "./EmptyButton.module.scss";

export const EmptyButton: ({
  text,
  classNames,
  handleClick,
}: {
  text: string;
  classNames?: string;
  handleClick: () => void;
}) => JSX.Element = ({ text, classNames, handleClick }) => (
  <button
    className={`${styles.emptyButton} ${classNames}`}
    onClick={handleClick}
    type="button"
  >
    {text}
  </button>
);
