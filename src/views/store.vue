<template>
  <div>
    <h1>This is an about page</h1>
    {{ counter }}
    {{ times2 }}
    <button @click="inc">inc</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "store",
  setup() {
    const store = useStore();
    const counter = computed(() => store.state.Counter.counter);

    // other action은 root: true에 의해 globalAction를 root부터 찾고 타겟 store의 globalAction action을 찾아 실행한다.
    const globalFunc = () => store.dispatch("moduleA/other");

    return {globalFunc, counter};

  },


}
</script>

<style scoped>

</style>