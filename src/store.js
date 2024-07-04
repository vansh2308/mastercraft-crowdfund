

import { configureStore } from "@reduxjs/toolkit";
import lightBoxDisplayReducer from "./features/LightBoxDisplaySlice";
import choiceReducer from "./features/choiceSlice";
import statsReducer from "./features/statsSlice";
import rewardsReducer from "./features/rewardsSlice";

export default configureStore({
  reducer: {
    lightBoxDisplay: lightBoxDisplayReducer,
    choice: choiceReducer,
    stats: statsReducer,
    rewards: rewardsReducer
  }
})
