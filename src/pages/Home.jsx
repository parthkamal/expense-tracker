import React from 'react';
import Top from '../components/Top';
import ExpenseList from '../components/ExpenseList';
import './style/Home.css'; 


const Home = () => {
    return (
        <div>
            <Top/> 
            <ExpenseList/>
        </div>
    );
}

export default Home;
