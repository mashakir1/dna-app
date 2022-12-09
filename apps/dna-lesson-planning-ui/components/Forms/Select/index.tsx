// Imports
import ReactSelect, { Props } from "react-select";

// Components
import { Dropdown } from "components/Svg";

// TODO style the dropdown in line with https://xd.adobe.com/view/a7c5f361-60ae-4b71-8462-d28c6200b75d-f296/screen/0fcdb1fc-8ca9-43b4-b12c-4b90786a9122
export const Select: (props: Props) => JSX.Element = (props) => {
  return <ReactSelect
    styles={{
      control: (base) => ({ ...base, outline: "inherit" }),
      dropdownIndicator: (base) => ({ ...base, fill: "#177584" }),
      menu: (base) => ({ ...base, margin: 0 }),
      placeholder: (base, props) => ({
        ...base,
        // struggled to add disabled flag to placeholder so adding styling here
        color: props.isDisabled ? "#455664" : "#111a29",
        marginLeft: "none"
      }),
      valueContainer: (base) => ({ ...base, padding: 0 }),
      input: (base) => ({
        ...base,
        margin: 0, padding: 0, color: "none"
      })
    }}

    {...props}

    // TODO: Dropdown should flip on focus
    components={{
      DropdownIndicator: () => (<Dropdown />),
      IndicatorSeparator: () => null
    }}
    classNamePrefix={"reactSelect"}
  />;
};
