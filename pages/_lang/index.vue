<template>
  <div>
    <!-- Slider -->
    <client-only>
      <div id="home" class="tp-banner-container">
        <div class="tp-banner">
          <ul>
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
                      viewBox="0 0 25 30"
                      width="50"
                      height="50"
                      fill="#fff"
                    >
                      <g>
                        <rect x="5" y="10" width="3" height="6" />
                        <rect x="4" y="17" width="5" height="1" />
                        <path
                          d="M22,17h-2.5H17c-1.104,0-2,0.896-2,2v5h9v-5C24,17.896,23.104,17,22,17z"
                        />
                        <path
                          d="M17,16v-0.057c-0.617-0.631-1-1.491-1-2.443s0.383-1.813,1-2.444V7h2l-3-2.21V2h-2v1.316L9.5,0L0,7h2v9h2V9h5v7H17z M13,9   h2v2h-2V9z M13,12h2v2h-2V12z M10,9h2v2h-2V9z M10,12h2v2h-2V12z"
                        />
                        <circle cx="19.5" cy="13.5" r="2.5" />
                      </g>
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
