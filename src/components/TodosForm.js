import React from 'react'

const TodosForm = ({handleSubmit, todo, setTodo, editId}) => {
    return (
        <form className="form-file-input" onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={todo} 
          onChange={(e)=>setTodo(e.target.value)}
          />
          <button type="submit">{editId? "Edit": "Add"}</button>
        </form>
    )
}

export default TodosForm
