import React, { useState } from 'react';
import './style/Top.css';
import { useLocation } from 'react-router-dom';

const Top = () => {

    //handle the query
    const [query, setQuery] = useState("")

    //we also have to apply conditional rendering if the route changes 

    const location = useLocation();

    return (
        <div className='top'>
            {(location.pathname === '/') ?
                <div className='home-top'>
                    <div className='searchbar'>
                        <i className='fi-rr-search'></i>
                        <input value={query} placeholder='search for expenses' onChange={(e) => setQuery(e.target.value)} />
                    </div>
                    <div className='add-button'>
                        <i className='fi-rr-add'></i>
                        <label>Add</label>
                    </div>
                </div>
                :
                <div>other top fold</div>}
        </div>
    );
}

export default Top;
