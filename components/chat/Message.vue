<template>
  <div class="v-message" :class="classMessage">
    <div class="v-message__content">
      <p>{{ message.text }}</p>
      <p class="content__time">{{ message.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  computed: {
    classMessage () {
      return {
        'chat__own': this.message.type === 'own',
        'chat__others': this.message.type === 'others',
      };
    },
  },
};
</script>

<style scoped>

</style>