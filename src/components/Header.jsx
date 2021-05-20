import React from 'react'
import './Header.css';
// function Header() {
//  This is not a es6 arrow function. the next one is.
// }

const Header = () => {
    return (
        //css selector class
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className="head-image"
                alt="headerImage" />
            <h1 className="head-text">Find the Right Name!</h1>
        </div>
    )
}

export default Header