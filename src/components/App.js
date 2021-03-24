
import React, { useState } from 'react';
import "./css/style.css";
import DisplayTodos from './DisplayTodos';
import TodosForm from './TodosForm';

const App = () => {
  const[todo, setTodo]= useState();
  const[alltodos, setAlltodos]= useState([]);
  const[editId, seteditId]= useState(0);

  const handleSubmit= (event)=>{
    event.preventDefault();
    if(editId){
      const editIt=alltodos.find((i)=>i.id===editId);
      const updatedTodos= alltodos.map((t)=>t.id===editIt.id
      ?(t={id:t.id,todo})
      :{id:t.id,todo:t.todo}
      );
      
      setAlltodos(updatedTodos);
      seteditId(0);
      setTodo("");
      return;

    }

    if(todo!==""){
      setAlltodos([...alltodos, {id:`${todo}-${Date.now()}` , todo}])
      setTodo("");
     
    }
  };

  const handleDelete= (id)=>{
    const del= alltodos.filter((obj)=>obj.id!==id)
    setAlltodos(del);
  }

 const handleEdit= (id)=>{
   const edit=alltodos.find((item)=>item.id==id);
   setTodo(edit.todo);
   seteditId(id);

 }


  return (
    <div className="App">
      <div className="container">
        <h1>React To Do List</h1>
        <TodosForm 
        handleSubmit ={handleSubmit}
        todo= {todo}
        setTodo={setTodo}
        editId= {editId}
        />
       
       <DisplayTodos
       alltodos={alltodos}
       handleEdit={handleEdit}
       handleDelete={handleDelete}
       />
        
      </div>
    </div>
  )
}

export default App;













