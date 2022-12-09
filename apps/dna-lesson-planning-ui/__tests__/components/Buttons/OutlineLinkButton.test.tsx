import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { OutlineLinkButton } from "components/Buttons/OutlineLinkButton";

describe("OutlineLinkButton", () => {
  const text = "OutlineLinkButton";
  const href = "/plan/subject";
  it("should render button with back arrow", () => {
    const { container } = render(<OutlineLinkButton text={text} href={href} />);
    expect(container).toMatchSnapshot();
  });
  it("should render button with book icon", () => {
    const { container } = render(<OutlineLinkButton text={text} href={href} />);
    expect(container).toMatchSnapshot();
  });
});
