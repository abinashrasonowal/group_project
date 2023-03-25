import { createReducer } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

export const rootReducer = createReducer(initialState, (isAuthenticated) => {
  isAuthenticated
    .addCase('login', (state) => {
      state.isAuthenticated = true;
    })
    .addCase('logout', (state) => {
      state.isAuthenticated = false;
    });
});


