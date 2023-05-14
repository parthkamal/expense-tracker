import { ADD_EXPENSE } from "../action-types/expenses";

const initialState = {
    expenseList: [],

}

// store -> defines -> ui -> triggers -> action -> sent to -> reducer -> updates -> store -> contains -> state



const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE: {
            return {
                ...state,
                expenseList: [...state, action.data]
            }
        }

        default:
            return state;
    }
};


export default expenseReducer; 