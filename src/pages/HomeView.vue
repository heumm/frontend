<template>
  <div class="home bg-red">
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, i) in state.items" :key="i" @click="openModal = true, state.selectedItemId = item.id">
            <Card :item="item"/>
          </div>
        </div>
      </div>
    </div>

    <CardModalPopup :selected-item="state.selectedItem" :open-modal="openModal" @close-modal="closeModal"/>

  </div>

</template>
<script setup>
import axios from "axios";
import {reactive, ref, watch} from "vue";
import Card from "@/components/Card";
import CardModalPopup from "@/components/CardModalPopup"

const state = reactive({
  items: [],
  selectedItemId: -1,
  selectedItem: {}
})

const openModal = ref(false);

const closeModal = (event) => {
  if (event.target.classList.contains("black-bg") || event.target.classList.contains("fa-xmark")) {
    openModal.value = false;
    state.selectedItem = {};
  }
}


axios.get("/api/items").then(({data}) => {
  state.items = data;
  // console.log(state.items);
})

watch(() => state.selectedItemId, (newValue, oldValue) => {
  console.log('state.selectedItemId changed', {newValue, oldValue});
  // state.selectedItem.imgPath = '';
  if(openModal.value){
    axios.get(`/api/item/${state.selectedItemId}`).then(({data}) => {
      state.selectedItem = data;
      // console.log(state.selectedItem);
    }).catch(() => {
      window.alert('bad request');
    })
  }

}, {
  immediate:false
});
</script>

<style scoped>
/*body {*/
/*  margin : 0;*/
/*}*/
/*div {*/
/*  box-sizing: border-box;*/
/*}*/
.black-bg {
  background: rgba(0, 0, 0, 0.5);
  padding: 15%;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}

.white-bg {
  /*position: fixed;*/
  /*z-index: 999;*/
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

/*.my-modal {*/
/*  !*justify-content: center;*!*/
/*  position: fixed;*/
/*  !*z-index: 998;*!*/
/*  top: 0%;*/
/*  left: 0%;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*}*/
</style>