import { createSlice , PayloadAction} from "@reduxjs/toolkit";

// Type: User
export interface User{
  email: string;
  password: string;
}

// Set an array with User type
interface UserState {
  users: User[];
}

// Initialize array
const initialState: UserState = {
  users: [],
};

// UserSlice: name,initialstate, actions
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ email: string, password: string}>) => {
      state.users.push({
        email: action.payload.email,
        password: action.payload.password,
      });
    }
  }
});

export default UserSlice.reducer;

export const { addUser } = UserSlice.actions;













































// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchUsers = createAsyncThunk("users/fetchUsers" , () => {
//     const url = "https://reqres.in/api/register"; 
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {return data;})
// })


// type name = string;
// type FetchUsersState = {
//   isLoading: boolean;
//   users: Array<Object>;
//   error: string;
// }

// // const nameState: FetchUserNameState = {
// //   name: 'users'
// // }
// const initialState: FetchUsersState = {
//     isLoading: false,
//     users: [],
//     error: '',
// }

// export const userSlice = createSlice({
//   name: 'users',
//   initialState,
//     extraReducers: (builder) => {
//       // fetch users
//       builder.addCase(fetchUsers.pen, (state) => {
//         state.isLoading = true;
//       });

//       builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<Object>>) => {
//         state.isLoading = false;
//         state.users = action.payload;
//         state.error = "";
//       });

//       builder.addCase(fetchUsers.rejected, (state, action) => {
//         state.isLoading = false;
//         state.users = [...state.users];
//         state.error = action.error.message;
//       });
//     },
// })

// export const {fetchUsers} = userSlice.actions;


// export default userSlice.reducer;