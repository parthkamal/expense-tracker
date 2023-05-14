import React from 'react';
import './style/ExpenseList.css'
import Card from './Card';
import { useSelector } from 'react-redux';

const ExpenseList = () => {

    const {expenseList : list} = useSelector(state => state.expenses);
    console.log(list);


    return (
        <div className='expense-list'>
            {list.length? list.map((expense)=> <Card id={expense.id} expense={expense}/>):
            
            <div className='empty-state'> <label> oh your list is empty</label> </div>}
        </div>
    );
}

export default ExpenseList;
