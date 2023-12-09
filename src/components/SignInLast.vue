<template>
  <FoodyHeader></FoodyHeader>
    <div id="checkInfo">
        <h3 id="checkInfoTitle">아래의 정보로 회원가입이 진행됩니다.</h3>
        <div id="checkInfoText">질환과 알레르기 정보는 회원 정보 페이지에서 수정할 수 있습니다.</div>
    </div>
    <div id="SignUserInfo" class="SignUserInfo">
        <div id="UserId">아이디: {{  }}</div>
        <div id="UserNick">닉네임: {{  }}</div>
    </div>
    <div id="SignUserDA" class="SignUserDA">
        <h4 id="SignUserDAT">보유 질환</h4>
        <div id="UserDiseases"></div>
        <h4 id="SignUserDAT">보유 알레르기</h4>
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
    text-align: center;
    margin:auto;
    font-size: 1.2rem;
    margin-top: 10%;
    margin-bottom: 1%;
}
#checkInfoText{
    text-align: center;
    color:#777;
    font-size:0.7rem;
}

#SignComp-btn{
    background-color: #dbe2ef;
    color: #3f72af;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: bold;
}
#SignUserInfo{
    display: flex;
    color: #3f72af;
    margin-top:10%;
    height: 15vh;
    width: 80vw;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #ccc;
    flex-direction: column;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    line-height: 2.0rem;
    margin-inline: auto;
    text-indent: 1rem;
}
#SignUserDAT{
    color: #3f72af;
    text-align: left;
    margin-left: 10%;
    margin-bottom: 1%;
}
#UserDiseases{
    box-sizing:border-box;
    width: 80vw;
    height: 5vh;
    line-height: 5vh;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px #ccc;
    font-weight: bold;
    border-radius: 5px;
    font-size: 1.2rem;
    color: #3f72af;
    text-align: center;
    margin-inline: auto;
}
#UserAllergy{
    box-sizing:border-box;
    width: 80vw;
    height: 5vh;
    line-height: 5vh;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px #ccc;
    font-weight: bold;
    border-radius: 5px;
    font-size: 1.2rem;
    color: #3f72af;
    text-align: center;
    margin-inline: auto;
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
</style>