import { render } from "@testing-library/react";

import { Header } from "components/LessonPlanningLayout/Header";

// TODO: MOCK SESSION DATA TO TEST NAVIGATE OF BREADCRUMBS
describe("Header", () => {
  it("should render the base header layout", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
