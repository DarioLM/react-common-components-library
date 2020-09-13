import { Component } from "react";

export interface ButtonProps {
    className?: string,
    type: "primary" | "secondary";
    onClick: Function,
    content: any,
  }