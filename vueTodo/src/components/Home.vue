<template>
  <div class="container">
    <button class="back-button" type="button" @click="MoveTodo">Todo</button>
    <button class="back-button" type="button" @click="MoveProduct">
      Products
    </button>
    <button class="back-button" type="button" @click="Logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function Logout() {
  router.push("/");
}

function MoveTodo() {
  router.push("/Todo");
}

function MoveProduct() {
  router.push("/ProductsIndex");
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
}

.back-button {
  background: linear-gradient(45deg, #007bff, #45a29e);
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  margin: 10px;
  transition: all 0.3s;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  width: 200px; /* or use max-width */
  text-align: center;
}

.back-button:hover {
  background: linear-gradient(45deg, #45a29e, #007bff);
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.4);
}
</style>
