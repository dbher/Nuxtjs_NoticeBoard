<template>
  <div class="container">
    <div class ="header">
      <NuxtLink to="/" id = "main_title">게시판</NuxtLink>
    </div>
    <div class="ContentTable">
      <div class="post_area">
        <h2>글 제목</h2>
				<!-- 출력을 해보자........ 왜 불러오기가 안되는 것이냐,,,,, -->
        <div class="input_content">
          <div>닉네임</div>
					
        </div>
        <div class="input_content">
          <div>제 목</div>

        </div>
        <div class="input_content">
          <div>글 내용</div>
          <div>

          </div>
        </div>
        <div class="button_gathering">
          <!-- <button @click ="non_add_content" class = "nonadd_btn">취소</button>  -->
          <!-- <button @click ="add_content" class = "add_btn">추가</button>  -->
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
  name: 'write',
  data() {
    return {
      nickname: '',
      title: '',
      content: '',
    }
  },

  computed: {
		postList() {
			// const index = this.$route.params.contentIndex
			// console.log(this.$route.params.contentList.filter(item.contentIndex === index))
			// return this.$route.params.contentList.filter(item.contentIndex === index)
		}
  },
	
  methods: {
    non_add_content(){
      if (window.confirm('취소하고 게시판으로 돌아갈까요?'))
        this.$router.push('/');
    },

    add_content(){
      let contentIndex = this.$store.state.list.length + 1;

      let content = {
        nickname : this.nickname,
        title : this.title,
        content : this.content,
        contentIndex : contentIndex
      };
      console.log(content);
      this.$store.dispatch("addContentsToList", content);
      // alert ('새 글이 등록되었습니다. 게시판으로 이동합니다.');
      // this.$router.push('/');
    }
  }

}
</script>

<style>
 .header{
  background-color:purple;
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
  background-color:black;
}

.container {
  width: 100%;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
}

.ContentTable {
  width: 50%;
  height: 100%;
  align-items: center;
  background-color: lightsalmon;
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
  background-color: purple;
}

</style>