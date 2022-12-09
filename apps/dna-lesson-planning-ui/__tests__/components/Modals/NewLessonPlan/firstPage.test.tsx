import { fireEvent, render, screen } from "@testing-library/react";
import { NewLessonPlanFirstPage } from "components/Modals/NewLessonPlan/firstPage";

describe("firstPage", () => {
  it("matches snapshot", () => {
    const testSetPage = jest.fn();
    const firstPage = render(<NewLessonPlanFirstPage setPageNumber={testSetPage} />).container;

    expect(firstPage).toMatchSnapshot();
  });

  it("responds correctly to clicking first button", () => {
    const testSetPage = jest.fn();
    render(<NewLessonPlanFirstPage setPageNumber={testSetPage} />);

    fireEvent.click(screen.getByText("plan-by-subject-title"));
    expect(testSetPage).toHaveBeenCalledWith(1);
  });

  it("responds correctly to clicking second button", () => {
    const testSetPage = jest.fn();
    render(<NewLessonPlanFirstPage setPageNumber={testSetPage} />);

    fireEvent.click(screen.queryByText("plan-by-learner-ambition-title"));
    expect(testSetPage).toHaveBeenCalledWith(1);
  });
});
