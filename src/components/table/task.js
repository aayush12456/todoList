import React from "react"
import { useSelector } from "react-redux"
import './task.css'
const Task=()=>{
const selector= useSelector(state=>state.todoData.items)
return <React.Fragment>
  {selector.length>0 && <table border={1} width={70} cellPadding={10} cellSpacing={10} style={{marginTop:'2%', marginLeft:'56%'}}>
      <tr>
        <th>ID</th>
        <th>Task</th>
      </tr>
      {selector.map((item) => (
        <tr key={item.payload.Id}>
          <td>{item.payload.Id}</td>
          <td>{item.payload.Task}</td>
        </tr>
      ))}
    </table>
}
</React.Fragment>
}
export default Task