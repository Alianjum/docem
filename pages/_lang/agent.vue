<template>
  <div>
    <!-- Page title -->
    <PageTitle class="parallax3">
      <template v-slot:title>
        {{ $t('links.agent') }}
      </template>
      <template v-slot:breadcrumb>
        <li>
          <NuxtLink :to="localePath('agent')">
            {{ $t('links.agent') }}
          </NuxtLink>
        </li>
      </template>
    </PageTitle>

    <!-- Province Select -->
    <!-- <section class="flat-row background-theme row-promobox">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="flat-promobox style1 color-white">
              <div class="promobox-group-content">
                <h3>
                  <span v-if="selected === 1">{{ $t('province.on') }}</span>
                  <span v-else-if="selected === 2">{{
                    $t('province.qc')
                  }}</span>
                  <span v-else-if="selected === 3">{{
                    $t('province.bc')
                  }}</span>
                  <span v-else-if="selected === 4">{{
                    $t('province.ab')
                  }}</span>
                  <span v-else-if="selected === 5">{{
                    $t('province.sk')
                  }}</span>
                  <span v-else-if="selected === 6">{{
                    $t('province.mb')
                  }}</span>
                  <span v-else-if="selected === 7">{{
                    $t('province.ns')
                  }}</span>
                  <span v-else-if="selected === 8">{{
                    $t('province.nb')
                  }}</span>
                  <span v-else-if="selected === 9">{{
                    $t('province.pe')
                  }}</span>
                  <span v-else-if="selected === 10">{{
                    $t('province.nl')
                  }}</span>
                  <span v-else-if="selected === 11">{{
                    $t('province.nt')
                  }}</span>
                  <span v-else-if="selected === 12">{{
                    $t('province.nu')
                  }}</span>
                  <span v-else-if="selected === 13">{{
                    $t('province.yt')
                  }}</span>
                  <span v-else>{{ $t('province.choose') }}</span>
                </h3>
              </div>
              <div class="promobox-group-btn">
                <select v-model="selected" class="form-control mb-0">
                  <option
                    v-for="option in options"
                    :key="option.value"
                    :value="option.id"
                    >{{ option.province }}</option
                  >
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Video Section -->
    <!-- <VideoSection></VideoSection> -->
    <template>
  <section class="flat-row background-color">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="inner-box-about">
            <div class="title-box">
              <div class="title"> 
                <span>{{ siteName }}</span> {{ $t('about.agent.title') }}
              </div>
            </div>
            <p>
             {{ $t('about.agent.desc') }}
            </p>
            <div class="empty-space height30"></div>
            <div>
              <NuxtLink
                v-if="!isOnAbout"
                :to="isOnAgent ? '#subscription' : '#request_form_section'"
                class="flat-button border-radius-small"
              >
                {{ 'Register' }}
              </NuxtLink>
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
  </section>
