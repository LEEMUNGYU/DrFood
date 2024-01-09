<template>
  <div class="nav">  
    <router-link to="/dietlist" id="s_effect1"><div>식단추천</div><img src="../style/img/Menu/ListOffBTN.svg" id="icon1"></router-link>
    <router-link to="/manage2" id="s_effect2"><div>식단관리</div><img src="../style/img/Menu/ManageOffBTN.svg" id="icon2"></router-link>
    <router-link to="/UserInfo" id="s_effect3"><div>회원정보</div><img src="../style/img/Menu/UserOffBTN.svg" id="icon3"></router-link>
    <router-link to="/" @click="resetState()" id="s_effect4"><div>로그아웃</div><img src="../style/img/Menu/ExitOffBTN.svg" id="icon4"></router-link>
</div>
</template>

<script>
import { deleteCookie, getAuthFromCookie, getUserFromCookie } from '@/utils/cookies';

export default{
  name:'FoodyNav',
  mounted(){
     this.changeIconOnScreens();
  },
  methods: {
  resetState() {
    const email = getAuthFromCookie.call(this);
    const pwd = getUserFromCookie.call(this);

    this.$store.commit('resetState');
    this.$router.replace({path:'/', name:'FoodyLogin'});
    deleteCookie(email);
    deleteCookie(pwd);
  },
  changeIconOnScreens(){
      const currentPath = this.$route.path;
      const element1 = document.getElementById("s_effect1");
      const element2 = document.getElementById("s_effect2");
      const element3 = document.getElementById("s_effect3");

      if(currentPath  === '/dietlist'){
              element1.style.color = '#fff';
              element1.style.backgroundColor = '#001335';
          }else if(currentPath === '/manage2'){
              element2.style.color = '#fff';
              element2.style.backgroundColor = '#001335';
          }else if(currentPath === '/UserInfo' || currentPath === '/quit' || currentPath === '/change' || currentPath === '/changeDis' || currentPath === '/changeAle' || currentPath === '/rule'  ){
              element3.style.color = '#fff';
              element3.style.backgroundColor = '#001335';
          }else{
              //eslint-disable-next-line no-empty
          }
    }
  },
}

</script>

<style scoped>
.nav{
display:flex;
position: fixed;
left: 0;
right: 0;
bottom: 0;
margin:0;
padding: 0;
width:100%;
}

#s_effect1{
  flex:1;
  background-color: #DBE2EF;
  color:#3F72AF;
  justify-content: center;
  justify-items: center;
  width:25%;
  height: 100%;
}
#s_effect2{
  flex:1;
  background-color: #DBE2EF;
  color:#3F72AF;
  justify-content: center;
  justify-items: center;
  width:25%;
  height: 100%;
}
#s_effect3{
  flex:1;
  background-color: #DBE2EF;
  color:#3F72AF;
  justify-content: center;
  justify-items: center;
  width:25%;
  height: 100%;
}
#s_effect4{
  flex:1;
  background-color: #DBE2EF;
  color:#3F72AF;
  justify-content: center;
  justify-items: center;
  width:25%;
  height: 100%;
}


a {
color: #3F72AF;
font-weight: bold;
text-decoration: none;
}

#icon1{
  width: 10vw;
  height: 8vh;
}
#icon2{
  width: 10vw;
  height: 8vh;
}

#icon3{
  width: 10vw;
  height: 8vh;
}

#icon4{
  width: 8vw;
  height: 8vh;
}
</style>
