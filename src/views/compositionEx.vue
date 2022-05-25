<template>
    <div>
      <h1>{{first.name}}</h1>
      <hi>{{second}}</hi>
    </div>
</template>

<script>
import { reactive, ref } from "vue";

const useVales = () => {
  const reactiveValue = reactive({ name : 'tom'})
  const refValue = ref(10)

  return {reactiveValue,refValue}
}
export default {
  name: "compositionEx",

  setup() {
    const { reactiveValue , refValue} = useVales()
    //ref 객체는 원본 값을 value라는 속성에 담아두고 변경을 감시하는 객체이며,
    //reactive는 원본 객체 자체에 변경을 감지하는 옵저버를 추가하여 그대로 반환한 값

    return{
      first : reactiveValue,
      second : refValue
    }
  }
}
</script>

<style scoped>

</style>