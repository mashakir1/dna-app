import { fireEvent, render, screen } from "@testing-library/react";
import { NewLessonPlanSecondPage } from "components/Modals/NewLessonPlan/secondPage";

jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

describe("secondPage", () => {
  it("matches snapshot", () => {
    const secondPage = render(<NewLessonPlanSecondPage />).container;

    expect(secondPage).toMatchSnapshot();
  });

  it("is not submittable without filling in form", () => {
    render(<NewLessonPlanSecondPage />);

    const pageBeforeClick = window.location.pathname;
    const startPlanningButton = screen.getByText("Start Planning");
    fireEvent.click(startPlanningButton);
    const pageAfterClick = window.location.pathname;

    expect(pageBeforeClick).toEqual(pageAfterClick);
  });

  it("is submittable with filled form", () => {
    // TODO
  });
});
