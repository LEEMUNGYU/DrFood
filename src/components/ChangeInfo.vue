<template>
<FoodyHeader></FoodyHeader>
    <div id="UserInfo" class="UserInfo">
        <div id="UserId">아이디: {{ $store.state.email }}</div>
        <div id="UserNick">닉네임: {{ $store.state.nickNm }}</div>
    </div>
    <router-link to="/changePW" style="text-decoration: none;"><div id="changePWDgo">비밀번호 변경</div></router-link>
    <div id="UserDA" class="UserDA">
        <h4 id="UserDAT">보유 질환</h4>
        <router-link to="/changeDis" style="text-decoration: none;"><div id="UserDiseases">{{  $store.state.diseaseNm  }}</div></router-link>
        <h4 id="UserDAT">보유 알레르기</h4>
        <router-link to="/changeAle" style="text-decoration: none;"><div id="UserAllergy">{{  $store.state.allergieList.join('')  }}</div></router-link>
    </div>
<foody-nav></foody-nav>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';

export default {
  name:'ChangeInfo',
  components: { FoodyHeader, FoodyNav,},

}
</script>

<style>
#UserInfo{
    display: flex;
    color: #3f72af;
    margin-top:10%;
    margin-bottom:8%;
    height: 10vh;
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

#changePWDgo{
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
    text-indent:1.2rem;
    text-align: left;
    margin-inline: auto;
}

#UserDAT{
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
</style>