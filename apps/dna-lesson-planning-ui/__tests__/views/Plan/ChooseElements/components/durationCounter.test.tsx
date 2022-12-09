import { render, screen } from "@testing-library/react";
import DurationCounter from "views/Plan/ChooseElements/components/DurationCounter";

describe("DurationCounter", () => {
  it("renders minutes when no duration passed in", () => {
    const { container } = render(<DurationCounter minutes={0} />);

    expect(container).toMatchSnapshot();
    expect(screen.queryByText("0")).toBeTruthy();
    expect(screen.queryByText("minute-symbol")).toBeTruthy();
  });

  it("renders minutes when minutes are less than 60", () => {
    const { container } = render(<DurationCounter minutes={30} />);

    expect(container).toMatchSnapshot();
    expect(screen.queryByText("30")).toBeTruthy();
    expect(screen.queryByText("minute-symbol")).toBeTruthy();
  });

  it("renders hours when minutes are greater than 60", () => {
    const { container } = render(<DurationCounter minutes={90} />);

    expect(container).toMatchSnapshot();
    expect(screen.queryByText("1")).toBeTruthy();
    expect(screen.queryByText("hour-symbol")).toBeTruthy();
    expect(screen.queryByText("30")).toBeTruthy();
  });

  it("doesnt render minutes when exactly hours", () => {
    const { container } = render(<DurationCounter minutes={120} />);

    expect(container).toMatchSnapshot();
    expect(screen.queryByText("2")).toBeTruthy();
    expect(screen.queryByText("hour-symbol")).toBeTruthy();
    expect(screen.queryByText("0")).toBeFalsy();
  });
});
