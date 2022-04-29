<template>
  <div id="app">
    <TemplateLoggedinStudentsHeader v-if="this.$auth.loggedIn" />
    <TemplateHeader v-else />
    <!-- <HeaderMobile v-if="isMobile" /> -->
    <main id="wrapper" tabindex="-1">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </main>
    <TemplateFooter />
    <!-- <ScrollTop /> -->
  </div>
</template>
<script>
import { config, dom } from "@fortawesome/fontawesome-svg-core";

export default {
  name: "Default",
  created() {
    config.searchPseudoElements = true;
    dom.watch();
  },
  mounted() {
    window.addEventListener("load", this.wrapperMinHeight());
    window.addEventListener("resize", this.wrapperMinHeight());
  },
  methods: {
    wrapperMinHeight() {
      let wrapper = document.getElementById("wrapper"),
        headerHeight = document.getElementById("header").clientHeight,
        footerHeight = document.getElementById("footer").clientHeight,
        wrapperHeight = window.innerHeight - (headerHeight + footerHeight);
      wrapper.style.minHeight = `${wrapperHeight}px`;
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/default";
</style>
