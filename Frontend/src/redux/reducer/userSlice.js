import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userId: null,
  name: "",
  email: "",
  password: "",
  rol: null,
  status: "not authenticated",
  token: null,
};
// rol --> admin, trabajador, user, null
// status --> not authenticated, logged_in, logged_out

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { userId, name, email, password } = action.payload;
      state.userId = userId;
      state.name = name;
      state.email = email;
      state.password = password;
    },
    loginUser: (state, action) => {
      const { name, email, rol, token } = action.payload;
      state.email = email;
      state.name = name;
      state.rol = rol;
      state.token = token;
    },
    login: (state) => {
      state.status = "logged_in";
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { addUser, login, changePassword, loginUser } = userSlice.actions;
export default userSlice.reducer;
