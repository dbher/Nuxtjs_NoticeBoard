<template>
  <div class="container">
    <div class ="header">
      <!-- <h1 class="title">
        게시판
      </h1> -->
      <button @click="write">새 글 쓰기</button>
    </div>
      <h2>목록</h2>
      <NuxtLink to="/write" class="linkBtn">글쓰기</NuxtLink>
      <NuxtLink to="/list" class="linkBtn">리스트</NuxtLink>
      <!-- <NuxtLink to="/test" class="linkBtn">테스트</NuxtLink>  -->
      <Nuxt />
  </div>
</template>


<script>
export default {
  
 
}
</script>

<style>

.container {
  width: 100%;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
}



h2 {
  margin: 10px;
}

.linkBtn {
  margin-top: 10px;
  font-size: 30px;
  
}

</style>