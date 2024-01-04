<template>
  <div class="top">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="topinfo">
            <div class="flat-language">
              <ul class="unstyled">
                <li class="current">
                  <NuxtLink
                    v-if="$i18n.locale === 'fr'"
                    :to="switchLocalePath('en')"
                    class="Header__Link"
                    active-class="none"
                    exact
                  >
                    {{ $t('lang.french') }}
                  </NuxtLink>
                  <NuxtLink
                    v-else
                    :to="switchLocalePath('fr')"
                    class="Header__Link"
                    active-class="none"
                    exact
                  >
                    {{ $t('lang.english') }}
                  </NuxtLink>
                  <ul class="unstyled">
                    <li v-if="$i18n.locale === 'fr'" class="en">
                      <NuxtLink
                        :to="switchLocalePath('en')"
                        active-class="none"
                      >
                        {{ $t('lang.english') }}
                      </NuxtLink>
                    </li>
                    <li v-else class="fr">
                      <NuxtLink
                        :to="switchLocalePath('fr')"
                        active-class="none"
                      >
                        {{ $t('lang.french') }}
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul class="flat-information">
              <li class="phone">
                <a href="tel:1-888-896-4980">1.888.896.4980</a>
              </li>
            </ul>
            <div class="flat-analysis">
              <div class="flat-language">
                <ul class="unstyled"> 
                  <li class="current">
                    <span class="login"
                      ><i class="icon-login"></i> {{ $t('links.portal') }}</span
                    >
                    <ul class="unstyled province">
                      <li>
                        <a href="https://ca.docem.net" target="_blank">{{
                          $t('province.ca')
                        }}</a>
                      </li>
                      <li>
                        <a href="https://qc.docem.net" target="_blank">{{
                          $t('province.qc')
                        }}</a>
                      </li>
                      <li>
                        <a href="https://ca.docem.net" target="_blank">{{
                          $t('province.us')
                        }}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
