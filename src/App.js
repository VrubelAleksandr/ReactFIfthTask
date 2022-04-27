import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import List from './components/List';
import Form from './components/Form';
import './App.css';


export default function App() {
  // const dispatch = useDispatch();
  // // useEffect(() => {
  // //   dispatch(fetchTodos())
  // // }, [])
  return (
    <>
        <h1 className='title'>to do list</h1>
        <div className='list'>
           <List />    
        </div>
        <Form /> 
    </>
  )
}