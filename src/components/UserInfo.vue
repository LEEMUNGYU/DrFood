<template>
<FoodyHeader link='FoodyHeader.vue' />
  <h3>회원정보</h3><hr id="first_line">
<div class="h3">  <p>무엇을 도와드릴까요?</p></div>
<div class="Info-list">
  <router-link to="/change" class="Info-btn"><img />회원 정보 변경</router-link>
  <router-link to="/request" class="Info-btn"><img />문의하기</router-link>
  <router-link to="/rule" class="Info-btn"><img />개인정보처리방침</router-link>
  <router-link to="/quit" class="Info-btn"><img />회원탈퇴</router-link>
</div>
<FoodyNav link="FoodyNav.vue"  />
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
h3{
    text-align: left;
    margin-left: 3%;
    margin-top: 8%;
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
  box-shadow: 0px -16px 0px 0px #ffffff;
  background-image: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #f5f5f5;
  border-radius: 13px;
  border: 2px solid #dcdcdc;
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

.Info-btn:hover {
  background-image: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
  background-color: #f6f6f6;
}

.Info-btn:active {
  top: 1px; 
}
</style>