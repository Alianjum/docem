<template>
  <div>
    <!-- Page title -->
    <PageTitle class="parallax1">
      <template v-slot:title>
        {{ $t('links.brokerage') }}
      </template>
      <template v-slot:breadcrumb>
        <li>
          <NuxtLink :to="localePath('brokerages')">
            {{ $t('links.brokerage') }}
          </NuxtLink>
        </li>
      </template>
    </PageTitle>

    <!-- Video Section -->
    <section class="flat-row background-color">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="inner-box-about">
              <div class="title-box">
                <div class="title">
                  <span>{{ siteName }}</span> {{ $t('about.video.title') }}
                </div>
              </div>
              <p>
                {{ $t('about.brokerage.desc') }}
              </p>
              <div class="empty-space height30"></div>
              <div>
                <NuxtLink
                  v-if="!isOnAbout"
                  :to="isOnAgent ? '#subscription' : '#request_form_section'"
                  class="flat-button border-radius-small"
                >
                  {{ $t('links.BookaDemo') }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="video-thumbnail">
              <img
                v-if="$i18n.locale === 'en'"
                src="~assets/images/borkers-bg.jpg"
                alt="Video Thumbnail"
                width="100%"
                height="315"
              />
              <img
                v-else
                src="~assets/images/borkers-bg.jpg"
                alt="Video Thumbnail"
                width="100%"
                height="315"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <!-- <section class="flat-row flat-row-alt">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="inner-box-about">
                <div class="title-box">
                  <div class="title">
                    <span class="color-theme">{{ siteName }}</span>
                    {{ $t('benefits.title') }}
                  </div>
                  <p>{{ $t('benefits.desc') }}</p>
                </div>
                <p>{{ siteName }} {{ $t('benefits.listHead') }}</p>
                <br />
                <ul>
                  <li>{{ $t('benefits.list1') }}</li>
                  <li>{{ $t('benefits.list2') }}</li>
                  <li>{{ $t('benefits.list3') }}</li>
                  <li>{{ $t('benefits.list4') }}</li>
                  <li>{{ $t('benefits.list5') }}</li>
                  <li>{{ $t('benefits.list6') }}</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <img src="~assets/images/about.png" alt="Advanced Secure Sign" />
            </div>
          </div>
        </div>
      </section> -->

    <!-- Features -->
    <section class="flat-row brokerage-sol">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-section">
              <h1 class="title">
                {{ $t('features.brokerage.title') }}
              </h1>
              <div class="sub-title">
                {{ $t('features.brokerage.subTitle') }}
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-pencil-square-o"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box1.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box1.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box1.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div class="flex justify-center" style="margin-bottom: 17px">
                    <div class="custom-blue-bg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40"
                        width="30"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#ffffff"
                          d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box2.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box2.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box2.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-calendar"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box3.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box3.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box3.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div class="flex justify-center" style="margin-bottom: 17px">
                    <div class="custom-blue-bg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        width="40"
                        viewBox="0 0 576 512"
                      >
                        <path
                          d="M271.1 144.3l54.3 14.3a8.6 8.6 0 0 1 6.6 8.1c0 4.6-4.1 8.4-9.1 8.4h-35.6a30 30 0 0 1 -11.2-2.2c-5.2-2.2-11.3-1.7-15.3 2l-19 17.5a11.7 11.7 0 0 0 -2.3 2.7 11.4 11.4 0 0 0 3.9 15.7 83.8 83.8 0 0 0 34.5 11.5V240c0 8.8 7.8 16 17.4 16h17.4c9.6 0 17.4-7.2 17.4-16V222.4c32.9-3.6 57.8-31 53.5-63-3.2-23-22.5-41.3-46.6-47.7L282.7 97.4a8.6 8.6 0 0 1 -6.6-8.1c0-4.6 4.1-8.4 9.1-8.4h35.6A30 30 0 0 1 332 83.1c5.2 2.2 11.3 1.7 15.3-2l19-17.5A11.3 11.3 0 0 0 368.5 61a11.4 11.4 0 0 0 -3.8-15.8 83.8 83.8 0 0 0 -34.5-11.5V16c0-8.8-7.8-16-17.4-16H295.4C285.8 0 278 7.2 278 16V33.6c-32.9 3.6-57.9 31-53.5 63C227.6 119.6 247 137.9 271.1 144.3zM565.3 328.1c-11.8-10.7-30.2-10-42.6 0L430.3 402a63.6 63.6 0 0 1 -40 14H272a16 16 0 0 1 0-32h78.3c15.9 0 30.7-10.9 33.3-26.6a31.2 31.2 0 0 0 .5-5.5A32 32 0 0 0 352 320H192a117.7 117.7 0 0 0 -74.1 26.3L71.4 384H16A16 16 0 0 0 0 400v96a16 16 0 0 0 16 16H372.8a64 64 0 0 0 40-14L564 377a32 32 0 0 0 1.3-48.9z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box4.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box4.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box4.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-exchange"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box5.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box5.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box5.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-bar-chart"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box6.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box6.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box6.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div class="flex justify-center" style="margin-bottom: 17px">
                    <div class="custom-blue-bg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 100 125"
                        height="50"
                        width="100"
                        fill="#fff"
                      >
                        <defs>
                          <style>
                            .cls-1 {
                              fill-rule: evenodd;
                            }
                          </style>
                        </defs>
                        <path
                          class="cls-1"
                          d="M71.378,20.84,63.7,13.757v7l7.683.083Zm-.4-3.17H78.5l.011,32.577H75.1V21.923h0a1.021,1.021,0,0,0-.332-.756l-3.792-3.5Zm9.6,4.2h3.613a2.076,2.076,0,0,1,2.072,2.073V50.247h2.834a1.031,1.031,0,0,1,1.03,1.031v42.14a1.031,1.031,0,0,1-1.03,1.031H10.907a1.031,1.031,0,0,1-1.03-1.031V8.646a3.089,3.089,0,0,1,4.339-2.827l10.312,4.558H62.664a1.03,1.03,0,0,1,.746.319l5.329,4.913H78.5a2.076,2.076,0,0,1,2.072,2.073v4.186ZM84.2,50.247l-.011-26.318H80.574V50.247ZM46.553,44.481l-.968-5.37H65.257a1.031,1.031,0,0,0,0-2.061H45.214l-.968-5.37H65.257a1.031,1.031,0,0,0,0-2.061H43.874l-1.983-11a1.028,1.028,0,0,0-.609-.835L29.19,12.438H61.634v9.334h0A1.027,1.027,0,0,0,62.656,22.8l10.385.112V50.247H47.593l-.668-3.7H65.257a1.031,1.031,0,0,0,0-2.061Zm-1.851,1.3,1.023,5.674a1.026,1.026,0,0,0,1.01.845v0H88.062v40.08H11.938V8.646A1.024,1.024,0,0,1,13.387,7.7L39.955,19.448,44.7,45.785ZM75.17,76.5H26.592a4.047,4.047,0,0,0,0,8.094H75.17a4.047,4.047,0,0,0,0-8.094ZM26.592,74.435a6.108,6.108,0,0,0,0,12.216H75.17a6.108,6.108,0,0,0,0-12.216Zm53.655-6.2H59.281a1.031,1.031,0,0,0,0,2.061H80.247a1.031,1.031,0,0,0,0-2.061Zm-3.617-5.9H62.9a1.031,1.031,0,0,0,0,2.061H76.63a1.031,1.031,0,1,0,0-2.061Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box7.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box7.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box7.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div class="flex justify-center" style="margin-bottom: 17px">
                    <div class="custom-blue-bg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40"
                        width="30"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="#ffffff"
                          d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8V72zm0 64c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16zm256 304c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v16zm0-200v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box8.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box8.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box8.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-credit-card"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box9.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box9.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box9.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-bank"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box10.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box10.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box10.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-calculator" aria-hidden="true"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box11.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box11.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box11.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div class="flex justify-center" style="margin-bottom: 17px">
                    <div class="custom-blue-bg">
                      <svg
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                        height="40"
                        width="30"
                        viewBox="0 0 190 200"
                      >
                        <g>
                          <path
                            d="M122.901,0H19.699v192.287h152.889v-142.6L122.901,0z M146.981,45.299h-19.686V25.612L146.981,45.299z M34.699,177.287V15
		h77.596v37.799c0,4.142,3.357,7.5,7.5,7.5h37.793v116.988H34.699z"
                          />
                          <rect
                            x="53.141"
                            y="149.004"
                            width="86.006"
                            height="10"
                          />
                          <rect
                            x="53.141"
                            y="55.101"
                            width="51.058"
                            height="10"
                          />
                          <polygon
                            points="121.248,86.935 126.79,86.935 105.371,108.353 88.623,91.605 51.597,128.634 58.667,135.706 88.623,105.748 
		105.371,122.495 133.861,94.005 133.861,99.535 143.861,99.535 143.861,76.935 121.248,76.935 	"
                          />
                          <rect
                            x="53.141"
                            y="33.283"
                            width="51.058"
                            height="10"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box12.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box12.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box12.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-list-ul"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box13.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box13.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box13.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-book"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box14.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box14.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box14.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 products_row_3 display_feature">
            <div class="iconbox center circle large services-block-three">
              <a href="javascript:void(0)" class="service_block_a">
                <div class="box-header custom_icons">
                  <div><i class="fa fa-key"></i></div>
                  <div class="box-title">
                    {{ $t('features.brokerage.box15.title') }}
                  </div>
                </div>
                <div class="box-content">
                  <ul>
                    <li>{{ $t('features.brokerage.box15.list.list1') }}</li>
                    <li>{{ $t('features.brokerage.box15.list.list2') }}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Request For Proposal -->
    <Rfp pricing="150" footnote-alt2></Rfp>
    <!-- Promobox -->
    <Promobox></Promobox>
  </div>
</template>

<script>
// import $ from 'jquery'
import config from '~/data/siteConfig'
import PageTitle from '~/components/PageTitle.vue'
import Rfp from '~/components/Rfp.vue'
import VideoSection from '~/components/VideoSection.vue'
import Promobox from '~/components/Promobox.vue'

export default {
  components: {
    PageTitle,
    Rfp,
    Promobox,
    VideoSection,
  },

  data() {
    return {
      metaTitle: this.$t('links.brokerage'),
      metaDesc: this.$t('meta.desc.home'),
      siteName: config.siteTitle,
      selected: '0',
      customButtonText: 'Book a Demo',
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
            'meta.social.brokerage'
          )}.jpg`,
        },
        {
          hid: 'twitter:image',
          property: 'og:image',
          content: `${config.siteUrl}/img/${this.$t(
            'meta.social.brokerage'
          )}.jpg`,
        },
      ],
    }
  },
}
</script>

<style>
.custom-blue-bg {
  background-color: #00aeff;
  border-radius: 100px;
  font-size: 30px;
  width: 60px;
  height: 60px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
</style>
