<template>
  <div class="black-bg" v-if="openModel == true">
    <div class="white-bg" >
      <h2>상세페이지</h2>
      <p>상세페이지 내용</p>
    </div>
  </div>
  <div class="menu">{{today}}
  </div>
  <div class="top">
    <div class="main_top">
      <img src="@/assets/image1.jpg" class="main_img">
    </div>
    <div class="main_body">
      <div class="center_name">{{tdtext}}</div>
      <div>
            <span v-for="(printer1,i) in printer1" :key="i">
              <button  class="bt-size " :style="{background : printer1.ptState1}" @click="changecolor1(i)">{{printer1.numbers1}} </button>
              &nbsp;
          </span>
      </div>`
      <div>
            <span v-for="(printer2,j) in printer2" :key="j">
              <button class="bt-size"  :style="{background : printer2.ptState2}" @click="changecolor2(j)">{{printer2.numbers2}} </button>
              &nbsp;
            </span>
      </div>

    </div>
    <div class="bottom_text" v-html="text"></div>
    <SavedModal v-show="showModal" @close-modal="showModal = false"/>
  </div>
</template>
<script>
import SavedModal from '../views/SaveModal'

const state = {
  사용가능 : '#AFE0FF',
  사용중:'#FAED7D',
  사용불가:'#BDBDBD'
}
import dayjs from "dayjs";
import 'dayjs/locale/ko';
dayjs.locale('ko');

export default {
  components: { SavedModal },

  // eslint-disable-next-line vue/multi-word-component-names
  name: 'printer',

  data() { //state라고 불림
    return {
      showModal: false,
      tdtext: '3D프린터(3DWOX1)' ,
      text: '※ 숙명창작소 장비 예약은 당일만 가능합니다.<br>※ 재료는 신청자가 직접 준비합니다<br>&nbsp&nbsp&nbsp&nbsp (신도리코 정품 필라멘트, 스마트칩)',
      printer1:[
        {ptState1: state.사용가능, numbers1: 1},
        {ptState1: state.사용가능, numbers1: 2},
        {ptState1: state.사용가능, numbers1: 3},
        {ptState1: state.사용가능, numbers1: 4},
      ],
      printer2:[
        {ptState2: state.사용가능, numbers2: 5},
        {ptState2: state.사용가능,numbers2: 6},
        {ptState2: state.사용가능,numbers2: 7},
        {ptState2: state.사용가능,numbers2: 8},
      ],
      openModel: false,
      today: dayjs().format("YYYY.MM.DD (ddd)")
    }
  },

  methods: {
    changecolor1(i) {
      //console.log(this.change1[i].toString())
      // this.change1[i]= state.사용중
      switch (this.printer1[i].numbers1){
        case 1:
              console.log("페이지 이동")
              this.showModal =true;
              break
        case 2:
              console.log("페이지 이동2")
              break
        case 3:
              console.log("페이지 이동3")
          break
        case 4:
              console.log("페이지 이동4")
          break
        default:

      }
      console.log( this.printer1[i].ptState1.toString())
      this.printer1[i].ptState1 = state.사용중
    },
    changecolor2(j) {
      console.log(this.printer1[j].ptState1.toString())
      this.printer2[j].ptState2 = state.사용중
    },
    components: {

    }

  }
}
</script>

<style>
#printer {
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
