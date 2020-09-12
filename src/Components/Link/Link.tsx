import React from "react";

import { LinkProps } from "./Link.types";

import "./Link.scss";

const Link: React.FC<LinkProps> = ({ theme = "light", target="_blank", to, content="I will open Empathy.co in a new tab"}) => (
  <div data-testid="link-component" className={`link-component link-component-${theme}`}>
    <a data-testid="link-component--a" href={to} target={target}>
      {content}
    </a>
  </div>
);

export default Link;