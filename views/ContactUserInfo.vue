<template>
  <div class="v-contact-user-info">
    <div class="info__avatar"></div>
    <div class="info__content">
      <div class="info__name">
        <span>{{ contact.phone }}</span>
      </div>
      <div class="info__tools">
        <button class="start-call">Позвонить</button>
        <button class="start-chat" @click="checkChats">Чат</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ContactUserInfo',
  data: () => ({
    contact: {},
  }),
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions(['fetchChats']),
    async checkChats () {
      if (!this.getChats.length) {
        await this.fetchChats();
      }
      this.sendChat();
    },
    sendChat () {
      const user = this.getChats.find(el => el.id === this.id);

      this.$router.push({
        name: 'Chat',
        params: {
          messages: user.chat,
          user: user,
        },
      });
    },
  },
  computed: {
    ...mapGetters(['getContacts', 'getChats']),
  },
  mounted () {
    this.contact = this.getContacts.find(el => el.id === this.id);
  },
};
</script>

<style scoped>

</style>