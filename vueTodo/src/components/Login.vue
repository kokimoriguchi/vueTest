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
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  height: 200px;
  padding-top: 7%;
}

.form {
  margin-bottom: 10px;
}

.input-form {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
}

.button-login {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  margin: auto;
  cursor: pointer;
}
</style>
