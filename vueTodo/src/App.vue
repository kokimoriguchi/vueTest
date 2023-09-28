<script setup>
  import { ref } from 'vue'

  let id = 0
  const newTodoRef = ref('')
  const todos = ref([
    {
      id: id++,
      text: 'Learn Vue.js',
    },
    {
      id: id++,
      text: 'Learn React',
    },
    {
      id: id++,
      text: 'Learn Angular',
    }
  ])

  function removeTodo(todo) {
    todos.value = todos.value.filter((t) => t !== todo)
  }

  function addTodo() {
    const newTodo = newTodoRef.value.trim()
    if (newTodo !== '') {
      const todo = { id: id++, text: newTodo }
      todos.value.push(todo)
      newTodoRef.value = ''
    }
  }
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodoRef">
    <button>Add Todo</button>
    <p>{{ newTodoRef }}</p>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">Remove</button>
    </li>
  </ul>
</template>