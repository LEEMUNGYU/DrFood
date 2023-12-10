<template>
  <div  class="popup-view" :class="{active : popupView}" >
    <div class="hat"></div>
      <div id="Q_PopUp">
        <p>정말 탈퇴하시겠습니까?</p>
        <div id="btn_zip">
          <button v-on:click="closePopup()" id="close">취소</button>
          <button v-on:click="goodBye()" id="comp">확인</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'QuitPopUp',
    methods:{
      closePopup: () => {
        this.$emit('close-popup', false);
      },
      goodBye: () =>{
        this.$emit('goodbye');
      }
    },
}
</script>

<style scoped>
.popup-view{
  opacity: 0;
  display: none;
  visibility: hidden;
}

.active{
  opacity: 1;
  display: block;
  visibility: visible;
}

.hat{
    display: flex;
    border: 1px solid #555;
    border-radius: 5px 5px 0px 0px;
    background: #555;
    width: 30vw;
    height: 3vh;

}
#Q_PopUp{
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    font-weight: bold;
    border: 1px solid #555;
    border-radius: 0px 0px 5px 5px;
    background: #fff;
    width: 30vw;
    height: 17vh;
}
#btn_zip{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10%;
  }
button{
    width: 8vw;
    height: 4vh;
    line-height: 4vh;
    font-size: 1rem;
    color: #000;
}
#comp{
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