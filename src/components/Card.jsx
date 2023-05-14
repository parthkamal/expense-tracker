import React from 'react';

const Card = (props) => {

    const {expense ,id} = props; 

    return (
        <div key={id} >
        {expense.title}
        </div>
    );
}

export default Card;
