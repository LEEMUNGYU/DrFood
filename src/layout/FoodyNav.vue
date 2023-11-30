<template>
    <div class="nav">  
      <div id="s_effect1"><a href="/dietlist">식단추천</a></div>
      <div id="s_effect2"><a href="#">식단관리</a></div>
      <div id="s_effect3"><a href="#">회원정보</a></div>
      <div id="s_effect4"><a href="/">로그아웃</a></div>
  </div>
</template>

<script>
export default{
   name:'FoodyNav',
}

</script>

<style scoped>
.nav{
  display:flex;
  padding: 0;
}

#s_effect1{
    flex:1;
    background-color: #DBE2EF;
    color:#3F72AF;
    justify-content: center;
    justify-items: center;
    width:25vw;
    height: 10vh;
    box-shadow: 3px 2px 3px #bbb;
}
#s_effect2{
    flex:1;
    background-color: #DBE2EF;
    color:#3F72AF;
    justify-content: center;
    justify-items: center;
    width:25vw;
    height: 10vh;
    box-shadow: 3px 2px 3px #bbb;
}
#s_effect3{
    flex:1;
    background-color: #DBE2EF;
    color:#3F72AF;
    justify-content: center;
    justify-items: center;
    width:25vw;
    height: 10vh;
    box-shadow: 3px 2px 3px #bbb;
}
#s_effect4{
    flex:1;
    background-color: #DBE2EF;
    color:#3F72AF;
    justify-content: center;
    justify-items: center;
    width:25vw;
    height: 10vh;
    box-shadow: 3px 2px 3px #bbb;
}


a {
  color: #3F72AF;
  font-weight: bold;
  text-decoration: none;
}
</style>
