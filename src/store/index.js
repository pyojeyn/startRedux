import { configureStore } from "@reduxjs/toolkit";

// export const INCREMENT = "increment";





// 하나의 리덕스 스토어
// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };


import counterReducer from "./counter"; // import 문에서 가져온 모듈의 이름은 마음대로 정할 수 있음
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer},
});

export default store;
