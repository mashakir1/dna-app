// Imports
import Link from "next/link";

// Styles
import styles from "./OutlineLinkButton.module.scss";

interface OutlineLinkButtonProps {
  text: string;
  classNames?: string;
  href: string;
  disabled?: boolean;
}

export const OutlineLinkButton: (props: OutlineLinkButtonProps) => JSX.Element = ({
  text, classNames, href, disabled
}) => {
  return (
    <Link href={href} className={`${styles.outlineLinkButton} ${classNames} ${disabled ? styles.disabled : ""}`}>
      <span>{text}</span>
    </Link>
  );
};
