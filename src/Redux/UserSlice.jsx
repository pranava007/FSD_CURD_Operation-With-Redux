import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    //name,initial state,reducer
    name:"users",
    initialState:{
        users:[]
    },
    reducers:{
        // getuser,createuser,updateuser,deleteuser
        getUser:(state,action)=>{
            state.users = action.payload
        },
        createUser:(state,action)=>{
            state.users.push(action.payload)
        },
        updateUser:(state,action)=>{
            const index =  state.users.findIndex(ele=>ele._id === action.payload._id)
            state.users[index] = {
                id:action.payload.id,
                name:action.payload.name,
                email:action.payload.email,
                age:action.payload.age
            }
        },
       deleteUser:(state,action)=>{
            const id = action.payload.id;
            state.users = state.users.filter(ele=>ele._id !== id)
       }


    }

})

export const {getUser,createUser,updateUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;



















