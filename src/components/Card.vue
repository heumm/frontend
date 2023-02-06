<template>
  <!-- <div class="border shadow-md rounded"> -->
  <div class="grid grid-rows-5">
    <!-- <div
      class="row-span-4 bg-cover "
      :style="{ backgroundImage: `url(${item.imgPath})` }"
      alt="image"
    ></div> -->
    <img class="row-span-4" :src="item.imgPath" alt="image">
    <div class="card-body">
      <p class="card-text">
        <span>{{ item.name }} &nbsp;</span>
        <span class="discount badge bg-danger"> {{ item.discountPer }}% </span>
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <button class="btn btn-primary">구입하기</button>
        <small class="price text-muted">
          {{ lib.getNumberFormatted(item.price) }}원
        </small>

        <small class="real text-danger">
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