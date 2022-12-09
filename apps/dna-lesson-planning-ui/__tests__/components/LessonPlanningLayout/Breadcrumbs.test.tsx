import { render } from "@testing-library/react";

import { Breadcrumbs } from "components/LessonPlanningLayout/Header/Breadcrumbs";

const mockCrumbs = [
  {
    title: "choose-unit",
    active: true,
    completed: false
  },
  {
    title: "journey",
    active: false,
    completed: false
  },
  {
    title: "plan-lesson",
    active: false,
    completed: false
  },
  {
    title: "review",
    active: false,
    completed: false
  }
];

describe("Breadcrumbs", () => {
  it("should render the base breadcrumbs", () => {
    const { container } = render(<Breadcrumbs breadcrumbs={mockCrumbs} />);
    expect(container).toMatchSnapshot();
  });
  it("should render the updated breadcrumbs", () => {
    mockCrumbs[0].completed = true;
    mockCrumbs[1].active = true;
    const { container } = render(<Breadcrumbs breadcrumbs={mockCrumbs} />);
    expect(container).toMatchSnapshot();
  });
});
