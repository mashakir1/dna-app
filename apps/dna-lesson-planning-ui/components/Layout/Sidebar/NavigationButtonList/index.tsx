// Imports
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// Components
import { IconLinkButton } from "components/Buttons";

// Icons
import { FileIcon, BarChartIcon } from "components/Svg";

// Styles
import styles from "styles/components/sidebar/navigationButton.module.scss";

const buttonList = [
  {
    text: "my-lessons",
    icon: <FileIcon />,
    href: "/"
  },
  {
    text: "lesson-data",
    icon: <BarChartIcon />,
    href: "/data"
  }
];

const NavigationButtonList: () => JSX.Element = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      {buttonList.map(({ text, icon, href }) => (
        <IconLinkButton
          key={text}
          text={t(text)}
          icon={icon}
          href={href}
          classNames={`${styles.sidebarButton} ${
            pathname === href ? styles.highlighted : ""
          } ${styles.navigationButton} flex items-center `}
        />
      ))}
    </>
  );
};

export default NavigationButtonList;
