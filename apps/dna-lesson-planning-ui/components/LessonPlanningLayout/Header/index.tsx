// Imports
import useTranslation from "next-translate/useTranslation";

// Components
import { OutlineLinkButton } from "components/Buttons";
import { Breadcrumbs } from "./Breadcrumbs";

// Styles
import styles from "./header.module.scss";

const breadcrumbs = [
  {
    title: "choose-unit",
    active: true,
    completed: false
  },
  {
    title: "journey",
    active: false,
    completed: false
  },
  {
    title: "plan-lesson",
    active: false,
    completed: false
  },
  {
    title: "review",
    active: false,
    completed: false
  }
];

export const Header = () => {
  const { t } = useTranslation("common");
  return (
    <div className={`${styles.header} flex justify-between items-center`}>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <OutlineLinkButton text={t("cancel")} href="/" />
    </div>
  );
};
