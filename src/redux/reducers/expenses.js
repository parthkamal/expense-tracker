const initialState = {
    expenseList : [], 

}

// store -> defines -> ui -> triggers -> action -> sent to -> reducer -> updates -> store -> contains -> state



const expenseReducer = (state = initialState, action ) => {
    switch(action.type) {
        default: 
        return state;
    }
}; 


export default expenseReducer; 