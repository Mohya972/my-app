import { createSlice } from '@reduxjs/toolkit';

//  initialisation du state du reducer counter
const initialState = {
    value: 0,
};

// création du reducer counter
export const counterSlice = createSlice ({
    name : 'counter',
    initialState,
    reducers : {
        increment : () => {
            // incrémentation de la valeur
        },
        decrement : () => {
            // décrémentation de la valeur
        },
    }
})

// export des actions creators
export const { increment, decrement } = counterSlice.actions;

// export du reducer counter
export default counterSlice.reducer;

