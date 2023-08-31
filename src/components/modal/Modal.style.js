import styled from "styled-components";

const colors = {
  primary: '#1d7ced',
  secondary: '#fca311',
  button: '#00b894',
  hover: '#00b850',
}

export const Container = styled.div `
height: 100vh;
background-color:  rgba(0, 0, 0, 0.7);
position: fixed;
top: 0;
bottom: 0;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const StyledModal = styled.div`
background-color: white;
width: 35rem;
height: 20rem;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: fixed;
  .buttons-container{
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
    width: 80%;
  }
  .buttonMd{
    width: 100px;
    background-color: green;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttonMd:hover{
    background-color: yellow;
  }
  .close{
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    background-color: ${colors.button};
    padding: 10px 15px;
    border-radius: 100px;
    box-sizing: border-box;
  }
  .close:hover{
    cursor: pointer;
    background-color: ${colors.hover};
  }
`