import React from 'react';
import './style/Header.css';


const Header = () => {
    return (
        <div className='header-container' >
            <div className='header'>
                <div className='header-logo'>
                    Expense Tracker  <i className="fi fi-rr-credit-card"></i>
                </div>

                <div>
                    <a href='https://github.com/parthkamal/' className='header-button'>
                        <i className="devicon-github-original"></i>
                        start
                    </a>
                </div>

            </div>




        </div>
    );
}

export default Header;
