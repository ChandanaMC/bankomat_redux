import { createSlice } from "@reduxjs/toolkit";
//creatSlice () stores (reducer + actions)
//create an object in createSlice
const atmSlice = createSlice({
    name: "atm",
    // This is the reducer name
    initialState: {
        // These are the different states
        amount: 1000,
        toggleAtm: false,
        message: null

    },
    //In reducers we have an object consisiting of different actions and what they do
    reducers: {
        // we name the action as "decrement100" & so on & creat a function what decrement100 does
        //then we take our state and decrease it with 100
        decrement100: (state) => {
            if (state.amount >= 100) {
                state.amount -= 100
                state.message = null
            }
            else {
                state.message = " Insufficient balance! "
            }
        },
        decrement200: (state) => {
            if (state.amount >= 200) {
                state.amount -= 200
                state.message = null
            }
            else {
                state.message = " Insufficient balance! "
            }
        },
        decrement500: (state) => {
            if (state.amount >= 500) {
                state.amount -= 500
                state.message = null
            }
            else {
                state.message = " Insufficient balance! "
            }
        },
        decrement1000: (state) => {
            if (state.amount >= 1000) {
                state.amount -= 1000
                state.message = null
            }
            else {
                state.message = " Insufficient balance! "
            }
        },
        withdrawalByValue: (state, action) => {
            //If an amount is entered in the input field
            if (action.payload) {
                //If the amount is less than the account amount, deduct the amount
                if (action.payload < state.amount) {
                    state.amount -= action.payload;
                    state.message = null;
                } else {
                    state.message = "Insufficient balance!"
                }
            } else {
                //If the amount is not entered in the input field
                state.message = "Please enter the amount"
            }
        },
        depositByValue: (state, action) => {
            if (action.payload) {
                state.amount += action.payload;
                state.message = null
            } else {
                state.message = "Please enter the amount"
            }
        },
        increment100: (state) => {
            state.amount += 100
            state.message = null

        },
        increment200: (state) => {
            state.amount += 200
            state.message = null
        },
        increment500: (state) => {
            state.amount += 500
            state.message = null
        },
        increment1000: (state) => {
            state.amount += 1000
            state.message = null
        },
        toggle: (state) => {
            state.toggleAtm = !state.toggleAtm
        },
        reset: (state) => {
            state.amount = 1000;
        }
    }
})
const { actions, reducer } = atmSlice;
//export action
export const { decrement100,
    decrement200,
    decrement500,
    decrement1000,
    withdrawalByValue,
    depositByValue,
    increment100,
    increment200,
    increment500,
    increment1000,
    toggle,reset} = actions;
export default reducer;