import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { deposit } from "./features/account/accountSlice";
import { decrease, increase, reset } from "./features/counter/counterSlice";
import { updateName } from "./features/customer/customerSlice";

function App() {
  const account = useSelector((state) => state.account);
  const count = useSelector((state) => state.counter);
  const customer = useSelector((state) => state.customer);
  console.log(customer);
  const dispatch = useDispatch();
  const { balance } = account;
  const { counter } = count;
  const { fullname, nationalId, createdAt } = customer;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>{balance}</p>
          <button onClick={() => dispatch(deposit(5000))}>add 5000</button>
        </div>
        <div>
          <p>{counter}</p>
          <button onClick={() => dispatch(decrease(1))}>-</button>
          <button onClick={() => dispatch(increase(1))}>+</button>
          <div>
            <button onClick={() => dispatch(reset())}>Reset</button>
          </div>
        </div>
        <div>
          <p>{fullname}</p>
          <p>{nationalId}</p>
          <p>{createdAt}</p>
          <button onClick={() => dispatch(updateName("Roid Zuhdianto"))}>
            Update Name
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
