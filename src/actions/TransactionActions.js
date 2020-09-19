export function displayTransactionForm(displayForm) {
  return {
    type: "DISPLAY_TRANSACTION_FORM",
    displayForm: displayForm == "" ? "TRANSACTION_PLAY" : "",
  };
}
