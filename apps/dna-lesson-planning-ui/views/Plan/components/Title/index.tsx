// Imports
import { EmptyIconButton } from "components/Buttons";
import { LeftArrow } from "components/Svg";
import useTranslation from "next-translate/useTranslation";
import { ReactNode } from "react";
export const Title: ({
  title,
  subtitle,
  children,
  back
}: {
  title: string;
  subtitle: string;
  back?: boolean;
  children?: ReactNode;
}) => JSX.Element = ({ title, subtitle, back = true, children }) => {
  const { t } = useTranslation("lessonPlanning");
  return (
    <div className="flex column gap-m">
      {back && (
        <EmptyIconButton
          icon={<LeftArrow />}
          text={t("back")}
          handleClick={() => {
            console.log("Go back");
          }}
        />
      )}
      <div
        className={"flex justify-between items-center"}
      >
        <div className="flex column gap-s">
          <h4>{t(title)}</h4>
          <p className={"small"}>{t(subtitle)}</p>
        </div>
        {children}
      </div>
    </div>
  );
};
