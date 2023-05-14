import React from 'react';

const Card = (props) => {

    const {expense ,id} = props; 

    return (
        <div key={id} >
        item
        </div>
    );
}

export default Card;
