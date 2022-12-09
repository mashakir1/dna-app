// Imports
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

// Components
import Spacing from "components/Layout/Spacing";
import { FilledLinkButton } from "components/Buttons";
import SelectWrapper from "./selectWrapper";

// Styles
import styles from "./newLessonPlan.module.scss";

export const NewLessonPlanSecondPage: () => JSX.Element = () => {
  const { t } = useTranslation("common");

  const [yearSelection, setYearSelection] = useState<string>(undefined);
  const [subjectSelection, setSubjectSelection] = useState<string>(undefined);

  // TODO - save selection values in session
  return (
    <div className={`${styles.newLessonPlan} flex column justify-center items-center`}>
      <h6>{t("year-and-subject-choice-title")}</h6>
      <Spacing height={"m"} />
      <SelectWrapper
        yearSelection={yearSelection}
        setYearSelection={setYearSelection}
        setSubjectSelection={setSubjectSelection}
      />
      <Spacing height={"m"} />
      <FilledLinkButton
        text={"Start Planning"}
        href={"/plan/subject"}
        disabled={!subjectSelection}
      />
    </div>
  );
};
