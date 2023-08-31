import React from "react";
import { HelloCard, Container } from "./Card.style";
import { Button } from "../utils/button/Button";

export const Card = (props) => {
  return(
    <Container>
      <HelloCard>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Button clicked={props.buttonEvent}>{props.button}</Button>
        <div className="pic-container">
          <img className="personal-pic" src={props.picture} alt=""/>
        </div>  
      </HelloCard>
    </Container>
  )
}