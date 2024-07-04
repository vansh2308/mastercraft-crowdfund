import { createSlice } from "@reduxjs/toolkit";

export const lightBoxDisplaySlice = createSlice({
  name: "lightBoxDisplay",
  initialState: {
    value: false
  },
  reducers: {
    setLightBoxDisplay: (state, action) => {
        state.value = action.payload
    }
  }
})

export const { setLightBoxDisplay } = lightBoxDisplaySlice.actions
export default lightBoxDisplaySlice.reducer