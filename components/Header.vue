<template>
  <div class="container">
    <div class="row">
      <div class="header-wrap clearfix">
        <div class="col-md-3">
          <div id="logo" class="logo">
            <NuxtLink :to="localePath('index')" exact>
              <img src="~assets/images/logo.png" alt="Docem Logo" />
            </NuxtLink>
          </div>
          <!-- /.logo -->
          <div class="btn-menu">
            <span></span>
          </div>
          <!-- //mobile menu button -->
        </div>
        <div class="col-md-9">
          <div class="nav-wrap">
            <!-- <ul class="menu menu-extra">
                <li class="cart">
                  <a href="#"><i class="fa fa-search"></i></a>
                </li>
              </ul> -->
            <nav id="mainnav" class="mainnav">
              <ul class="menu">
                <li>
                  <NuxtLink :to="localePath('index')">
                    {{ $t('links.home') }}
                  </NuxtLink>
                </li>
                <li @mouseenter="openDropdown" @mouseleave="closeDropdown">
                  <NuxtLink :to="localePath('products')">
                    {{ $t('links.products') }}
                  </NuxtLink>
                  <ul v-if="isDropdownOpen" class="dropdown-content">
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.eForm_and_eSignature') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Showing_Requests') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Transaction_management') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Integrated_with_MLS') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Accounting') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Tax_Report') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Electronic_Document_Management') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Reporting') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Online_Payments') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Direct_Deposit') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Invoicing') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Restricted_Access') }}
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('products')">
                        {{ $t('links.Ledgers') }}
                      </NuxtLink>
                    </li>
                  </ul>
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
              <!-- /.menu -->
            </nav>
            <!-- /.mainnav -->
          </div>
          <!-- /.nav-wrap -->
        </div>
      </div>
      <!-- /.header-inner -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
import $ from 'jquery'
import config from '~/data/siteConfig'

export default {
  data() {
    return {
      siteName: config.siteTitle,
    }
  },
  mounted() {
    // Mobile Nav
    let menuType = 'desktop'
    $(window).on('load resize', function () {
      let currMenuType = 'desktop'

      if (matchMedia('only screen and (max-width: 991px)').matches) {
        currMenuType = 'mobile'
      }

      if (currMenuType !== menuType) {
        menuType = currMenuType

        if (currMenuType === 'mobile') {
          const $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide()
          const hasChildMenu = $('#mainnav-mobi').find('li:has(ul)')

          $('#header').after($mobileMenu)
          hasChildMenu.children('ul').hide()
          hasChildMenu.children('a').after('<span class="btn-submenu"></span>')
          $('.btn-menu').removeClass('active')
        } else {
          const $desktopMenu = $('#mainnav-mobi')
            .attr('id', 'mainnav')
            .removeAttr('style')

          $desktopMenu.find('.submenu').removeAttr('style')
          $('#header').find('.nav-wrap').append($desktopMenu)
          $('.btn-submenu').remove()
        }
      }
    })

    $(document).on('click', '.btn-menu', function () {
      $('#mainnav-mobi').slideToggle(300)
      $(this).toggleClass('active')
      return false
    })

    $(document).on('click', '#mainnav-mobi li .btn-submenu', function (e) {
      $(this).toggleClass('active').next('ul').slideToggle(300)
      e.stopImmediatePropagation()
      return false
    })

    // Fixed Nav
    const nav = $('.header')
    if (nav.size() !== 0) {
      const offsetTop = $('.header').offset().top
      const headerHeight = $('.header').height()
      const injectSpace = $('<div />', { height: headerHeight }).insertAfter(
        nav
      )
      injectSpace.hide()

      $(window).on('load scroll', function () {
        if ($(window).scrollTop() > offsetTop + 120) {
          $('.header').addClass('downscrolled')
          injectSpace.show()
        } else {
          $('.header').removeClass('header-small downscrolled')
          injectSpace.hide()
        }

        if ($(window).scrollTop() > 500) {
          $('.header').addClass('header-small upscrolled')
        } else {
          $('.header').removeClass('upscrolled')
        }
      })
    }
  },
}
</script>
<script>
export default {
  data() {
    return {
      isDropdownOpen: true,
    }
  },
  methods: {
    openDropdown() {
      this.isDropdownOpen = true
    },
    closeDropdown() {
      this.isDropdownOpen = true
    },
  },
}
</script>
<style>
.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.dropdown-content a {
  font-weight: 600;
  color: #424242 !important;
  text-transform: uppercase;
  font-size: 14px !important;
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
/* Show the dropdown content when hovering over the dropdown button */
.menu li:hover .dropdown-content {
  display: block;
}
</style>
