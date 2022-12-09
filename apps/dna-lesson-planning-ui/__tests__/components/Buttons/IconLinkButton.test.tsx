import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { IconLinkButton } from "components/Buttons/IconLinkButton";
import { BackArrow } from "components/Svg/BackArrow";
import { ClosedBookIcon } from "components/Svg";

describe("IconLinkButton", () => {
  const text = "IconLinkButton";
  const href = "/plan/subject";
  it("should render button with back arrow", () => {
    const icon = <BackArrow />;
    const { container } = render(
      <IconLinkButton text={text} icon={icon} href={href} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render button with book icon", () => {
    const icon = <ClosedBookIcon />;
    const { container } = render(
      <IconLinkButton text={text} icon={icon} href={href} />
    );
    expect(container).toMatchSnapshot();
  });
});
