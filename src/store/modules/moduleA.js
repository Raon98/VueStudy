export const moduleA = {
        namespaced: true,
    //state는 기존대로 state.moduleName.stateName으로 부릅니다.
    // getters는 computed(() => store.getters["moduleName/getterName"])으로 부릅니다.
    // mutation은 store.commit("moduleName/mutationName", params)으로 부릅니다.
    // action은 store.dispatch("moduleName/actionName", params)으로 부릅니다. `
        state: () => ({
            count: 0
        }),
        mutations: {
            increment(state) {
                state.count++;
            }
        },
        getters: {
            // eslint-disable-next-line no-unused-vars
            doubleCount(state, getters, rootState) {
                return state.count * 2;
            }
        },
        actions: {
            other({ dispatch }) {
                dispatch("globalAction", null, { root: true });
            }
        }
    };