// @ts-nocheck

import { ref, onMounted } from 'vue'

export function useTodos() {
  const todos = ref([])
  const newTodo = ref('')
  
  function keyDownEventFromComposable(e) {
    if(e.target.value == '')
      return 

    let todosLength = todos.value.length + 1

    todos.value.push({
      title: e.target.value,
      id: todosLength++,
      completed: false
    })

    newTodo.value = '';
    console.log(todos.value)
  }

  onMounted(() => {
    console.log('todo component mounted')
  })

  return {
    todos,
    newTodo,
    keyDownEventFromComposable
  }
}
