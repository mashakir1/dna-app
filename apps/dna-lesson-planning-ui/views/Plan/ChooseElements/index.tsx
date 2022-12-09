// Imports
import { useCallback, useState } from "react";
import useSWR from "swr";

// Components
import { Title } from "views/Plan/components";
import ElementGrid from "./components/ElementGrid";
import { Footer } from "./components/Footer";

// Utils
import { fetcher } from "utils";

// Types
import { GETElement } from "types";
import Layout from "../../../components/LessonPlanningLayout";
import Spacing from "../../../components/Layout/Spacing";

export const ChooseElements: () => JSX.Element = () => {
  const { data, error } = useSWR<GETElement>("/api/sanity/elements", fetcher);

  // TODO: reduce reliance on ?. for swr data
  const elements = data?.elements;

  // TODO: footer needs to be up a level to get good styling
  // TODO: pass down specific methods that change state instead of setSelectedIds
  const [selectedIds, setSelectedIds] = useState<Array<string>>([]);

  const addSelectedId = useCallback(
    (selectedElementId: string) => setSelectedIds(
      [...selectedIds, selectedElementId]
    ),
    [selectedIds]
  );

  const removeSelectedId = useCallback(
    (selectedElementId: string) => setSelectedIds(
      selectedIds.filter((id) => id !== selectedElementId)
    ),
    [selectedIds]
  );

  // TODO: Create an error page / view
  if (error) return null;
  return (
    <>
      <Layout>
        <Title title="choose-elements-title" subtitle="choose-elements-subtitle" />
        <ElementGrid
          elements={elements}
          selectedIds={selectedIds}
          addSelectedId={addSelectedId}
          removeSelectedId={removeSelectedId}
        />
      </Layout>
      <Spacing height={"xxl"} />
      <Footer
        elements={elements}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    </>
  );
};
