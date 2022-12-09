// * Imports
import useTranslation from "next-translate/useTranslation";

//* Components
import { NordAngliaLogo, SpeechBubbleIcon } from "components/Svg";
import Spacing from "components/Layout/Spacing";
import NavigationButtonList from "./NavigationButtonList";
import { IconLinkButton } from "components/Buttons";

//* Styles
import sidebarStyling from "./sidebar.module.scss";
import feedbackStyling from "styles/components/sidebar/feedback.module.scss";
import navigationButtonStyling from "styles/components/sidebar/navigationButton.module.scss";

const Sidebar: () => JSX.Element = () => {
  const { t } = useTranslation("common");
  return (
    <div className={sidebarStyling.sidebar}>
      <div className={sidebarStyling.sidebarContent}>
        <NordAngliaLogo />
        <Spacing height={"xxl"} />
        <NavigationButtonList />
        <IconLinkButton
          href="/feedback"
          icon={<SpeechBubbleIcon />}
          text={t("feedback")}
          classNames={`${navigationButtonStyling.sidebarButton} ${feedbackStyling.feedback} flex justify-center items-center`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
