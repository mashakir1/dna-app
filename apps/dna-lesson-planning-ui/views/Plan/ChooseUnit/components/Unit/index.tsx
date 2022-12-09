// Imports
import useTranslation from "next-translate/useTranslation";

// Components
import { IconWithBackground } from "components/Icons";
import { EmptyButton, FilledButton } from "components/Buttons";
import { BaseCard } from "components/Cards";
import { ClosedBookIcon } from "components/Svg";

// Styles
import styles from "./Unit.module.scss";

// Types
import { UnitType } from "types";

export const Unit: ({ unit }: { unit: UnitType }) => JSX.Element = ({
  unit
}) => {
  const { t } = useTranslation("common");
  return (
    <BaseCard
      classNames={`${styles.unitCard} flex justify-between items-center`}
    >
      <div className="flex items-center gap-m">
        <IconWithBackground icon={<ClosedBookIcon />} />
        <div className={styles["unitCard-titles"]}>
          <p className={"large"}><b>{unit.title}</b></p>
          <p>{unit.subtitle}</p>
          <EmptyButton
            text={t("overview")}
            handleClick={() => {
              console.log("Clicked in unit");
            }}
          />
        </div>
      </div>
      <FilledButton
        text={t("select")}
        handleClick={() => {
          console.log("Clicked in unit");
        }}
      />
    </BaseCard>
  );
};
