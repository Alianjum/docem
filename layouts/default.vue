<template>
  <div class="layout layout--default boxed">
    <header id="header" class="header clearfix">
      <Top></Top>
      <Header></Header>
    </header>
    <main id="content">
      <nuxt></nuxt>
    </main>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import GoTop from '~/components/GoTop.vue'

export default {
  components: {
    Top,
    Header,
    Footer,
    GoTop,
  },
  bodyAttrs: {
    class: 'header_sticky',
  },
}
</script>
