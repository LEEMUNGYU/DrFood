<template>
    <div id="headerBox">
    <div class="header">
        <div id="flex-IconBox1"><img src="../style/img/Menu/backBTN.svg" v-if="showIcon" class="backIcon" v-on:click="goBack()"></div>
        <h1>Dr.Foody</h1>
        <div id="flex-IconBox2"><img src="../style/img/Menu/homeBTN.svg" v-if="showIcon2" class="homeIcon" v-on:click="goHome()"></div>
    </div>
    </div>
</template>

<script>

export default{
    name: 'FoodyHeader',
    data(){
        return{
            showIcon: true,
            showIcon2: true,
        }
    },
    created(){
       this.hideIconOnScreens();
    },
    methods: {
        hideIconOnScreens(){
            const currentPath = this.$route.path;
            
            if(currentPath === ('/' || '/QuitComp')){
                this.showIcon = false;
                this.showIcon2 = false;
            }else if(currentPath === ('/board')){
                this.showIcon = false;
            }else if(currentPath === ('/SignInUser' || '/SignLast')){
                this.showIcon2 = false;
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
#flex-IconBox{
    width: 8vw;
    justify-content: right;
}
#flex-IconBox2{
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