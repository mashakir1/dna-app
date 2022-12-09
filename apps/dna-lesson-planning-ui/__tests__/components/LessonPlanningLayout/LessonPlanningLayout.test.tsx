import { render } from "@testing-library/react";

import Layout from "components/LessonPlanningLayout";

describe("Layout", () => {
  it("should render the lesson planning layout", () => {
    const { container } = render(
      <Layout>
        <></>
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});
