<template>
<foody-header />
<div class="mainContents">
  <h3>회원정보</h3><hr id="first_line">
<div class="h3">  <p>무엇을 도와드릴까요?</p></div>
<div class="Info-list">
  <router-link to="/change" class="Info-btn">회원 정보 변경<img id="goto" src="../style/img/Menu/GoToBTN.svg"/></router-link>
  <router-link to="/request" class="Info-btn">문의하기<img id="goto" src="../style/img/Menu/GoToBTN.svg"/></router-link>
  <router-link to="/rule" class="Info-btn">개인정보처리방침<img id="goto" src="../style/img/Menu/GoToBTN.svg"/></router-link>
  <router-link to="/quit" class="Info-btn">회원탈퇴<img id="goto" src="../style/img/Menu/GoToBTN.svg"/></router-link>
</div>
</div>
<foody-nav  />
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';

export default {
    name: 'UserInfo',
    components: { FoodyHeader, FoodyNav,},
}
</script>

<style scoped>
.mainContents{
  box-sizing: border-box;
  padding-top: 15%;
  padding-bottom:12%;
  margin:0;
}
h3{
    color:#3F72AF;
    text-align: left;
    margin-left: 3%;
}

#first_line{
    border: solid 0.4vh;
    color:#3F72AF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin: 3%;
}

p {
    font-size: 1.2rem;
    font-weight: bold;
    padding: auto;
    color:#3F72AF;
}

.Info-list{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.Info-btn{
  display: flex;
  justify-content: space-between;
  box-shadow: 3px 3px 3px 0px #ccc;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 2%;
  width: 70vw;
  color: #3F72AF;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
  margin: 0.6rem;
}
#goto{
  width: 6vw;
}
</style>