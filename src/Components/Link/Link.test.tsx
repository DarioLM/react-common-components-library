import React from "react";
import { render } from "@testing-library/react";

import Link from "./Link";
import { LinkProps, LINK_TARGETS } from "./Link.types";

describe("Test Link Component", () => {
  let props: LinkProps;

  const renderComponent = props => render(<Link {...props} />);

  it("Link shows the content correctly", () => {
    props = {
      target: LINK_TARGETS[0],
      to: "https://www.empathy.co/",
      content: "I will open Empathy.co in a new tab",
    }
    const { getByTestId } = renderComponent(props);
    const linkComponent = getByTestId("link-component");
    const linkComponentA = getByTestId("link-component--a");
    expect(linkComponent).toHaveTextContent(props.content);
    expect(linkComponentA).toHaveAttribute("href", props.to);
    expect(linkComponentA).toHaveAttribute("target", props.target);
  })
});