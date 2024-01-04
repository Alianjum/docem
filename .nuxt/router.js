import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6372feea = () => interopDefault(import('../pages/agent.vue' /* webpackChunkName: "pages/agent" */))
const _4d461cc0 = () => interopDefault(import('../pages/associations_boards.vue' /* webpackChunkName: "pages/associations_boards" */))
const _01fb16e8 = () => interopDefault(import('../pages/brokerage.vue' /* webpackChunkName: "pages/brokerage" */))
const _f9517856 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _0388b7d8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4928b9ca = () => interopDefault(import('../pages/landlord.vue' /* webpackChunkName: "pages/landlord" */))
const _357215b3 = () => interopDefault(import('../pages/manager.vue' /* webpackChunkName: "pages/manager" */))
const _74ee4233 = () => interopDefault(import('../pages/privacy_policy.vue' /* webpackChunkName: "pages/privacy_policy" */))
const _6fc57dce = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _1177c714 = () => interopDefault(import('../pages/terms_of_services.vue' /* webpackChunkName: "pages/terms_of_services" */))
const _4fabbed4 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _ba302d6e = () => interopDefault(import('../pages/_lang/agent.vue' /* webpackChunkName: "pages/_lang/agent" */))
const _544135de = () => interopDefault(import('../pages/_lang/associations_boards.vue' /* webpackChunkName: "pages/_lang/associations_boards" */))
const _5f254e4a = () => interopDefault(import('../pages/_lang/brokerage.vue' /* webpackChunkName: "pages/_lang/brokerage" */))
const _6774e9e4 = () => interopDefault(import('../pages/_lang/contact.vue' /* webpackChunkName: "pages/_lang/contact" */))
const _5484b04c = () => interopDefault(import('../pages/_lang/landlord.vue' /* webpackChunkName: "pages/_lang/landlord" */))
const _675c46f1 = () => interopDefault(import('../pages/_lang/manager.vue' /* webpackChunkName: "pages/_lang/manager" */))
const _69e3cf35 = () => interopDefault(import('../pages/_lang/privacy_policy.vue' /* webpackChunkName: "pages/_lang/privacy_policy" */))
const _7b217450 = () => interopDefault(import('../pages/_lang/products.vue' /* webpackChunkName: "pages/_lang/products" */))
const _3c7c02d2 = () => interopDefault(import('../pages/_lang/terms_of_services.vue' /* webpackChunkName: "pages/_lang/terms_of_services" */))

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
    component: _6372feea,
    name: "agent___en"
  }, {
    path: "/associations_boards",
    component: _4d461cc0,
    name: "associations_boards___en"
  }, {
    path: "/brokerage",
    component: _01fb16e8,
    name: "brokerage___en"
  }, {
    path: "/contact-us",
    component: _f9517856,
    name: "contact-us___en"
  }, {
    path: "/fr",
    component: _0388b7d8,
    name: "index___fr"
  }, {
    path: "/landlord",
    component: _4928b9ca,
    name: "landlord___en"
  }, {
    path: "/manager",
    component: _357215b3,
    name: "manager___en"
  }, {
    path: "/privacy_policy",
    component: _74ee4233,
    name: "privacy_policy___en"
  }, {
    path: "/products",
    component: _6fc57dce,
    name: "products___en"
  }, {
    path: "/terms_of_services",
    component: _1177c714,
    name: "terms_of_services___en"
  }, {
    path: "/fr/agent",
    component: _6372feea,
    name: "agent___fr"
  }, {
    path: "/fr/associations_boards",
    component: _4d461cc0,
    name: "associations_boards___fr"
  }, {
    path: "/fr/brokerage",
    component: _01fb16e8,
    name: "brokerage___fr"
  }, {
    path: "/fr/contact-us",
    component: _f9517856,
    name: "contact-us___fr"
  }, {
    path: "/fr/landlord",
    component: _4928b9ca,
    name: "landlord___fr"
  }, {
    path: "/fr/manager",
    component: _357215b3,
    name: "manager___fr"
  }, {
    path: "/fr/privacy_policy",
    component: _74ee4233,
    name: "privacy_policy___fr"
  }, {
    path: "/fr/products",
    component: _6fc57dce,
    name: "products___fr"
  }, {
    path: "/fr/terms_of_services",
    component: _1177c714,
    name: "terms_of_services___fr"
  }, {
    path: "/",
    component: _0388b7d8,
    name: "index___en"
  }, {
    path: "/fr/:lang",
    component: _4fabbed4,
    name: "lang___fr"
  }, {
    path: "/fr/:lang/agent",
    component: _ba302d6e,
    name: "lang-agent___fr"
  }, {
    path: "/fr/:lang/associations_boards",
    component: _544135de,
    name: "lang-associations_boards___fr"
  }, {
    path: "/fr/:lang/brokerage",
    component: _5f254e4a,
    name: "lang-brokerage___fr"
  }, {
    path: "/fr/:lang/contact",
    component: _6774e9e4,
    name: "lang-contact___fr"
  }, {
    path: "/fr/:lang/landlord",
    component: _5484b04c,
    name: "lang-landlord___fr"
  }, {
    path: "/fr/:lang/manager",
    component: _675c46f1,
    name: "lang-manager___fr"
  }, {
    path: "/fr/:lang/privacy_policy",
    component: _69e3cf35,
    name: "lang-privacy_policy___fr"
  }, {
    path: "/fr/:lang/products",
    component: _7b217450,
    name: "lang-products___fr"
  }, {
    path: "/fr/:lang/terms_of_services",
    component: _3c7c02d2,
    name: "lang-terms_of_services___fr"
  }, {
    path: "/:lang",
    component: _4fabbed4,
    name: "lang___en"
  }, {
    path: "/:lang/agent",
    component: _ba302d6e,
    name: "lang-agent___en"
  }, {
    path: "/:lang/associations_boards",
    component: _544135de,
    name: "lang-associations_boards___en"
  }, {
    path: "/:lang/brokerage",
    component: _5f254e4a,
    name: "lang-brokerage___en"
  }, {
    path: "/:lang/contact",
    component: _6774e9e4,
    name: "lang-contact___en"
  }, {
    path: "/:lang/landlord",
    component: _5484b04c,
    name: "lang-landlord___en"
  }, {
    path: "/:lang/manager",
    component: _675c46f1,
    name: "lang-manager___en"
  }, {
    path: "/:lang/privacy_policy",
    component: _69e3cf35,
    name: "lang-privacy_policy___en"
  }, {
    path: "/:lang/products",
    component: _7b217450,
    name: "lang-products___en"
  }, {
    path: "/:lang/terms_of_services",
    component: _3c7c02d2,
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
