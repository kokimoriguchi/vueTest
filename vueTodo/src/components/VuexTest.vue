<template>
  <div class="container">
    <p class="title">vuexTest</p>
    <button class="button" @click="onIncrement">+</button>
    <p class="count">{{ count }}</p>
    <button class="button" @click="onDecrement">-</button>
    <a class="back-button" href="/Home">back</a>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    onIncrement() {
      this.$store.commit("increment");
    },
    onDecrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
}

.title {
  font-size: 1.5em;
  color: #333;
}

.button {
  font-size: 1.2em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #45a049;
}

.count {
  font-size: 2em;
  font-weight: bold;
}

.back-button {
  font-size: 1em;
  color: #4caf50;
  text-decoration: none;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 2px;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.back-button:hover {
  color: #45a049;
  border-color: #45a049;
}
</style>
