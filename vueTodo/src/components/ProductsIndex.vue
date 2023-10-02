<template>
  <Header></Header>
  <div class="product-header">
    <div>
      <div>商品数：{{ stockQuantity() }}</div>
      <div>現在時刻：{{ getDate() }}</div>
    </div>
    <button class="back-button" type="button" @click="back">戻る</button>
  </div>
  <main class="main">
    <template v-for="item in items" :key="item.id">
      <!-- item.selectedがtrueの場合はselected-itemクラスを付与するという意味のv-bind:classの省略記法です。 -->
      <div
        v-if="!item.soldOut"
        :class="{ 'selected-item': item.selected }"
        @click="item.selected = !item.selected"
        @keyup.enter="item.selected = !item.selected"
        tabindex="0"
        class="item"
      >
        <Card
          :id="item.id"
          :image="item.image"
          :name="item.name"
          :description="item.description"
          :price="item.price"
          @sold-out="changeSoldOut"
        />
      </div>
      <div v-else>
        売り切れです<button type="button" @click="stockItem(item)">入荷</button>
      </div>
    </template>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Card from "./Card.vue";
import Header from "./Header.vue";
import { useRouter } from "vue-router";

function stockQuantity() {
  return items.value.filter((item) => item.soldOut === false).length;
}

function stockItem(item) {
  item.soldOut = false;
}

function getDate() {
  return new Date().toLocaleString();
}

function changeSoldOut(id) {
  const pickElm = items.value.find((item) => item.id == id);
  pickElm.soldOut = true;
}

function back() {
  router.back("/Home");
}

const router = useRouter();
const items = ref([
  {
    id: 1,
    name: "アボカドディップバケット",
    description:
      "刻んだ野菜をアボカドと混ぜてディップに。こんがり焼いたバゲットとお召し上がりください。",
    price: 2500,
    image: "/images/item1.jpg",
    soldOut: true,
    selected: false,
  },
  {
    id: 2,
    name: "あの日夢見たホットケーキ",
    description:
      "あの日夢見たホットケーキ。ふわふわの生地に、たっぷりのメープルシロップをかけてお召し上がりください。",
    price: 30000,
    image: "/images/item2.jpg",
    soldOut: false,
    selected: false,
  },
  {
    id: 3,
    name: "HOP WATER",
    description:
      "ホップの香りが楽しめる、ノンアルコールビール。おつまみと一緒にお召し上がりください。",
    price: 2000,
    image: "/images/item3.jpg",
    soldOut: false,
    selected: false,
  },
  {
    id: 4,
    name: "チーズフレンチフライ",
    description:
      "チーズをたっぷりかけたフレンチフライ。おつまみと一緒にお召し上がりください。",
    price: 4800,
    image: "/images/item4.jpg",
    soldOut: false,
    selected: false,
  },
]);
</script>

<style scoped>
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  background-color: #f8f8f8;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.product-header > div {
  display: flex;
  gap: 20px;
  align-items: center;
}

.back-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #0056b3;
}

.main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 0 20px;
}

.item,
div[v-else] {
  background-color: white;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.item:hover {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.item[v-if] {
  cursor: pointer;
}

div[v-else] {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}

.selected-item {
  border-color: #007bff;
}

button[type="button"] {
  margin: 10px;
  padding: 5px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="button"]:hover {
  background-color: #218838;
}
</style>
