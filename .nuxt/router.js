import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a6048f6e = () => interopDefault(import('..\\pages\\agent.vue' /* webpackChunkName: "pages/agent" */))
const _0080c4de = () => interopDefault(import('..\\pages\\associations_boards.vue' /* webpackChunkName: "pages/associations_boards" */))
const _8888c56c = () => interopDefault(import('..\\pages\\brokerage.vue' /* webpackChunkName: "pages/brokerage" */))
const _5dc332d7 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _3b8020d4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _172efd68 = () => interopDefault(import('..\\pages\\landlord.vue' /* webpackChunkName: "pages/landlord" */))
const _433a55f1 = () => interopDefault(import('..\\pages\\manager.vue' /* webpackChunkName: "pages/manager" */))
const _49e6e035 = () => interopDefault(import('..\\pages\\privacy_policy.vue' /* webpackChunkName: "pages/privacy_policy" */))
const _1b054550 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _7d595c5c = () => interopDefault(import('..\\pages\\terms_of_services.vue' /* webpackChunkName: "pages/terms_of_services" */))
const _8e57995e = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _f8dc07f8 = () => interopDefault(import('..\\pages\\_lang\\agent.vue' /* webpackChunkName: "pages/_lang/agent" */))
const _57ab354e = () => interopDefault(import('..\\pages\\_lang\\associations_boards.vue' /* webpackChunkName: "pages/_lang/associations_boards" */))
const _3a7ce8f6 = () => interopDefault(import('..\\pages\\_lang\\brokerage.vue' /* webpackChunkName: "pages/_lang/brokerage" */))
const _74358c42 = () => interopDefault(import('..\\pages\\_lang\\contact.vue' /* webpackChunkName: "pages/_lang/contact" */))
const _77c3409e = () => interopDefault(import('..\\pages\\_lang\\landlord.vue' /* webpackChunkName: "pages/_lang/landlord" */))
const _7466d228 = () => interopDefault(import('..\\pages\\_lang\\manager.vue' /* webpackChunkName: "pages/_lang/manager" */))
const _44139eda = () => interopDefault(import('..\\pages\\_lang\\privacy_policy.vue' /* webpackChunkName: "pages/_lang/privacy_policy" */))
const _2a89b896 = () => interopDefault(import('..\\pages\\_lang\\products.vue' /* webpackChunkName: "pages/_lang/products" */))
const _435e55e6 = () => interopDefault(import('..\\pages\\_lang\\terms_of_services.vue' /* webpackChunkName: "pages/_lang/terms_of_services" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/agent",
    component: _a6048f6e,
    name: "agent___en"
  }, {
    path: "/associations_boards",
    component: _0080c4de,
    name: "associations_boards___en"
  }, {
    path: "/brokerage",
    component: _8888c56c,
    name: "brokerage___en"
  }, {
    path: "/contact-us",
    component: _5dc332d7,
    name: "contact-us___en"
  }, {
    path: "/fr",
    component: _3b8020d4,
    name: "index___fr"
  }, {
    path: "/landlord",
    component: _172efd68,
    name: "landlord___en"
  }, {
    path: "/manager",
    component: _433a55f1,
    name: "manager___en"
  }, {
    path: "/privacy_policy",
    component: _49e6e035,
    name: "privacy_policy___en"
  }, {
    path: "/products",
    component: _1b054550,
    name: "products___en"
  }, {
    path: "/terms_of_services",
    component: _7d595c5c,
    name: "terms_of_services___en"
  }, {
    path: "/fr/agent",
    component: _a6048f6e,
    name: "agent___fr"
  }, {
    path: "/fr/associations_boards",
    component: _0080c4de,
    name: "associations_boards___fr"
  }, {
    path: "/fr/brokerage",
    component: _8888c56c,
    name: "brokerage___fr"
  }, {
    path: "/fr/contact-us",
    component: _5dc332d7,
    name: "contact-us___fr"
  }, {
    path: "/fr/landlord",
    component: _172efd68,
    name: "landlord___fr"
  }, {
    path: "/fr/manager",
    component: _433a55f1,
    name: "manager___fr"
  }, {
    path: "/fr/privacy_policy",
    component: _49e6e035,
    name: "privacy_policy___fr"
  }, {
    path: "/fr/products",
    component: _1b054550,
    name: "products___fr"
  }, {
    path: "/fr/terms_of_services",
    component: _7d595c5c,
    name: "terms_of_services___fr"
  }, {
    path: "/",
    component: _3b8020d4,
    name: "index___en"
  }, {
    path: "/fr/:lang",
    component: _8e57995e,
    name: "lang___fr"
  }, {
    path: "/fr/:lang/agent",
    component: _f8dc07f8,
    name: "lang-agent___fr"
  }, {
    path: "/fr/:lang/associations_boards",
    component: _57ab354e,
    name: "lang-associations_boards___fr"
  }, {
    path: "/fr/:lang/brokerage",
    component: _3a7ce8f6,
    name: "lang-brokerage___fr"
  }, {
    path: "/fr/:lang/contact",
    component: _74358c42,
    name: "lang-contact___fr"
  }, {
    path: "/fr/:lang/landlord",
    component: _77c3409e,
    name: "lang-landlord___fr"
  }, {
    path: "/fr/:lang/manager",
    component: _7466d228,
    name: "lang-manager___fr"
  }, {
    path: "/fr/:lang/privacy_policy",
    component: _44139eda,
    name: "lang-privacy_policy___fr"
  }, {
    path: "/fr/:lang/products",
    component: _2a89b896,
    name: "lang-products___fr"
  }, {
    path: "/fr/:lang/terms_of_services",
    component: _435e55e6,
    name: "lang-terms_of_services___fr"
  }, {
    path: "/:lang",
    component: _8e57995e,
    name: "lang___en"
  }, {
    path: "/:lang/agent",
    component: _f8dc07f8,
    name: "lang-agent___en"
  }, {
    path: "/:lang/associations_boards",
    component: _57ab354e,
    name: "lang-associations_boards___en"
  }, {
    path: "/:lang/brokerage",
    component: _3a7ce8f6,
    name: "lang-brokerage___en"
  }, {
    path: "/:lang/contact",
    component: _74358c42,
    name: "lang-contact___en"
  }, {
    path: "/:lang/landlord",
    component: _77c3409e,
    name: "lang-landlord___en"
  }, {
    path: "/:lang/manager",
    component: _7466d228,
    name: "lang-manager___en"
  }, {
    path: "/:lang/privacy_policy",
    component: _44139eda,
    name: "lang-privacy_policy___en"
  }, {
    path: "/:lang/products",
    component: _2a89b896,
    name: "lang-products___en"
  }, {
    path: "/:lang/terms_of_services",
    component: _435e55e6,
    name: "lang-terms_of_services___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
