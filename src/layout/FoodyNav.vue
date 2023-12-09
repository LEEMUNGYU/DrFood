<template>
    <div class="nav">  
      <router-link to="/dietlist"><div id="s_effect1">식단추천<img src="../style/img/Menu/ListOffBTN.svg" id="icon"></div></router-link>
      <router-link to="/manage"><div id="s_effect1">식단관리<img src="../style/img/Menu/ManageOffBTN.svg" id="icon"></div></router-link>
      <router-link to="/UserInfo"><div id="s_effect1">회원정보<img src="../style/img/Menu/UserOffBTN.svg" id="icon"></div></router-link>
      <router-link to="/" @click="resetState()"><div id="s_effect1">로그아웃<img src="../style/img/Menu/ExitOffBTN.svg" id="icon"></div></router-link>
  </div>
</template>

<script>
export default{
    name:'FoodyNav',
    methods: {
    resetState() {
      this.$store.commit('resetState');
      this.$router.replace({path:'/', name:'FoodyLogin'});
    },
    },
}

</script>

<style scoped>
.nav{
  display:flex;
  margin:0;
  padding: 0;
}

#s_effect1{
    flex:1;
    background-color: #DBE2EF;
    color:#3F72AF;
    justify-content: center;
    justify-items: center;
    width:25vw;
    height: 100%;
    padding: 2%;
}
#s_effect2{
    flex:1;
    background-color: #DBE2EF;
    color:#3F72AF;
    justify-content: center;
    justify-items: center;
    width:25vw;
    height: 100%;
    padding: 2%;
}
#s_effect3{
    flex:1;
    background-color: #DBE2EF;
    color:#3F72AF;
    justify-content: center;
    justify-items: center;
    width:25vw;
    height: 100%;
    padding: 2%;
}
#s_effect4{
    flex:1;
    background-color: #DBE2EF;
    color:#3F72AF;
    justify-content: center;
    justify-items: center;
    width:25vw;
    height: 100%;
    padding: 2%;
}


a {
  color: #3F72AF;
  font-weight: bold;
  text-decoration: none;
}

#icon{
  width: 42px;
  height: 42px;
}
</style>
