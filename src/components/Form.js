import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from "react";
import {addTodo} from '../store/actions/todos'

export default function Form() {
  const dispatch  = useDispatch();
  const [newTitle, setNewTitle] = useState({title: ''})
  
  
  function changeHandler(e) {
    // console.log(e.target.value)
    setNewTitle({title: e.target.value})
  }

  function submitlHandler(e) {
    e.preventDefault();
    console.log(newTitle);
    dispatch(addTodo(newTitle.title))
    setNewTitle({title: ''})
  }

  return (
    <form onSubmit={submitlHandler}>
      <input type='text' className='input-task' placeholder='new task' 
      value={newTitle.title} 
      onChange={changeHandler}/>
      <button className='btn'>Add ToDo</button>
    </form>
  )
}