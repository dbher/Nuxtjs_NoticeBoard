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
	}
}

export const getters = {
	reverseList: state => {
		return state.list.slice().reverse()
	}
}