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
        <p>commentId: {{ reply.id }}</p>
        <p>- nickname: {{ reply.nickname }}</p>
        <p>- content: {{ reply.content }}</p>
        <CommentNode :replies="reply.replies" :depth="depth + 1" />
      </div>
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
          <button @click="addComment">댓글달기</button>
        </div>
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

  // methods: {
  //   addComment({}) {

  //   }
  }
};
</script>
  