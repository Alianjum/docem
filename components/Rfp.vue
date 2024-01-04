<template>
  <section
    id="request_form_section"
    class="flat-row row-getaudit background-black"
  >
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
            <h2 class="mb-15" v-if="!isAssociationsBoardsPage">
              {{ $t('rfp.starting') }}
              <span class="label label-theme">
                <span v-if="$i18n.locale == 'fr'">{{ pricing }} $</span>
                <span v-else>${{ pricing }}</span>
              </span>
            </h2>
          </div>
        </div>
        <div class="col-md-6 col-md-push-3">
          <div class="form_main_">
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
              <p v-if="!isBrokerage" class="independentCheck" style="width: 100%;">
                <input
                  id="independentCheck"
                  name="independentCheck"
                  type="checkbox"
                />
                <label for="independentCheck">
                  {{ $t('rfp.independentCheck') }}
                </label>
              </p>

              <p class="website" style="width: 100%;">
                <label for="website">{{ $t('rfp.formWebsite') }}</label>
                <input id="website" name="Website" type="text" />
              </p>

              <p class="comment" style="width: 100%;">
                <label for="comment">{{ $t('rfp.formcomment') }}</label>
                <input id="comment" name="comment" type="text" />
              </p>
              <!-- reCAPTCHA widget -->
              <div class="g-recaptcha" data-sitekey="6LcD6e0bAAAAAPU6CXbnX2U58lMdSBg0bxyXyVyq"></div>
              <p class="form-submit btn_rpf_sbmt_main" style="width: 100%;">
                <button name="submit" type="submit" class="btn_rpf_sbmt">
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
  data() {
    return {
      isBrokerage: false,
      isAssociationsBoardsPage: false,
      removeAstrik: false,
    };
  },
  mounted() {
    this.isBrokerage = window.location.href.includes('brokerage') || window.location.href.includes('associations_boards');
    this.isAssociationsBoardsPage = window.location.href.includes('associations_boards');
    this.removeAstrik = window.location.href.includes('brokerage') || window.location.href.includes('associations_boards');

    // Dynamically load the reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize reCAPTCHA once the script has loaded
      grecaptcha.render('recaptcha-container', {
        sitekey: 'YOUR_RECAPTCHA_SITE_KEY',
        callback: this.onRecaptchaVerified,
        'expired-callback': this.onRecaptchaExpired,
      });
    };

    // Add your existing form submission logic
    $('#getaudit').submit((e) => {
      e.preventDefault();

      // Check if reCAPTCHA is completed
      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
        alert('Please check the reCAPTCHA to prove you are not a robot.');
        return; // Stop the form submission
      }

      $('#formLoader').show();

      $.ajax({
        url: 'https://preprod.docem.ca/faq/RequestPresentation',
        type: 'post',
        data: {
          ...$('#getaudit').serialize(),
          recaptchaResponse,
        },
        success() {
          $('#formThanks').show();
          $('#formLoader').hide();
        },
        error(msg) {
          if (msg.Success) {
            $('#formThanks').show();
            $('#formLoader').hide();
          } else {
            $('#formError').show();
            $('#formLoader').hide();
          }
        },
      });
    });
  },
  methods: {
    onRecaptchaVerified(response) {
      // Handle reCAPTCHA verification
      console.log('Recaptcha verified:', response);
    },
    onRecaptchaExpired() {
      // Handle reCAPTCHA expiration
      console.log('Recaptcha expired');
    },
  },
};
</script>