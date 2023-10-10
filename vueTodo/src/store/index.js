import { createStore } from "vuex";

export default createStore({
  state: {
    count: 100,
    tasks: [
      { id: 1, labelIds: [1, 3], name: "buy milk", done: false },
      { id: 2, labelIds: [2, 4], name: "buy book", done: false },
    ],
    labels: [
      { id: 1, text: "買い物" },
      { id: 2, text: "勉強" },
      { id: 3, text: "仕事" },
      { id: 4, text: "その他" },
    ],
    nextTaskId: 3,
    nextLabelId: 5,

    filter: null,
  },

  getters: {
    filteredTasks(state) {
      if (!state.filter) {
        return state.tasks;
      }
      return state.tasks.filter((task) => {
        return task.labelIds.includes(state.filter);
      });
    },
  },

  mutations: {
    increment(state) {
      state.count += 100;
    },
    decrement(state) {
      state.count -= 100;
    },

    addTask(state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false,
      });
      state.nextTaskId++;
    },

    toggleTaskStatus(state, { id }) {
      const filtered = state.tasks.filter((task) => {
        return task.id === id;
      });
      filtered.forEach((task) => {
        task.done = !task.done;
      });
    },

    addLabel(state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text,
      });
      state.nextLabelId++;
    },

    changeFilter(state, { filter }) {
      state.filter = filter;
    },

    restore(state, { tasks, labels, nextTaskId, nextLabelId }) {
      state.tasks = tasks;
      state.labels = labels;
      state.nextTaskId = nextTaskId;
      state.nextLabelId = nextLabelId;
    },
  },

  actions: {
    save({ state }) {
      const data = {
        tasks: state.tasks,
        labels: state.labels,
        nextTaskId: state.nextTaskId,
        nextLabelId: state.nextLabelId,
      };
      localStorage.setItem("task-app-data", JSON.stringify(data));
    },

    restore({ commit }) {
      const data = localStorage.getItem("task-app-data");
      if (data) {
        commit("restore", JSON.parse(data));
      }
    },
  },
});
