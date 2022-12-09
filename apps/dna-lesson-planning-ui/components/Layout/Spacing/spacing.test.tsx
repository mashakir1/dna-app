import { render } from "@testing-library/react";
import Spacing from ".";

describe("Sidebar", () => {
  it("renders small height correctly", () => {
    const sidebar = render(<Spacing height={"s"} />).container;

    expect(sidebar).toMatchSnapshot()
  })

  it("renders large height correctly", () => {
    const sidebar = render(<Spacing height={"l"} />).container;

    expect(sidebar).toMatchSnapshot()
  })
})
