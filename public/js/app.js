import * as  __SNOWPACK_HMR__ from '../_snowpack/hmr-client.js';
import.meta.hot = __SNOWPACK_HMR__.createHotContext(import.meta.url);
import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;


import { App, plugin } from '../_snowpack/pkg/@inertiajs.inertia-vue3.v0.4.0.js'
import { InertiaProgress } from '../_snowpack/pkg/@inertiajs.progress.v0.2.5.js'
import { createApp, h } from '../_snowpack/pkg/vue.v3.0.11.js'

const el = document.getElementById('app')

const vueApp = createApp({
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => import(`./Pages/${name}.vue.js`).then(module => module.default),
  })
}).use(plugin).mount(el)

InertiaProgress.init()

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
      vueApp.$destroy();
  });
}
