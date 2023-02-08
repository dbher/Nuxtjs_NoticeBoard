export const state = () => ({
	list: []
});

export const mutations = {
	addContent(state, list){
		state.list.push(list)
	},

	deleteContent(state, index){
		state.list.splice(index, 1);
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