import { warn, initCustomFormatter } from '/_snowpack/pkg/@vue.runtime-dom.v3.0.11.js';
export * from '/_snowpack/pkg/@vue.runtime-dom.v3.0.11.js';

function initDev() {
    {
        initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
{
    initDev();
}
const compile = () => {
    {
        warn(`Runtime compilation is not supported in this build of Vue.` +
            (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                ) /* should not happen */);
    }
};

export { compile };
