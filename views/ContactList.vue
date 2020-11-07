<template>
  <div class="v-contact-list">
    <ContactUser
        v-for="contact of getContacts" :key="contact.id"
        :contact="contact"
        @toContactInfo="toContactInfo(contact)"
    />
  </div>
</template>

<script>
import ContactUser from '@/components/contacts/ContactUser';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ContactList',
  methods: {
    ...mapActions(['fetchContacts', 'setUserToHeader']),
    toContactInfo (contact) {
      this.$router.push({
        name: 'Contact',
        params: {id: contact.id},
      });
      this.setUserToHeader(contact.name);
    },
  },
  computed: {
    ...mapGetters(['getContacts']),
  },
  components: {
    ContactUser,
  },
  async mounted () {
    try {
      await this.fetchContacts();
    }
    catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>

</style>