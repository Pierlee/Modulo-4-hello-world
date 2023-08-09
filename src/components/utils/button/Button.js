import React from "react";
import { StyledButton } from "./Button.style";

export const Button = (props) => {
  return(
    <StyledButton>
      <div onClick={props.clicked}>{props.children}</div>
    </StyledButton>
  )
}