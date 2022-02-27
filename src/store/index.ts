import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cardReducer from "./card";

const store = configureStore({
  reducer: {
    card: cardReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;