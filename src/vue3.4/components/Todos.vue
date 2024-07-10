<template>
  <div>
    <input v-model="newTodo" @keydown.enter="keyDownEventFromComposable"/>
    {{ newTodo }}
    
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        {{ todo.title }} - {{ todo.completed }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTodos } from '../composables/useTodos'

const { todos, newTodo, keyDownEventFromComposable } = useTodos()
</script>
