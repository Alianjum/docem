<template>
  <div>
    <!-- Page title -->
    <PageTitle class="parallax4">
      <template v-slot:title>
        {{ $t('links.landlord') }}
      </template>
      <template v-slot:breadcrumb>
        <li>
          <NuxtLink :to="localePath('landlord')">
            {{ $t('links.landlord') }}
          </NuxtLink>
        </li>
      </template>
    </PageTitle>

    <!-- Province Select -->
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
    </section>

    <!-- Features -->
    <section class="flat-row">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-section">
              <i class="fa fa-line-chart" aria-hidden="true"></i>
              <h1 class="title">{{ $t('features.landlord.title') }}</h1>
              <div class="sub-title">
                {{ $t('features.landlord.subTitle') }}
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Features Icons -->
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-6">
                <div class="iconbox circle large">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="box-header center">
                        <div><i class="fa fa-link"></i></div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="box-header">
                        <div class="box-title">
                          {{ $t('features.landlord.box1.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul class="flat-list style2">
                          <li>
                            {{ $t('features.landlord.box1.list.list1') }}
                          </li>
                          <li>
                            {{ $t('features.landlord.box1.list.list2') }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="iconbox circle large">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="box-header center">
                        <div><i class="fa fa-usd"></i></div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="box-header">
                        <div class="box-title">
                          {{ $t('features.landlord.box2.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul class="flat-list style2">
                          <li>{{ $t('features.landlord.box2.list.list1') }}</li>
                          <li>{{ $t('features.landlord.box2.list.list2') }}</li>
                          <li>{{ $t('features.landlord.box2.list.list3') }}</li>
                          <li>{{ $t('features.landlord.box2.list.list4') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="empty-space height30"></div>
            <div class="row">
              <div class="col-md-6">
                <div class="iconbox circle large">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="box-header center">
                        <div><i class="fa fa-file"></i></div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="box-header">
                        <div class="box-title">
                          {{ $t('features.landlord.box3.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul class="flat-list style2">
                          <li>
                            {{ $t('features.landlord.box3.list.list1') }}
                          </li>
                          <li>{{ $t('features.landlord.box3.list.list2') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="iconbox circle large">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="box-header center">
                        <div><i class="fa fa-check"></i></div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="box-header">
                        <div class="box-title">
                          {{ $t('features.landlord.box4.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul class="flat-list style2">
                          <li v-if="selected != 1">
                            {{ $t('features.landlord.box4.list.list1') }}
                          </li>
                          <li v-else>
                            {{ $t('features.landlord.box4.list.list1On') }}
                          </li>
                          <li v-if="selected != 1">
                            {{ $t('features.landlord.box4.list.list2') }}
                          </li>
                          <li v-else>
                            {{ $t('features.landlord.box4.list.list2On') }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="empty-space height30"></div>
            <div class="row">
              <!-- <div class="col-md-6">
                <div class="iconbox circle large">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="box-header center">
                        <div><i class="fa fa-flag"></i></div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="box-header">
                        <div class="box-title">
                          {{ $t('features.landlord.box5.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul class="flat-list style2">
                          <li>{{ $t('features.landlord.box5.list.list1') }}</li>
                          <li>{{ $t('features.landlord.box5.list.list2') }}</li>
                          <li>{{ $t('features.landlord.box5.list.list3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="col-md-6">
                <div class="iconbox circle large">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="box-header center">
                        <div><i class="fa fa-comment"></i></div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="box-header">
                        <div class="box-title">
                          {{ $t('features.landlord.box6.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul class="flat-list style2">
                          <li>{{ $t('features.landlord.box6.list.list1') }}</li>
                          <li>{{ $t('features.landlord.box6.list.list2') }}</li>
                          <li>{{ $t('features.landlord.box6.list.list3') }}</li>
                          <li>{{ $t('features.landlord.box6.list.list4') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="iconbox circle large">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="box-header center">
                        <div><i class="fa fa-retweet"></i></div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="box-header">
                        <div class="box-title">
                          {{ $t('features.landlord.box7.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul class="flat-list style2">
                          <li>{{ $t('features.landlord.box7.list.list1') }}</li>
                          <li>{{ $t('features.landlord.box7.list.list2') }}</li>
                          <li>{{ $t('features.landlord.box7.list.list3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="empty-space height30"></div>
            <div class="row">
              <div class="col-md-6">
                <div class="iconbox circle large">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="box-header center">
                        <div><i class="fa fa-file-text-o"></i></div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="box-header">
                        <div class="box-title">
                          {{ $t('features.landlord.box8.title') }}
                        </div>
                      </div>
                      <div class="box-content">
                        <ul class="flat-list style2">
                          <li>{{ $t('features.landlord.box8.list.list1') }}</li>
                          <li>{{ $t('features.landlord.box8.list.list2') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pricing -->
          <div class="col-md-4">
            <div class="request-prosopal rfp-alt clearfix">
              <h2 class="text-center">{{ $t('rfp.title') }}</h2>
              <h3 class="color-white text-center mb-15">
                {{ $t('rfp.starting') }}
                <span v-if="$i18n.locale == 'fr'" class="label label-theme">
                  <span>29.99 $</span>
                </span>
                <span v-else class="label label-theme">
                  <span>$29.99</span>
                </span>
              </h3>
              <div class="sub-title color-label text-center mb-15">
                * {{ $t('rfp.footnote') }}
              </div>
              <form
                id="getaudit"
                action="https://preprod.docem.ca/faq/RequestPresentation"
                method="post"
                class="getautdit-style1"
              >
                <p class="firstname">
                  <label>{{ $t('rfp.formName') }} *</label>
                  <input
                    id="firstname"
                    name="Firstname"
                    type="text"
                    value=""
                    aria-required="true"
                    required="required"
                  />
                </p>

                <p class="lastname">
                  <label>{{ $t('rfp.formLastname') }} *</label>
                  <input
                    id="lastname"
                    name="Lastname"
                    type="text"
                    value=""
                    aria-required="true"
                    required="required"
                  />
                </p>

                <p class="email">
                  <label>{{ $t('rfp.formEmail') }} *</label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    value=""
                    aria-required="true"
                    required="required"
                  />
                </p>

                <p class="phone">
                  <label>{{ $t('rfp.formPhone') }} *</label>
                  <input
                    id="phone"
                    name="Phone"
                    type="text"
                    value=""
                    aria-required="true"
                    required="required"
                  />
                </p>

                <p class="website">
                  <label for="website">{{ $t('rfp.formWebsite') }}</label>
                  <input id="website" name="Website" type="text" />
                </p>
                <p class="form-submit pull-right">
                  <button name="submit" type="submit" class="pull-right">
                    <i
                      id="formLoader"
                      class="fa fa-spin fa-spinner mr-10"
                      style="display: none;"
                    ></i>
                    {{ $t('rfp.formSubmit') }}
                  </button>
                </p>

                <div class="clearfix"></div>
                <div
                  id="formThanks"
                  class="alert alert-success mt-15"
                  style="display: none;"
                >
                  <i class="fa fa-check"></i> {{ $t('rfp.thanks') }}
                </div>
                <div
                  id="formError"
                  class="alert alert-danger mt-15"
                  style="display: none;"
                >
                  <i class="fa fa-times"></i> {{ $t('rfp.error') }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
import PageTitle from '~/components/PageTitle.vue'
import Testimonials from '~/components/Testimonials.vue'
import Promobox from '~/components/Promobox.vue'

export default {
  components: {
    PageTitle,
    Testimonials,
    Promobox,
  },
  data() {
    return {
      metaTitle: this.$t('links.landlord'),
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
  mounted() {
    $('#getaudit').submit(function (e) {
      e.preventDefault()
      $('#formLoader').show()
      $.ajax({
        url: 'https://preprod.docem.ca/faq/RequestPresentation',
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
          content: `${config.siteUrl}/img/${this.$t(
            'meta.social.landlord'
          )}.jpg`,
        },
        {
          hid: 'twitter:image',
          property: 'og:image',
          content: `${config.siteUrl}/img/${this.$t(
            'meta.social.landlord'
          )}.jpg`,
        },
      ],
    }
  },
}
</script>
