export default function stageReducer(state = { show: "" }, action) {
  switch (action.type) {
    case "DISPLAY_TRANSACTION_FORM":
      var news = { ...state, show: action.displayForm };
      return news;
    default:
      return state;
  }
}
