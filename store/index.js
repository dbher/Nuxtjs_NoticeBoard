export const state = () => ({
	list: [],
	commentList: []
});

export const mutations = {
	addContent(state, list) {
		state.list.push(list)
	},

	deleteContent(state, index) {
		state.list.splice(index, 1);
	},

	updateContent(state, editedPost) {
		state.list.splice(editedPost.contentIndex - 1, 1, editedPost);
	},

	addComment(state, comment) {
		state.commentList.push(comment);
	},

	deleteComment(state, index) {
		state.commentList.splice(index, 1);
	}
}

export const actions = {
	addContentsToList({ commit }, list) {
		commit('addContent', list)
		console.log(list);
	},

	deleteContentsToList({ commit }, index) {
		commit('deleteContent', index)
		console.log(index);
	},

	updateContentsToList({ commit }, editedPost) {
		commit('updateContent', editedPost);
	},

	addCommentToList({ commit }, list) {
		commit('addComment', list)
	},

	deleteCommentToList({ commit }, index) {
		commit('deleteComment', index);
	}
}

export const getters = {
	getList(state) {
		return state.list;
	},
	// reverseList: state => {
	// 	return state.list.slice().reverse();
	// }
}