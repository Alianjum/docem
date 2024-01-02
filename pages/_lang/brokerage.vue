<template>
  <div>
    <!-- Page title -->
    <PageTitle class="parallax1">
      <template v-slot:title>
        {{ $t('links.brokerage') }}
      </template>
      <template v-slot:breadcrumb>
        <li>
          <NuxtLink :to="localePath('brokerage')">
            {{ $t('links.brokerage') }}
          </NuxtLink>
        </li>
      </template>
    </PageTitle>

    <!-- Video Section -->
    <VideoSection></VideoSection>

    <!-- Benefits Section -->
    <!-- <section class="flat-row flat-row-alt">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="inner-box-about">
                <div class="title-box">
                  <div class="title">
                    <span class="color-theme">{{ siteName }}</span>
                    {{ $t('benefits.title') }}
                  </div>
                  <p>{{ $t('benefits.desc') }}</p>
                </div>
                <p>{{ siteName }} {{ $t('benefits.listHead') }}</p>
                <br />
                <ul>
                  <li>{{ $t('benefits.list1') }}</li>
                  <li>{{ $t('benefits.list2') }}</li>
                  <li>{{ $t('benefits.list3') }}</li>
                  <li>{{ $t('benefits.list4') }}</li>
                  <li>{{ $t('benefits.list5') }}</li>
                  <li>{{ $t('benefits.list6') }}</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <img src="~assets/images/about.png" alt="Advanced Secure Sign" />
            </div>
          </div>
        </div>
      </section> -->

    <!-- Features -->
    <section class="flat-row brokerage-sol">
      <div class="container">
        
        <div class="row">
          <div class="col-md-12">
            <div class="title-section">
              <h1 class="title">
                {{ $t('features.brokerage.title') }}
              </h1>
              <div class="sub-title">
                {{ $t('features.brokerage.subTitle') }}
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box1.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box1.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box1.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box2.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box2.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box2.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box3.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box3.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box3.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box4.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box4.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box4.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box5.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box5.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box5.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box6.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box6.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box6.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box7.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box7.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box7.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box8.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box8.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box8.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box9.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box9.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box9.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box10.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box10.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box10.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box11.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box11.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box11.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box12.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box12.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box12.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box13.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box13.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box13.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box14.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box14.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box14.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box15.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box15.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box15.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
         
        </div>
      </div>
    </section>

    <!-- Request For Proposal -->
    <Rfp pricing="150" footnote-alt2></Rfp>
    <!-- Promobox -->
    <Promobox></Promobox>
  </div>
</template>

<script>
// import $ from 'jquery'
import config from '~/data/siteConfig'
import PageTitle from '~/components/PageTitle.vue'
import Rfp from '~/components/Rfp.vue'
import VideoSection from '~/components/VideoSection.vue'
import Promobox from '~/components/Promobox.vue'

export default {
  components: {
    PageTitle,
    Rfp,
    Promobox,
    VideoSection,
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
        { id: 5, value: 'sk', province: this.$t('province.sk') },
        { id: 6, value: 'mb', province: this.$t('province.mb') },
        { id: 7, value: 'ns', province: this.$t('province.ns') },
        { id: 8, value: 'nb', province: this.$t('province.nb') },
        { id: 9, value: 'pe', province: this.$t('province.pe') },
        { id: 10, value: 'nl', province: this.$t('province.nl') },
        { id: 11, value: 'nt', province: this.$t('province.nt') },
        { id: 12, value: 'nu', province: this.$t('province.nu') },
        { id: 13, value: 'yt', province: this.$t('province.yt') },
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
