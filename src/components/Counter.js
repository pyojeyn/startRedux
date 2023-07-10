import classes from "./Counter.module.css";
// import { Component } from "react";
import { useSelector, useDispatch} from "react-redux";
// import { INCREMENT } from "../store";
import { counterActions } from "../store/counter";


// 리액트 컴포넌트에서 리덕스 데이터 사용하기,
// 내부 컴포넌트에서 Action 을 Dispatch 하기.

const Counter = () => {
  const dispatch = useDispatch();

  // 이 함수는 react-redux가 실행
  const counter = useSelector((state) => state.counter.counter); // counterSlice 에 접근 
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment()); // 고유 액션 식별자가 자동으로 생성하게 설정된 전체 액션 객체를 만드는 방법
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// useSelector 롤
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// useDispatch 롤
// const mapDispatchToProps = (dipsatch) => {
//   return {
//     increment: () => dipsatch({ type: "increment" }),
//     decrement: () => dipsatch({ type: "decrement" }),
//   };
// };

export default Counter;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
