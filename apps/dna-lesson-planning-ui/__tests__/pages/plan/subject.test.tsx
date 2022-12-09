import { render } from "@testing-library/react";

import Page from "pages/plan/subject";

// TODO: WRITE TESTS TO HANDLE PAGE ON CLICKS ON BREADCRUMB AND ON SUBJECT CHOICE
describe.skip("Plan by subject page", () => {
  it("renders and matches snapshot", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
