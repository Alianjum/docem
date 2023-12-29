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
    <VideoSection></VideoSection>

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
                <div class="col-lg-4 col-md-6 products_row_1">
                  <div class="iconbox center circle large services-block-three">
                    <a href="javascript:void(0)" class="service_block_a">
                      <div class="box-header custom_icons">
                        <div><i class="fa fa-link"></i></div>
                        <div class="box-title">
                          <div v-if="selected === 2" class="box-title">
                            {{ $t('features.brokerage.box1.titleQc') }}
                          </div>
                          <div v-else class="box-title">
                            {{ $t('features.brokerage.box1.title') }}
                          </div>
                        </div>
                      </div>
                      <div class="box-content">
                        <ul>
                          <li v-if="selected === 2">
                            {{ $t('features.brokerage.box1.list.list1Qc') }}
                          </li>
                          <li v-else>
                            {{ $t('features.brokerage.box1.list.list1') }}
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 products_row_1">
                  <div class="iconbox center circle large services-block-three">
                    <a href="javascript:void(0)" class="service_block_a">
                      <div class="box-header custom_icons">
                        <div><i class="fa fa-file"></i></div>
                        <div class="box-title">
                          {{ $t('features.agent.box2.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul>
                          <li v-if="selected === 2">
                            {{ $t('features.agent.box2.list.list1') }}
                          </li>
                          <li>{{ $t('features.agent.box2.list.list2') }}</li>
                          <li v-if="selected === 1">
                            {{ $t('features.agent.box2.list.list3') }}
                          </li>
                          <li v-if="selected === 2">
                            {{ $t('features.agent.box2.list.list4') }}
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 products_row_1">
                  <div class="iconbox center circle large services-block-three">
                    <a href="javascript:void(0)" class="service_block_a">
                      <div class="box-header custom_icons">
                        <div><i class="fa fa-check"></i></div>
                        <div class="box-title">
                          {{ $t('features.agent.box3.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul>
                          <li v-if="selected === 1">
                            {{ $t('features.agent.box3.list.list1') }}
                          </li>
                          <!-- <li>{{ $t('features.agent.box3.list.list2') }}</li> -->
                          <li>{{ $t('features.agent.box3.list.list3') }}</li>
                          <li>{{ $t('features.agent.box3.list.list4') }}</li>
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
    <!-- Request For Proposal -->
    <Rfp pricing="250" footnote-alt2></Rfp>
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
