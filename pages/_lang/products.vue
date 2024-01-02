<template>
  <div>
    <!-- Page title -->
    <PageTitle class="parallax1">
      <template v-slot:title>
        {{ $t('links.products') }}
      </template>
      <template v-slot:breadcrumb>
        <li>
          <NuxtLink :to="localePath('products')">
            {{ $t('links.products') }}
          </NuxtLink>
        </li>
      </template>
    </PageTitle>

    <!-- Features -->
    <section class="flat-row brokerage-sol">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-section">
              <h1 class="title">
                {{ $t('featuresProducts.products.title') }}
              </h1>
              <div class="sub-title">
                {{ $t('featuresProducts.products.subTitle') }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards using ImageLeftTextRight and ImageRightTextLeft components -->
      <div class="container">
        <div class="row">
          <template v-for="(product, index) in products">
           <div :key="product.id">
            <!-- Use ImageLeftTextRight for even indices and ImageRightTextLeft for odd indices -->
            <ImageLeftTextRight
              v-if="index % 2 === 0"
              :title="product.title"
              :description="product.description"
              :image="product.image"
            />
            <ImageRightTextLeft
              v-else
              :title="product.title"
              :description="product.description"
              :image="product.image"
            />
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import $ from 'jquery'
import config from '~/data/siteConfig'
import PageTitle from '~/components/PageTitle.vue'
import ImageLeftTextRight from '~/components/ImageLeftTextRight.vue'
import ImageRightTextLeft from '~/components/ImageRightTextLeft.vue'

export default {
  components: {
    PageTitle,
    ImageLeftTextRight,
    ImageRightTextLeft
  },
  data() {
    return {
      metaTitle: this.$t('links.brokerage'),
      metaDesc: this.$t('meta.desc.home'),
      siteName: config.siteTitle,
      selected: '0',
      options: [
        { id: 0, value: '', province: this.$t('province.default') },
        { id: 1, value: 'on', province: this.$t('province.on') },
        { id: 2, value: 'qc', province: this.$t('province.qc') },
        { id: 3, value: 'bc', province: this.$t('province.bc') },
        { id: 4, value: 'ab', province: this.$t('province.ab') },
      ],
      products: [
        {
          id: 1,
          title: this.$t('featuresProducts.products.eform.title'),
          description: this.$t('featuresProducts.products.eform.description'),
          image: "https://www.globalsign.com/application/files/9615/9111/8053/advanced_vs_qualified_electronic_signatures.jpg",
        },
        {
          id: 2,
          title: this.$t('featuresProducts.products.showingManagement.title'),
          description: this.$t('featuresProducts.products.showingManagement.description'),
          image: 'https://pilbox.themuse.com/image.jpg?filter=antialias&h=343&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F9264.jpg&w=700'
        },
        {
          id: 3,
          title: this.$t('featuresProducts.products.offerManagement.title'),
          description: this.$t('featuresProducts.products.offerManagement.description'),
          image: 'https://rciars.com/hubfs/Untitled%20design%20%281%29-1.png',
        },
        {
          id: 4,
          title: this.$t('featuresProducts.products.transactionManagement.title'),
          description: this.$t('featuresProducts.products.transactionManagement.description'),
          image: 'https://imgcdn.agendadigitale.eu/wp-content/uploads/2019/05/15100405/Digital-Transaction-Management.jpg'
        },
        {
          id: 5,
          title: this.$t('featuresProducts.products.rent.title'),
          description: this.$t('featuresProducts.products.rent.description'),
          image: 'https://www.investopedia.com/thmb/DB67n15J_x4wUNqCWachp6ylHa0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_PropertyManagement_anyaberkut-81d439d832e745229cad8de3835a5869.jpg'
        },
      ]
    }
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.metaTitle} - ${config.siteTitle}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.metaTitle} - ${config.siteTitle}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.metaDesc,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.metaDesc,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.metaDesc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${config.siteUrl}/img/${this.$t(
            'meta.social.brokerage'
          )}.jpg`,
        },
        {
          hid: 'twitter:image',
          property: 'og:image',
          content: `${config.siteUrl}/img/${this.$t(
            'meta.social.brokerage'
          )}.jpg`,
        },
      ],
    }
  },
}
</script>
