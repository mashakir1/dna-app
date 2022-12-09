// Imports
import useTranslation from "next-translate/useTranslation";

// Components
import { FilledLinkButton, OutlineLinkButton } from "components/Buttons";

// Styles
import styles from "./footerButtonList.module.scss";

export interface FooterButtonListProps {
  isClickable: boolean;
}

const FooterButtonList: (props: FooterButtonListProps) => JSX.Element = ({ isClickable }) => {
  const { t } = useTranslation("lessonPlanning");
  return <div className={`${styles.footerButtonList} flex column gap-s justify-center`}>
    <FilledLinkButton text={t("continue")} href={"/plan/review"} disabled={!isClickable} />
    <OutlineLinkButton text={t("edit-slides")} href={"/plan/subject"} disabled={!isClickable} />
  </div>;
};

export default FooterButtonList;
