import { fireEvent, render, screen } from "@testing-library/react";
import ElementGrid from "views/Plan/ChooseElements/components/ElementGrid";
import { testElements } from "../mockData";

jest.mock("components/Cards/ElementCard", () => ({
  ElementCard({ id, onClick }) {
    return <div data-testid={id} onClick={() => onClick(id)} />;
  }
}));

describe("ElementGrid", () => {
  it("empty grid matches snapshot", () => {
    const { container } = render(<ElementGrid
      elements={[]} selectedIds={[]}
      addSelectedId={() => undefined} removeSelectedId={() => undefined}
    />);
    expect(container).toMatchSnapshot();
  });

  it("populated grid matches snapshot", () => {
    const { container } = render(<ElementGrid
      elements={testElements} selectedIds={[]}
      addSelectedId={() => undefined} removeSelectedId={() => undefined}
    />);
    expect(container).toMatchSnapshot();
  });

  it("adds elements to selection correctly using callback", () => {
    const testAddFn = jest.fn();
    const testRemoveFn = jest.fn();

    render(<ElementGrid
      elements={testElements} selectedIds={[]}
      addSelectedId={testAddFn} removeSelectedId={testRemoveFn}
    />);

    const testElementCard = screen.queryByTestId("testId1");
    expect(testElementCard).toBeTruthy();
    fireEvent.click(testElementCard);
    expect(testAddFn).toHaveBeenCalled();
    expect(testRemoveFn).not.toHaveBeenCalled();
  });

  it("removes elements to selection correctly using callback", () => {
    const testAddFn = jest.fn();
    const testRemoveFn = jest.fn();

    render(<ElementGrid
      elements={testElements} selectedIds={["testId1"]}
      addSelectedId={testAddFn} removeSelectedId={testRemoveFn}
    />);

    const testElementCard = screen.queryByTestId("testId1");
    expect(testElementCard).toBeTruthy();
    fireEvent.click(testElementCard);
    expect(testAddFn).not.toHaveBeenCalled();
    expect(testRemoveFn).toHaveBeenCalled();
  });
});
