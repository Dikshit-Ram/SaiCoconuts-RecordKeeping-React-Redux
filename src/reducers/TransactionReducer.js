export default function displayTransactionFormReducer(state =[], action) {
    //debugger;
    switch (action) {
        case 'CREATE_TRANSACTION_SUCCESS':
            return [...state,
            Object.assign({}, action.transaction)
            ];
        default :
            return state;
    }
}