import React from "react";
import { Button } from "../utils/button/Button";
import { Container, StyledModal } from "./Modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"; 

export const Modal = (props) => {
  return(
    <Container>
      <StyledModal>
        <div className="close">
          <FontAwesomeIcon icon={faXmark}/>
        </div>
        <h1>Hello World</h1>
        <p>Hello world Hello world Hello world</p>
        <div className="buttons-container">
          <Button>{props.buttonAccept}</Button>
          <Button>{props.buttonDecline}</Button>
        </div>
      </StyledModal>
    </Container>
  ) 
}