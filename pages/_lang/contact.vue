<template>
  <div>
    <!-- Page title -->
    <PageTitle class="parallax6">
      <template v-slot:title>
        {{ $t('links.contact') }}
      </template>
      <template v-slot:breadcrumb>
        <li>
          <NuxtLink :to="localePath('contact-us')">
            {{ $t('links.contact') }}
          </NuxtLink>
        </li>
      </template>
    </PageTitle>

    
    <section class="flat-row">
      <div class="container">
        <div class="contact_form_main">
          <div class="contact_form_inner">
            <div class="title-box">
              <div class="title">{{ $t('contact.form.title') }}</div>
            </div>

            <form
              id="contactform"
              class="flat-contact-form style2 bg-dark height-small"
              method="post"
              action="https://preprod.docem.ca/faq/ContactUs"
            >
              <div class="field clearfix">
                <div class="wrap-type-input">
                  <div class="input-wrap firstname">
                    <label>{{ $t('contact.form.formName') }} *</label>
                    <input
                      id="firstname"
                      name="Firstname"
                      type="text"
                      value=""
                      aria-required="true"
                      required="required"
                    />
                  </div>
                  <div class="input-wrap lastname">
                    <label>{{ $t('contact.form.formLastname') }} *</label>
                    <input
                      id="lastname"
                      name="Lastname"
                      type="text"
                      value=""
                      aria-required="true"
                      required="required"
                    />
                  </div>
                  <div class="input-wrap phone">
                    <label>{{ $t('contact.form.formPhone') }} *</label>
                    <input
                      id="phone"
                      name="Phone"
                      type="text"
                      value=""
                      aria-required="true"
                      required="required"
                    />
                  </div>
                  <div class="input-wrap email">
                    <label>{{ $t('contact.form.formEmail') }} *</label>
                    <input
                      id="email"
                      name="Email"
                      type="email"
                      value=""
                      aria-required="true"
                      required="required"
                    />
                  </div>
                </div>
                <div class="textarea-wrap">
                  <label>{{ $t('contact.form.formMessage') }} *</label>
                  <textarea
                    id="message-contact"
                    class="type-input"
                    tabindex="3"
                    name="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="submit-wrap">
                <button class="flat-button bg-theme">
                  <i
                    id="formLoader"
                    class="fa fa-spin fa-spinner mr-10"
                    style="display: none;"
                  ></i>
                  {{ $t('contact.form.formSubmit') }}
                </button>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-form py-5 bg-light-grey1">
      <div class="container">
        <div class="align-items-center all_map_max">
          <div class="title-box">
            <div class="title">{{ $t('contact.locations.title') }}</div>
          </div>
          <div class="all_div_map">
            <div class="main_div_map">
              <h2><strong>Toronto:</strong></h2>
              <p class="mb-15">{{ $t('contact.locations.toronto') }}</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2777858823947!2d-79.37645268450262!3d43.64238857912159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2bdf8071a5%3A0x47826b6b0bee317d!2s1%20Yonge%20St%20%231801%2C%20Toronto%2C%20ON%20M5E%201W7!5e0!3m2!1sen!2sca!4v1588787851646!5m2!1sen!2sca"
                width="100%"
                height="200"
                frameborder="0"
                style="border: 0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div class="main_div_map">
              <h2><strong>Montreal:</strong></h2>
              <p class="mb-15">{{ $t('contact.locations.montreal') }}</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.369966294342!2d-73.57575678444125!3d45.50263057910144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a46bbdc2c3b%3A0xcba902843e2cf209!2s2000%20McGill%20College%20Ave%20%23600%2C%20Montreal%2C%20QC%20H3A%203H3!5e0!3m2!1sen!2sca!4v1588869412683!5m2!1sen!2sca"
                width="100%"
                height="200"
                frameborder="0"
                style="border: 0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Info -->
    <section class="flat-row row-nopading contact_us_box_above" style="margin-left: 45%;">
      <div class="container">
        <div class="row">
          <div class="flat-on-four">
            <div class="flat-contact-info text-center">
              <i class="icon-call-in icons"></i>
              <h4 class="color-theme">{{ $t('contact.toll') }}</h4>
              <h6 class="text-gray">
                <a href="tel:1-888-896-4980">1.888.896.4980</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
  </div>
</template>

<script>
import $ from 'jquery'
import config from '~/data/siteConfig'
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      metaTitle: this.$t('links.contact'),
      metaDesc: this.$t('meta.desc.home'),
      siteName: config.siteTitle,
    }
  },
  mounted() {
    $('#contactform').submit(function (e) {
      e.preventDefault()
      $('#formLoader').show()
      $.ajax({
        url: 'https://preprod.docem.ca/faq/ContactUs',
        type: 'post',
        data: $('#contactform').serialize(),
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
