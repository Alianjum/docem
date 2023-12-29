<template>
  <footer class="footer">
    <div class="footer-widgets">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="widget widget-brand">
              <div class="logo logo-footer">
                <NuxtLink :to="localePath('index')">
                  <img src="~assets/images/logo-footer.png" alt="Docem Logo" />
                </NuxtLink>
              </div>
              <p>
                {{ $t('footer.desc') }}
              </p>
            </div>
          </div>

          <div class="col-md-5">
            <div class="widget widget-services clearfix">
              <h5 class="widget-title">{{ $t('footer.quickLinks') }}</h5>
              <ul class="one-half">
                <li>
                  <NuxtLink :to="localePath('index')">
                    {{ $t('links.home') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('associations_boards')">
                    {{ $t('links.association_boards') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('brokerage')">
                    {{ $t('links.brokerage') }}
                  </NuxtLink>
                </li>
              </ul>

              <ul class="one-half">
                <li>
                  <NuxtLink :to="localePath('agent')">
                    {{ $t('links.agent') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('manager')">
                    {{ $t('links.manager') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('contact-us')">
                    {{ $t('links.contact') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-3">
            <div class="widget widget-social">
              <h5 class="widget-title">{{ $t('footer.followUs') }}</h5>
              <div class="social-list">
                <a href="https://www.facebook.com/docembacc" target="_blank"
                  ><i class="fa fa-facebook"></i
                ></a>
                <a
                  href="https://www.linkedin.com/company/bacc-inc"
                  target="_blank"
                  ><i class="fa fa-linkedin"></i
                ></a>
                <a href="https://www.instagram.com/_docem_/" target="_blank"
                  ><i class="fa fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-md-12">
            <div class="copyright">
              <p>
                {{ $t('footer.copyright') }}
                <a href="http://baccs.ca/" target="_blank"
                  >{{ $t('footer.poweredBy') }} BACC</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import config from '~/data/siteConfig'

export default {
  data() {
    return {
      siteName: config.siteTitle,
    }
  },
}
</script>
