export default function displayTransactionFormReducer(state =[], action) {
    switch (action.type) {
        case 'DISPLAY_TRANSACTION_FORM':
            var shouldDisplayForm = !action.displayForm;
            var newState = [...state,
                Object.assign({}, shouldDisplayForm)
                ];
            return newState;
        default :
            return state;
    }
}