</template>

    <!-- <div v-if="selected != 0"> -->
    <div>
      <!-- Agent Features -->
      <section class="flat-row brokerage-sol">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title-section">
                <h1 class="title">{{ $t('features.agent.title') }}</h1>
                <div v-if="selected === 2" class="sub-title">
                  {{ $t('features.agent.subTitleQc') }}
                </div>
                <div v-else class="sub-title">
                  {{ $t('features.agent.subTitle') }}
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <!-- Features Icons -->
            <div class="col-md-12">
              <div class="row">
                <div class="col-lg-4 col-md-6 products_row_1 display_feature">
                  <div class="iconbox center circle large services-block-three">
                    <a href="javascript:void(0)" class="service_block_a">
                      <div class="box-header custom_icons">
                        <div><i class="fa fa-pencil-square-o"></i></div>
                        <div class="box-title">
                          {{ $t('features.agent.box1.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul>
                          <li>{{ $t('features.agent.box1.list.list1') }}</li> 
                          <!-- <li>{{ $t('features.agent.box1.list.list2') }}</li> -->
                          <li>{{ $t('Unlimited eSignature') }}</li>
                        </ul>
                      </div>
                    </a> 
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 products_row_1 display_feature">
                  <div class="iconbox center circle large services-block-three">
                    <a href="javascript:void(0)" class="service_block_a">
                      <div class="box-header custom_icons">
                        <div class="flex justify-center">
                  <div  class="custom-blue-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="30" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg>
</div></div>                        <div class="box-title">
                          {{ $t('features.agent.box2.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul>
                          <li>{{ $t('features.agent.box2.list.list1') }}</li> 
                          <!-- <li>{{ $t('features.agent.box2.list.list2') }}</li> -->
                          <li>{{ $t('Unlimited eSignature') }}</li>
                        </ul>
                      </div>
                    </a> 
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 products_row_1 display_feature">
                  <div class="iconbox center circle large services-block-three">
                    <a href="javascript:void(0)" class="service_block_a">
                      <div class="box-header custom_icons">
                        <div><i class="fa fa-calendar"></i></div>
                        <div class="box-title">
                          {{ $t('features.agent.box3.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul>
                          <li>{{ $t('features.agent.box3.list.list1') }}</li>
                          <li>{{ $t('features.agent.box3.list.list2') }}</li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 products_row_1 display_feature">
                  <div class="iconbox center circle large services-block-three">
                    <a href="javascript:void(0)" class="service_block_a">
                      <div class="box-header custom_icons">
                        <div class="flex justify-center">
                <div class="custom-blue-bg"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="40" viewBox="0 0 576 512">
                  <path d="M271.1 144.3l54.3 14.3a8.6 8.6 0 0 1 6.6 8.1c0 4.6-4.1 8.4-9.1 8.4h-35.6a30 30 0 0 1 -11.2-2.2c-5.2-2.2-11.3-1.7-15.3 2l-19 17.5a11.7 11.7 0 0 0 -2.3 2.7 11.4 11.4 0 0 0 3.9 15.7 83.8 83.8 0 0 0 34.5 11.5V240c0 8.8 7.8 16 17.4 16h17.4c9.6 0 17.4-7.2 17.4-16V222.4c32.9-3.6 57.8-31 53.5-63-3.2-23-22.5-41.3-46.6-47.7L282.7 97.4a8.6 8.6 0 0 1 -6.6-8.1c0-4.6 4.1-8.4 9.1-8.4h35.6A30 30 0 0 1 332 83.1c5.2 2.2 11.3 1.7 15.3-2l19-17.5A11.3 11.3 0 0 0 368.5 61a11.4 11.4 0 0 0 -3.8-15.8 83.8 83.8 0 0 0 -34.5-11.5V16c0-8.8-7.8-16-17.4-16H295.4C285.8 0 278 7.2 278 16V33.6c-32.9 3.6-57.9 31-53.5 63C227.6 119.6 247 137.9 271.1 144.3zM565.3 328.1c-11.8-10.7-30.2-10-42.6 0L430.3 402a63.6 63.6 0 0 1 -40 14H272a16 16 0 0 1 0-32h78.3c15.9 0 30.7-10.9 33.3-26.6a31.2 31.2 0 0 0 .5-5.5A32 32 0 0 0 352 320H192a117.7 117.7 0 0 0 -74.1 26.3L71.4 384H16A16 16 0 0 0 0 400v96a16 16 0 0 0 16 16H372.8a64 64 0 0 0 40-14L564 377a32 32 0 0 0 1.3-48.9z" fill="#fff"/></svg>
                </div> 
               </div>                        <div class="box-title">
                          {{ $t('features.agent.box4.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul>
                          <li>
                            {{ $t('features.agent.box4.list.list1') }}
                          </li>
                          <li>
                            {{ $t('features.agent.box4.list.list2') }}
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 products_row_1 display_feature">
                  <div class="iconbox center circle large services-block-three">
                    <a href="javascript:void(0)" class="service_block_a">
                      <div class="box-header custom_icons">
                        <div><i class="fa fa-file-text-o"></i></div>
                        <div class="box-title">
                          {{ $t('features.agent.box5.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul>
                          <li>
                            {{ $t('features.agent.box5.list.list1') }}
                          </li>
                          <li>
                            {{ $t('features.agent.box5.list.list2') }}
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 products_row_1 display_feature">
                  <div class="iconbox center circle large services-block-three">
                    <a href="javascript:void(0)" class="service_block_a">
                      <div class="box-header custom_icons">
                        <div><i class="fa fa-key"></i></div>
                        <div class="box-title">
                          {{ $t('features.agent.box6.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul>
                          <li>
                            {{ $t('features.agent.box6.list.list1') }}
                          </li>
                          <li>
                            {{ $t('features.agent.box6.list.list2') }}
                            </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Pricing -->
    <div class="col-md-12 col-lg-12 col-xl-12" style="padding: 0; border-radius: 0; margin-bottom: 80px;">
      <section id="subscription">
        <div class="flat-price-table">
          <h4 class="price-title">
            {{ $t('pricing.agent.plan1.title') }}
          </h4>
          <div class="sub-title">
            {{ $t('pricing.agent.plan1.subTitle') }}
          </div>
          <div v-if="$i18n.locale == 'fr'" class="price ">
            <span class="money">29.99</span>
            <span class="currency-unit">$</span>
            <span class="time">{{ $t('pricing.agent.plan1.time') }}</span>
          </div>
          <div v-else class="price ">
            <span class="currency-unit">$</span>
            <span class="money">29.99</span>
            <span class="time">{{ $t('pricing.agent.plan1.time') }}</span>
          </div>
          <!-- <div class="sub-title pt-15">
            * {{ $t('pricing.agent.plan1.creditNote') }}
          </div> -->
          <div class="p-15 background-light ">
            <label
              for="province-select"
              style="text-align: left; margin: 0 0 10px; display: block"
              >{{ $t('province.chooseAlt') }}:</label
            >
            <select
              id="province-select"
              v-model="selected"
              class="form-control mb-0"
            >
              <option
                v-for="option in options"
                :key="option.value"
                :value="option.id"
              >
                {{ option.province }}
              </option>
            </select>
          </div>
          <div class="background-light">
            <a
              v-if="selected === 2"
              href="https://qc.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-else-if="selected != 0"
              href="https://on.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <!-- <a
              v-if="selected === 3"
              href="https://bc.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-if="selected === 4"
              href="https://ab.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-if="selected === 5"
              href="https://sk.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-if="selected === 6"
              href="https://mb.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-if="selected === 7"
              href="https://ns.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-if="selected === 8"
              href="https://nb.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-if="selected === 9"
              href="https://pe.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-if="selected === 10"
              href="https://nl.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-if="selected === 11"
              href="https://nt.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-if="selected === 12"
              href="https://nu.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            >
            <a
              v-if="selected === 13"
              href="https://yt.docem.ca/Team/Agent/Register"
              class="price-buynow"
              target="_blank"
              >{{ $t('links.register') }}</a
            > -->
          </div>
        </div>
      </section>

    </div>

    <!-- Request For Proposal -->
    <!-- <Rfp pricing="150" footnote-alt2></Rfp> -->
  </div>
</template>

<script>
import $ from 'jquery'
import config from '~/data/siteConfig'
import Rfp from '~/components/Rfp.vue'
import PageTitle from '~/components/PageTitle.vue'
import VideoSection from '~/components/VideoSection.vue'

export default {
  components: {
    PageTitle,
    VideoSection,
    Rfp,
  },
  data() {
    return {
      metaTitle: this.$t('links.agent'),
      metaDesc: this.$t('meta.desc.home'),
      siteName: config.siteTitle,
      selected: '0',
      options: [
        { id: 0, value: '', province: this.$t('province.default') },
        { id: 1, value: 'ca', province: this.$t('province.ca') },
        { id: 2, value: 'qc', province: this.$t('province.qc') },
        { id: 3, value: 'us', province: this.$t('province.us') },
      ],
      showMore: false,
    }
  },
  mounted() {
    $('#getaudit').submit(function (e) {
      e.preventDefault()
      $('#formLoader').show()
      $.ajax({
        url: 'https://on.docem.ca/faq/RequestPresentation',
        type: 'post',
        data: $('#getaudit').serialize(),
        success() {
          $('#formThanks').show()
          $('#formLoader').hide()
        },
        error(msg) {
          if (msg.Success) {
            $('#formThanks').show()
            $('#formLoader').hide()
          } else {
            $('#formError').show()
            $('#formLoader').hide()
          }
        },
      })
    })
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
          content: `${config.siteUrl}/img/${this.$t('meta.social.agent')}.jpg`,
        },
        {
          hid: 'twitter:image',
          property: 'og:image',
          content: `${config.siteUrl}/img/${this.$t('meta.social.agent')}.jpg`,
        },
      ],
    }
  },
}
</script>

<style>

.flex{
  display: flex;
}
.justify-center{
  justify-content: center;
}
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
</style>