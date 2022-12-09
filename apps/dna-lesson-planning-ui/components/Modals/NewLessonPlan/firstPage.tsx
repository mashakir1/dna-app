// Imports
import { Dispatch, SetStateAction } from "react";
import useTranslation from "next-translate/useTranslation";

// Components
import Spacing from "components/Layout/Spacing";
import { BaseCard } from "components/Cards";
import { LearnerAmbitionStar, OpenBookIcon } from "components/Svg";
import { IconWithBackground } from "components/Icons";

// Styles
import styles from "./newLessonPlan.module.scss";

interface FirstPageCardProps {
  setPageNumber: Dispatch<SetStateAction<number>>;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

const FirstPageCard: (props: FirstPageCardProps) => JSX.Element = ({
  setPageNumber,
  icon,
  title,
  subtitle
}) => (
  <BaseCard
    bordered
    classNames={`${styles.lessonPlanCard} flex column items-center`}
    onClick={() => setPageNumber(1)}
  >
    {/* TODO - implement cascading hover state to Icon and IconBackground colour */}
    <IconWithBackground icon={icon} classNames={styles.firstPageIconWithBackground} />
    <Spacing height={"m"} />
    <div className={`${styles["lessonPlanCard-titles"]}`}>
      <p className={"large"}><b>{title}</b></p>
      <Spacing height={"xs"} />
      <p className={"small"}>{subtitle}</p>
    </div>
  </BaseCard>
);

interface FirstPageProps {
  setPageNumber: Dispatch<SetStateAction<number>>;
}

export const NewLessonPlanFirstPage: (props: FirstPageProps) => JSX.Element = ({ setPageNumber }) => {
  const { t } = useTranslation("common");

  return (
    <div className={`${styles.newLessonPlan} flex column items-center`}>
      <h6>{t("planning-choice")}</h6>
      <Spacing height={"xxl"} />
      <div className={styles.cardWrapper}>
        <FirstPageCard
          setPageNumber={setPageNumber}
          icon={<OpenBookIcon className={styles.firstPageIcon} />}
          title={t("plan-by-subject-title")}
          subtitle={t("plan-by-subject-subtitle")}
        />
        <FirstPageCard
          setPageNumber={setPageNumber}
          icon={<LearnerAmbitionStar className={styles.firstPageIcon} />}
          title={t("plan-by-learner-ambition-title")}
          subtitle={t("plan-by-learner-ambition-subtitle")}
        />
      </div>
    </div>
  );
};
