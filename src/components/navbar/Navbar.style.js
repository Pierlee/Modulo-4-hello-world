import styled from "styled-components"

export const NavContainer = styled.div`
background-color: #1d7ced;
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;
  }
  .nav .logo{
    color: white;
  }
  .nav ul{
    display: flex;
    list-style: none;
  }
  .nav ul a{
    text-decoration: none;
    color: white;
    margin: 20px;
  }
  .nav ul a:hover{
    color: whitesmoke;
  }
`

