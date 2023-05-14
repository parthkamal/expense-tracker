import React, { useState } from 'react';
import './style/AddForm.css';
import Categories from '../constants/add-expense';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/actions/expenses';
const AddForm = () => {

    //capturing the form details using useState hook
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();

    //handlers 

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleAmount = (e) => {
        setAmount(e.target.value);
    }

    const handleCategory = (category) => {
        setCategory(category);
        setCategoryOpen(false);
    }


    const handleSubmit = () => {
        if (title === ''||amount===''|| category===''){
            console.log('please add properly ');
            return;
        }

        const data = {title,amount,category,createdAt: new Date()}

        dispatch(addExpense(data));
    }





    return (
        <div className='add-form'>
            <div className='form-item'>
                <label>Title</label>
                <input value={title} placeholder='enter the title of the expense' onChange={(e) => handleTitle(e)} />
            </div>
            <div className='form-item'>
                <label >Amount</label>
                <input value={amount} placeholder='enter the amount here' onChange={(e) => handleAmount(e)} />
            </div>
            <div className='category-container-parent'>
                <div className='category'>
                    <div className='category-dropdown' onClick={() => setCategoryOpen(!categoryOpen)}>
                        <label>Category</label>
                        <i className='fi-rr-angle-down'></i>
                    </div>
                    {categoryOpen &&
                        <div className='category-container'>
                            {Categories.map((category) => <div key={category.id} onClick={() => handleCategory(category.title)} className='category-item'><label>{category.title}</label></div>)}
                        </div>}
                </div>
            </div>

            <div className='form-add-button'>
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i className='fi-rr-paper-plane'></i>
                </div>
            </div>
        </div>
    );
}

export default AddForm;
