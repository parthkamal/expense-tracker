import React, { useState } from 'react';
import './style/Top.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OtherTop from './OtherTop';

const Top = () => {

    //handle the query
    const [query, setQuery] = useState("")

    //we also have to apply conditional rendering if the route changes 

    const location = useLocation();
    const navigate = useNavigate(); 


    //this will push the pathname to /add-expense
    const handleClick =() => {
        navigate('/add-expense')
    }

    return (
        <div className='top'>
            {(location.pathname !== '/add-expense') ?
                <div className='home-top'>
                    <div className='searchbar'>
                        <i className='fi-rr-search'></i>
                        <input value={query} placeholder='search for expenses' onChange={(e) => setQuery(e.target.value)} />
                    </div>
                    <div className='add-button'>
                        <i className='fi-rr-add'></i>
                        <label onClick={handleClick}>Add</label>
                    </div>
                </div>
            :<OtherTop/>}
        </div>
    );
}

export default Top;
