import { createStore } from "vuex";
import { Counter } from "@/store/modules/Counter";
import { moduleA } from "@/store/modules/moduleA";

export default createStore({
    modules: { Counter, moduleA }
});