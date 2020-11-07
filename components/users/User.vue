<template>
  <div class="v-user" @click="toUserChat">
    <div class="v-user__avatar"></div>
    <div class="v-user__info">
      <p class="info__name">{{ user.name }}</p>
      <p class="info__last-message">{{ user.chat[user.chat.length - 1].text }}</p>
    </div>
    <div class="v-user__time">{{ user.chat[user.chat.length - 1].time }}</div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toUserChat () {
      this.$router.push({
        name: 'Chat',
        params: {
          messages: this.user.chat,
          user: this.user,
        },
      });
    },
  },
};
</script>

<style scoped>

</style>