<template>
  <div>
    <h1>タスク一覧</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input
          type="checkbox"
          v-model="task.done"
          v-on:change="toggleTaskStatus(task)"
        />
        {{ task.name }}
        -
        <span v-for="id in task.labelIds" v-bind:key="id">
          {{ getLabelText(id) }}
        </span>
      </li>
    </ul>

    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="new Task" />
    </form>

    <h2>ラベル一覧</h2>
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input
          type="checkbox"
          v-bind:value="label.id"
          v-model="newTaskLabelIds"
        />
        {{ label.text }}
      </li>
    </ul>

    <form v-on:submit.prevent="addLabel">
      <input type="text" v-model="newLabelText" placeholder="new Label" />
    </form>

    <h2>ラベルでフィルタ</h2>
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input
          type="radio"
          v-bind:checked="label.id === filter"
          v-on:change="changeFilter(label.id)"
        />
        {{ label.text }}
      </li>
      <li>
        <input
          type="radio"
          v-bind:checked="filter === null"
          v-on:change="changeFilter(null)"
        />
        全て
      </li>
    </ul>

    <h2>save</h2>
    <button type="button" v-on:click="save">save</button>
    <button type="button" v-on:click="load">load</button>
    <button type="button" v-on:click="back">back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskName: "",
      newTaskLabelIds: [],
      newLabelText: "",
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.filteredTasks;
    },
    labels() {
      return this.$store.state.labels;
    },
    filter() {
      return this.$store.state.filter;
    },
  },
  methods: {
    addTask() {
      this.$store.commit("addTask", {
        name: this.newTaskName,
        labelIds: this.newTaskLabelIds,
      });
      this.newTaskName = "";
      this.newTaskLabelIds = [];
    },
    toggleTaskStatus(task) {
      this.$store.commit("toggleTaskStatus", { id: task.id });
    },

    addLabel() {
      this.$store.commit("addLabel", { text: this.newLabelText });
      this.newLabelText = "";
    },

    getLabelText(id) {
      const label = this.labels.filter((label) => label.id === id)[0];
      return label ? label.text : "";
    },

    changeFilter(labelId) {
      this.$store.commit("changeFilter", { filter: labelId });
    },

    save() {
      this.$store.dispatch("save");
    },

    load() {
      this.$store.dispatch("restore");
    },
    back() {
      this.$router.push("/Home");
    },
  },
};
</script>

<style scoped>
/* 基本的なスタイルリセット */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
}

div {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f6f6f6;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
  margin-bottom: 20px;
  color: #333;
}

ul {
  list-style-type: none;
  margin-bottom: 20px;
}

li {
  margin-bottom: 10px;
}

input[type="text"],
input[type="radio"] {
  margin-right: 10px;
}

button {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

form {
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 70%;
}

input[type="checkbox"],
input[type="radio"] {
  margin-right: 5px;
}

span {
  margin-right: 5px;
}
</style>
