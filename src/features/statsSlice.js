
import { createSlice } from "@reduxjs/toolkit";

export const statsSlice = createSlice({
  name: "stats",
  initialState: {
    value: {
        totalAmt: 69914,
        totalCt: 5007,
        daysLeft: 56
    }
  },
  reducers: {
    setStats: (state, action) => {
        state.value = action.payload
    }
  }
})

export const { setStats } = statsSlice.actions
export default statsSlice.reducer
