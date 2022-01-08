// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/assets/css/main.css')
require('~/assets/css/noscript.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'landing' }

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}