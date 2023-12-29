<template>
  <section class="flat-row row-getaudit background-black">
    <div class="overlay"></div>
    <div class="row-overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-section color-white">
            <h1 class="title">{{ $t('rfp.title') }}</h1>
            <div class="sub-title mb-15">
              <p>{{ $t('rfp.desc') }}</p>
            </div>
            <h2 class="mb-15">
              {{ $t('rfp.starting') }}
              <span class="label label-theme">
                <span v-if="$i18n.locale == 'fr'">{{ pricing }} $</span>
                <span v-else>${{ pricing }}</span>
              </span>
            </h2>
            <div class="sub-title color-label">
              <span v-if="footnote"> * {{ $t('rfp.footnote') }} </span>
              <span v-if="footnoteAlt"> * {{ $t('rfp.footnoteAlt') }} </span>
              <span v-if="footnoteAlt2"> * {{ $t('rfp.footnoteAlt2') }} </span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-md-push-3">
          <div class="flat-padl30">
            <form
              id="getaudit"
              action="https://preprod.docem.ca/faq/RequestPresentation"
              method="post"
              class="getautdit"
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
                  id="astname"
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

              <p class="website" style="width: 100%;">
                <label for="website">{{ $t('rfp.formWebsite') }}</label>
                <input id="website" name="Website" type="text" />
              </p>

              <p class="form-submit" style="width: 100%;">
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
</template>

<script>
import $ from 'jquery'

export default {
  props: {
    pricing: {
      type: String,
      default: '29.99',
    },
    footnote: {
      type: Boolean,
    },
    footnoteAlt: {
      type: Boolean,
    },
    footnoteAlt2: {
      type: Boolean,
    },
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
}
</script>
