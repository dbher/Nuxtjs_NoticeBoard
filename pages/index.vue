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
            <th>{{tlist.content}}</th>
            <th>{{tlist.username}}</th>
            <!-- <th>글 제목</th> -->
            <!-- <th>글 내용</th> -->
            <!-- <th>작성자</th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>교통비</td>
            <td>45000</td>
        </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>총 합계</td>
            <td>103000</td>
          </tr>
        </tfoot>
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