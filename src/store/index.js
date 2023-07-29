import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
const store=configureStore({
    reducer:{todoData:todoSlice.reducer}
})
export default store