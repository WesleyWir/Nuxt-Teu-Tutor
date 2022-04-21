<template>
  <div id="app">
    <TemplateLoggedinStudentsHeader/>
    <main id="wrapper" tabindex="-1">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </main>
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
