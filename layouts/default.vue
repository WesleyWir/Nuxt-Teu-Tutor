<template>
  <div id="app">
    <TemplateHeader />
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
import Vue from 'vue'
import { config, dom } from '@fortawesome/fontawesome-svg-core'
import global from '~/mixins'

Vue.mixin(global)

export default {
  name: 'Default',
  data () {
    return {
      isMobile: false
    }
  },
  created () {
    config.searchPseudoElements = true
    dom.watch()
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      this.changeWrapperMinHeight();
      this.isMobile = window.innerWidth < 992
    },
    changeWrapperMinHeight(){
      let wrapper = document.getElementById('wrapper'),
      headerHeight = document.getElementById('header').clientHeight,
      footerHeight = document.getElementById('footer').clientHeight,
      wrapperHeight = window.innerHeight - (headerHeight + footerHeight);
      wrapper.style.minHeight = `${wrapperHeight}px`;
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/default";
</style>
