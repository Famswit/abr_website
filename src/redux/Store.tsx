import { configureStore } from "@reduxjs/toolkit";
import podcastReducer from "./slices/podcastSlice";
import categoryReducer from "./slices/categorySlice";
import episodeReducer from "./slices/episodeSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    podcasts: podcastReducer,
    categories: categoryReducer,
    episodes: episodeReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
