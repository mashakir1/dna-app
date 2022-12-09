import { screen, fireEvent, render } from "@testing-library/react";

import { FilledButton } from "components/Buttons/FilledButton";

describe("FilledButton", () => {
  const text = "FilledButton";
  const handleClick = jest.fn();
  const { container } = render(
    <FilledButton text={text} handleClick={handleClick} />
  );
  it("should render standard button", () => {
    expect(container).toMatchSnapshot();
  });
  it("should be pressed once", () => {
    render(<FilledButton text={text} handleClick={handleClick} />);

    fireEvent.click(screen.queryByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
