<template>
  <div>
    <!-- Slider -->
    <client-only>
      <div id="home" class="tp-banner-container">
        <div class="tp-banner">
          <ul>
            <!-- <li
              data-transition="random-static"
              data-slotamount="7"
              data-masterspeed="1000"
              data-saveperformance="on"
            >
              <img src="~assets/images/slides/slide1.jpg" alt="slider-image" />
              <div
                class="tp-caption sfl title-slide color-white center"
                data-x="15"
                data-y="110"
                data-speed="1000"
                data-start="1000"
                data-easing="Power3.easeInOut"
              >
                <span>{{ siteName }}</span
                ><br />
                {{ $t('hero.slide1.title') }}
              </div>
              <div
                class="tp-caption sfr desc-slide color-white center"
                data-x="15"
                data-y="250"
                data-speed="1000"
                data-start="1500"
                data-easing="Power3.easeInOut"
              >
                {{ $t('hero.slide1.desc') }}
              </div>

              <div
                class="tp-caption sfl flat-button-slider bg-button-slider-32bfc0"
                data-x="15"
                data-y="360"
                data-speed="1000"
                data-start="2500"
                data-easing="Power3.easeInOut"
              >
                <NuxtLink :to="localePath('about')">
                  {{ $t('links.learnMore') }}
                </NuxtLink>
                &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-right"></i>
              </div>
            </li> -->
            <li
              data-transition="random-static"
              data-slotamount="7"
              data-masterspeed="1000"
              data-saveperformance="on"
            >
              <img
                src="~assets/images/slides/bunch-of-brokers-bg.jpg"
                alt="slider-image"
              />
              <div
                class="tp-caption sfl title-slide color-white center"
                data-x="15"
                data-y="110"
                data-speed="1000"
                data-start="1000"
                data-easing="Power3.easeInOut"
              >
                <span>{{ siteName }}</span
                ><br />
                {{ $t('hero.slide5.title') }}
              </div>
              <div
                class="tp-caption sfr desc-slide color-white center"
                data-x="15"
                data-y="250"
                data-speed="1000"
                data-start="1500"
                data-easing="Power3.easeInOut"
              >
                {{ $t('hero.slide5.desc') }}
              </div>

              <div
                class="tp-caption sfl flat-button-slider bg-button-slider-32bfc0"
                data-x="15"
                data-y="360"
                data-speed="1000"
                data-start="2500"
                data-easing="Power3.easeInOut"
              >
                <NuxtLink :to="localePath('associations_boards')">
                  {{ $t('links.learnMore') }}
                </NuxtLink>
                &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-right"></i>
              </div>
            </li>
            <li
              data-transition="random-static"
              data-slotamount="7"
              data-masterspeed="1000"
              data-saveperformance="on"
            >
              <img src="~assets/images/slides/slide1.jpg" alt="slider-image" />
              <div
                class="tp-caption sfl title-slide color-white center"
                data-x="15"
                data-y="110"
                data-speed="1000"
                data-start="1000"
                data-easing="Power3.easeInOut"
              >
                <span>{{ siteName }}</span
                ><br />
                {{ $t('hero.slide2.title') }}
              </div>
              <div
                class="tp-caption sfr desc-slide color-white center"
                data-x="15"
                data-y="250"
                data-speed="1000"
                data-start="1500"
                data-easing="Power3.easeInOut"
              >
                {{ $t('hero.slide2.desc') }}
              </div>

              <div
                class="tp-caption sfl flat-button-slider bg-button-slider-32bfc0"
                data-x="15"
                data-y="360"
                data-speed="1000"
                data-start="2500"
                data-easing="Power3.easeInOut"
              >
                <NuxtLink :to="localePath('brokerage')">
                  {{ $t('links.learnMore') }}
                </NuxtLink>
                &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-right"></i>
              </div>
            </li>

            <li
              data-transition="random-static"
              data-slotamount="7"
              data-masterspeed="1000"
              data-saveperformance="on"
            >
              <img src="~assets/images/slides/slide3.jpg" alt="slider-image" />
              <div
                class="tp-caption sfl title-slide color-white center"
                data-x="15"
                data-y="110"
                data-speed="1000"
                data-start="1000"
                data-easing="Power3.easeInOut"
              >
                <span>{{ siteName }}</span
                ><br />
                {{ $t('hero.slide3.title') }}
              </div>
              <div
                class="tp-caption sfr desc-slide color-white center"
                data-x="15"
                data-y="250"
                data-speed="1000"
                data-start="1500"
                data-easing="Power3.easeInOut"
              >
                {{ $t('hero.slide3.desc') }}
              </div>

              <div
                class="tp-caption sfl flat-button-slider bg-button-slider-32bfc0"
                data-x="15"
                data-y="360"
                data-speed="1000"
                data-start="2500"
                data-easing="Power3.easeInOut"
              >
                <NuxtLink :to="localePath('agent')">
                  {{ $t('links.learnMore') }}
                </NuxtLink>
                &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-right"></i>
              </div>
            </li>

            <li
              data-transition="random-static"
              data-slotamount="7"
              data-masterspeed="1000"
              data-saveperformance="on"
            >
              <img
                src="~assets/images/slides/property-manager-bg.jpg"
                alt="slider-image"
              />
              <div
                class="tp-caption sfl title-slide color-white center"
                data-x="15"
                data-y="110"
                data-speed="1000"
                data-start="1000"
                data-easing="Power3.easeInOut"
              >
                <span>{{ siteName }}</span
                ><br />
                {{ $t('hero.slide4.title') }}
              </div>
              <div
                class="tp-caption sfr desc-slide color-white center"
                data-x="15"
                data-y="250"
                data-speed="1000"
                data-start="1500"
                data-easing="Power3.easeInOut"
              >
                {{ $t('hero.slide4.desc') }}
              </div>

              <div
                class="tp-caption sfl flat-button-slider bg-button-slider-32bfc0"
                data-x="15"
                data-y="360"
                data-speed="1000"
                data-start="2500"
                data-easing="Power3.easeInOut"
              >
                <NuxtLink :to="localePath('manager')">
                  {{ $t('links.learnMore') }}
                </NuxtLink>
                &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-right"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </client-only>

    <!-- Our Platforms -->
    <section class="flat-row platform_sec">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-section">
              <h1 class="title">{{ $t('platforms.title') }}</h1>
              <div class="sub-title">
                {{ $t('platforms.subTitle') }}
              </div>
            </div>
          </div>
        </div>

        <div class="home_main">
          <div class="col-md-3 home_feature_index">
            <div class="iconbox center circle large platform_card_main">
              <div class="box-header">
                <!-- <img src="~assets/images/icon/icon2.svg" alt="icon" /> -->
                <div><i class="fa fa-users"></i></div>
                <div class="box-title">
                  <NuxtLink :to="localePath('associations_boards')">
                    {{ $t('links.association_boards') }}
                  </NuxtLink>
                </div>
              </div>
              <div class="box-content">
                {{ $t('platforms.association_boardsDesc') }}
                <div style="margin-top: 25px">
                  <NuxtLink
                    :to="localePath('associations_boards')"
                    class="flat-button border-radius-small position-absolute bottom-button button-center"
                  >
                    {{ $t('links.learnMore') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- /.iconbox -->
          </div>
          <!-- /.col-md-3 home_feature_index -->
          <div class="col-md-3 home_feature_index">
            <div class="iconbox center circle large platform_card_main">
              <div class="box-header">
                <div class="flex justify-center" style="margin-bottom: 17px">
                  <div class="custom-blue-bg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 70 56"
                      width="50"
                      height="50"
                      fill="#fff"
                    >
                      <path
                        d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89,0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="box-title">
                  <NuxtLink :to="localePath('brokerage')">
                    {{ $t('links.brokerage') }}
                  </NuxtLink>
                </div>
              </div>
              <div class="box-content">
                {{ $t('platforms.brokerageDesc') }}
                <div style="margin-top: 25px">
                  <NuxtLink
                    :to="localePath('brokerage')"
                    class="flat-button border-radius-small position-absolute bottom-button button-center"
                  >
                    {{ $t('links.learnMore') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- /.iconbox -->
          </div>
          <!-- /.col-md-3 home_feature_index -->

          <div class="col-md-3 home_feature_index">
            <div class="iconbox center circle large platform_card_main">
              <div class="box-header">
                <!-- <img src="~assets/images/icon/icon7.svg" alt="icon" /> -->
                <div><i class="fa fa-user"></i></div>
                <div class="box-title">
                  <NuxtLink :to="localePath('agent')">
                    {{ $t('links.agent') }}
                  </NuxtLink>
                </div>
              </div>
              <div class="box-content">
                {{ $t('platforms.agentDesc') }}
                <div style="margin-top: 25px">
                  <NuxtLink
                    :to="localePath('agent')"
                    class="flat-button border-radius-small position-absolute bottom-button button-center"
                  >
                    {{ $t('links.learnMore') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- /.iconbox -->
          </div>
          <!-- /.col-md-3 home_feature_index -->

          <div class="col-md-3 home_feature_index">
            <div class="iconbox center circle large platform_card_main">
              <div class="box-header">
                <!-- <img src="~assets/images/icon/icon8.svg" alt="icon" /> -->
                <div><i class="fa fa-building"></i></div>
                <div class="box-title">
                  <NuxtLink :to="localePath('manager')">
                    {{ $t('links.manager') }}
                  </NuxtLink>
                </div>
              </div>
              <div class="box-content">
                {{ $t('platforms.landlordDesc') }}
                <div style="margin-top: 25px">
                  <NuxtLink
                    :to="localePath('manager')"
                    class="flat-button border-radius-small position-absolute bottom-button button-center"
                  >
                    {{ $t('links.learnMore') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- /.iconbox -->
          </div>
          <!-- /.col-md-3 home_feature_index -->
        </div>
      </div>
      <!-- /.container -->
    </section>

    <!-- Testimonials -->
    <Testimonials></Testimonials>

    <!-- Promobox -->
    <Promobox></Promobox>
  </div>
</template>

<script>
import $ from 'jquery'
import config from '~/data/siteConfig'
import Promobox from '~/components/Promobox.vue'
import Testimonials from '~/components/Testimonials.vue'

export default {
  components: {
    Promobox,
    Testimonials,
  },
  data() {
    return {
      metaTitle: this.$t('links.home'),
      metaDesc: this.$t('meta.desc.home'),
      siteName: config.siteTitle,
    }
  },
  mounted() {
    $('#slider').remove()
    const script = document.createElement('script')
    script.id = 'slider'
    script.type = 'text/javascript'
    script.src = '/javascript/slider.js'
    document.body.appendChild(script)
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
            'meta.social.general'
          )}.jpg`,
        },
        {
          hid: 'twitter:image',
          property: 'og:image',
          content: `${config.siteUrl}/img/${this.$t(
            'meta.social.general'
          )}.jpg`,
        },
      ],
    }
  },
}
</script>
z
