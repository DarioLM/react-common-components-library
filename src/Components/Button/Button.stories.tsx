import React from "react";
import Button from './Button';

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { type: "primary", onClick: () => console.log("Primary button!"), content: "Primary" };

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary", onClick: () => console.log("Primary button!"), content: "Secondary" };