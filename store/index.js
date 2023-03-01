export const state = () => ({
	postList: [],
	commentList: [],
	commentKey: 0,
});

export const mutations = {
	addContent(state, list) {
		state.postList.push(list);
	},

	deleteContent(state, index) {
		state.postList.splice(index, 1);
	},

	updateContent(state, editedPost) {
		state.postList.splice(editedPost.contentIndex - 1, 1, editedPost);
	},

	addComment(state, comment) {
		console.log("commentKey: " + state.commentKey);
		// if (state.commentKey == undefined)
			// state.commentKey = 0;
		comment.id = state.commentKey;
		state.commentList.push(comment);
		state.commentKey++;
	},

	deleteComment(state, index) {
		// state.commentList[index].commentContent = "삭제된 댓글입니다";
		state.commentList.splice(index, 1);
	},

	addReply(state, comment){
		comment.id = state.commentKey;
		if (!state.commentList.replies)
		{	
			state.commentList.replies = [];
			console.log("addfirstsub");
		}
		state.commentList.replies.push(comment);
		console.log("commentList.replies: " + state.commentList.replies);
		console.log("commentKey: " + state.commentKey);
		state.commentKey++;
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
		commit('addComment', comment);
	},

	deleteCommentToList({ commit }, index) {
		commit('deleteComment', index);
	},

	addReplyToList({ commit }, replyData) {
		commit('addReply', replyData);
	}
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