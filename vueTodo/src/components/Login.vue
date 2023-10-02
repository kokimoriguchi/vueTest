<template>
  <div id="login-template" class="login-form">
    <div class="form">
      <input
        class="input-form"
        type="text"
        placeholder="LoginID"
        v-model="id"
      />
    </div>
    <div class="form">
      <input
        class="input-form"
        type="password"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <div class="form-button">
      <button type="button" class="button-login" @click="login">Login</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const id = ref("");
const password = ref("");
const router = useRouter();

function login() {
  auth.login(id.value, password.value);
  router.push("/Home");
}

const auth = {
  login: function (id, pass) {
    window.alert("userId: " + id + " password: " + pass);
  },
};
</script>

<style scoped>
.login-form {
  max-width: 350px;
  margin: 100px auto 0;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
}

.form {
  margin-bottom: 20px;
}

.input-form {
  width: calc(100% - 3px);
  padding: 12px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;
  display: block;
  box-sizing: border-box;
}

.input-form:focus {
  border-color: #007bff;
  outline: none;
}

.button-login {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-login:hover {
  background-color: #0056b3;
}
</style>
