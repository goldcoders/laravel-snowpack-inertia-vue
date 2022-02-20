import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { createApp, h } from 'vue';
const el = document.getElementById('app');

const app = createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
           resolveComponent: name => {
               const pages = import.meta.glob('./Pages/**/*.vue')
               return pages[`./Pages/${name}.vue`]().then(module => module.default)
           },
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if(import.meta.hot){
    import.meta.hot.accept();
    import.meta.hot.dispose(()=> {
    //   app.$forceUpdate;
    app.$destroy();
    })
  }
