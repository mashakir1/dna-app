import { screen, fireEvent, render } from "@testing-library/react";

import { EmptyButton } from "components/Buttons/EmptyButton";

describe("EmptyButton", () => {
  const text = "EmptyButton";
  const handleClick = jest.fn();
  it("should render standard button", () => {
    const { container } = render(
      <EmptyButton text={text} handleClick={handleClick} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should be pressed once", () => {
    render(<EmptyButton text={text} handleClick={handleClick} />);

    fireEvent.click(screen.queryByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
