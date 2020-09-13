import React from "react";
import Link from './Link';
import { LINK_TARGETS } from "./Link.types";

export default {
  title: "Link",
  component: "Link",
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    target: {
      control: {
        type: 'select',
        options: LINK_TARGETS,
      },
    },
  },
};

const commonProps = {
  target: LINK_TARGETS[0],
  to: "https://www.empathy.co/",
  content: "I will open Empathy.co in a new tab",
};

const Template = (args) => <Link {...args} />;

export const Light = Template.bind({});
Light.args = {theme: "light", ...commonProps};

export const Dark = Template.bind({});
Dark.args = {theme: "dark", ...commonProps};
