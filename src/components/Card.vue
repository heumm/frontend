<template>
  <!-- <div class="border shadow-md rounded"> -->
  <div class="flex flex-col px-2">
    <!-- <div
      class="row-span-4 bg-cover "
      :style="{ backgroundImage: `url(${item.imgPath})` }"
      alt="image"
    ></div> -->
    <img class="h-40 sm:h-44 lg:h-52 xl:h-60 object-contain" :src="item.imgPath" alt="image">
    <div class="card-body">
      <p class="card-text">
        <span class="text-base font-medium">{{ item.name }} &nbsp;</span>
        <span class="text-xs text-red-600 font-bold"> {{ item.discountPer }}% </span>
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <button class="bg-blue-300 hover:bg-blue-400 active:bg-blue-500 text-white font-sans font-medium text-xs p-1 m-1 rounded">예약하기</button>
        <small :class="{'line-through':(item.discountPer !== '')}">
          {{ lib.getNumberFormatted(item.price) }}원
        </small>

        <small :class="{'text-red-600':(item.discountPer !== '')}">
          {{
            lib.getNumberFormatted(
              item.price - (item.price * item.discountPer) / 100
            )
          }}원
        </small>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import lib from "@/scripts/lib";

export default {
  name: "Card",
  props: {
    item: Object,
  },
  setup() {
    return { lib };
  },
};
</script>

<style scoped>
</style>