import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Button Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      type: "primary",
      onClick: () => {},
      content: "Click here",
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();
    const buttonComponent = getByTestId("button-component");

    expect(buttonComponent).toHaveClass("button-component-primary");
  });

  it("should have secondary className with type set as secondary", () => {
    props.type = "secondary";
    const { getByTestId } = renderComponent();

    const buttonComponent = getByTestId("button-component");

    expect(buttonComponent).toHaveClass("button-component-secondary");
  });
});