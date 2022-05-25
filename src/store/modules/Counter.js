export const Counter = {
    state: () => ({ counter: 10 }),
    mutations: {
        setCounter(state, value) {
            state.counter = value;
        }
    },
    actions: {
        globalAction: {
            handler({ commit }) {
                commit("setCounter", 199);
            }
        }
    },
    getters: {
        time2(state) {
            return state.counter * 2;
        }
    }
};
