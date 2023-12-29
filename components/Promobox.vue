<template>
  <section class="flat-row background-theme row-promobox contact_bar_sec">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="flat-promobox style1 color-white">
            <div class="promobox-group-content">
              <h3>
                <span>{{ $t('promobox.title') }}</span>
              </h3>
              <p>{{ $t('promobox.desc') }}</p>
            </div>
            <div class="promobox-group-btn">
              <NuxtLink
                :to="localePath('contact-us')"
                class="flat-button medium button-color button-radius white"
              >
                {{ $t('links.contact') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
