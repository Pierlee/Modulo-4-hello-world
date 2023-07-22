import styled from "styled-components"

const colors = {
  primary: '#1d7ced',
  secondary: '#fca311',
  accent: '#00b894',
  white: '#fffaeb',
}

export const Container = styled.div`

background-color: ${colors.white};

`

export const HelloCard = styled.div`
background: ${colors.primary};
border-radius: 10px;
color: ${colors.white};
padding: 10px;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  .pic-container{
    width: 10rem;
    height: 10rem;
    margin: 1rem;
  }
  .pic-container .personal-pic{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }
`
// export const Button = styled.div`
// background: ${colors.accent};
// border-radius: 10px;
// color: ${colors.white};
// padding: 10px;
// `