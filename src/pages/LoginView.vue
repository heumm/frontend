<template>
  <div class="grid place-content-center">
    <h1 class="font-mono font-extrabold text-3xl text-violet-600 my-[30px]">Please sign in</h1>

    <div class="my-10">
      <input type="email" class="border" id="floatingInput" placeholder="name@example.com"
             @keyup.enter="submit()" v-model="state.form.email">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="my-10">
      <input type="password" class="border" id="floatingPassword" placeholder="Password"
             @keyup.enter="submit()" v-model="state.form.password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="my-10">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    
    <button class="border border-indigo-600 bg-indigo-500 rounded-lg hover:bg-indigo-600 hover:cursor-pointer active:bg-indigo-700 text-white font-extrabold text-xl shadow-inner p-3 m-0" @click="submit()" :disabled="state.form.password === ''" >Sign in</button>
    
  </div>
</template>


<script>
import {reactive} from "vue";
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
    })

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
      isPasswordEmpty
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
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>