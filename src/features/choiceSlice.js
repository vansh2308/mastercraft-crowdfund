

import { createSlice } from "@reduxjs/toolkit";

export const choiceSlice = createSlice({
  name: "choice",
  initialState: {
    value: {
        idx: 0,
        pledgeAmt: 0
    }
  },
  reducers: {
    setChoice: (state, action) => {
        state.value = action.payload
    }
  }
})

export const { setChoice } = choiceSlice.actions
export default choiceSlice.reducer

