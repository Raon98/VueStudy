<template>
  <div>
    <button @click =openmeun> open </button>

    <swipe-modal
        v-model="modal"
        contents-height="50vh"
        border-top-radius="16px"
    > 안녕
    </swipe-modal>
  </div>
</template>

<script>
import swipeModal from '@takuma-ru/vue-swipe-modal'


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "confirm",

  data () {
    return {
      modal: false
    }
  },
  components: {
    swipeModal,
  },
  methods: {
    openmeun() {
      console.log(this.modal.valueOf().toString())
      this.modal = true
      console.log(this.modal.valueOf().toString())
    }
  }
}

</script>

<style scoped>

</style>