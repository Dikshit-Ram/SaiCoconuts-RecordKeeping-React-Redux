import { combineReducers } from "redux";
import displayTransactionFormReducer from "./TransactionReducer";

const rootReducer = combineReducers({
    displayTransactionFormReducer
});

export default rootReducer;