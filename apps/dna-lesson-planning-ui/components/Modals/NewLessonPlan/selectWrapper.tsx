// Imports
import { Dispatch, SetStateAction } from "react";
import useTranslation from "next-translate/useTranslation";

// Components
import { Select } from "components/Forms/Select";
import Spacing from "components/Layout/Spacing";

interface WrapperProps {
  yearSelection: string;
  setYearSelection: Dispatch<SetStateAction<string>>;
  setSubjectSelection: Dispatch<SetStateAction<string>>;
}

const SelectWrapper: (props: WrapperProps) => JSX.Element = ({
  yearSelection,
  setYearSelection,
  setSubjectSelection
}) => {
  const { t } = useTranslation("common");

  // TODO pull options from backend
  const yearOptions = [{ label: "Year 3", value: "year-3" }];
  const subjectOptions = [{ label: "Science", value: "science" }];

  return <>
    <Select
      key={"YearSelect"}
      name={"YearSelect"}
      placeholder={t("select-year-placeholder")}
      options={yearOptions}
      onChange={setYearSelection}
    />
    <Spacing height={"s"} />
    <Select
      key={"SubjectSelect"}
      name={"SubjectSelect"}
      placeholder={t("select-subject-placeholder")}
      options={subjectOptions}
      onChange={setSubjectSelection}
      isDisabled={!yearSelection}
    />
  </>;
};

export default SelectWrapper;
