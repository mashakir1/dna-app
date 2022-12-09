// Imports
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Trans from "next-translate/Trans";

// Components
import { BaseCard } from "../BaseCard";
import { IconWithBackground } from "components/Icons";
import { FileIcon } from "components/Svg";

// Styles
import styles from "styles/pages/home.module.scss";

export const NoLessonPlansCard = () => {
  const { t } = useTranslation("common");

  return <BaseCard classNames={`${styles.emptyCard} flex column items-center gap-m`}>
    <IconWithBackground icon={<FileIcon />} />
    <p>{t("no-lesson-plans-to-show")}</p>
    <p><Trans
      i18nKey={"need-help"}
      components={[<Link href={"/"} key={""} />]}
      ns={"common"}
    /></p>
  </BaseCard>;
};
