<template>
  <FoodyHeader></FoodyHeader>
    <div id="checkInfo">
        <h3 id="checkInfoTitle">아래의 정보로 회원가입이 진행됩니다.</h3>
        <div id="checkInfoText">질환과 알레르기 정보는 회원 정보 페이지에서 수정할 수 있습니다.</div>
    </div>
    <div id="SignUserInfo" class="SignUserInfo">
        <div id="UserId">아이디: {{  }}</div>
        <div id="UserPWD">비밀번호: {{  }}</div>
        <div id="UserNick">닉네임: {{  }}</div>
    </div>
    <div id="SignUserDA" class="SignUserDA">
        <h4>보유 질환</h4>
        <div id="UserDiseases"></div>
        <h4>보유 알레르기</h4>
        <div id="UserAllergy"></div>
    </div>
    
    <footer id="footer"><router-link v-bind:to="'/SignInComp'"  id="SignComp-btn" class="SignComp-btn">확인</router-link></footer>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';

export default {
 name: 'SignInLast',
 components:{
    FoodyHeader,
 }
}
</script>

<style>
#checkInfoTitle{
    font-size: 1.2rem;
    margin-bottom: 1%;
}
#checkInfoText{
    color:#777;
    font-size:0.7rem;
}

footer{
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background-color: #dbe2ef;
    color: #3f72af;
    text-align: center;
    line-height: 10vh;
    margin: 0 auto;
}
#SignComp-btn{
    background-color: #dbe2ef;
    color: #3f72af;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: bold;
}

</style>