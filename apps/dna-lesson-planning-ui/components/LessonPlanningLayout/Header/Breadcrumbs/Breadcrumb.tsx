// Imports
import useTranslation from "next-translate/useTranslation";

// Components
import { EmptyTick } from "components/Svg";

// Styles
import styles from "./breadcrumbs.module.scss";

interface BreadcrumbProps {
  title: string;
  active: boolean;
  completed: boolean;
  handleClick: () => void;
}

export const Breadcrumb = ({
  title,
  active,
  completed,
  handleClick,
}: BreadcrumbProps) => {
  const { t } = useTranslation("breadcrumbs");
  // TODO: HANDLE CLICK TO NAVIGATE
  // TODO - remove div as child of p
  return (
    <p
      className={`small ${styles.breadcrumb} ${active ? styles.active : ""} ${
        completed ? styles.completed : ""
      }`}
      aria-label={t(title)}
    >
      {completed && (
        <div className={styles.completedTick}>
          <EmptyTick colour="#30ccd6" fill="white" />
        </div>
      )}
      {t(title)}
    </p>
  );
};
