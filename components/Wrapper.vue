<template>
  <div class="v-main-wrapper">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default {
  name: 'Wrapper',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>

</style>