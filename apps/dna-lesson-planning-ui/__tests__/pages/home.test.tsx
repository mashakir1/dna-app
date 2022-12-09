import { render } from "@testing-library/react";
import Home from "../../pages";

const sidebarMock = () => (<div>Sidebar</div>);
jest.mock("components/Layout/Sidebar", () => sidebarMock);

const modalMock = () => (<div>NewLessonPlanModal</div>);
jest.mock("components/Modals/NewLessonPlan", () => modalMock);

jest.mock("components/Buttons", () => ({
  FilledButton() {
    return <button type="button">FilledButton</button>;
  }
}));

jest.mock("components/Cards", () => ({
  BaseCard() {
    return <div>BaseCard</div>;
  }
}));

describe("homepage", () => {
  test("matches snapshot", () => {
    const homepage = render(<Home />).container;

    expect(homepage).toMatchSnapshot();
  });
});
