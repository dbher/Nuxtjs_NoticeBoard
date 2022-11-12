<template>
  <div class="container">
    <div class ="header">
      123345
      <!-- <NuxtLink to="/submenu/write" id = "sub_menu">글쓰기</NuxtLink>
      <button @click="write">새 글 쓰기</button> -->
    </div>
    <div class = "contents">
      <h2>목록ㄴㅇㄹㄴㅇㄹ</h2>
      <NuxtLink to="/write" class="linkBtn">글쓰기</NuxtLink>
      <NuxtLink to="/list" class="linkBtn">리스트</NuxtLink>
      <!-- <NuxtLink to="/test" class="linkBtn">테스트</NuxtLink>  -->
      <!-- <Nuxt /> -->
    </div>


  </div>

</template>


<script>
export default {
  
 
}
</script>

<style>

.container {
  /* text-align: center; */
  display: flex;
  flex-direction: column;
}

contents {
  margin: 10px;
  background-color: yellow;
}

.linkBtn {
  margin-top: 10px;
  font-size: 30px;
  
}

</style>