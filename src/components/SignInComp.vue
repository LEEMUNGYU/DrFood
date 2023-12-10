<template>
    <div class="header">
    <h1>Dr.Foody</h1>
   </div>
  <div class="Welcome">
    <img><br>
    <p>Dr.Foody 가입을<br>
  이용해주셔서 감사합니다</p>
  </div>
  <button class="btn"  v-on:click="fnGoList()">추천식단<br>보러가기</button>
  <footer></footer>
</template>

<script>
export default {
  name: 'SignInComp',
  data() {
  },
    props: {
    msg: String,
  },
  methods: {
    fnGoList(){
      this.$router.replace({path:'/dietlist'});
    }
} } 

</script>

<style scoped>
@font-face {
    font-family: 'NPSfontBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

template{
    font-family: 'NPSfontBold';
    margin: 0;
    padding: 0; 
}
.header{ 
    display: flex;
    position: relative;
    justify-content: center;
    background-color: #dbe2ef;
    color: #3f72af;
    width: 100vw;
    height: 8vh;
    line-height:100%;
}

h1{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.Welcome{
    display:flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: bold;
    color: #3F72AF;
    height: 55vh;
}

footer {
    display: flex;
    flex-direction: column; 
    justify-content: center;
    height: 8vh;
    position: relative;
    transform : translateY(0vh);
    background-color: #dbe2ef;
    color: #3f72af;
    width: 100vw;
    bottom: 0vh;
    padding-top: 2%;
    padding-bottom: 2%;
}

.btn{
    font-family: 'NPSfontBold';
    background-color:#fff;
    color: #64bfe0 ;
    font-size: 1.8rem;
    border: none;
    width: 50vw;
    height:15vh;
    border-radius: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    margin-bottom: 11vh;
  }
</style>