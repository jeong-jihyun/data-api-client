import { configureStore } from "@reduxjs/toolkit";
import { LfinsOvrlPstaSlice } from "./LfinsOvrlPstaReducer";

export const store = configureStore({
  reducer: {
    lfinsOvrlPstaReducer: LfinsOvrlPstaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
