export function displayTransactionForm(action) {
  return {
    type: "DISPLAY_TRANSACTION_FORM",
    action
  };
}

export function createTransaction(transaction) {
    let a = JSON.stringify(transaction);
    debugger;
  return dispatch => {
    return fetch("http://localhost:8080/transaction/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      },
      body: JSON.stringify(transaction)
    }).then(response => {
        switch(response.status){
            case 201:
                dispatch(createTransactionSuccess(transaction));
        }

    }).catch(error => console.log(error));
  };
}

export function createTransactionSuccess(transaction) {
    return {
      type: "CREATE_TRANSACTION_SUCCESS",
      alertMessage: "Transaction saved succesfully!",
      alertStyle: "success"
    };
  }