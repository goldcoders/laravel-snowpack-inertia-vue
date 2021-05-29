
import { App, plugin } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import { createApp, h } from 'vue'

const el = document.getElementById('app')

const vueApp = createApp({
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => import(`./Pages/${name}.vue.js`).then(module => module.default),
  })
}).use(plugin).mount(el)

InertiaProgress.init()

if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
      vueApp.$destroy(); });