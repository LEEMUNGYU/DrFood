<template>
  <FoodyHeader></FoodyHeader>
    샘플페이지입니다
    내용을 입력해주세요
  <foody-nav></foody-nav>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';

export default {
    name: 'DietManage',
    components: { FoodyHeader, FoodyNav,},
}
</script>

<style>

</style>