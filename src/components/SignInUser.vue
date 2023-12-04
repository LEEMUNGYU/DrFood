<template>
<FoodyHeader></FoodyHeader>
<h3>회원가입</h3><hr id="first_line">

</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';

export default {
    name:'SignInUser',
    components:{ FoodyHeader, },
}
</script>

<style>

h3{
    text-align: left;
    margin-left: 3%;
    margin-top: 8%;
}

#first_line{
    border: solid 0.4vh;
    color:#3F72AF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin: 3%;
}
</style>