import { render } from "@testing-library/react";
import { NaverAnalytics } from "../NaverAnalytics";

describe("NaverAnalytics", () => {
  it("render script", () => {
    const { container } = render(<NaverAnalytics accountId="mock" />);
    expect(container).toMatchSnapshot();
  });
});
