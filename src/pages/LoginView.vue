<template>
  <div class="grid place-content-center">
    
    <h1 class="cursor-default font-mono font-extrabold text-4xl drop-shadow-md text-violet-600 mb-[70px] w-full text-center">Please sign in</h1>
<div class="border p-5">
    <div class="flex mt-3 p-1 border border-1 rounded-t-lg shadow-sm" :class="{'border-purple-500':state.emailFocused}">
      <input type="email" class="px-2 py-2 cursor-pointer outline-none" id="floatingInput" placeholder="example@example.com"
             @keyup.enter="submit()" @focus="state.emailFocused = true" @blur="state.emailFocused = false" v-model="state.form.email">
      <label class="p-3 cursor-pointer w-full text-slate-600 font-mono font-bold" for="floatingInput">Email</label>
    </div>
    <div class="flex mb-3 p-1 border border-1 rounded-b-lg shadow" :class="{'border-purple-500':state.passwordFocused}">
      <input type="password" class="px-2 py-2 cursor-pointer outline-none" id="floatingPassword" placeholder="Password"
             @keyup.enter="submit()" @focus="state.passwordFocused = true" @blur="state.passwordFocused = false" v-model="state.form.password">
      <label class="p-3 cursor-pointer w-full text-slate-600 font-mono font-bold" for="floatingPassword">Password</label>
    </div>
    <div class="mt-3 mb-10">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    
    <button class="border w-full bg-indigo-500 rounded-lg hover:bg-indigo-600 active:bg-indigo-700 text-white font-extrabold text-xl shadow-inner p-3 m-0 disabled:bg-slate-600" @click="submit()" :disabled="!isSubmitButtonEnabled" >Sign in</button>
</div>
    
    
  </div>
</template>


<script>
import {computed, reactive} from "vue";
import axios from "axios";
import store from "@/scripts/store";
import router from "@/scripts/router";




export default {

  setup() {

    const state = reactive({
      form: {
        email: "",
        password: "",
        
      },
      emailFocused: false,
      passwordFocused: false
    })

    const isSubmitButtonEnabled = computed(() => state.form.password !== '' && state.form.email !== '');

    const isEmailEmpty = () => state.form.email === '';

    const isPasswordEmpty = () => state.form.password === '';

    const submit = () => {
      axios.post("/api/account/login", state.form).then((res) => {
        store.commit("setAccount", res.data);
        router.push({path: "/"});
        window.alert("로그인하였습니다.")
      }).catch(() => {
        window.alert("로그인 정보가 존재하지 않습니다.");
      });
    }

    return {
      state,
      submit,
      isEmailEmpty,
      isPasswordEmpty,
      isSubmitButtonEnabled
    };
  },
  methods:{
    // submit() {
    //   axios.post("/api/account/login", this.state.form).then((res) => {
    //     store.commit("setAccount", res.data);
    //     console.log(res.data);
    //     sessionStorage.setItem("id", res.data);
    //     router.push({path: "/"});
    //     window.alert("로그인하였습니다.")
    //   }).catch(() => {
    //     window.alert("로그인 정보가 존재하지 않습니다.");
    //   });
    // },
  }

}
</script>

<style scoped>

</style>