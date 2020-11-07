<template>
  <div class="v-contact-user" @click="toContactInfo">
    <div class="user__avatar"></div>
    <div class="user__name">
      {{ contact.name }}
    </div>
    <div class="user__status" :class="classStatus"></div>
  </div>
</template>

<script>
export default {
  name: 'ContactUser',
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toContactInfo () {
      this.$emit('toContactInfo');
    },
  },
  computed: {
    classStatus () {
      return {
        online: this.contact.status === 'online',
        offline: this.contact.status === 'offline',
      };
    },
  },
};
</script>

<style scoped>

</style>