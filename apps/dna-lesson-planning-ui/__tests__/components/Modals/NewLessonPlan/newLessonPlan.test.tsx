import { fireEvent, render, screen } from "@testing-library/react";
import NewLessonPlan from "components/Modals/NewLessonPlan";

jest.mock("components/Modals", () => ({
  Modal({ children }) {
    return <div>{children}</div>;
  }
}));

jest.mock("components/Modals/NewLessonPlan/firstPage", () => ({
  NewLessonPlanFirstPage({ setPageNumber }) {
    return <button onClick={setPageNumber} type="button">First Page</button>;
  }
}));

jest.mock("components/Modals/NewLessonPlan/secondPage", () => ({
  NewLessonPlanSecondPage() {
    return <div>Second Page</div>;
  }
}));

describe("NewLessonPlan", () => {
  test("switches pages when state changes", () => {
    const testSetVisible = jest.fn();
    render(<NewLessonPlan visible setVisible={testSetVisible} />);

    expect(screen.getByText("First Page")).toBeTruthy();
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("Second Page")).toBeTruthy();
  });
});
