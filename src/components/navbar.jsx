import React from 'react'
import logoImg from './../assets/logo.svg'

function Navbar(){
    return(
        <nav id="navbar">
            <img src={logoImg} alt="Davide's Travel Journal"></img>
            <h5>Travel Journal</h5>
        </nav>
    )
}

export default Navbar