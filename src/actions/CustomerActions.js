export function displayCustomers(displayForm) {
    return {
      type: "DISPLAY_CUSTOMERS",
      displayForm: displayForm == "CUSTOMER_PLAY" ? "" : "CUSTOMER_PLAY"
    };
  }
  