import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};
export const RegisterUser = createAsyncThunk(
  "/user/signup",
  async ({ name, email, password }) => {
    const response = await axios.post(
      "http://localhost:3000/user/signup",
      { name, email, password },
      { withCredentials: true }
    );
    return response.data;
  }
);
export const LoginUser = createAsyncThunk(
  "/user/login",
  async ({ email, password }) => {
    const response = await axios.post(
      "http://localhost:3000/user/login",
      { email, password },
      { withCredentials: true }
    );
    // console.log(response.data)
    return response.data;
  }
);

export const checkAuth = createAsyncThunk("auth/checkAuth",async () => {
 const response =  await axios.get("http://localhost:3000/user/check-auth", {
    withCredentials: true,
    headers: {
      "Cache-Control": "no-store no-cache,must-revalidate,proxy-revalidate",
    },
  });
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isAuthenticated = false),
          (state.user = action.payload);
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isAuthenticated = false),
          (state.user = action.payload);
      })
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isAuthenticated = false),
          (state.user = null);
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isAuthenticated = action.payload?.success),
          (state.user = action.payload?.success ? action.payload.user : null);
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        // console.log(action.payload?.user);
        (state.isLoading = false),
          (state.isAuthenticated = action.payload?.success),
          (state.user = action.payload?.success ? action.payload.user : null);
      })
      .addCase(checkAuth.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isAuthenticated = false),
          (state.user =action.payload?.success ? action.payload.user : null);
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
