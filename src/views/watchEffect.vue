<template>
  <div class="home">
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">watchEffect 중지하기</button>
  </div>
</template>
<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "watchEffect",
  setup() {
    const search = ref("");
    const names = ref(["qq", "aa", "zz", "dd"]);

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    });

    const stopWatch = watch(search, () => {
      "search 값이 바뀔 때 마다 실행되는 함수";
    });

    const stopWatchEffect = watchEffect(() => {
      console.log(
          "search value가 정의됬기에 search가 바뀔때마다 실행된다",
          search.value
      );
    });

    const handleClick = () => {
      stopWatch();
      stopWatchEffect();
    };

    return { names, search, handleClick, matchingNames };
  }
};
</script>