// Imports
import { useMemo } from "react";
import useTranslation from "next-translate/useTranslation";

// Components
import { ClockIcon } from "components/Svg";

// Styles
import styles from "./durationCounter.module.scss";

export interface DurationCounterProps {
  minutes: number;
}

const DurationCounter: (props: DurationCounterProps) => JSX.Element = ({ minutes }) => {
  const { t } = useTranslation("lessonPlanning");
  const { hours, durationUnit, durationValue } = useMemo(() => {
    const hours = (minutes - (minutes % 60)) / 60;
    return {
      hours,
      durationUnit: hours > 0 ? t("hour-symbol") : t("minute-symbol"),
      durationValue: hours > 0 ? hours : minutes
    };
  }, [t, minutes]);

  return <div className={`${styles.durationCounter} flex column justify-center gap-xs items-center`}>
    <div className="flex gap-xs items-center">
      <p className="large"><b>{durationValue}</b></p>
      <p className="small">{durationUnit}</p>
      {hours > 0 && minutes % 60 > 0 && <p className="large"><b>{minutes % 60}</b></p>}
    </div>
    <ClockIcon />
  </div>;
};

export default DurationCounter;
