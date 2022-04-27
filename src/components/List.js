import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { deleteItem, changeStatus } from '../store/actions/todos'

export default function List() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos)
  return (
    <div>
      {todos.map((item) => {
        return (
          <div 
            className={`item-list ${item.isDone ? 'item-done' : ''} `}
            key={item.id}
            onClick={() => dispatch(changeStatus(item.id))}
          >
            {item.title}
            <button onClick={() => dispatch(deleteItem(item.id))} className='btn-delete'>
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}