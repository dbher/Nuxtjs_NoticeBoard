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
      <h3>댓글창</h3>
      <div class="add_comment">
        <div class="input_comment_area">
          <span>닉네임</span>
          <input placeholder="닉네임" v-model="nickname" type="text" />
          <span>댓글</span>
          <input
            placeholder="댓글을 입력하세요"
            v-model="content"
            type="text"
          />
          <button @click="addComment(nickname, content)">댓글달기</button>
        </div>
      </div>
      <!-- <CommentNode :replies="dummyData" /> -->
      <CommentNode :replies="findCommentData" />
    </div>
    <!-- <Nuxt /> -->
    <!-- <div class="footer"></div> -->
  </div>
</template>


<script>
export default {
  ssr: "false",
  name: "list",
  data() {
    return {
      commentList: this.$store.state.commentList,
      dummyData: [
        {
          id: 1,
          content: "I'm 1",
          nickname: "dabin",
          replies: [
            { id: 2, nickname: "dabin", content: "I'm 2" },
            {
              id: 3,
              nickname: "dabin",
              content: "I'm 3",
              replies: [
                { id: 4, nickname: "dabin", content: "I'm 4" },
                { id: 5, nickname: "dabin", content: "I'm 5" },
              ],
            },
          ],
        },
      ],
      // Tablelist: tableAttributes
    };
  },

  computed: {
    index() {
      return this.$route.params.post;
    },

    callData() {
      return this.$store.state.postList;
    },

    findList() {
      if (this.callData && this.index !== undefined) {
        return this.callData[this.index];
      }
      return {};
    },

    findCommentData() {
      if (!this.$store.state.commentList.length) {
        return [];
      }
      return this.$store.state.commentList.filter((comment) => {
        return comment.postId === this.findList.contentIndex;
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

    addComment(nickname, content) {
      let commentIndex = this.commentList.length;

      let commentData = {
        postId: this.findList.contentIndex,
        id: commentIndex,
        nickname: nickname,
        content: content,
      };
      console.log(commentData);
      this.$store.dispatch("addCommentToList", commentData);
      this.commentNickname = "";
      this.commentContent = "";
    },

    
    deleteComment(index) {
      this.$store.dispatch("deleteCommentToList", index);
    }
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
