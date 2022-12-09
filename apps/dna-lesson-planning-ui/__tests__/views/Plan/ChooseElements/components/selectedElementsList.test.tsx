import { render, screen } from "@testing-library/react";
import SelectedElementsList from "views/Plan/ChooseElements/components/SelectedElementsList";
import { testElements } from "../mockData";

const dropboxMock = () => <div data-testid="Dropbox" />;
jest.mock(
  "views/Plan/ChooseElements/components/Dropbox",
  () => dropboxMock
);

describe("SelectedElementList", () => {
  it("renders an empty list", () => {
    const { container } = render(<SelectedElementsList
      selectedIds={[]}
      setSelectedIds={() => undefined}
      selectedElements={[]}
      elementCrossOnClick={() => undefined}
    />);

    expect(container).toMatchSnapshot();
  });

  it("renders a populated list", () => {
    const { container } = render(<SelectedElementsList
      selectedIds={[]}
      setSelectedIds={() => undefined}
      selectedElements={testElements}
      elementCrossOnClick={() => undefined}
    />);

    expect(container).toMatchSnapshot();
    expect(screen.queryAllByTestId("Dropbox")).toHaveLength(testElements.length);
  });
});
