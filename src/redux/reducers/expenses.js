import { updateLocale } from "moment";
import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";

const initialState = {
    expenseList: [],

}

// store -> defines -> ui -> triggers -> action -> sent to -> reducer -> updates -> store -> contains -> state



const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE: {
            return {
                ...state,
                expenseList: [...state.expenseList, action.data]
            }
        }

        case DELETE_EXPENSE: {
            const {data} = action;
            const {id} = data; 
            const {expenseList} = state; 
            const updatedList  = expenseList.filter( (item) => item.id!==id); 

            console.log(updatedList);

            return {
                ...state,
                expenseList: updatedList,
            }
        }

        default:
            return state;
    }
};


export default expenseReducer; 