import React, { useState } from "react";
import { Button } from "../utils/button/Button";
import { Container, StyledModal } from "./Modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"; 
import { faTimes } from "@fortawesome/free-solid-svg-icons"; 

export const Modal = (props) => {
  return(
    <>
      {props.isOpen && (
        <Container>
          <StyledModal>
            <>
              <div className="close" onClick={() => props.setOpen(!props.isOpen)}>
                <FontAwesomeIcon icon={faTimes}/>
              </div>
              <h1>Hello World</h1>
              <p>Hello world Hello world Hello world</p>
              <div className="buttons-container">
                <button onClick={() => props.setOpen(!props.isOpen)} className="buttonMd">Accept</button>
                <button onClick={() => props.setOpen(!props.isOpen)} className="buttonMd">Decline</button>
              </div>
            </>
          </StyledModal>
        </Container>
      )}
    </>
  ) 
}