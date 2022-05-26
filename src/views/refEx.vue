<template>
    <div ref="myElement">HelloWorld</div>
</template>

<script>
import  { defineComponent , onMounted , ref } from "vue";

export default defineComponent({
  name: "refEx",
  setup() {
    const myElement =ref(null);

    onMounted(() => {
      console.log(myElement.value)
    });

    return { myElement }
  }
})
</script>

<style scoped>

</style>