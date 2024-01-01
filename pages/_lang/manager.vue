<template>
  <div>
    <!-- Page title -->
    <PageTitle class="parallax7">
      <template v-slot:title>
        {{ $t('links.manager') }}
      </template>
      <template v-slot:breadcrumb>
        <li>
          <NuxtLink :to="localePath('manager')">
            {{ $t('links.manager') }}
          </NuxtLink>
        </li>
      </template>
    </PageTitle>

    <!-- Province Select 
    <section class="flat-row background-theme row-promobox">
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

    <VideoSection></VideoSection>

    <!-- Features -->
    <section class="flat-row background-color">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-section">
              <i class="fa fa-line-chart" aria-hidden="true"></i>
              <h1 class="title">
                {{ $t('features.manager.title') }}
              </h1>
              <div class="sub-title">
                {{ $t('features.manager.subTitle') }}
              </div>
            </div>
          </div>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-check"></i></div>
                  <div class="box-title">
                    {{ $t('features.manager.box4.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li v-if="selected != 1">
                      {{ $t('features.manager.box4.list.list1') }}
                    </li>
                    <li v-else>
                      {{ $t('features.manager.box4.list.list1On') }}
                    </li>
                    <li v-if="selected != 1">
                      {{ $t('features.manager.box4.list.list2') }}
                    </li>
                    <li v-else>
                      {{ $t('features.manager.box4.list.list2On') }}
                    </li>
                    <li>
                      {{ $t('features.manager.box4.list.list3') }}
                    </li>
                    <li>
                      {{ $t('features.manager.box4.list.list4') }}
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 margin-30px-bottom products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-file"></i></div>
                  <div class="box-title">
                    {{ $t('features.manager.box3.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.manager.box3.list.list1') }}</li>
                    <li>{{ $t('features.manager.box3.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 margin-30px-bottom products_row_3 display_feature"
          >
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-envelope"></i></div>
                  <div class="box-title">
                    {{ $t('features.manager.box1.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.manager.box1.list.list1') }}</li>
                    <li>{{ $t('features.manager.box1.list.list2') }}</li>
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
  </div>
</template>

<script>
// import $ from 'jquery'
import config from '~/data/siteConfig'
import PageTitle from '~/components/PageTitle.vue'
import VideoSection from '~/components/VideoSection.vue'
import Rfp from '~/components/Rfp.vue'

export default {
  components: {
    PageTitle,
    VideoSection,
    Rfp
  },
  data() {
    return {
      metaTitle: this.$t('links.manager'),
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
            'meta.social.manager'
          )}.jpg`,
        },
        {
          hid: 'twitter:image',
          property: 'og:image',
          content: `${config.siteUrl}/img/${this.$t(
            'meta.social.manager'
          )}.jpg`,
        },
      ],
    }
  },
}
</script>
