export default function displayTransactionFormReducer(state =[], action) {
    switch (action) {
        case 'DISPLAY_TRANSACTION_FORM':
            return [...state,
            Object.assign({}, action.transaction)
            ];
        default :
            return state;
    }
}