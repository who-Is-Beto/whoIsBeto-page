(()=>{var e={61:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(645),r=n.n(o),i=n(667),a=n.n(i),s=n(51),c=n(944),d=r()((function(e){return e[1]}));d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap);"]),d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap);"]);var l=a()(s.Z),u=a()(c.Z);d.push([e.id,"#root{align-items:center;justify-content:center}.main__content{text-align:center;color:black;position:relative;bottom:30px}#home{background-image:url("+l+");background-repeat:no-repeat;background-position:center;background-size:contain}h2{font-weight:400;margin:0}.buttons{padding-top:44px}.buttons a{border:3px solid #fff;border-radius:18px;background-color:transparent;font-size:14px;padding:8px 70px;margin:14px;box-shadow:2px 3px 3px #b2b2b2;cursor:pointer;transition-duration:1000ms}.buttons a:hover{padding:8px 120px;box-shadow:3px 11px 9px 2px #b2b2b2;text-decoration:none}.buttons a:focus{outline:none;box-shadow:inset 3px 6px 10px 0px #b2b2b2}#about{background-image:url("+u+");background-repeat:no-repeat;background-position:center;background-size:contain;width:100vh;height:100vh;border:1px solid red}.image__container{width:350px}.image__container img{width:350px}footer{display:flex;background-color:rgba(214,214,214,0.745098);justify-content:space-evenly;align-items:center;padding:20px 0}footer p{color:black}h3{margin:0}li img{width:38px;height:38px}.social__media-list{padding:0;margin:0;align-items:center}.social__media-footer{width:50px}header{width:100%}nav{display:flex;padding:0 15px;justify-content:space-between;align-items:center}ul{display:flex;list-style:none}li{margin:0 8px;text-align:center}a{text-decoration:none;color:rgba(107,105,105,0.904)}a:hover{text-decoration:underline;transition:300ms}#logo{font-family:'Roboto Mono', monospace}#logo:hover{text-decoration:none}#title__nav{font-size:35px}*{box-sizing:border-box}body{font-family:'Open Sans', sans-serif;background-color:#f0f0f0;margin:0;padding:0;width:100%;height:100vh;color:white}.background{position:relative;z-index:0;border:1px solid red;top:-80px;left:0;right:0;bottom:0;text-align:center}.background h1{font-family:'Roboto Mono', monospace;color:#fff;font-size:156px;font-weight:900;letter-spacing:16px;margin:0}html{width:100%}p{margin:0}#root{display:flex;width:100%;height:100vh}\n",""]);const p=d},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o="images/A B O U T M E.png"},51:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o="images/H E L L O.png"},370:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});const o="images/hero.jpg"},220:e=>{e.exports=""},380:(e,t,n)=>{var o='<div id="about"> <div class="imgage__about"> <img src="'+n(91)(n(370))+'" alt=""> </div> </div>';e.exports=o},143:e=>{e.exports='<div id="home"> <div class="main__content"> <h2>Hello world, I\'m Roberto Cortés Monroy<br/> I\'m a Frontend developer, who really enjoy develop, <br/> why don\'t you see my projects or read about me? <br/> ✌ </h2> <div class="buttons"> <a href="#/about">About Me</a> <a href="#/projects">Projects</a> </div> </div> </div>'},3:e=>{e.exports="<p>Projects</p>"},91:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e)}},379:(e,t,n)=>{"use strict";var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var s=e[r],c=t.base?s[0]+t.base:s[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:g(p,t),references:1}),o.push(l)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function g(e,t){var n,o,r;if(t.singleton){var i=h++;n=f||(f=c(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=c(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=s(e,t),d=0;d<n.length;d++){var l=a(n[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=n(379),t=n.n(e),o=n(61);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=n(143),i=n.n(r),a=n(3),s=n.n(a);n(220);var c=n(380),d=n.n(c);let l=document.getElementById("root");const u=e=>{switch(l.innerHTML="",console.log(e),e){case"":case"#/":return l.appendChild((()=>{const e=document.createElement("div");return e.innerHTML=i(),e})());case"#/about":return l.appendChild((()=>{const e=document.createElement("div");return e.innerHTML=d(),e})());case"#/projects":return l.appendChild((()=>{const e=document.createElement("div");return fetch("./data.json").then((e=>(console.log(e),e.json()))).catch((e=>{console.log(e),alert(e)})),e.innerHTML=s(),e})());case"#/contact":return console.log("#/contact");default:return console.log("ERROR 404 NOT FOUND")}};window.addEventListener("load",(u(window.location.hash),void window.addEventListener("hashchange",(()=>{u(window.location.hash)}))))})()})();