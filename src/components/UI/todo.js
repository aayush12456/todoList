import React, { useState } from "react"
import Button from './button'
import { useDispatch } from "react-redux"
import { todoActions } from "../../store/todo-slice"
const Todo=()=>{
    const [task,setTask]=useState(' ')
    const [id,setId]=useState(0)
    const dispatch=useDispatch()
    const taskChangeHandler=(event)=>{
    setTask(event.target.value)
    }
    const AddTask=(e)=>{
   e.preventDefault()
   setId(id+1)
   const obj={
    Task:task,
    id:id
   }
   setTask(' ')
   dispatch(todoActions.todoAdd(obj))
    }
return <React.Fragment>
        	<div class="container-fluid">
  <div class="container">
    <div class="mx-auto mt-5" style={{maxWidth:'700px'}}>
        <form onSubmit={AddTask}>
        <div class="input-group mb-3">
        <input type="text" class="form-control" onChange={taskChangeHandler} value={task} placeholder="Enter Your Task" aria-label="Recipient's username" id="username" aria-describedby="button-addon2"/>
      <Button>Add </Button>
      </div>
        </form>
    </div>
  </div>
</div>
</React.Fragment>
}
export default Todo