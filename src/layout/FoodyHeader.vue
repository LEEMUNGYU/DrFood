<template>
    <div id="headerBox">
    <div class="header">
        <div id="flex-IconBox1"><img src="../style/img/Menu/backBTN.svg" class="backIcon" v-on:click="goBack()"></div>
        <div id="title"><h1>Dr.Foody</h1></div>
        <div id="flex-IconBox2"><img src="../style/img/Menu/homeBTN.svg" class="homeIcon" v-on:click="goHome()"></div>
    </div>
    </div>
</template>

<script>

export default{
    name: 'FoodyHeader',
    data(){
        return{
        }
    },
    mounted(){
       this.hideIconOnScreens();
    },
    methods: {
        hideIconOnScreens(){
            const currentPath = this.$route.path;
            const element1 = document.getElementById("flex-IconBox1");
            const element2 = document.getElementById("flex-IconBox2");

            if(currentPath === '/' || currentPath === '/QuitComp'  ){
                element1.style.visibility = 'hidden';
                element1.disabled = true;
                element2.style.visibility = 'hidden';
                element2.disabled = true;
            }else if(currentPath === '/board'){
                element1.style.visibility = 'hidden';
                element1.disabled = true;
            }else if(currentPath === '/SignInUser' || currentPath === '/SignLast' || currentPath === '/checkda' || currentPath === '/scPW'){
                element2.style.visibility = 'hidden';
                element2.disabled = true;
            }else{
                //eslint-disable-next-line no-empty
            }
        },
        goBack() {
            this.$router.go(-1);
        },
        goHome() {
            this.$router.push({path:'/board', name:'DashBoard',});
        },
    },
}
</script>

<style scoped>
#headerBox{
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}

.header{ 
    display: flex;
    position: relative;
    justify-content: center;
    background-color: #dbe2ef;
    color: #3f72af;
    width:100%;
    height: 100%;
    line-height:100%;
    margin: 0;
    padding: 0;
    gap:20%;
    text-align :center;
    overflow:hidden;
}
#flex-IconBox1{
    visibility: visible;
    width: 8vw;
    justify-content: right;
}
#flex-IconBox2{
    visibility: visible;
    width: 8vw; 
    justify-content: left;
}
.backIcon{
    width: 8vw;
    height: 100%;
}
.homeIcon{
    width: 6vw;
    height: 100%;
}
</style>