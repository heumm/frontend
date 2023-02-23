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
    <div class="flex flex-row" v-for="item in items" :key="item">
      
      <div class="flex flex-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="m-0.5 w-5 h-5 hover:cursor-pointer" @click="items++">
          <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
        </svg>
      
        <TodoList @pasteClipboard="pasteClipboard"/>
      </div>
      <!-- 동적으로 추가하기 기능 구현 -->
    </div>
  </main>
</template>
<script setup>
  import {onMounted, ref} from "vue";
  import TodoList from "@/components/TodoList.vue";

  // const scrollHeight = ref(0);  //textarea 높이 초기화
  const items = ref(1);
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

