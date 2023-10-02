<template>
  <div>
    <form class="todo-form" @submit.prevent>
      <input
        class="todo-input"
        v-model="newTodoText"
        type="text"
        placeholder="Add Todo"
      />
      <button class="button" @click="addTodo">add</button>
      <button class="button" @click="backHome">back</button>
    </form>
    <table class="todo">
      <!-- テーブルヘッダー -->
      <thead class="table">
        <tr>
          <th class="id">ID</th>
          <th class="todo-list">Todo</th>
          <th class="state">状態</th>
          <th class="">-</th>
        </tr>
      </thead>
      <tbody class="table">
        <tr v-for="todo in todos" :key="todo.id">
          <td class="id">{{ todo.id }}</td>
          <td class="todo-list" :class="{ completed: todo.state }">
            {{ todo.todo }}
          </td>
          <td class="state"><input type="checkbox" v-model="todo.state" /></td>
          <td class="button-header">
            <button
              type="button"
              class="button delete-button"
              @click="deleteTodo"
            >
              delate
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const todos = ref([]);

const newTodoText = ref("");
function addTodo() {
  if (newTodoText.value === "") {
    alert("文字を入力してください");
    return;
  }
  todos.value.push({
    id: todos.value.length + 1,
    todo: newTodoText.value,
    state: false,
  });
  newTodoText.value = "";
}

function deleteTodo() {
  todos.value.pop();
}

function backHome() {
  router.push("/Home");
}
</script>

<style scoped>
/* ベースとなるスタイリング */
* {
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
}

/* フォームのスタイリング */
.todo-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

/* インプットフィールドのスタイリング */
.todo-input {
  flex: 1;
  height: 40px;
  padding: 0 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  margin-right: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

/* ボタンのスタイリング */
.button,
.button-header {
  background-color: #4caf50; /* グリーン */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.button:hover,
.button-header:hover {
  background-color: white;
  color: #4caf50;
  border: 1px solid #4caf50;
}

/* テーブルのスタイリング */
.todo {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
}

/* テーブルヘッダーのスタイリング */
.table th {
  background-color: #f2f2f2;
}

/* テーブルセルのスタイリング */
.id,
.state {
  width: 10%;
  text-align: center;
}

.todo-list {
  width: 70%;
}

/* 打ち消し線のスタイリング */
.todo-list.completed {
  text-decoration: line-through;
  color: #ccc;
}
</style>
