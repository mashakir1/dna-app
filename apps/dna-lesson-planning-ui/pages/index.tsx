// Imports
import type { NextPage } from "next";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

// Components
import Sidebar from "components/Layout/Sidebar";
import NewLessonPlan from "components/Modals/NewLessonPlan";
import { FilledButton } from "components/Buttons";
import { NoLessonPlansCard } from "components/Cards/NoLessonPlansCard";
import { ElementCard } from "components/Cards/ElementCard";

// Styling
import styles from "styles/pages/home.module.scss";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [elementSelected, setElementSelected] = useState(false);
  return (
    <div className={"flex"}>
      <Sidebar />
      <NewLessonPlan visible={modalVisible} setVisible={setModalVisible} />
      <div className={`${styles.mainContent} flex column gap-xl`}>
        <div className={"flex items-center gap-l"}>
          <h4>{t("my-lessons")}</h4>
          <FilledButton
            text={t("new-lesson-plan-button-text")}
            handleClick={() => setModalVisible(!modalVisible)}
          />
        </div>
        <NoLessonPlansCard />
        <div className={"flex justify-between"}>
          <ElementCard
            id="idGrid"
            title={"Selection Grid"}
            text={"This is an example of the card on the selection grid"}
            duration={36 * 60}
            subjectColour={"#2323ff"}
            selected={elementSelected}
            onClick={() => {
              setElementSelected(!elementSelected);
              console.log(elementSelected ? "removed" : "added");
            }}
            infoOnClick={() => console.log("info")}
          />
          <ElementCard
            id="idFooter"
            title={"Selection Footer"}
            text={"This is an example of the card on the selection footer"}
            duration={12 * 60}
            subjectColour={"#52217C"}
            stickyCross
            crossOnClick={() => console.log("removed")}
          />
          <ElementCard
            id="idReview"
            title={"Review card"}
            text={"This element will show on the review screen"}
            duration={60}
            subjectColour={"#52217C"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
