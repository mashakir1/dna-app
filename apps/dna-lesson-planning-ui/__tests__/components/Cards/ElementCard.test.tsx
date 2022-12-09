import { fireEvent, render, screen } from "@testing-library/react";
import { ElementCard, ElementCardProps } from "components/Cards/ElementCard";

jest.mock("components/Svg", () => ({
  EmptyTick() {
    return <div data-testid="emptyTick" />;
  },
  CloseElementIcon() {
    return <div data-testid="closeElement" />;
  },
  InfoIcon() {
    return <div data-testid="infoIcon" />;
  }
}));

describe("ElementCard", () => {
  const defaultProps: ElementCardProps = {
    id: "testId",
    title: "testTitle",
    text: "testText",
    duration: 0,
    subjectColour: "#ffffff33"
  };

  it("should render a basic ElementCard", () => {
    const { container } = render(<ElementCard {...defaultProps} />);

    expect(container).toMatchSnapshot();
    expect(screen.queryByText("testTitle")).toBeTruthy();
    expect(screen.queryByText("testText")).toBeTruthy();
  });

  it("should change headerColour when selected", () => {
    const { container } = render(<ElementCard {...defaultProps} selected />);

    expect(container).toMatchSnapshot();
  });

  it("should trigger onClick when clicked", () => {
    const testOnClick = jest.fn();
    const { container } = render(
      <ElementCard {...defaultProps} onClick={testOnClick} />
    );

    expect(container).toMatchSnapshot();
    fireEvent.click(screen.queryByText("testTitle"));
    expect(testOnClick).toHaveBeenCalled();
  });

  it("should show tick if hover and has an onClick", () => {
    const testOnClick = jest.fn();
    const { container } = render(
      <ElementCard {...defaultProps} onClick={testOnClick} />
    );

    expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("emptyTick")).toBeFalsy();

    fireEvent.mouseEnter(screen.queryByText("testTitle"));
    expect(screen.queryByTestId("emptyTick")).toBeTruthy();

    fireEvent.mouseLeave(screen.queryByText("testTitle"));
    expect(screen.queryByTestId("emptyTick")).toBeFalsy();
  });

  it("should show tick if selected and has an onClick", () => {
    const testOnClick = jest.fn();
    const { container } = render(
      <ElementCard{...defaultProps} selected onClick={testOnClick} />
    );

    expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("emptyTick")).toBeTruthy();
  });

  it("should show cross if selected, hover and has an onClick", () => {
    const testOnClick = jest.fn();
    const { container } = render(
      <ElementCard {...defaultProps} selected onClick={testOnClick} />);

    expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("emptyTick")).toBeTruthy();
    expect(screen.queryByTestId("closeElement")).toBeFalsy();

    fireEvent.mouseEnter(screen.queryByText("testTitle"));

    expect(screen.queryByTestId("emptyTick")).toBeFalsy();
    expect(screen.queryByTestId("closeElement")).toBeTruthy();

    fireEvent.mouseLeave(screen.queryByText("testTitle"));

    expect(screen.queryByTestId("emptyTick")).toBeTruthy();
    expect(screen.queryByTestId("closeElement")).toBeFalsy();
  });

  it("should show cross when stickyCross", () => {
    const { container } = render(<ElementCard {...defaultProps} stickyCross />);

    expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("closeElement")).toBeTruthy();
  });

  it("should trigger crossOnClick when clicking cross", () => {
    const testCrossOnClick = jest.fn();
    const { container } = render(
      <ElementCard {...defaultProps} stickyCross crossOnClick={testCrossOnClick} />
    );

    expect(container).toMatchSnapshot();
    fireEvent.click(screen.queryByTestId("closeElement"));
    expect(testCrossOnClick).toHaveBeenCalled();
  });

  it("should only trigger crossOnClick when clicking cross while both onClicks are present", () => {
    const testOnClick = jest.fn();
    const testCrossOnClick = jest.fn();
    const { container } = render(<ElementCard
      {...defaultProps} onClick={testOnClick}
      stickyCross crossOnClick={testCrossOnClick}
    />);

    expect(container).toMatchSnapshot();
    fireEvent.click(screen.queryByTestId("closeElement"));
    expect(testOnClick).not.toHaveBeenCalled();
    expect(testCrossOnClick).toHaveBeenCalled();
  });

  it("should trigger infoOnClick when clicking info", () => {
    const testInfoOnClick = jest.fn();
    const { container } = render(
      <ElementCard {...defaultProps} infoOnClick={testInfoOnClick} />
    );

    expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("infoIcon")).toBeTruthy();
    fireEvent.click(screen.queryByTestId("infoIcon"));
    expect(testInfoOnClick).toHaveBeenCalled();
  });

  it("should only trigger infoOnClick when clicking info while both onClicks are present", () => {
    const testOnClick = jest.fn();
    const testInfoOnClick = jest.fn();
    const { container } = render(<ElementCard
      {...defaultProps} onClick={testOnClick} stickyCross infoOnClick={testInfoOnClick}
    />);

    expect(container).toMatchSnapshot();
    fireEvent.click(screen.queryByTestId("infoIcon"));
    expect(testOnClick).not.toHaveBeenCalled();
    expect(testInfoOnClick).toHaveBeenCalled();
  });
});
