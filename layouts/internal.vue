<template>
  <div id="app">
    <TemplateLoggedinStudentsHeader/>
    <!-- <HeaderMobile v-if="isMobile" /> -->
    <main id="wrapper" tabindex="-1">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </main>
    <!-- <ScrollTop /> -->
  </div>
</template>
<script>
import Vue from 'vue'
import { config, dom } from '@fortawesome/fontawesome-svg-core'
import global from '~/mixins/global.js'

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
    async onResize () {
      await this.changeWrapperMinHeight();
      this.isMobile = window.innerWidth < 992
    },
    async changeWrapperMinHeight(){
      let wrapper = document.getElementById('wrapper'),
      headerHeight = document.getElementsByTagName('header').clientHeight,
      wrapperHeight = window.innerHeight - (headerHeight);
      wrapper.style.minHeight = `${wrapperHeight}px`;
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/default";
</style>
