// Imports
import useSWR from "swr";

// Components
import { Unit } from "./components";
import { Title } from "views/Plan/components";

// Utils
import { fetcher } from "utils";

// Types
import { UnitType } from "types";

export const ChooseUnit = () => {
  const { data, error } = useSWR("/api/frost/units", fetcher);
  // TODO: Create an error page / view
  if (error) return null;
  return (
    <>
      <Title
        title="choose-unit"
        subtitle="choose-unit-plan-lesson"
        back={false}
      >
        <div className="flex gap-s">
          {/* TODO: USE SELECT COMPONENT HERE WITH DATA  */}
          <select></select>
          <select></select>
          {/* <Select /> */}
          {/* <Select /> */}
        </div>
      </Title>
      <div className={"flex column gap-s"}>
        {data?.map((_unit: UnitType) => (
          <Unit key={_unit.title} unit={_unit} />
        ))}
      </div>
    </>
  );
};
