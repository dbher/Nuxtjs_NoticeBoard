export const state = () => ({
	list: []
});

export const mutations = {
	addContent(state, list){
		state.list.push(list)
	},

	deleteContent(state, index){
		state.list.splice(index, 1);
	},

	updateContent(state, index, content){
		state.list.splice(index, 1, content)
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
		console.log(content);
		if (content != undefined) //박살방지용
			commit('updateContent', index, content)
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