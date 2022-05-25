<template>
  <div>
    <p>{{ticketList}}</p>
    <p>{{increse}}</p>
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
  computed: {
    increse(){
      // eslint-disable-next-line no-undef
      return this.score +1
      },
    ticketList(){
      return this.$store.getters["ticket/ticket"];
      //ticket.js라는 store에 접근해 ticket state를 가져온 후 템플릿에 보입니다.
    }
    }
  }

</script>

<style scoped>

</style>