import { render, screen } from "@testing-library/react";
import { Footer } from "views/Plan/ChooseElements/components/Footer";
import { testElement } from "../mockData";
import { DurationCounterProps } from "views/Plan/ChooseElements/components/DurationCounter";
import { SelectedElementsListProps } from "views/Plan/ChooseElements/components/SelectedElementsList";
import { FooterButtonListProps } from "views/Plan/ChooseElements/components/FooterButtonList";

const durationCounterMock = (props: DurationCounterProps) => <div data-testid="DurationCounter">{props.minutes}</div>;
jest.mock(
  "views/Plan/ChooseElements/components/DurationCounter",
  () => durationCounterMock
);

const selectedElementListMock = (props: SelectedElementsListProps) => <div data-testid="selectedElementList">{
  props.selectedElements.map(element => <div data-testid={element.id} key={element.id} />)
}</div>;
jest.mock(
  "views/Plan/ChooseElements/components/SelectedElementsList",
  () => selectedElementListMock
);

const footerButtonListMock = (props: FooterButtonListProps) => <div data-testid="FooterButtonList">{
  props.isClickable ? "Clickable" : "Not clickable"
}</div>;
jest.mock(
  "views/Plan/ChooseElements/components/FooterButtonList",
  () => footerButtonListMock
);

describe("Footer", () => {
  it("matches empty snapshot", () => {
    const { container } = render(<Footer
      elements={[]} selectedIds={[]} setSelectedIds={() => undefined}
    />);

    expect(container).toMatchSnapshot();
  });

  it("matches populated snapshot", () => {
    const firstElement = { ...testElement, id: "first" };
    const secondElement = { ...testElement, id: "second" };

    const { container } = render(<Footer
      elements={[firstElement, secondElement]}
      selectedIds={["first", "second"]}
      setSelectedIds={() => undefined}
    />);

    expect(container).toMatchSnapshot();
  });

  it("passes selected Elements to SelectedElementsList correctly", () => {
    const firstElement = { ...testElement, id: "success" };
    const secondElement = { ...testElement, id: "fail" };

    render(<Footer
      elements={[firstElement, secondElement]}
      selectedIds={["success"]}
      setSelectedIds={() => undefined}
    />);

    expect(screen.queryByTestId("success")).toBeTruthy();
    expect(screen.queryByTestId("fail")).toBeFalsy();
  });

  it("calculates duration correctly", () => {
    const firstElement = { ...testElement, id: "first", duration: 20 };
    const secondElement = { ...testElement, id: "second", duration: 30 };

    render(<Footer
      elements={[firstElement, secondElement]}
      selectedIds={["first", "second"]}
      setSelectedIds={() => undefined}
    />);

    expect(screen.queryByText("50")).toBeTruthy();
  });

  it("buttons disabled if no elements selected", () => {
    const firstElement = { ...testElement, id: "first", duration: 20 };
    const secondElement = { ...testElement, id: "second", duration: 30 };

    render(<Footer
      elements={[firstElement, secondElement]}
      selectedIds={[]}
      setSelectedIds={() => undefined}
    />);

    expect(screen.queryByText("Not clickable")).toBeTruthy();
  });

  it("buttons enabled if at least one element selected", () => {
    const firstElement = { ...testElement, id: "first", duration: 20 };
    const secondElement = { ...testElement, id: "second", duration: 30 };

    render(<Footer
      elements={[firstElement, secondElement]}
      selectedIds={["first"]}
      setSelectedIds={() => undefined}
    />);

    expect(screen.queryByText("Clickable")).toBeTruthy();
  });
});
