import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { createApp, h } from 'vue';

const el = document.getElementById('app');

const vueApp = createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`./Pages/${name}.vue.js`).then(module => module.default),
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });
if(import.meta.hot){
  import.meta.hot.accept();
  import.meta.hot.dispose(()=> {
    vueApp.$forceUpdate;
  })
}
