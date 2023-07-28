import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const Navbar = () => {
    return (
        <nav>
        <NavLink exact to="/">Pikachu</NavLink>
        <NavLink exact to="cleffa">Cleffa</NavLink>
      </nav>
    )
}

export default Navbar;