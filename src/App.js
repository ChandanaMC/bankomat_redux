import ATM from "./components/ATM"
import './App.css';
import { toggle, reset } from "./redux/atmSlice"
import { useSelector, useDispatch } from "react-redux"


function App() {
  const dispatch = useDispatch();

  const toggleButton = () => {
    dispatch(toggle());
  }
//Resets the account amount to 1000 when we start the ATM again after closing 
  const resetValue = () => {
    dispatch(reset());
  }

  const toggleAtmBtn = useSelector((state) => state.atm.toggleAtm);
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ color: "#41506b" }}>Welcome to the ATM</h2>
        <div>
          <button onClick={() => { toggleButton() }}>
            {!toggleAtmBtn ? "Start ATM" : "Close ATM"}
          </button>
          {/* {toggleAtmBtn? <ATM/> : !<ATM/>} */}
          {toggleAtmBtn && <ATM />  }
          {toggleAtmBtn &&  resetValue()}
        </div>
      </header>
    </div>
  );
}

export default App;
