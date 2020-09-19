export default function stageReducer(state = { show: "" }, action) {
  switch (action.type) {
    case "DISPLAY_TRANSACTION_FORM":
      return { ...state, show: action.displayForm };
    case "DISPLAY_HISTORY":
      return { ...state, show: action.displayForm };
    case "DISPLAY_CUSTOMERS":
      return { ...state, show: action.displayForm };
    default:
      return state;
  }
}
