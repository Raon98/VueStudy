<template>
  <div class="home">
    <button @click="testFunc">inc</button>
    {{ getterExample }}
  </div>
</template>

<script>
import { defineComponent, onMounted, getCurrentInstance, computed } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Composition",
  setup() {

    const { proxy } = getCurrentInstance();
    const testFunc = () => proxy.$store.commit("ModuleA/setCounter", 222);
    console.log(testFunc)
    onMounted(() => {
      console.log(proxy.foo); // 'bar'
    });

    const getterExample = computed(
        () => proxy.$store.getters["ModuleA/getterExample"]
    );
    console.log(getterExample)
    return { testFunc, getterExample };
  }
});
</script>

<style scoped>

</style>