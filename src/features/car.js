import { createSlice } from '@reduxjs/toolkit'

export const carSlicer = createSlice({
    name: "car",
    initialState: { value: [] },
    reducers: {
        setCar: (state, action) => {
            console.log(action.payload);
            state.value = action.payload
        },
    },
})
export const { setCar } = carSlicer.actions
export default carSlicer.reducer