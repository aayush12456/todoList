import React, { useState } from "react"
import {  useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { todoActions } from "../../store/todo-slice"
import './table.css'
import Task from "./task"
const Table=()=>{
    const [dataShow,setDataShow]=useState(false)
    const [data,setData]=useState(false)
    const [task,setTask]=useState(false)
    const dispatch=useDispatch()
    const AllTaskHandler=()=>{
        setDataShow(true)
    }
    const addData=(task,id)=>{
        const taskData={Id:id,Task:task}
        dispatch(todoActions.completeTask(taskData))
        setData(true)
    }
    const deleteData=(id)=>{
        dispatch(todoActions.todoDelete(id))
    }
    const completeTask=()=>{
    setTask(true)
    }
    const show=useSelector(state=>state.todoData.item)
return <React.Fragment>
    <div>
    {data && <button type="button" onClick={completeTask} class="btn btn-secondary" id="btn1" >completed task</button>}
    </div>
    <div>
    {show.length>0 && <button type="button" class="btn btn-primary" id="btn" onClick={AllTaskHandler}>All Task</button> }
    </div>
  {
show.length>0 && dataShow &&  
    <table border={1} width={70} cellPadding={10} cellSpacing={10} style={{marginTop:'30px', marginLeft:'12%'}}>
      <tr>
        <th>ID</th>
        <th>Task</th>
        <th>Buttons</th>
      </tr>
      { dataShow && show.map((item) => (
        <tr key={item.payload.id}>
          <td>{item.payload.id}</td>
          <td>{item.payload.Task}</td>
          {<td><img src="https://w7.pngwing.com/pngs/259/827/png-transparent-right-mark-tick-thumbnail.png" onClick={()=>addData(item.payload.Task,item.payload.id)} style={{width:'15px',marginLeft:'-25%'}}/><img onClick={()=>deleteData(item.payload.id)} src="https://w7.pngwing.com/pngs/512/363/png-transparent-red-cross-american-red-cross-wrong-miscellaneous-angle-flag-thumbnail.png" 
          style={{width:'15px', marginTop:'-5px',marginLeft:'20px'}}/></td>}
        </tr>
      ))}
    </table>
  }
 {task&& <Task/>}
</React.Fragment>
}
export default Table