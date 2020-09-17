export default function displayTransactionFormReducer(state = false, action) {
    switch (action.type) {
        case 'DISPLAY_TRANSACTION_FORM':
            var newState = !action.displayForm;
            return newState;
        default :
            return state;
    }
}