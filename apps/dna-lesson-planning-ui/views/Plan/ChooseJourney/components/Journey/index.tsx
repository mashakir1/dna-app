// Components
import useTranslation from "next-translate/useTranslation";

// Components
import { FilledButton, EmptyButton } from "components/Buttons";
import { BaseCard } from "components/Cards";
import { Badge } from "components/Badge";

// Styles
import styles from "./journey.module.scss";

// Types
import { JourneyType } from "types";

export const Journey: ({
  journey
}: {
  journey: JourneyType;
}) => JSX.Element = ({ journey }) => {
  const { t } = useTranslation("common");
  return (
    <BaseCard classNames={`${styles["journey--card"]}`}>
      <div className="flex column gap-s items-start mb-xl">
        <Badge text={journey.unit} />
        <p className={"large"}><b>{journey.title}</b></p>
        <p className={"small"}>{journey.description}</p>
        <EmptyButton
          text={t("overview")}
          handleClick={() => {
            console.log("Clicked");
          }}
        />
      </div>
      <FilledButton
        text={t("plan")}
        handleClick={() => {
          console.log("Clicked");
        }}
      />
    </BaseCard>
  );
};
