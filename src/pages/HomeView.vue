<template>
<div class="p-3">
  <Page/>
</div>
    <!-- <div class="flex-grow"> -->
      <!-- <div class="grid grid-cols-1 md:grid-cols-3 m-5"> -->
        <!-- <div class="border rounded shadow-md m-5" v-for="(item, i) in state.items" :key="i" @click="state.selectedItemId = item.id, openModal = true">
          <Card :item="item"/>
        </div> -->
        
      <!-- </div> -->
      <!-- <CardModalPopup :selected-item="state.selectedItem" :open-modal="openModal" @close-modal="closeModal"/> -->
    <!-- </div> -->



</template>
<script setup>
import Page from "@/components/Page.vue";
// import axios from "axios";
// import {reactive, watch} from "vue";
// import Card from "@/components/Card";
// import CardModalPopup from "@/components/CardModalPopup"

// const state = reactive({
//   items: [],
//   selectedItemId: -1,
//   selectedItem: {}
// });

// const openModal = ref(false);

// const closeModal = (event) => {
//   if (event.target.id === 'modalBg' || event.target.id === 'modalClose' || event.target.id === 'modalClose2') {
//     openModal.value = false;
//   }
// }


// axios.get("/api/items").then(({data}) => {
//   state.items = data;
// })



// watch(() => state.selectedItemId, (newValue, oldValue) => {
//   console.log('state.selectedItemId changed', {newValue, oldValue});
  
//   state.selectedItem = {};
//   axios.get(`/api/item/${state.selectedItemId}`).then(({data}) => {
//     state.selectedItem = data;
//   }).catch(() => {
//     window.alert('bad request');
//   })
// }, {
//   immediate:false
// });

</script>

<style scoped>
/*body {*/
/*  margin : 0;*/
/*}*/
/*div {*/
/*  box-sizing: border-box;*/
/*}*/
/* .black-bg {
  background: rgba(0, 0, 0, 0.5);
  padding: 15%;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}

/* .white-bg { */
  /*position: fixed;*/
  /*z-index: 999;*/
  /*width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
} */

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