import React from "react"
import { NavContainer } from "./Navbar.style"

export const Navbar = () => {

  const helloAppear = () => {
    document.createElement('')
  }

  return(
    <NavContainer>
      <div className="nav">
        <span className="logo">Logo</span>
        <ul className="menu">
          <li><a onClick={helloAppear} href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
        </ul>
      </div>
    </NavContainer>
  )
}