<template>
  <div  class="popup-view" >
    <div class="hat"></div>
      <div id="Q_PopUp">
        <p>정말 탈퇴하시겠습니까?</p>
        <div id="btn_zip">
          <button @click="closePopup()" id="close">취소</button>
          <button @click="$emit('goodBye', true)" id="QTcomp">확인</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'QuitPopUp',
    methods:{
      closePopup(){
        this.$emit('closePopup', false);
      },
      /*goodBye(){
        this.$emit('goodBye', true);
      }*/
    },
}
</script>

<style scoped>
.popup-view{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hat{
    display: flex;
    border: 1px solid rgba(55,55,55,0.75);
    border-radius: 5px 5px 0px 0px;
    background: #555;
    width: 60vw;
    height: 3vh;

}
#Q_PopUp{
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    font-weight: bold;
    border: 1px solid rgba(55,55,55,0.25);
    border-radius: 0px 0px 5px 5px;
    background: #fff;
    width: 60vw;
    height: 17vh;
}
#btn_zip{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10%;
  }
button{
    width: 15vw;
    height: 4vh;
    line-height: 4vh;
    font-size: 1rem;
    color: #000;
}
#QTcomp{
    justify-content: center;
    justify-items: center;
    border: none;
    border-radius: 5px;
    background: #7BC8FF;
}

#close{
    justify-content: center;
    justify-items: center;
    border: none;
    border-radius: 5px;
    background: #B3B3B3;
}
</style>