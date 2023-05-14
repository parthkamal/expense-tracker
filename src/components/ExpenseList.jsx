import React from 'react';
import './style/ExpenseList.css'
import Card from './Card';

const ExpenseList = () => {

    const list =[
        {
            id: 1,
            title : "made a purchase",
            logo : 'dfs',
            createdAt : Date.now(),
            amount : 12314
        },
        {
            id: 2,
            title : "made a purchase",
            logo : 'dfs',
            createdAt : Date.now(),
            amount : 12314
        }
    ]


    return (
        <div>
            {list.length? list.map((expense)=> <Card id={expense.id} expense={expense}/>):<></>}
        </div>
    );
}

export default ExpenseList;
