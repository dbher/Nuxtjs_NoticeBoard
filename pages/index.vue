<template>
  <!-- <Nuxt /> -->
  <div class="defalut_components">
    <div class="header">
      <NuxtLink to="/" id = "main_title">게시판</NuxtLink>
      <NuxtLink to="/submenu/write" id = "sub_menu">글쓰기</NuxtLink>
    </div>
    <div class = "ContentTable">
      <h2>글 목록</h2>
      <table class = "table_list">
        <thead>
          <!-- <tr> -->
          <tr :key="index" v-for="(tlist, index) in Tablelist">
            <th>{{tlist.num}}</th>
            <th>{{tlist.title}}</th>
            <th>{{tlist.username}}</th>
            <th>{{tlist.content}}</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(tcontent, index) in callData">
            <td>{{tcontent.contentIndex}}</td>
            <td>{{tcontent.title}}</td>
            <td>{{tcontent.nickname}}</td>
            <td>{{tcontent.content}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="footer">
      
    </div>

  </div>
</template>

<script>
import tableAttributes from '../data_storage/tableAttributes'

export default {
  name: 'list',
  data() {
    return {
      Tablelist: tableAttributes
    }
  },
  computed: {
    callData() {
      console.log(this.$store.getters.getList);
      return(this.$store.getters.getList);
    }
  }
}
</script>

<style>
body {
  background-color: lightgray;
}

* {
  font-family: sans-serif;
}

 .header{
  background-color:purple;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
 }

 .header #main_title {
  position: absolute;
  text-decoration-style: none;
  font-size: 30px;
  color: white;
  left: 10px;
  background-color:black;
}

.header #sub_menu {
  position: absolute;
  text-decoration-style: none;
  font-size: 20px;
  right: 20px;
  border: 3px solid white;
  margin: 10px;
  padding: 3px;
  color: white;
}

.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: purple;
}

</style>