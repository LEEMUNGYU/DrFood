<template>
    <div class="header">
        <img src="../style/img/Menu/backBTN.svg" id="backBTN" v-on:click="goBack()">
        <h1>Dr.Foody</h1>
        <img src="../style/img/Menu/homeBTN.svg" id="homeBTN" v-on:click="goHome()">
    </div>
</template>

<script>

export default{
    name: 'FoodyHeader',
    methods: {
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

#backBTN{
    justify-content: right;
}
#homeBTN{
    justify-content: left;
}
</style>