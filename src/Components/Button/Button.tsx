import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ className, type, onClick, content }) => (
  <div
    data-testid="button-component"
    className={`button-component button-component-${type} ${className}`}
    onClick={() => onClick()}
  >
    {content}
  </div>
);

export default Button;