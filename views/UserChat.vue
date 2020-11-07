<template>
  <div class="v-user-chat">
    <Message
        v-for="message of messages" :key="message.id"
        :message="message"
    />
    <div class="input__field">
      <input
          type="text"
          class="v-user-chat__textfield"
          v-model="textValue"
          @keydown.enter="sendMessage"
      >
      <i class="material-icons" @click="sendMessage">send</i>
    </div>
  </div>
</template>

<script>
import Message from '@/components/chat/Message';
import { filterTime } from '@/filters/filterTime';
import { mapActions } from 'vuex';

export default {
  name: 'UserChat',
  props: {
    messages: {
      type: Array,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    textValue: '',
  }),
  methods: {
    ...mapActions(['fetchMessageSave']),
    async sendMessage () {
      const user = {...this.user};
      const message = {
        id: this.messages.length + 1,
        time: filterTime(new Date()),
        text: this.textValue,
        type: 'own',
      };
      user.chat.push(message);
      try {
        await this.fetchMessageSave({userId: user.id, chat: user});
        this.textValue = '';
      }
      catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    Message,
  },
};
</script>

<style scoped>

</style>