import * as vue from '/_snowpack/pkg/vue.v3.0.11.js';

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue);

export { require$$0 as r };
