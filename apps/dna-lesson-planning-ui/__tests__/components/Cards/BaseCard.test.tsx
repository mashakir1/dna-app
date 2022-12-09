import { render } from "@testing-library/react";

import { BaseCard } from "components/Cards/BaseCard";

describe("BaseCard", () => {
  it("should render an empty base card", () => {
    const { container } = render(
      <BaseCard>
        <></>
      </BaseCard>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render a base card with text", () => {
    const { container } = render(
      <BaseCard>
        <p>BaseCard</p>
      </BaseCard>
    );
    expect(container).toMatchSnapshot();
  });
});
