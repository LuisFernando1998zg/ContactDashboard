import React from 'react'
import LogoGlobant from '../../assets/LogoGlobant.png'

const Navbar = () => {
  return (
    <>
    <nav>
        <figure>
            <img src={LogoGlobant} alt="" />
        </figure>
        <menu>
            <ul>
                <li>
                    <button>OverView</button>
                </li>
                <li>
                    <button>Favorites</button>
                </li>
                <li>
                    <button>Contact</button>
                </li>
                <li>
                    <button>New</button>
                </li>
            </ul>
        </menu>
    </nav>    
    </>
  )
}

export default Navbar