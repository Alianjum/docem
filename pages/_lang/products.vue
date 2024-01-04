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
    ImageRightTextLeft,
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
          image:
            'https://resources.gonitro.com/dims4/default/79c6c38/2147483647/strip/true/crop/800x420+0+33/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnitro-brightspot.s3.us-west-2.amazonaws.com%2F16%2F64%2F2af204f34b20a19b7a47c3a8519f%2Felectronic-signature.png',
        },
        {
          id: 2,
          title: this.$t('featuresProducts.products.showingManagement.title'),
          description: this.$t(
            'featuresProducts.products.showingManagement.description'
          ),
          image: require('@/assets/images/showing management.jpeg'),
        },
        {
          id: 3,
          title: this.$t('featuresProducts.products.offerManagement.title'),
          description: this.$t(
            'featuresProducts.products.offerManagement.description'
          ),
          image:
            'https://cdn.create.vista.com/api/media/medium/63887629/stock-photo-successful-businessmen-handshaking?token=',
        },
        {
          id: 4,
          title: this.$t(
            'featuresProducts.products.transactionManagement.title'
          ),
          description: this.$t(
            'featuresProducts.products.transactionManagement.description'
          ),
          image: require('@/assets/images/Transaction Management 1.jpeg'),
        },
        {
          id: 5,
          title: this.$t('featuresProducts.products.rent.title'),
          description: this.$t('featuresProducts.products.rent.description'),
          image:
            'https://learn.roofstock.com/hs-fs/hubfs/iStock-1167467499.jpg?width=767&name=iStock-1167467499.jpg',
        },
      ],
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
