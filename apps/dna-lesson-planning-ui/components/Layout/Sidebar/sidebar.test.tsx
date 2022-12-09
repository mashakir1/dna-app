import { render } from "@testing-library/react";
import Sidebar from ".";

jest.mock("components/Svg", () => ({
  NordAngliaLogo() {
    return <div>NordAngliaLogo</div>;
  },
  SpeechBubbleIcon() {
    return <div>SpeechBubbleIcon</div>;
  }
}));

const navigationButtonListMock = () => (<div>NavigationButtonList</div>);
jest.mock("components/Layout/Sidebar/NavigationButtonList", () => navigationButtonListMock);

const spacingMock = () => {
  return <div>Spacing</div>;
}
jest.mock("components/Layout/Spacing", () => spacingMock);

jest.mock("components/Buttons", () => ({
  IconLinkButton() {
    return <div>IconLinkButton</div>;
  }
}));

describe("Sidebar", () => {
  it("renders correctly", () => {
    expect(render(<Sidebar />).container).toMatchSnapshot();
  });
});



