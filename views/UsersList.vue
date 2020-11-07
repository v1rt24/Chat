<template>
  <div class="v-users-list">
    <User
        v-for="chat of getChats" :key="chat.id"
        :user="chat"
    />
  </div>
</template>

<script>
import User from '@/components/users/User';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UsersList',
  methods: {
    ...mapActions(['fetchChats', 'setUserToHeader']),
  },
  computed: {
    ...mapGetters(['getChats']),
  },
  components: {
    User,
  },
  async mounted () {
    try {
      this.setUserToHeader('');
      await this.fetchChats();
    }
    catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>

</style>