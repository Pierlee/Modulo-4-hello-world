import React from "react";
import { StyledButton } from "./Button.style";

export const Button = (props) => {
  return(
    <StyledButton onClick={props.clicked}>
      <div>{props.children}</div>
    </StyledButton>
  )
}