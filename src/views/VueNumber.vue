<template>
  <div>
    <div class="today">
      <p>What day is it today?</p>
      <div>
        <number class="number" :from="0" :to="2020" :duration="2"/>
        /
        <number class="number" :from="0" :to="12" :duration="2"/>
        /
        <number class="number" :from="0" :to="5" :duration="2"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueNumber"
}

</script>

<style scoped>
.today {
  margin: 50px auto;
  text-align: center;
}

.today p {
  font-size: 70px;
  line-height: 1;
}

div {
  margin: 50px 0 0 0;
  padding: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #707070;
}

.number {
  letter-spacing: 2px;
  background: #FFDBDB;
  padding: 10px 20px;
  border-radius: 20px;
}
</style>