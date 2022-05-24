export const Counter = {
    state: () => ({ counter: 10 }),
    mutations: {
        setCounter(state, value) {
            state.counter = value;
        }
    },
    actions: {
        test() {
            console.log(4);
        }
    },
    getters: {
        time2(state) {
            return state.counter * 2;
        }
    }
};
