export const ACTION_ADD = 'ACTION_ADD';
export  function addTodo(payload) {
  return {type: ACTION_ADD, payload}
}

export const ACTION_DELETE = 'ACTION_DELETE';
export function deleteItem(payload) {
  return {type: ACTION_DELETE, payload}
}


export const ACTION_CHANGESTATUS = 'ACTION_CHANGESTATUS';
export function changeStatus(payload) {
  return {type: ACTION_CHANGESTATUS, payload}
}