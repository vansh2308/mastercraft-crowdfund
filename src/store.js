

import { configureStore } from "@reduxjs/toolkit";
import lightBoxDisplayReducer from "./features/LightBoxDisplaySlice";

export default configureStore({
  reducer: {
    lightBoxDisplay: lightBoxDisplayReducer,
  }
})
