

export const state = () => ({
	list: []
});

export const mutations = {
	addContent(state, list){
		state.list.push(list)
	}
}

export const actions = {
	addContentsToList({commit}, list){
		commit('addContent', list)
			console.log(list);
	}
}

export const getters = {
	getList(state){
		return state.list;
	}
}