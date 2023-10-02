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

<style>
body {
  font-family: sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 90%;
  margin: 0 5%;
  color: #242424;
}

.header {
  display: flex;
  align-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.header > img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.header > h1 {
  font-size: 80px;
  font-weight: bold;
  line-height: 80px;
  margin-top: 0;
  margin-bottom: 0;
}

.main {
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  column-gap: 24px;
  row-gap: 24px;
}

.item {
  padding: 10px;
  cursor: pointer;
}

.item:hover {
  transition: 0.2s transform ease-out;
  transform: scale(1.05);
}

.item > div.thumbnail > img {
  width: 100%;
  height: calc(100%);
  object-fit: cover;
}

.item > div.description {
  text-align: left;
  margin-top: 20px;
}

.item > div.description > p {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 25px;
}

.item > div.description > span {
  display: block;
  margin-top: 10px;
  font-size: 20px;
}

.item > div.description > span > .price {
  font-size: 28px;
  font-weight: bold;
}

.selected-item {
  background-color: #e3f2fd;
}

.back-button {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
