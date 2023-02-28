export const state = () => ({
	postList: [],
	commentList: [],
});

export const mutations = {
	addContent(state, list) {
		state.postList.push(list)
	},

	deleteContent(state, index) {
		state.postList.splice(index, 1);
	},

	updateContent(state, editedPost) {
		state.postList.splice(editedPost.contentIndex - 1, 1, editedPost);
	},

	addComment(state, comment) {
		state.commentList.push(comment);
	},

	deleteComment(state, index) {
		state.commentList[index].commentContent = "삭제된 댓글입니다";
		// state.commentList.splice(index, 1);
	},

	addReply(state, comment){
		state.commentList.commentList.push(comment);
	}
}

export const actions = {
	addContentsToList({ commit }, content) {
		commit('addContent', content)
	},

	deleteContentsToList({ commit }, index) {
		commit('deleteContent', index)
		console.log(index);
	},

	updateContentsToList({ commit }, content) {
		commit('updateContent', content);
	},

	addCommentToList({ commit }, comment) {
		commit('addComment', comment)
	},

	deleteCommentToList({ commit }, index) {
		commit('deleteComment', index);
	},
}

export const getters = {
	getList(state) {
		return state.postList;
		// return state.postList.slice().reverse();

		// const list = JSON.parse(JSON.stringify(state.postList));
		// return (list.reverse());
	},
	// reverseList: state => {
	// 	return state.postList.slice().reverse();
	// }
}