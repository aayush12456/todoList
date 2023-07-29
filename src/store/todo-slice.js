import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:'todo',
    initialState:{item:[],items:[]},
    reducers:{
        todoAdd(state,data){
            state.item.push(data)
        },
       todoDelete(state,action){
        const Itemid = action.payload;
        console.log(Itemid)
        state.item = state.item.filter((todoitem) => todoitem.payload.id !== Itemid);
       },
       completeTask(state ,task){
       state.items.push(task)
       }
    }
})
export const todoActions=todoSlice.actions
export default todoSlice