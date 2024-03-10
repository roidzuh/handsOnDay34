import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: 0,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance = state.balance + action.payload;
    },
    withdraw: (state, action) => {
      state.balance = state.balance - action.payload;
    },

    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },

      reducer(state, action) {
        if (state.loan > 0) {
          return state;
        }
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan: (state, action) => {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

// const accountReducer = (state = initialStateAccount, action) => {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) {
//         return state;
//       } else {
//         return {
//           ...state,
//           loan: action.payload.amount,
//           loanPurpose: action.payload.purpose,
//           balance: state.balance + action.payload.amount,
//         };
//       }
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// };

// const deposit = (amount) => {
//   return { type: "account/deposit", payload: amount };
// };
// const withdraw = (amount) => {
//   return { type: "account/withdraw", payload: amount };
// };
// const requestLoan = (amount, purpose) => {
//   return {
//     type: "account/requestLoan",
//     payload: { amount: amount, purpose: purpose },
//   };
// };
// const payLoan = () => {
//   return { type: "account/payLoan" };
// };

// export default accountReducer;
// export { deposit, withdraw, requestLoan, payLoan };

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;