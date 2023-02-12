<template>
  <div class="container">
    <div class="header">
      <NuxtLink to="/" id="main_title">게시판</NuxtLink>
    </div>
    <div class="ContentTable">
      <div class="post_area">
        <h2>글 제목</h2>
        <div class="input_content">
          <div>제 목</div>
          <div>{{ findList.title }}</div>
        </div>
        <div class="input_content">
          <div>닉네임</div>
          <div>{{ findList.nickname }}</div>
        </div>
        <div class="input_content">
          <div>글 내용</div>
          <div>{{ findList.content }}</div>
        </div>
        <div class="button_gathering">
          <button @click="updatePost" class="revicePost">수정</button>
          <button @click="deletePost" class="deletePost">삭제</button>
        </div>
      </div>
    </div>
    <div class="comment_area">
      <div class="add_comment">
        <h3>댓글창</h3>
        <div class="input_comment_area">
          <span>닉네임</span>
          <input placeholder="닉네임" v-model="commentNickname" type="text" />
          <span>댓글</span>
          <input
            placeholder="댓글을 입력하세요"
            v-model="commentContent"
            type="text"
          />
          <button @click="addComment">댓글달기</button>
        </div>
        <div class="commentTable">
          <div
            :key="index"
            v-for="(user, index) in findCommentData"
            class="comment_box"
          >
            <div>
              <span>{{ user.commentNickname }}</span>
              <span>/</span>
              <span>{{ user.commentContent }}</span>
              <span @click="deleteComment">[삭제]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Nuxt /> -->
    <div class="footer"></div>
  </div>
</template>


<script>
export default {
  ssr: "false",
  name: "list",
  data() {
    return {
      commentID: "",
      commentNickname: "",
      commentContent: "",
      commentList: this.$store.state.commentList,
      // Tablelist: tableAttributes
    };
  },

  computed: {
    index() {
      return this.$route.params.post;
    },

    callData() {
      return this.$store.state.list;
    },

    findList() {
      return this.callData[this.index];
    },

    findCommentData() {
      return this.$store.state.commentList.filter((comment) => {
        return comment.contentId === this.contentIndex;
      });
    },
  },

  methods: {
    checkContent() {
      console.log(contentIndex);
    },

    deletePost() {
      const deleteIndex = this.findList.contentIndex;

      this.$store.dispatch("deleteContentsToList", deleteIndex);
      alert("글 삭제가 완료되었습니다. 게시판으로 이동합니다");
      this.$router.push("/");
    },

    updatePost() {
      const params = {
        nickname: this.findList.nickname,
        title: this.findList.title,
        content: this.findList.content,
        contentIndex: this.findList.contentIndex,
      };

      console.log(params.contentIndex);
	  
      this.$router.push({
        path: "/_submenu/update",
        query: { targetList: params },
      });
    },

    addComment() {
      let commentIndex = this.commentList.length;

      console.log("commentIndex");
      console.log(commentIndex);
      let commentData = {
        commentContentId: this.findList.contentIndex,
        commentIndex: commentIndex,
        commentNickname: this.commentNickname,
        commentContent: this.commentContent,
      };
      console.log(commentData);
      this.$store.dispatch("addCommentToList", commentData);
    },

    deleteComment() {
      const deleteIndex = this.contentIndex;
      console.log("삭제 인덱스");
      // console.log(deleteIndex);
      console.log(this);

      this.$store.dispatch("deleteCommentToList", deleteIndex);
    },
  },
};
</script>

<style>
.header {
  background-color: #e1bee7;
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

.comment_area {
  width: 90%;
  height: 100%;
  background: lemonchiffon;
  align-items: center;
  margin: 10px auto 50px;
  padding: 5px;
}

.comment_area button {
  /* background: red;  */
  align-items: right;
  text-align: right;
}

.content h2 {
  top: 0px;
  left: 0px;
  background-color: green;
}

.input_content {
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
