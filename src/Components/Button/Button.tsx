import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ theme }) => (
  <div
    data-testid="button-component"
    className={`button-component button-component-${theme}`}
  >
    <h1 className="heading">I'm the button component</h1>
    <button>Click me!!!</button>
  </div>
);

export default Button;