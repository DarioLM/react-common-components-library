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
  it("should have primary className", () => {
    const { getByTestId } = renderComponent();
    const buttonComponent = getByTestId("button-component");
    expect(buttonComponent).toHaveClass("button-component-primary");
    expect(buttonComponent).toHaveTextContent(props.content);
  });

  it("should have secondary className", () => {
    props.type = "secondary";
    props.content = "Confirm";
    const { getByTestId } = renderComponent();
    const buttonComponent = getByTestId("button-component");
    expect(buttonComponent).toHaveClass("button-component-secondary");
    expect(buttonComponent).toHaveTextContent(props.content);
  });
});