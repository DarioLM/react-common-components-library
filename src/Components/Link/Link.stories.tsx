import React from "react";
import Link from './Link';
import { LINK_TARGETS } from "./Link.types";
export default {
  title: "Link"
};

const commonProps = {
  target: LINK_TARGETS[0],
  to: "https://www.empathy.co/",
  content: "I will open Empathy.co in a new tab",
};

export const Light = () => <Link {...commonProps} />;

export const Dark = () => <Link theme="dark" {...commonProps} />;