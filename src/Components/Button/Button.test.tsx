import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Button Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();
    const buttonComponent = getByTestId("button-component");

    expect(buttonComponent).toHaveClass("button-component-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const buttonComponent = getByTestId("button-component");

    expect(buttonComponent).toHaveClass("button-component-secondary");
  });
});