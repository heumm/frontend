<template>
<div class="flex flex-row h-full">
  <Aside/>
  <RouterView class="flex-grow"/>
  <!-- <Footer /> -->
</div>
</template>

<script>

import Aside from "@/components/Aside";
// import Footer from "@/components/Footer";
import store from "@/scripts/store";
import axios from "axios";
import {watch} from "vue";
import {useRoute} from "vue-router";

export default {
  name: 'App',
  components: {
    // Footer,
    Aside
  },
  setup() {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    const check = () => {
      axios.get("/api/account/check").then(({data}) => {
        // console.log(data);
        if (data) {
          store.commit("setAccount", data || 0);  //data 있으면 넣고 없으면 0
        }
      })
    };

    const route = useRoute();

    watch(route, () => {
      check();
    })
  }
}
</script>

<style>


</style>
