<template>
  <div id="app">
    <TemplateLoggedinStudentsHeader v-if="this.$auth.loggedIn"/>
    <TemplateHeader v-else/>
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
import { config, dom } from '@fortawesome/fontawesome-svg-core'

export default {
  name: 'Default',
  data () {
    return {}
  },
  created () {
    config.searchPseudoElements = true
    dom.watch()
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/default";
</style>
