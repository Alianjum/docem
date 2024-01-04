<template>
  <div>
    <!-- Page title -->
    <PageTitle class="parallax2">
      <template v-slot:title>
        {{ $t('links.association_boards') }}
      </template>
      <template v-slot:breadcrumb>
        <li>
          <NuxtLink :to="localePath('associations_boards')">
            {{ $t('links.association_boards') }}
          </NuxtLink>
        </li>
      </template>
    </PageTitle>

    <!-- Video Section -->
    <!-- <VideoSection></VideoSection> -->
    <section class="flat-row background-color">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="inner-box-about">
            <div class="title-box">
              <div class="title">
                <span>{{ siteName }}</span> {{ $t('featuresProducts.products.association.heading') }}
              </div>
            </div>
            <p>
              {{ $t('featuresProducts.products.association.description') }}
            </p>
         <div class="flex justify-start">
          <div
          @click="scrolltoend"
          class="flat-button border-radius-small"
          style="margin-top:20px;"
              >
                  {{ $t('links.BookaDemo') }}
              </div>
         </div>
            
            <div class="empty-space height30"></div>
            <div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="video-thumbnail">
            <img
              v-if="$i18n.locale === 'en'"
              src="~assets/images/borkers-bg.jpg"
              alt="Video Thumbnail"
              width="100%"
              height="315"
            />
            <img
              v-else
              src="~assets/images/borkers-bg.jpg"
              alt="Video Thumbnail"
              width="100%"
              height="315"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 50px;">
      <div class="row flex gap-2">
          <div class="col-lg-3 col-md-6 custom-box-shadow ">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-pencil-square-o"></i></div>
                  <div class="box-title">
                    {{ $t('features.association.box1.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>
                      {{ $t('features.association.box1.list.list1') }}
                    </li>
                    <li>
                      {{ $t('features.association.box1.list.list2') }}
                    </li>       
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 custom-box-shadow ">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div class="flex justify-center" style="margin-bottom: 17px;">
                    <div  class="custom-blue-bg">
                      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="30" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg>
  </div></div>                <div class="box-title">
                    {{ $t('features.association.box2.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>
                      {{ $t('features.association.box2.list.list1') }}
                    </li>
                    <li>
                      {{ $t('features.association.box2.list.list2') }}
                    </li>            
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 custom-box-shadow ">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-calendar"></i></div>
                  <div class="box-title">
                    {{ $t('features.association.box3.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>
                      {{ $t('features.association.box3.list.list1') }}
                    </li>
                    <li>
                      {{ $t('features.association.box3.list.list2') }}
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 custom-box-shadow ">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                 <div class="flex justify-center" style="margin-bottom: 17px;">
                  <div class="custom-blue-bg"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="40" viewBox="0 0 576 512">
                    <path d="M271.1 144.3l54.3 14.3a8.6 8.6 0 0 1 6.6 8.1c0 4.6-4.1 8.4-9.1 8.4h-35.6a30 30 0 0 1 -11.2-2.2c-5.2-2.2-11.3-1.7-15.3 2l-19 17.5a11.7 11.7 0 0 0 -2.3 2.7 11.4 11.4 0 0 0 3.9 15.7 83.8 83.8 0 0 0 34.5 11.5V240c0 8.8 7.8 16 17.4 16h17.4c9.6 0 17.4-7.2 17.4-16V222.4c32.9-3.6 57.8-31 53.5-63-3.2-23-22.5-41.3-46.6-47.7L282.7 97.4a8.6 8.6 0 0 1 -6.6-8.1c0-4.6 4.1-8.4 9.1-8.4h35.6A30 30 0 0 1 332 83.1c5.2 2.2 11.3 1.7 15.3-2l19-17.5A11.3 11.3 0 0 0 368.5 61a11.4 11.4 0 0 0 -3.8-15.8 83.8 83.8 0 0 0 -34.5-11.5V16c0-8.8-7.8-16-17.4-16H295.4C285.8 0 278 7.2 278 16V33.6c-32.9 3.6-57.9 31-53.5 63C227.6 119.6 247 137.9 271.1 144.3zM565.3 328.1c-11.8-10.7-30.2-10-42.6 0L430.3 402a63.6 63.6 0 0 1 -40 14H272a16 16 0 0 1 0-32h78.3c15.9 0 30.7-10.9 33.3-26.6a31.2 31.2 0 0 0 .5-5.5A32 32 0 0 0 352 320H192a117.7 117.7 0 0 0 -74.1 26.3L71.4 384H16A16 16 0 0 0 0 400v96a16 16 0 0 0 16 16H372.8a64 64 0 0 0 40-14L564 377a32 32 0 0 0 1.3-48.9z" fill="#fff"/></svg>
                  </div> 
                 </div>
                  <div class="box-title">
                    {{ $t('features.association.box4.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>
                      {{ $t('features.association.box4.list.list1') }}
                    </li>
                    <li>
                      {{ $t('features.association.box4.list.list2') }}
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>
      <Rfp pricing="150" footnote-alt2></Rfp>
      <!-- Promobox -->
      <Promobox></Promobox>
  </div>
</template>

<script>
// import $ from 'jquery'
import config from '~/data/siteConfig'
import PageTitle from '~/components/PageTitle.vue'
import Promobox from '~/components/Promobox.vue'
import VideoSection from '~/components/VideoSection.vue'
import Rfp from '~/components/Rfp.vue'

export default {
  components: {
    PageTitle,
    Promobox,
    VideoSection,
    Rfp
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
  methods:{
    scrolltoend(){
      document.getElementById('request_form_section').scrollIntoView({
  behavior: 'smooth'
})
    }
  }
}
</script>

<style>
.custom-blue-bg{
  background-color: #00aeff;
  border-radius: 100px;
  font-size: 30px;
  width: 60px;
  height: 60px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-blue-button{
  background-color: #00aeff;
  border-radius: 30px;
  padding: 10px;
  color:white;
  cursor: pointer;
}
.custom-box-shadow{
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 14px;
  border-radius: 4px;
  height: 13vw;
  margin-bottom: 1%;
  margin-top: 1%;
  background-color: #fff;
}

.flex{
  display: flex;
}
.justify-center{
  justify-content: center;
}
.justify-start{
  justify-content: start;
}
.gap-2{
  gap:15px
}
</style>