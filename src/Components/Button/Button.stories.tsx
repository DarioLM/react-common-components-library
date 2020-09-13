import React from "react";
import Button from './Button';

export default {
  title: "Button"
};

export const Primary = () => <Button type="primary" onClick={() => console.log("Primary button!")} content="Confirm"/>;

export const Secondary = () => <Button type="secondary" onClick={() => console.log("Secondary button!")} content="Cancel" />;