import{c as L,a as M}from"../common/_commonjsHelpers-798ad6a7.js";var N=L(function(a,y){(function(t,i){a.exports=i()})(M,function(){var t={};t.version="0.2.0";var i=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(n){var e,r;for(e in n)r=n[e],r!==void 0&&n.hasOwnProperty(e)&&(i[e]=r);return this},t.status=null,t.set=function(n){var e=t.isStarted();n=S(n,i.minimum,1),t.status=n===1?null:n;var r=t.render(!e),o=r.querySelector(i.barSelector),u=i.speed,f=i.easing;return r.offsetWidth,k(function(s){i.positionUsing===""&&(i.positionUsing=t.getPositioningCSS()),v(o,w(n,u,f)),n===1?(v(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){v(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){t.remove(),s()},u)},u)):setTimeout(s,u)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var n=function(){setTimeout(function(){!t.status||(t.trickle(),n())},i.trickleSpeed)};return i.trickle&&n(),this},t.done=function(n){return!n&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(n){var e=t.status;return e?(typeof n!="number"&&(n=(1-e)*S(Math.random()*e,.1,.95)),e=S(e+n,0,.994),t.set(e)):t.start()},t.trickle=function(){return t.inc(Math.random()*i.trickleRate)},function(){var n=0,e=0;t.promise=function(r){return!r||r.state()==="resolved"?this:(e===0&&t.start(),n++,e++,r.always(function(){e--,e===0?(n=0,t.done()):t.set((n-e)/n)}),this)}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");b(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=i.template;var r=e.querySelector(i.barSelector),o=n?"-100":m(t.status||0),u=document.querySelector(i.parent),f;return v(r,{transition:"all 0 linear",transform:"translate3d("+o+"%,0,0)"}),i.showSpinner||(f=e.querySelector(i.spinnerSelector),f&&T(f)),u!=document.body&&b(u,"nprogress-custom-parent"),u.appendChild(e),e},t.remove=function(){P(document.documentElement,"nprogress-busy"),P(document.querySelector(i.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&T(n)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};function S(n,e,r){return n<e?e:n>r?r:n}function m(n){return(-1+n)*100}function w(n,e,r){var o;return i.positionUsing==="translate3d"?o={transform:"translate3d("+m(n)+"%,0,0)"}:i.positionUsing==="translate"?o={transform:"translate("+m(n)+"%,0)"}:o={"margin-left":m(n)+"%"},o.transition="all "+e+"ms "+r,o}var k=function(){var n=[];function e(){var r=n.shift();r&&r(e)}return function(r){n.push(r),n.length==1&&e()}}(),v=function(){var n=["Webkit","O","Moz","ms"],e={};function r(s){return s.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(c,d){return d.toUpperCase()})}function o(s){var c=document.body.style;if(s in c)return s;for(var d=n.length,h=s.charAt(0).toUpperCase()+s.slice(1),g;d--;)if(g=n[d]+h,g in c)return g;return s}function u(s){return s=r(s),e[s]||(e[s]=o(s))}function f(s,c,d){c=u(c),s.style[c]=d}return function(s,c){var d=arguments,h,g;if(d.length==2)for(h in c)g=c[h],g!==void 0&&c.hasOwnProperty(h)&&f(s,h,g);else f(s,d[1],d[2])}}();function p(n,e){var r=typeof n=="string"?n:C(n);return r.indexOf(" "+e+" ")>=0}function b(n,e){var r=C(n),o=r+e;p(r,e)||(n.className=o.substring(1))}function P(n,e){var r=C(n),o;!p(n,e)||(o=r.replace(" "+e+" "," "),n.className=o.substring(1,o.length-1))}function C(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function T(n){n&&n.parentNode&&n.parentNode.removeChild(n)}return t})}),x,l=(x=N)&&typeof x=="object"&&"default"in x?x.default:x,E=null;function z(a){document.addEventListener("inertia:start",U.bind(null,a)),document.addEventListener("inertia:progress",q),document.addEventListener("inertia:finish",O)}function U(a){E=setTimeout(function(){return l.start()},a)}function q(a){l.isStarted()&&a.detail.progress.percentage&&l.set(Math.max(l.status,a.detail.progress.percentage/100*.9))}function O(a){clearTimeout(E),l.isStarted()&&(a.detail.visit.completed?l.done():a.detail.visit.interrupted?l.set(0):a.detail.visit.cancelled&&(l.done(),l.remove()))}var j={init:function(a){var y=a===void 0?{}:a,t=y.delay,i=y.color,S=i===void 0?"#29d":i,m=y.includeCSS,w=m===void 0||m,k=y.showSpinner,v=k!==void 0&&k;z(t===void 0?250:t),l.configure({showSpinner:v}),w&&function(p){var b=document.createElement("style");b.type="text/css",b.textContent=`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: `+p+`;

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px `+p+", 0 0 5px "+p+`;
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: `+p+`;
      border-left-color: `+p+`;
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(b)}(S)}};export{j as InertiaProgress};
