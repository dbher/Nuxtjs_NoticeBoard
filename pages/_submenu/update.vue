<template>
	<div class="container">
		<div class="header">
			<NuxtLink to="/" id="main_title">게시판</NuxtLink>
		</div>
		<div class="ContentTable">
			<div class="write_area">
				<h2>글 수정하기</h2>
				<div class="input_content">
					<div>닉네임</div>
					<input placeholder="닉네임" v-model="nickname" type="text"/>
				</div>
				<div class="input_content">
					<div>제 목</div>
					<input placeholder="제목" v-model="title" type="text"/>
				</div>
				<div class="input_content">
					<div>글 내용</div>
					<div>
						<textarea placeholder="내용" v-model="content" type="text"/>
					</div>
				</div>
				<div class="button_gathering">
					<button @click="non_update_content" class="nonadd_btn">취소</button>
					<button @click="update_content" class="add_btn">수정</button>
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
	// ssr: false,
	name: "update",
	data() {
		return {
			nickname: "",
			title   : "",
			content : "",
			contentIndex : ""
		};
	},

	mounted() {
		const {
			      nickname,
			      title,
			      content,
				  contentIndex
		} = this.$route.query.targetList;

		this.nickname = nickname;
		this.title = title;
		this.content = content;
		this.contentIndex = contentIndex;
	},

	methods: {
		non_update_content() {
			if( window.confirm( "취소하고 게시판으로 돌아갈까요?" ) )
				this.$router.push( "/" );
		},

		update_content() {
		let updateList = {
			nickname : this.nickname,
			title : this.title,
			content : this.content,
			contentIndex : this.contentIndex
		}
			// console.log(this.contentIndex);
			console.log(updateList);
			this.$store.dispatch("updateContentsToList", updateList.contentIndex, updateList);
			alert( "글이 수정되었습니다. 게시판으로 이동합니다." );
			// this.$router.push( "/" );
		},
	},

	computed: {
		// get_tlist(){
		//   console.log(this.$store.state.list);
		// }
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
