<template>
  <div>
    <p>{{ticketList}}</p>
    <p>{{increase}}</p>
  </div>
</template>
<script>
export default {
  name: "computedEx",
  data(){
    return{
      score: 1
    };
  },
  methods: {
    //increse() {
    // return this.score++; 렌더링 될때만 실행됨
  },
  computed: { //캐싱하여 의존하는 값이 변하는경우 계속 실행함
    increase(){
      // eslint-disable-next-line no-undef
      return this.score +1
      },
    ticketList(){
      console.log(this.$store.getters["ticket/ticket"])
      return this.$store.getters["time2"];

      //ticket.js라는 store에 접근해 ticket state를 가져온 후 템플릿에 보입니다.
    }
    }
  }

</script>

<style scoped>

</style>