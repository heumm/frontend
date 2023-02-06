<template>
  <div v-if="props.openModal" class="bg-black bg-opacity-50 w-full h-full fixed top-0 flex flex-col" id="modalBg" @click="$emit('closeModal', $event)">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 self-end text-white cursor-pointer" id="modalClose" @click="$emit('closeModal', $event)">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" id="modalClose2" />
    </svg>

    <!-- <div><i class="btn p-0 m-3 fa-solid fa-xmark" style="font-size: 30px;color: whitesmoke" @click="$emit('closeModal', $event)"></i></div> -->

    <div class="bg-white self-center m-auto w-9/12 h-4/6">
      <!--      <div :style="{backgroundImage:`url(${props.selectedItem.imgPath})`}"></div>-->


      <div class="row row-cols-2">
        <div class="col border-end"><img class="img-fluid" :src="props.selectedItem.imgPath" alt="img"/></div>
        <div class="col ">
          <div class="row ">
            <div class="col border-bottom"></div>
          </div>
          <div class="row ">
            <div class="col border-bottom"></div>
          </div>
          <div class="row ">
            <div class="col border-bottom"></div>
          </div>
        </div>
      </div>
<!--      <div class="d-flex flex-row-reverse"><button class="btn btn-sm btn-danger " @click="$emit('closeModalByButton')">Close</button></div>-->


    </div>
  </div>
</template>


<script setup>
import {defineEmits, defineProps} from "vue";


const props = defineProps({
  openModal: Boolean,
  selectedItem: Object
});


defineEmits([
  'closeModal'
]);


</script>


<style scoped>
/* img {
/*  border: 1px solid #ddd;*/
/*  border-radius: 4px;*/
/*  padding: 5px;*/
/*  width: 30%;*/
/*  !*height: 300px;*!*/
/*  !*max-height: 100%;*!*/
/*  !*max-width: 100%;*!*/
  /* object-fit: cover;
}  */

/* body {
  margin: 0;
} */

/* div {
  box-sizing: border-box;
} */

.black-bg {
  /*width: 100%;*/
  /*justify-content: center;*/
  /*height: 100%;*/
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  /*padding: 0;*/
}

.white-bg {
  /*width: 100%;*/
  min-height: 70%;
  background: white;
  border-radius: 1px;
  /*margin: auto;*/
  /*padding: 20px;*/
  /*width: 70%;*/
  /*height: 80%;*/
}


</style>