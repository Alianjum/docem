import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_workbox_29224fe0 from 'nuxt_plugin_workbox_29224fe0' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_6e5871d4 from 'nuxt_plugin_nuxticons_6e5871d4' // Source: .\\nuxt-icons.js (mode: 'all')
import nuxt_plugin_pluginutils_170344fa from 'nuxt_plugin_pluginutils_170344fa' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_4637a264 from 'nuxt_plugin_pluginseo_4637a264' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_19467bc5 from 'nuxt_plugin_pluginrouting_19467bc5' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_7b308dca from 'nuxt_plugin_pluginmain_7b308dca' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_googleanalytics_6191f09c from 'nuxt_plugin_googleanalytics_6191f09c' // Source: .\\google-analytics.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"DocEM","titleTemplate":"%s - DocEM","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, shrink-to-fit=no"},{"http-equiv":"x-ua-compatible","content":"ie=edge"},{"hid":"description","name":"description","content":"DocEM owned and powered by BACC. A leading edge real estate platform for brokers, agents, property managers, landlords and tenants. DocEM is more than a software but a growing community. We are continuing to innovate, reaching wider and further."},{"hid":"twitter:card","name":"twitter:card","content":"summary"},{"hid":"twitter:title","name":"twitter:title","content":"DocEM"},{"hid":"twitter:description","name":"twitter:description","content":"DocEM owned and powered by BACC. A leading edge real estate platform for brokers, agents, property managers, landlords and tenants. DocEM is more than a software but a growing community. We are continuing to innovate, reaching wider and further."},{"hid":"twitter:image","name":"twitter:image","content":"http:\u002F\u002Fwww.docem.ca\u002Ficon.png"},{"hid":"og:title","property":"og:title","content":"DocEM"},{"hid":"og:site_name","property":"og:site_name","content":"DocEM"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:image","property":"og:image","content":"http:\u002F\u002Fwww.docem.ca\u002Ficon.png"},{"hid":"og:description","property":"og:description","content":"DocEM owned and powered by BACC. A leading edge real estate platform for brokers, agents, property managers, landlords and tenants. DocEM is more than a software but a growing community. We are continuing to innovate, reaching wider and further."},{"name":"msapplication-config","content":"\u002Fbrowserconfig.xml"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"DocEM"},{"hid":"theme-color","name":"theme-color","content":"#00aeff"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"sitemap","type":"application\u002Fxml","href":"\u002Fsitemap.xml"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fstyles\u002Fstyle.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fstyles\u002Fresponsive.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fstyles\u002Fanimate.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.ad0f12b5.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.7faae5.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.7faae5.png","sizes":"512x512"}],"script":[{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.5.1.min.js","integrity":"sha256-9\u002FaliU8dGd2tb6OSsuzixeV4y\u002FfaTqgFtohetphbbj0=","crossorigin":"anonymous","type":"text\u002Fjavascript"},{"src":"\u002Fjavascript\u002Fjquery.easing.js","body":true,"type":"text\u002Fjavascript"},{"src":"\u002Fjavascript\u002Fparallax.js","body":true,"type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002FOwlCarousel2\u002F2.3.4\u002Fowl.carousel.min.js","body":true,"type":"text\u002Fjavascript"},{"src":"\u002Fjavascript\u002Fjquery.themepunch.tools.min.js","body":true,"type":"text\u002Fjavascript"},{"src":"\u002Fjavascript\u002Fjquery.themepunch.revolution.min.js","body":true,"type":"text\u002Fjavascript"}],"style":[],"htmlAttrs":{"lang":"en"}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_29224fe0 === 'function') {
    await nuxt_plugin_workbox_29224fe0(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_6e5871d4 === 'function') {
    await nuxt_plugin_nuxticons_6e5871d4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_170344fa === 'function') {
    await nuxt_plugin_pluginutils_170344fa(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_4637a264 === 'function') {
    await nuxt_plugin_pluginseo_4637a264(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_19467bc5 === 'function') {
    await nuxt_plugin_pluginrouting_19467bc5(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_7b308dca === 'function') {
    await nuxt_plugin_pluginmain_7b308dca(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_6191f09c === 'function') {
    await nuxt_plugin_googleanalytics_6191f09c(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
