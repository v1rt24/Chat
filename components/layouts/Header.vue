<template>
  <div class="v-header">
    <div class="v-header__back" @click="back" v-if="showHeader">
      <i class="material-icons">keyboard_arrow_left</i>
      <span>Назад</span>
    </div>
    <div class="v-header__user-info" v-if="showHeader">
      {{ getContactName }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  methods: {
    back () {
      this.$router.back();
    },
  },
  computed: {
    ...mapGetters(['getContactName']),
    showHeader () {
      return this.$route.path !== '/';
    },
  },
};
</script>

<style scoped>

</style>