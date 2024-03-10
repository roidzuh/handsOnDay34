import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import {
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from "./features/account/accountSlice";
import { Provider } from "react-redux";
import { decrease, increase, reset } from "./features/counter/counterSlice";
import { create } from "./features/customer/customerSlice";

store.dispatch(deposit(5000));
store.dispatch(withdraw(2000));
store.dispatch(requestLoan(10000, "Car Loan"));
store.dispatch(payLoan());

store.dispatch(increase(10));
store.dispatch(increase(10));
store.dispatch(decrease(5));

store.dispatch(create("Roid", "123456789"));
console.log(store.getState());

store.dispatch(reset());
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
