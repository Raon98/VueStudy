<template>
  <dlv class="composable">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length"></div>
    <div v-else>loading...</div>
  </dlv>
</template>

<script>
import getPosts from '../composables/getPosts';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "composable",

  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  }
}
</script>

<style scoped>

</style>