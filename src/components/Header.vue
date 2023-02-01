<template>
  <header>
    <!--    <div class="collapse bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-4 py-4">
                <h4 class="text-white">사이트맵</h4>
                <ul class="list-unstyled">
                  <li>
                    <router-link to="/" class="text-white">메인 화면</router-link>
                  </li>
                  <li>
                    <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인</router-link>
                    <a to="/login" class="text-white" @click="logout()" v-else>로그아웃</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                   stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2"
                   viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
              <strong>Album</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                    aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>-->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li>

            </li>

          </ul>
          <ul class="navbar-nav mb-2 mb-sm-0">
            <li>
              <router-link to="/login" class="nav-link active" v-if="!$store.state.account.id">로그인</router-link>
              <a to="/login" class="nav-link" @click="logout()" v-else>로그아웃</a>
            </li>
          </ul>
          <!--          <form role="search">
                      <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    </form>-->
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
import router from "@/scripts/router";
import store from "@/scripts/store";

export default {
  name: 'Header',
  setup() {
    const logout = () => {
      store.commit('setAccount', 0);
      router.push({path: "/"});
    }


    return {logout};
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
