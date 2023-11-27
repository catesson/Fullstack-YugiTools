import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    email: null,
  },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(disconnect, (state) => {
      return {
        id: null,
        email: null,
      };
    });
  },
});

const tokenSlice = createSlice({
  name: "tokenUser",
  initialState: null,
  reducers: {
    setToken: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(disconnect, (state) => {
      return null;
    });
  },
});

const connectSlice = createSlice({
  name: "connect",
  initialState: false,
  reducers: {
    setConnect: (state) => {
      return true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(disconnect, (state) => {
      return false;
    });
  },
});

export const disconnect = createAction("disconnect");
export const { setConnect } = connectSlice.actions;
export const { setToken } = tokenSlice.actions;
export const { setUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    connect: connectSlice.reducer,
    user: userSlice.reducer,
    token: tokenSlice.reducer,
  },
});
