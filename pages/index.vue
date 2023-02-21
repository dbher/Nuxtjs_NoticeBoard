<template>
  <!-- <Nuxt /> -->
  <div class="defalut_components">
    <div class="header">
      <NuxtLink to="/" id = "main_title">게시판</NuxtLink>
      <NuxtLink to="/_submenu/write" id = "sub_menu">글쓰기</NuxtLink>
    </div>
    <div class = "ContentTable">
      <h2>글 목록</h2>
      <table class = "table_list">
        <thead>
          <!-- 보통은 이렇게 따로 안 빼고 computed로 뺌 -->
          <tr :key="index" v-for="(tlist, index) in Tablelist">
            <th>{{tlist.num}}</th>
            <th>{{tlist.title}}</th>
            <th>{{tlist.username}}</th>
            <th>{{tlist.content}}</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(tcontent, index) in loadData" @click="moveToPost(tcontent.contentIndex)">
            <td>{{tcontent.contentIndex}}</td>
            <td>{{tcontent.title}}</td>
            <td>{{tcontent.nickname}}</td>
            <td>{{tcontent.content}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
    </div>
    <div class="paginationArea">
      <button @click="moveLeftIndex">&lt;&lt;</button>
      <button @click="moveLeftPage">&lt;</button>
      <div>
        <button @click="movePage(pageIndex_first)">{{pageIndex_first}}</button>
        <button @click="movePage(pageIndex_second)">{{pageIndex_second}}</button>
        <button @click="movePage(pageIndex_third)">{{pageIndex_third}}</button>
        <button @click="movePage(pageIndex_fourth)">{{pageIndex_fourth}}</button>
        <button @click="movePage(pageIndex_fifth)">{{pageIndex_fifth}}</button>
      </div>
      <button @click="moveRightPage">></button>
      <button @click="moveRightIndex">>></button>
    </div>
    
    <!-- <div class="footer">
      
    </div> -->

  </div>
</template>

<script>
import tableAttributes from '../data_storage/tableAttributes'
import Vue from 'vue'



export default {
  name: 'list',
  data() {
    return {
      Tablelist: tableAttributes,
      pageNum : 1,
      pageIndex : 1,
      // allPageNum : 10,
      slicePage : 1,
      selectPage: 1,
      pageCount : 2
      }
  },
  

  computed: {
    callData() {
      console.log(this.$store.getters.getList);

      return(this.$store.getters.getList);
    },

    firstIndex() {
      return ((this.pageNum - 1) * this.slicePage);
    },

    lastIndex() {
      return(this.firstIndex + this.slicePage);
    },

    pageIndex_first() {
      return(this.pageIndex);
    },
    pageIndex_second() {
      return(this.pageIndex + 1);
    },    pageIndex_third() {
      return(this.pageIndex + 2);
    },    pageIndex_fourth() {
      return(this.pageIndex + 3);
    },    pageIndex_fifth() {
      return(this.pageIndex + 4);
    },
    
    loadData() {
      return(this.callData.slice(this.firstIndex, this.lastIndex));
    },

    allPageNum() {
      return(Math.ceil((this.callData.length + 1) / this.slicePage));
    }
  },

  methods: {
    moveLeftPage (){
      if (this.pageNum !== 1)
        this.pageNum -= 1;
    },

    moveRightPage () {
      if (this.allPageNum !== this.pageNum)
        this.pageNum += 1;
    },

    movePage (pageIndex_seq) {
      if (pageIndex_seq <= this.allPageNum)
        this.pageNum = pageIndex_seq;
    },

    moveLeftIndex (){
      if (this.pageIndex >= this.allPageNum)
        this.pageIndex = this.pageIndex - 5;
    },

    moveRightIndex (){
      if (this.pageIndex < this.allPageNum)
        this.pageIndex = this.pageIndex + 5;
      console.log(this.pageIndex);
      console.log(this.allPageNum);

    },

    moveToPost(index) {
      const postIndex = this.callData.findIndex(el=>
        index === el.contentIndex
      )
      this.$router.push('/_submenu/'+postIndex)
    },

    changePage: function (pageNum) {
                this.selectPage = pageNum
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
  background-color:#e1bee7;
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

.ContentTable {
  width: 90%;
  height: 100%;
  align-items: center;
  background-color: #fff1ff;
  margin: 70px auto 50px;
  padding: 5px;
  /* border: 10px solid black; */
}

table {
  /* width: 600px; */
  width: 100%;
  /* left: 5%; */
  border-collapse: collapse;
  text-align: center;
  table-layout: fixed;
  /* transform: translate(-50%); */
}
td, th {
  border-bottom: 1px solid gray;
  padding: 5px;
}
th {
  background-color: #af8eb5;
}

.paginationArea{
  background-color: #af8eb5;
  /* align-items: center; */
  justify-content: center;
  display: flex;

}

.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: #e1bee7;
}

</style>