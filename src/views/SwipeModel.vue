<template>
  <div>
    <button @click="modal = true">open</button>

    <swipe-modal
        v-model="modal"
        :dark="propsValue.dark.value"
        :persistent="propsValue.persistent.value"
        :backgroundC-color="propsValue.backgroundColor.value"
        :fullscreen="propsValue.fullscreen.value"
        :no-tip="propsValue.noTip.value"
        :contents-width="propsValue.contentsWidth.value"
        :contents-height="propsValue.contentsHeight.value"
        :border-top-radius="propsValue.borderTopRadius.value"
        :border-top-left-radius="propsValue.borderTopLeftRadius.value"
        :border-top-right-radius="propsValue.borderTopRightRadius.value"
        :contents-color="propsValue.contentsColor.value"
        :tip-color="propsValue.tipColor.value"
        :dark-contents-color="propsValue.darkContentsColor.value"
    >
      <div style="padding: 24px">
        vue-swipe-modal
        <!-- <div v-for="i in 100" :key="i">
          {{ i }}
        </div> -->
      </div>
    </swipe-modal>
  </div>
</template>

<script >
import { defineComponent, ref,reactive  } from 'vue';
import { swipeModal } from '@takuma-ru/vue-swipe-modal'

export default defineComponent({
  components: {
    swipeModal,
  },
  setup () {
    const modal = ref(false)

    const propsValue = reactive({
      dark: {
        type: 'checkbox',
        value: false,
        name: 'dark'
      },
      persistent: {
        type: 'checkbox',
        value: false,
        name: 'persistent'
      },
      backgroundColor: {
        type: 'text',
        value: '#80808080',
        name: 'background-color'
      },
      fullscreen: {
        type: 'checkbox',
        value: false,
        name: 'fullscreen'
      },
      noTip: {
        type: 'checkbox',
        value: false,
        name: 'no-tip'
      },
      contentsWidth: {
        type: 'text',
        value: '100%',
        name: 'contents-width'
      },
      contentsHeight: {
        type: 'text',
        value: '40vh',
        name: 'contents-height'
      },
      borderTopRadius: {
        type: 'text',
        value: undefined,
        name: 'border-top-radius'
      },
      borderTopLeftRadius: {
        type: 'text',
        value: '0px',
        name: 'border-top-left-radius'
      },
      borderTopRightRadius: {
        type: 'text',
        value: '0px',
        name: 'border-top-right-radius'
      },
      contentsColor: {
        type: 'text',
        value: 'white',
        name: 'contents-color'
      },
      tipColor: {
        type: 'text',
        value: '#c8c8c8',
        name: 'tip-color'
      },
      darkContentsColor: {
        type: 'text',
        value: '#1E1E1E',
        name: 'dark-contetns-color'
      }
    })

    return {
      modal,
      propsValue
    }
  }
})
</script>

<style scoped>

</style>