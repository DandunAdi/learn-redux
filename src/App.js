import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./action";

function App() {
  const count = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>

      {isLogged ? <h3>Welcome user</h3> : <h3>Please login.</h3>}
    </div>
  );
}

export default App;
