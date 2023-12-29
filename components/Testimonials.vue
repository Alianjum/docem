<template>
  <!-- Testimonials -->
  <section class="flat-row parallax parallax5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-section color-white">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <h1 class="title">{{ $t('testimonials.title') }}</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div
            class="flat-testimonials owl-carousel owl-theme"
            data-item="2"
            data-nav="false"
            data-dots="true"
            data-auto="true"
          >
            <div class="testimonials style5">
              <div class="message">
                <blockquote class="whisper">
                  {{ $t('testimonials.brokerage.testimonial1.comment') }}
                </blockquote>
              </div>
              <div class="avatar">
                <div class="name">
                  <span>{{
                    $t('testimonials.brokerage.testimonial1.name')
                  }}</span>
                </div>
                <div class="position">
                  {{ $t('testimonials.brokerage.testimonial1.company') }}
                </div>
              </div>
            </div>

            <div class="testimonials style5">
              <div class="message">
                <blockquote class="whisper">
                  {{ $t('testimonials.brokerage.testimonial2.comment') }}
                </blockquote>
              </div>
              <div class="avatar">
                <div class="name">
                  <span>{{
                    $t('testimonials.brokerage.testimonial2.name')
                  }}</span>
                </div>
                <div class="position">
                  {{ $t('testimonials.brokerage.testimonial2.company') }}
                </div>
              </div>
            </div>

            <div class="testimonials style5">
              <div class="message">
                <blockquote class="whisper">
                  {{ $t('testimonials.brokerage.testimonial3.comment') }}
                </blockquote>
              </div>
              <div class="avatar">
                <div class="name">
                  <span>{{
                    $t('testimonials.brokerage.testimonial3.name')
                  }}</span>
                </div>
                <div class="position">
                  {{ $t('testimonials.brokerage.testimonial3.company') }}
                </div>
              </div>
            </div>

            <div class="testimonials style5">
              <div class="message">
                <blockquote class="whisper">
                  {{ $t('testimonials.agent.testimonial1.comment') }}
                </blockquote>
              </div>
              <div class="avatar">
                <div class="name">
                  <span>{{ $t('testimonials.agent.testimonial1.name') }}</span>
                </div>
                <div class="position">
                  {{ $t('testimonials.agent.testimonial1.company') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'

export default {
  mounted() {
    $('#owlslider').remove()
    const script = document.createElement('script')
    script.id = 'slider'
    script.type = 'text/javascript'
    script.src = '/javascript/owlslider.js'
    document.body.appendChild(script)
  },
}
</script>
