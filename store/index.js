export const state = () => ({
	list: [],
	commentList: []
});

export const mutations = {
	addContent(state, list){
		state.list.push(list)
	},

	deleteContent(state, index){
		state.list.splice(index, 1);
	},

	updateContent(state, index, content){
		state.list.splice(index, 1, content);
	},

	addComment(state, comment){
		state.commentList.push(comment);
	},

	deleteComment(state, index){
		state.commentList.splice(index, 1);
	}
}

export const actions = {
	addContentsToList({commit}, list){
		commit('addContent', list)
			console.log(list);
	},

	deleteContentsToList({commit}, index){
		commit('deleteContent', index)
			console.log(index);
	},

	updateContentsToList({commit}, index, content){
		console.log(index);
		console.log(content); //content undefined 이슈 있음
		if (content != undefined) //박살방지용
			commit('updateContent', index, content);
	},

	addCommentToList({commit}, list){
		commit('addComment', list)
	},

	deleteCommentToList({commit}, index){
		commit('deleteComment', index);
	}
}

export const getters = {
	getList(state){
		return state.list;
	},
	// reverseList: state => {
	// 	return state.list.slice().reverse();
	// }
}