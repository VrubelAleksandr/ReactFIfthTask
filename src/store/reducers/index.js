import {
  ACTION_ADD,
  ACTION_DELETE,
  ACTION_CHANGESTATUS
} from '../actions/todos';



const initialstate = {
  todos: [
    {
      id: 1,
      title: 'Task 1',
      isDone: false
    }, {
      id: 2,
      title: 'Task 2',
      isDone: false
    }, {
      id: 3,
      title: 'Task 3',
      isDone: false
    }
  ]
}


export function rootReducer(state = initialstate, { type, payload }) {
  // console.log(state)
  switch (type) {
    case ACTION_ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().getTime(),
            title: payload,
            isDone: false
          }
        ]
      };

    case ACTION_DELETE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload)
      };

    case ACTION_CHANGESTATUS: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          return item.id === payload ? {
            ...item,
            isDone: !item.isDone,
          } : item
        })
      }
    }
    default:
      return state
  }
}


