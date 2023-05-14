import React from 'react';
import './style/OtherTop.css'

const OtherTop = () => {
    return (
        <div className='add-top'>
            <div className='add-top-button'>
            <i className='fi-rr-angle-left'></i>
            <label>back</label>
            </div>

            <div className='add-top-button'>
            <i className='fi-rr-cross-circle'></i>
            <label>cancel</label>
            </div>

        </div>
    );
}

export default OtherTop;
