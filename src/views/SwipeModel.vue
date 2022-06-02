<template>
  <div>
    <button @click="modal = true">open</button>

    <swipe-modal
        v-model="modal"
        contents-height="50vh"
        border-top-radius="16px"
    >
      <h1>안녕하세요</h1>
    </swipe-modal>
  </div>
</template>

<script >
import { defineComponent, ref } from 'vue';
import { swipeModal } from '@takuma-ru/vue-swipe-modal'

export default defineComponent({
  components: {
    swipeModal,
  },
  setup () {
    const modal = ref(false)

    return {
      modal,
    }
  }
})
</script>

<style scoped>

</style>