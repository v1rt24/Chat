<template>
  <div class="v-bottom-nav">
    <router-link :to="{name: 'Contacts'}">
      <i class="material-icons">person_pin</i>
    </router-link>

    <router-link :to="{name: 'Chats'}">
      <i class="material-icons">chat</i>
    </router-link>

    <router-link :to="{name: 'Contacts'}">
      <i class="material-icons">settings</i>
    </router-link>

    <router-link :to="{name: 'Contacts'}">
      <i class="material-icons">call</i>
    </router-link>

    <router-link :to="{name: 'Contacts'}">
      <i class="material-icons">home</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>

</style>