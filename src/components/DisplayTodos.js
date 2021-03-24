import React from 'react'

const DisplayTodos = ({alltodos, handleEdit, handleDelete}) => {
    return (
        <ul className="item-lists">

          {alltodos.map((sa)=>(
            <li className="item">
            <span className="toDotext" key={sa.id}> 
            {sa.todo}</span>
            <button onClick={()=>handleEdit(sa.id)}>Edit</button>
            <button onClick={()=>handleDelete(sa.id)}>Delete</button>
            </li>
          ))}
          
        </ul>
    )
}

export default DisplayTodos;
