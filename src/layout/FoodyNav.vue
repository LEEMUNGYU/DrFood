<template>
    <div class="nav">  
      <div id="s_effect1"><a href="/dietlist">식단추천</a></div>
      <div id="s_effect2"><a href="/manage">식단관리</a></div>
      <div id="s_effect3"><a href="/UserInfo">회원정보</a></div>
      <div id="s_effect4"><a v-on:click="resetState()">로그아웃</a></div>
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
</style>
