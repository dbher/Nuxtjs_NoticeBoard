<template>
  <div>
    <div 
      :style="{
        marginLeft: '16px',
        padding: '8px 12px',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      }"
    >
      <div v-for="reply in replies" :key="reply.id">
        <p>- replyId: {{ reply.id }}</p>
        <p>- nickname: {{ reply.nickname }}</p>
        <p>- content: {{ reply.content }}</p>
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
          <button @click="addReply(reply, nickname, content)">대댓글달기</button>
        </div>
      </div>
        <CommentNode :replies="reply.replies" :depth="depth + 1" />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "CommentNode",
  props: {
    replies: Array,
    depth: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    addReply(reply, nickname, content) {
      console.log("nickname:" + nickname);
      console.log("content:" + content);

      console.log(reply);
      this.$store.dispatch("addReplyToList", relplyData);
      this.nickname = "";
      this.content = "";
    },
  }
}

</script>

<style>


</style>