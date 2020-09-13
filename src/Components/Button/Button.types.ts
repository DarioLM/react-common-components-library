import { Component } from "react";

export interface ButtonProps {
    type: "primary" | "secondary";
    onClick: Function,
    content: any,
  }