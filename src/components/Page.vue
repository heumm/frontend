<template>
  <div class="flex flex-col m-5">
    <input type="text"
           class="w-full placeholder:font-extrabold placeholder:text-slate-400/60 placeholder:text-5xl placeholder:select-none h-10 text-5xl font-extrabold outline-0"
           placeholder="제목">
    <!--
        본문 hover 내용추가 버튼 등장 click시 1줄 추가
     -->
  </div>
  <main>
    <div class="flex flex-row" v-for="(item,itemId) in state.items" :key="itemId">
      
      <div class="flex flex-auto" @mouseenter="item.isItemShowing=true" @mouseleave="item.isItemShowing=false">
        
        <!-- <TransitionRoot
            :show="isShowing"
            enter="transition-opacity duration-75"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
          > -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="m-0.5 w-5 h-5 hover:cursor-pointer select-none" @click="addItem">
          <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
        </svg>
        <!-- </TransitionRoot> -->
        
        <TodoList/>
      </div>
      <!-- 동적으로 추가하기 기능 구현 -->
    </div>
    <div class="flex" @mouseenter="isShowing=true" @mouseleave="isShowing=false">
      
    <!-- <TransitionRoot
            :show="isShowing"
            enter="transition-opacity duration-75"
            enter-from="opacity-5"
            enter-to="opacity-100"
            leave="transition-opacity duration-150"
            leave-from="opacity-100"
            leave-to="opacity-5"
          > -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="m-0.5 w-5 h-5 hover:cursor-pointer select-none" @click="addItem">
        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
      </svg>
    <!-- </TransitionRoot> -->

    </div>
  </main>
</template>
<script setup>
  import {onMounted, reactive, ref} from "vue";
  import TodoList from "@/components/TodoList.vue";
  // import { TransitionRoot } from '@headlessui/vue';
  const itemId = ref(0);
  const isShowing = ref(true);
  // const scrollHeight = ref(0);  //textarea 높이 초기화
  const state = reactive({
    items: []
  }); //20230223 todo: reactive object로 변경

  const addItem = () => {
    console.log(itemId)
    state.items.push({
      id: itemId.value++,
      content: '',
      isItemShowing: false
    })
  }

  onMounted(() => {
    // scrollHeight.value = document.querySelector("#test").scrollHeight;  //DOM 요소 렌더링 후 높이 저장
  })

  
  // const onTextAreaKeyUp = (event) => {  //input 이벤트시 발생
  //   //todo: vue 문법으로 변경 가능여부 확인
  //   console.log(event.target.scrollHeight);
  //   console.log(event.target.clientHeight);
  //   scrollHeight.value = event.target.scrollHeight;
  // }
  

  


</script>

