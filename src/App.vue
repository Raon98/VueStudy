
<template>
  <router-link to="/"></router-link>
  <router-view/>
</template>

<script>





export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'app',
  methods: {

    components: {

    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bottom_text{
  margin-top: 50px;
  font-size: 13px;
  text-align: left;
  font-weight: bold;
  margin-left: 20px;
}
.top{
  margin-top: 25px;
}
.center_name{
  font-size: 17px;
  color: black;
  font-weight: bolder;
  text-align: left;
  margin-left: 20px;
  margin-bottom: 5px;
  padding-bottom: 5px;
}
.main_img{
  width: 300px;
}
.main_top{
  line-height: 20px;
  border-collapse: collapse;
  border: 1px solid black;
  margin-top: 50px;
  margin-left: 15px;
  margin-right: 15px;
  padding-top:20px;
  padding-bottom: 20px;
}
.main_body{
  line-height: 20px;
  border-collapse: collapse;
  border: 1px solid black;
  margin: 15px;
  padding-top:20px;
  padding-bottom: 20px;
}
.menu{
  color: white;
  font-size: 20px;
  padding: 20px;
  border-radius: 5px;
  background: #003399;
}
.menu a {
  color : white;
  padding: 10px;
}

body {
  margin : 0
}
div {
  box-sizing:border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background:rgba(0,0,0,0.5);
  position:fixed;padding:20px;
}
.white-bg{
  width: 100%; background: white;
  height: 20%;
  border-radius: 8px;
  padding:20px;
}
.bt-size {
  background-color: #AFE0FF;
  border:1px solid black;
  border-collapse: collapse;
  border-radius: 10px;
  color: black;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  margin: 4px 2px;
  cursor: pointer;

}
</style>
