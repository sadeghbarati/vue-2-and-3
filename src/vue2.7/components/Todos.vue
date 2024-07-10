<template>
  <div>
    <input v-model="newTodo" @keydown.13="keyDownEventFromMixin"/>
    {{ newTodo }}
    
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        {{ todo.title }} - {{ todo.completed }}
      </li>
    </ul>
  </div>
</template>

<script>
import { todoMixin } from '../mixins/todos'
export default {
  mixins: [todoMixin],
}
</script>
