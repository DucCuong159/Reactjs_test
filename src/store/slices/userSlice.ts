import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  salary: string;
}

export interface UserState {
  userList: User[];
  isShowing: boolean;
}

const initialState: UserState = {
  userList: [],
  isShowing: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserList: (state: UserState, action: PayloadAction<User[]>) => {
      state.userList = action.payload;
    },
    updateShowingList: (state: UserState, action: PayloadAction<boolean>) => {
      state.isShowing = action.payload;
    },
  },
});

export const { changeUserList, updateShowingList } = userSlice.actions;
export default userSlice.reducer;
