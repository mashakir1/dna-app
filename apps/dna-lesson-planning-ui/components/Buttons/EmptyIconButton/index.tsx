import styles from "./EmptyIconButton.module.scss";

export const EmptyIconButton: ({
  icon,
  text,
  classNames,
  handleClick,
}: {
  icon: JSX.Element;
  text: string;
  classNames?: string;
  handleClick: () => void;
}) => JSX.Element = ({ icon, text, classNames, handleClick }) => (
  <button
    className={`${styles.emptyIconButton} ${classNames} flex items-center gap-s`}
    onClick={handleClick}
    type="button"
  >
    {icon}
    <span>{text}</span>
  </button>
);
