<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <!--overlay Class의 click 영향을 안받기위해 stop 추가 -->
      <img class="check" src="../assets/check-icon.png" alt="" />
      <h6>예약 완료!</h6>
      <p>Your reservation is complete.</p>
      <button>예약 확인</button>
    </div>
    <div class="close" @click="$emit('close-modal')">
         <!--$emit은 주로 자식 구성 요소 간에 사용자 지정 이벤트를 상위 구성 요소로 보내는 데 사용 -->
      <img class="close-img" src="../assets/close-icon.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SaveModal"
}
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 400px;
  width: 500px;
  margin-top: 35%;
  padding: 50px 0;
  border-radius: 20px;
  margin-left: 25px;
}
.close {
  margin: 30% 0 5px 16px;

  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 0px 0;
}

p {
  font-size: 16px;
  margin: 25px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 10px;
}
</style>