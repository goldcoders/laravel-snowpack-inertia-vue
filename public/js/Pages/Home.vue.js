
import { Popover, PopoverButton, PopoverPanel } from '../../_snowpack/pkg/@headlessui.vue.v1.2.0.js'
import { MenuIcon, XIcon } from '../../_snowpack/pkg/@heroicons.vue.outline.v1.0.1.js'
import { ChevronRightIcon } from '../../_snowpack/pkg/@heroicons.vue.solid.v1.0.1.js'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const defaultExport = {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronRightIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    }
  },
}

import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, resolveComponent as _resolveComponent, withCtx as _withCtx, renderList as _renderList, Fragment as _Fragment, toDisplayString as _toDisplayString, Transition as _Transition, createTextVNode as _createTextVNode, createStaticVNode as _createStaticVNode } from "../../_snowpack/pkg/vue.v3.0.11.js"

const _hoisted_1 = { class: "relative bg-gray-800 overflow-hidden" }
const _hoisted_2 = /*#__PURE__*/_createVNode("div", {
  class: "hidden sm:block sm:absolute sm:inset-0",
  "aria-hidden": "true"
}, [
  /*#__PURE__*/_createVNode("svg", {
    class: "absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0",
    width: "364",
    height: "384",
    viewBox: "0 0 364 384",
    fill: "none"
  }, [
    /*#__PURE__*/_createVNode("defs", null, [
      /*#__PURE__*/_createVNode("pattern", {
        id: "eab71dd9-9d7a-47bd-8044-256344ee00d0",
        x: "0",
        y: "0",
        width: "20",
        height: "20",
        patternUnits: "userSpaceOnUse"
      }, [
        /*#__PURE__*/_createVNode("rect", {
          x: "0",
          y: "0",
          width: "4",
          height: "4",
          fill: "currentColor"
        })
      ])
    ]),
    /*#__PURE__*/_createVNode("rect", {
      width: "364",
      height: "384",
      fill: "url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
    })
  ])
], -1)
const _hoisted_3 = { class: "relative pt-6 pb-16 sm:pb-24" }
const _hoisted_4 = {
  class: "relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6",
  "aria-label": "Global"
}
const _hoisted_5 = { class: "flex items-center flex-1" }
const _hoisted_6 = { class: "flex items-center justify-between w-full md:w-auto" }
const _hoisted_7 = /*#__PURE__*/_createVNode("a", { href: "#" }, [
  /*#__PURE__*/_createVNode("span", { class: "sr-only" }, "Workflow"),
  /*#__PURE__*/_createVNode("img", {
    class: "h-8 w-auto sm:h-10",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
    alt: ""
  })
], -1)
const _hoisted_8 = { class: "-mr-2 flex items-center md:hidden" }
const _hoisted_9 = /*#__PURE__*/_createVNode("span", { class: "sr-only" }, "Open main menu", -1)
const _hoisted_10 = { class: "hidden space-x-10 md:flex md:ml-10" }
const _hoisted_11 = /*#__PURE__*/_createVNode("div", { class: "hidden md:flex" }, [
  /*#__PURE__*/_createVNode("a", {
    href: "#",
    class: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
  }, " Log in ")
], -1)
const _hoisted_12 = { class: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden" }
const _hoisted_13 = { class: "px-5 pt-4 flex items-center justify-between" }
const _hoisted_14 = /*#__PURE__*/_createVNode("div", null, [
  /*#__PURE__*/_createVNode("img", {
    class: "h-8 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    alt: ""
  })
], -1)
const _hoisted_15 = { class: "-mr-2" }
const _hoisted_16 = /*#__PURE__*/_createVNode("span", { class: "sr-only" }, "Close menu", -1)
const _hoisted_17 = { class: "px-2 pt-2 pb-3 space-y-1" }
const _hoisted_18 = /*#__PURE__*/_createVNode("a", {
  href: "#",
  class: "block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
}, " Log in ", -1)
const _hoisted_19 = { class: "mt-16 sm:mt-24" }
const _hoisted_20 = { class: "mx-auto max-w-7xl" }
const _hoisted_21 = { class: "lg:grid lg:grid-cols-12 lg:gap-8" }
const _hoisted_22 = { class: "px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center" }
const _hoisted_23 = {
  href: "#",
  class: "inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
}
const _hoisted_24 = /*#__PURE__*/_createVNode("span", { class: "px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full" }, "We're hiring", -1)
const _hoisted_25 = /*#__PURE__*/_createVNode("span", { class: "ml-4 text-sm" }, "Visit our careers page", -1)
const _hoisted_26 = /*#__PURE__*/_createStaticVNode("<h1 class=\"mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl\"><span class=\"md:block\">Data to enrich your</span>   <span class=\"text-indigo-400 md:block\">online business</span></h1><p class=\"mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl\"> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt. </p><p class=\"mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10\">Used by</p><div class=\"mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0\"><div class=\"flex flex-wrap items-start justify-between\"><div class=\"flex justify-center px-1\"><img class=\"h-9 sm:h-10\" src=\"https://tailwindui.com/img/logos/tuple-logo-gray-400.svg\" alt=\"Tuple\"></div><div class=\"flex justify-center px-1\"><img class=\"h-9 sm:h-10\" src=\"https://tailwindui.com/img/logos/workcation-logo-gray-400.svg\" alt=\"Workcation\"></div><div class=\"flex justify-center px-1\"><img class=\"h-9 sm:h-10\" src=\"https://tailwindui.com/img/logos/statickit-logo-gray-400.svg\" alt=\"StaticKit\"></div></div></div>", 4)
const _hoisted_30 = /*#__PURE__*/_createVNode("div", { class: "mt-16 sm:mt-24 lg:mt-0 lg:col-span-6" }, [
  /*#__PURE__*/_createVNode("div", { class: "bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden" }, [
    /*#__PURE__*/_createVNode("div", { class: "px-4 py-8 sm:px-10" }, [
      /*#__PURE__*/_createVNode("div", null, [
        /*#__PURE__*/_createVNode("p", { class: "text-sm font-medium text-gray-700" }, " Sign in with "),
        /*#__PURE__*/_createVNode("div", { class: "mt-1 grid grid-cols-3 gap-3" }, [
          /*#__PURE__*/_createVNode("div", null, [
            /*#__PURE__*/_createVNode("a", {
              href: "#",
              class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            }, [
              /*#__PURE__*/_createVNode("span", { class: "sr-only" }, "Sign in with Facebook"),
              /*#__PURE__*/_createVNode("svg", {
                class: "w-5 h-5",
                "aria-hidden": "true",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                /*#__PURE__*/_createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z",
                  "clip-rule": "evenodd"
                })
              ])
            ])
          ]),
          /*#__PURE__*/_createVNode("div", null, [
            /*#__PURE__*/_createVNode("a", {
              href: "#",
              class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            }, [
              /*#__PURE__*/_createVNode("span", { class: "sr-only" }, "Sign in with Twitter"),
              /*#__PURE__*/_createVNode("svg", {
                class: "w-5 h-5",
                "aria-hidden": "true",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                /*#__PURE__*/_createVNode("path", { d: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" })
              ])
            ])
          ]),
          /*#__PURE__*/_createVNode("div", null, [
            /*#__PURE__*/_createVNode("a", {
              href: "#",
              class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            }, [
              /*#__PURE__*/_createVNode("span", { class: "sr-only" }, "Sign in with GitHub"),
              /*#__PURE__*/_createVNode("svg", {
                class: "w-5 h-5",
                "aria-hidden": "true",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                /*#__PURE__*/_createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
                  "clip-rule": "evenodd"
                })
              ])
            ])
          ])
        ])
      ]),
      /*#__PURE__*/_createVNode("div", { class: "mt-6 relative" }, [
        /*#__PURE__*/_createVNode("div", {
          class: "absolute inset-0 flex items-center",
          "aria-hidden": "true"
        }, [
          /*#__PURE__*/_createVNode("div", { class: "w-full border-t border-gray-300" })
        ]),
        /*#__PURE__*/_createVNode("div", { class: "relative flex justify-center text-sm" }, [
          /*#__PURE__*/_createVNode("span", { class: "px-2 bg-white text-gray-500" }, " Or ")
        ])
      ]),
      /*#__PURE__*/_createVNode("div", { class: "mt-6" }, [
        /*#__PURE__*/_createVNode("form", {
          action: "#",
          method: "POST",
          class: "space-y-6"
        }, [
          /*#__PURE__*/_createVNode("div", null, [
            /*#__PURE__*/_createVNode("label", {
              for: "name",
              class: "sr-only"
            }, "Full name"),
            /*#__PURE__*/_createVNode("input", {
              type: "text",
              name: "name",
              id: "name",
              autocomplete: "name",
              placeholder: "Full name",
              required: "",
              class: "block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            })
          ]),
          /*#__PURE__*/_createVNode("div", null, [
            /*#__PURE__*/_createVNode("label", {
              for: "mobile-or-email",
              class: "sr-only"
            }, "Mobile number or email"),
            /*#__PURE__*/_createVNode("input", {
              type: "text",
              name: "mobile-or-email",
              id: "mobile-or-email",
              autocomplete: "email",
              placeholder: "Mobile number or email",
              required: "",
              class: "block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            })
          ]),
          /*#__PURE__*/_createVNode("div", null, [
            /*#__PURE__*/_createVNode("label", {
              for: "password",
              class: "sr-only"
            }, "Password"),
            /*#__PURE__*/_createVNode("input", {
              id: "password",
              name: "password",
              type: "password",
              placeholder: "Password",
              autocomplete: "current-password",
              required: "",
              class: "block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            })
          ]),
          /*#__PURE__*/_createVNode("div", null, [
            /*#__PURE__*/_createVNode("button", {
              type: "submit",
              class: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, " Create your account ")
          ])
        ])
      ])
    ]),
    /*#__PURE__*/_createVNode("div", { class: "px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10" }, [
      /*#__PURE__*/_createVNode("p", { class: "text-xs leading-5 text-gray-500" }, [
        /*#__PURE__*/_createTextVNode("By signing up, you agree to our "),
        /*#__PURE__*/_createVNode("a", {
          href: "#",
          class: "font-medium text-gray-900 hover:underline"
        }, "Terms"),
        /*#__PURE__*/_createTextVNode(", "),
        /*#__PURE__*/_createVNode("a", {
          href: "#",
          class: "font-medium text-gray-900 hover:underline"
        }, "Data Policy"),
        /*#__PURE__*/_createTextVNode(" and "),
        /*#__PURE__*/_createVNode("a", {
          href: "#",
          class: "font-medium text-gray-900 hover:underline"
        }, "Cookies Policy"),
        /*#__PURE__*/_createTextVNode(".")
      ])
    ])
  ])
], -1)

export function render(_ctx, _cache) {
  const _component_MenuIcon = _resolveComponent("MenuIcon")
  const _component_PopoverButton = _resolveComponent("PopoverButton")
  const _component_XIcon = _resolveComponent("XIcon")
  const _component_PopoverPanel = _resolveComponent("PopoverPanel")
  const _component_Popover = _resolveComponent("Popover")
  const _component_ChevronRightIcon = _resolveComponent("ChevronRightIcon")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _hoisted_2,
    _createVNode("div", _hoisted_3, [
      _createVNode(_component_Popover, null, {
        default: _withCtx(() => [
          _createVNode("nav", _hoisted_4, [
            _createVNode("div", _hoisted_5, [
              _createVNode("div", _hoisted_6, [
                _hoisted_7,
                _createVNode("div", _hoisted_8, [
                  _createVNode(_component_PopoverButton, { class: "bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" }, {
                    default: _withCtx(() => [
                      _hoisted_9,
                      _createVNode(_component_MenuIcon, {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              _createVNode("div", _hoisted_10, [
                (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.navigation, (item) => {
                  return (_openBlock(), _createBlock("a", {
                    key: item.name,
                    href: item.href,
                    class: "font-medium text-white hover:text-gray-300"
                  }, _toDisplayString(item.name), 9, ["href"]))
                }), 128))
              ])
            ]),
            _hoisted_11
          ]),
          _createVNode(_Transition, {
            "enter-active-class": "duration-150 ease-out",
            "enter-from-class": "opacity-0 scale-95",
            "enter-to-class": "opacity-100 scale-100",
            "leave-active-class": "duration-100 ease-in",
            "leave-from-class": "opacity-100 scale-100",
            "leave-to-class": "opacity-0 scale-95"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_PopoverPanel, {
                focus: "",
                class: "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              }, {
                default: _withCtx(() => [
                  _createVNode("div", _hoisted_12, [
                    _createVNode("div", _hoisted_13, [
                      _hoisted_14,
                      _createVNode("div", _hoisted_15, [
                        _createVNode(_component_PopoverButton, { class: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                          default: _withCtx(() => [
                            _hoisted_16,
                            _createVNode(_component_XIcon, {
                              class: "h-6 w-6",
                              "aria-hidden": "true"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _createVNode("div", _hoisted_17, [
                      (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.navigation, (item) => {
                        return (_openBlock(), _createBlock("a", {
                          key: item.name,
                          href: item.href,
                          class: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        }, _toDisplayString(item.name), 9, ["href"]))
                      }), 128))
                    ]),
                    _hoisted_18
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      _createVNode("main", _hoisted_19, [
        _createVNode("div", _hoisted_20, [
          _createVNode("div", _hoisted_21, [
            _createVNode("div", _hoisted_22, [
              _createVNode("div", null, [
                _createVNode("a", _hoisted_23, [
                  _hoisted_24,
                  _hoisted_25,
                  _createVNode(_component_ChevronRightIcon, {
                    class: "ml-2 w-5 h-5 text-gray-500",
                    "aria-hidden": "true"
                  })
                ]),
                _hoisted_26
              ])
            ]),
            _hoisted_30
          ])
        ])
      ])
    ])
  ]))
};

defaultExport.render = render;

export default defaultExport;