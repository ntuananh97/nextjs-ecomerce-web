import { createSlice } from '@reduxjs/toolkit'

export interface IUserState {
}

const initialState: IUserState = {
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export default userSlice.reducer