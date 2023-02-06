<template>
  <div class="container">
    <div class ="header">
      <NuxtLink to="/" id = "main_title">게시판</NuxtLink>
    </div>
    <div class="ContentTable">
      <div class="post_area">
        <h2>글 제목</h2>
        <div class="input_content">
          <div>제 목</div>
          <div>{{findList.title}}</div>
        </div>
        <div class="input_content">
          <div>닉네임</div>
          <div>{{findList.nickname}}</div>
        </div>
        <div class="input_content">
          <div>글 내용</div>
          <div>{{findList.content}}</div>
        </div>
        <div class="button_gathering">
          <!-- <button @click =" " class = "revicePost">수정</button>  -->
          <button @click ="delete_post" class = "deletePost">삭제</button> 
        </div>
      </div>
    </div>
      <!-- <Nuxt /> -->
    <div class="footer">
      
    </div>
  </div>
</template>


<script>

export default {
  ssr: 'false',
  name: 'list',
  data() {
    return {
      // Tablelist: tableAttributes
    }
  },

  computed: {

    index(){
      return this.$route.params.post
    },

    callData(){
      return this.$store.state.list
    },

		findList() {
      return this.callData[this.index]
    }
  },
	
  methods: {
    checkContent (){
      console.log(contentIndex)
    },

    delete_post (){
      const deleteIndex = this.$route.params.contentIndex;

      this.$store.dispatch("deleteContentsToList", deleteIndex);
      alert("글 삭제가 완료되었습니다. 게시판으로 이동합니다");
      this.$router.push('/');
    }
  }

}
</script>

<style>
 .header{
  background-color:#e1bee7;
  height: 70px;
  position: relative;
 }

 .header #main_title {
  position: absolute;
  text-decoration-style: none;
  font-size: 30px;
  color: white;
  top: 17px;
  left: 10px;
}

.container {
  width: 100%;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
}

.ContentTable {
  width: 90%;
  height: 100%;
  align-items: center;
  background-color: #fff1ff;
  margin: 70px auto 50px;
  padding: 5px;
  /* border: 10px solid black; */
}

.content h2 {
  top: 0px;
  left: 0px;
  background-color: green;
}

.input_content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  width: 70%;

}

.button_gathering {
  margin-top: 20px;
  text-align: center;
}

.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: #e1bee7;
}

</style>