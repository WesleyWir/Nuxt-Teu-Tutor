<template>
  <div id="rounded-profile-image">
    <img :src="profileImage" alt="Profile Image" class="img" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImage: "/imgs/user/default-profile.png",
    };
  },
  mounted() {
    if (this.$auth.user.avatar) {
      this.profileImage =
        process.env.SERVER_IMAGES_HOST + this.$auth.user.avatar;
    }
  },
};
</script>

<style>
</style>