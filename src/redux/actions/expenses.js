import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses"



const addExpense = (data) => {
    console.log(data);
    return {
        type: ADD_EXPENSE,
        data
    }
}


const deleteExpense = (data) => {
    return {
        type: DELETE_EXPENSE,
        data
    }
}

export { addExpense, deleteExpense };