import { useSelector, useDispatch } from "react-redux"
import {
    decrement100,
    decrement200,
    decrement500,
    decrement1000,
    withdrawalByValue,
    depositByValue,
    increment100,
    increment200,
    increment500,
    increment1000,
} from "../redux/atmSlice"

const ATM = () => {
    const dispatch = useDispatch();
    const { amount, message } = useSelector((state) => state.atm);
    // const amount = useSelector((state)=> state.atm.amount)
    const handleWithdrawl = () => {
        let amountWithdrawn = document.querySelector("#withdrawal");
        let withdraw = amountWithdrawn.value;
        dispatch(withdrawalByValue(withdraw));
        //Sets the input field blank after each withdrawal
        amountWithdrawn.value = "";
    }

    const handleDeposit = () => {
        let amountDeposited = +document.querySelector("#deposit").value;
        dispatch(depositByValue(amountDeposited));         
    }
    return (
        <div>
            <div className="heading">
                <h2>Your account balance: {amount} SEK</h2>
                <h1 style={{ color: "deeppink" }}>{message}</h1>
            </div>

            <div className="container">
                <div className="withdraw">
                    <h2 style={{ color: "#41506b" }}>Please enter the amount you want to withdraw:</h2>
                {/* min="1" sets the min value in input field to 1 */}
                    <input type="number" id="withdrawal" min="1" />
                    <button onClick={handleWithdrawl}>Withdraw</button>
                    <br />

                    <div className="buttons">
                        {/* Dispatch an action in onClick */}
                        <button onClick={() => { dispatch(decrement100()) }}>100SEk</button>
                        <button onClick={() => { dispatch(decrement200()) }}>200SEK</button>
                        <button onClick={() => { dispatch(decrement500()) }}>500SEK</button>
                        <button onClick={() => { dispatch(decrement1000()) }}>1000SEK</button>
                    </div>
                </div>

                <br />

                <div className="deposit">
                    <h2 style={{ color: "#41506b" }}>Please enter the amount you want to deposit:</h2>
                    <input type="number" id="deposit" min="1" />
                    <button onClick={handleDeposit}>Deposit</button>
                    <br />

                    <div className="buttons">
                        <button onClick={() => { dispatch(increment100()) }}>100SEK</button>
                        <button onClick={() => { dispatch(increment200()) }}>200SEK</button>
                        <button onClick={() => { dispatch(increment500()) }}>500SEK</button>
                        <button onClick={() => { dispatch(increment1000()) }}>1000SEK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ATM