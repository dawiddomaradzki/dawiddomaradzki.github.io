!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}console.log("Cześć, miło że zajrzałeś 🤠 nazywam się Dawid Domaradzki i zachęcam do zapoznania się z moimi projektami.");var i=document.querySelector(".projects-list--js");fetch("https://api.github.com/users/dawiddomaradzki/repos?sort=updated").then((function(e){return e.json()})).then((function(e){var t,n=r(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;console.log(o);var a=o.description,c=o.homepage,l=o.html_url,u=o.name;a&&(i.innerHTML+='\n\n       <li class="project">\n            <div class="project__container">\n            <img src="../img/githubpurple.de42a557.svg" alt="github photo">\n              <h3 class="project__title">'.concat(u,"</h3>\n              ").concat(a?'<p class="project__description">'.concat(a,"</p>"):"No description",'\n              \n            </div>\n            <div class="project__footer">\n\n            ').concat(c?'<a class="project__link project__link--demo" href="'.concat(c,'" target="_blank" rel="nofollow noreferrer" title="Demo: ').concat(u,'">Demo</a>'):"",'\n              \n              <a class="project__link project__link--source" href="').concat(l,'" target="_blank" rel="nofollow noreferrer"  title="Source code: ').concat(u,'">Github</a>\n            </div>\n          </li>\n      '))}}catch(e){n.e(e)}finally{n.f()}})).catch((function(e){console.log(e)}))},function(e,t,n){}]);