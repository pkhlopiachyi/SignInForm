!function(o){var n={};function t(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=o,t.c=n,t.d=function(o,n,e){t.o(o,n)||Object.defineProperty(o,n,{enumerable:!0,get:e})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,n){if(1&n&&(o=t(o)),8&n)return o;if(4&n&&"object"==typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&n&&"string"!=typeof o)for(var r in o)t.d(e,r,function(n){return o[n]}.bind(null,r));return e},t.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(n,"a",n),n},t.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},t.p="/",t(t.s=0)}([function(o,n,t){t(1),o.exports=t(4)},function(o,n,t){"use strict";t.r(n);t(2),t(3)},function(o,n){window.showBackDrop=function(){var o=document.getElementById("back-drop"),n=document.getElementById("body-block"),t=document.getElementById("forgot-block"),e=document.getElementById("signup-block");o&&n&&t&&e&&(o.style.display="block",n.style.display="block",t.style.display="none",e.style.display="none")},window.closeBackDrop=function(){document.getElementById("back-drop").style.display="none"},window.changeBlock=function(o,n){var t=document.getElementById(o);document.getElementById(n).style.display="none",t.style.display="block"},window.onclick=function(o){var n=document.getElementById("back-drop");o.target==n&&(n.style.display="none")}},function(o,n){window.onload=function(){var o=document.getElementById("email"),n=document.getElementById("passwd"),t=document.getElementById("forgot-email"),e=document.getElementById("err-message"),r=document.getElementById("error-block"),i=document.getElementById("login-send"),l=document.getElementById("forgot-send-btn"),a=!1,d=!1;function p(o){return!!o.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}function s(o,n,t){var e;o.innerHTML=t,(e=n).style.opacity=0,e.style.display="flex",function o(){var n=parseFloat(e.style.opacity);(n+=.1)>1||(e.style.opacity=n,setTimeout(o,40))}(),setTimeout((function(){!function(o){o.style.opacity=1,function n(){(o.style.opacity-=.1)<0?o.style.display="none":setTimeout(n,40)}()}(n)}),5e3)}function c(o,n){n&&o&&(i.disabled=!1,i.style.backgroundColor="#E84A5F",i.style.cursor="pointer")}window.onFocusInput=function(o){document.getElementById(o).style.border="1px solid #E84A5F"},window.onBlurInput=function(o){document.getElementById(o).style.border="1px solid rgba(238, 238, 238, 0.2)"},o.onkeyup=function(){a=p(o),c(d,a)},t.onkeyup=function(){var o=p(t);console.log(o),o&&(l.disabled=!1,l.style.background="#E84A5F",l.style.cursor="pointer")},window.onkeyup=function(){var o;r.style.display="none",o=n.value,c(d=o.match(/[a-z]/g)?o.match(/[A-Z]/g)?o.match(/[0-9]/g)?o.match(/[^a-zA-Z\d]/g)?o.length>=8||(s(e,r,"Password length shuld be at least 8 symbols"),!1):(s(e,r,"Need at least 1 special character"),!1):(s(e,r,"Need at least 1 number"),!1):(s(e,r,"Need at least 1 uppercase character"),!1):(s(e,r,"Need at least 1 lowercase character"),!1),a)}}},function(o,n,t){var e=t(5);"string"==typeof e&&(e=[[o.i,e,""]]);var r={insert:"head",singleton:!1};t(7)(e,r);e.locals&&(o.exports=e.locals)},function(o,n,t){(o.exports=t(6)(!1)).push([o.i,'.hackacademy-header{position:fixed;top:0;left:0;right:0;height:64px;width:100%;background-color:#2A363B}.hackacademy-header-logo{float:left;margin-top:10px;width:16%}.hackacademy-header-logo-img{width:310px;height:48px}.hackacademy-header-login{float:right;margin-top:20px;margin-right:10%}.hackacademy-header-login-button{outline:none;border:none;color:#ffffff;background-color:inherit;font-size:18px;font-family:"Noto Sans",sans-serif}.hackacademy-header-login-button:hover{cursor:pointer;color:#E84A5F}.login-block-body{display:none;background-color:#2A363B;width:470px;margin:0 auto;margin-top:100px;text-align:center;border-radius:5px;color:#fff}.login-block-body-close{width:50px;float:right;margin-right:10px}.login-block-body-close-button{margin-top:10px;outline:none;border:none;background-color:#2A363B;color:#fff;font-size:20px}.login-block-body-close-button i{font-weight:600}.login-block-body-close-button:hover{cursor:pointer;color:#E84A5F}.login-block-body-img-logo{margin-left:65px;padding:10px;width:150px}.login-block-body-img-title{color:#E84A5F;font-family:"Noto Sans",sans-serif;font-size:32px;font-weight:bold}.login-block-body-input{width:330px;margin:0 auto;margin-top:30px}.login-block-body-input-email,.login-block-body-input-passwd{text-align:left;margin:10px;border:1px solid rgba(238,238,238,0.2);margin:0 auto;padding:5px;border-radius:5px}.login-block-body-input-email label>i,.login-block-body-input-passwd label>i{padding:5px;padding-right:7px;margin-right:10px;border-right:1px solid rgba(238,238,238,0.2)}.login-block-body-input-email label>input,.login-block-body-input-passwd label>input{width:260px;outline:none;border:none;color:#fff;background-color:#2A363B;-webkit-box-shadow:inset 0 0 0 50px #2A363B;-webkit-text-fill-color:rgba(238,238,238,0.7)}.login-block-body-input-passwd{margin-top:20px}.login-block-body-input-passwd-logo-error{margin-top:5px;border-radius:10px;background-color:#ffffff;color:#000000;height:50px;width:330px;display:none;flex-direction:row;justify-content:flex-start;align-items:center;position:absolute}.login-block-body-input-passwd-logo-error-icon{color:#ffffff;background-color:#FFA300;padding:5px 10px;border-radius:3px;margin:5px}.login-block-body-input-passwd-logo-error::after{content:\'\';width:0;height:0;border-left:20px solid transparent;border-right:20px solid transparent;border-bottom:20px solid #fff;margin-left:30px;margin-top:-30px;position:absolute}.login-block-body-input-restore{text-align:right}.login-block-body-input-restore-button{outline:none;border:none;background:#2A363B;color:#fff;font-size:12px;font-family:"Noto Sans",sans-serif}.login-block-body-input-restore-button:hover{cursor:pointer;color:#E84A5F}.login-block-body-log-form{width:330px;margin:0 auto;margin-top:90px}.login-block-body-log-form-button{outline:none;width:inherit;background-color:rgba(232,74,95,0.5);border:none;line-height:25px;color:#fff;border-radius:5px;padding:10px}.login-block-body-log-form-button:hover{cursor:not-allowed}.login-block-body-log-form-signup{display:flex;flex-direction:row;justify-content:center}.login-block-body-log-form-signup-span{font-size:14px;font-family:"Noto Sans",sans-serif}.login-block-body-log-form-signup-button{outline:none;border:none;background-color:#2A363B;color:#E84A5F;font-family:"Noto Sans",sans-serif;font-size:14px;font-weight:bold}.login-block-body-log-form-signup-button:hover{cursor:pointer;color:#fff}.login-block-body-other{width:330px;margin:0 auto;margin-top:20px}.login-block-body-other-or{position:relative;z-index:1}.login-block-body-other-or:before{border-top:1px solid #fff;content:"";margin:0 auto;position:absolute;top:50%;left:0;right:0;bottom:0;width:95%;z-index:-1}.login-block-body-other-or span{background:#2A363B;padding:0 15px}.login-block-body-other-network{display:flex;flex-direction:row;justify-content:space-between;width:200px;margin:0 auto;margin-top:15px;margin-bottom:15px;padding:20px}.login-block-body-other-network-div-google,.login-block-body-other-network-div-facebook,.login-block-body-other-network-div-github{outline:none;color:#fff;border:none;background-color:#2A363B}.login-block-body-other-network-div-google i,.login-block-body-other-network-div-facebook i,.login-block-body-other-network-div-github i{width:30px;height:30px;font-size:25px}.login-block-body-other-network-div-google:hover,.login-block-body-other-network-div-facebook:hover,.login-block-body-other-network-div-github:hover{cursor:pointer}.login-block-body-other-network-div-github i{font-size:30px}.forgot-block{display:none;width:470px;background-color:#2A363B;margin:0 auto;margin-top:100px;text-align:center;border-radius:5px}.forgot-block-close{width:50px;float:right;margin-right:10px}.forgot-block-close-button{margin-top:10px;outline:none;border:none;background-color:#2A363B;color:#fff;font-size:20px}.forgot-block-close-button:hover{cursor:pointer;color:#E84A5F}.forgot-block-header-img{margin-left:65px;padding:10px}.forgot-block-header-name-text{color:#E84A5F;font-size:32px;font-family:"Noto Sans",sans-serif;font-weight:bold}.forgot-block-body{margin-top:40px}.forgot-block-body-input{width:330px;text-align:left;border:1px solid rgba(238,238,238,0.2);margin:0 auto;padding:5px;border-radius:5px;color:#fff}.forgot-block-body-input-icon i{padding:5px;padding-right:7px;margin-right:10px;border-right:1px solid rgba(238,238,238,0.2)}.forgot-block-body-input-icon input{width:260px;outline:none;border:none;color:#fff;background-color:#2A363B;-webkit-box-shadow:inset 0 0 0 50px #2A363B;-webkit-text-fill-color:rgba(238,238,238,0.7)}.forgot-block-body-input-button{margin-top:25px;border:none;padding:10px;width:340px;border-radius:5px;outline:none;background-color:rgba(232,74,95,0.5);color:#fff;font-family:"Noto Sans",sans-serif;font-size:14px}.forgot-block-body-input-button:hover{cursor:not-allowed}.forgot-block-body-back{margin-top:25px;padding:15px;color:#fff;font-family:"Noto Sans",sans-serif;font-size:14px}.forgot-block-body-back-button{outline:none;border:none;background-color:#2A363B;color:#E84A5F;margin-left:-4px;font-family:"Noto Sans",sans-serif;font-size:14px;font-weight:bold}.forgot-block-body-back-button:hover{cursor:pointer;color:#fff}.signup-block{display:block;width:470px;background-color:#2A363B;margin:0 auto;margin-top:100px;text-align:center;border-radius:5px}.signup-block-close{width:50px;float:right;margin-right:10px}.signup-block-closebutton{margin-top:10px;outline:none;border:none;background-color:#2A363B;color:#fff;font-size:20px}.signup-block-closebutton:hover{cursor:pointer;color:#E84A5F}.signup-block-header-img{margin-left:65px;padding:10px}.signup-block-header-name-text{color:#E84A5F;font-size:32px;font-family:"Noto Sans",sans-serif;font-width:bold}.signup-block-body{color:#fff;margin-top:40px}.signup-block-body-input{width:330px;margin:0 auto}.signup-block-body-input-email,.signup-block-body-input-passwd,.signup-block-body-input-passwd-confirm{text-align:left;margin:10px;border:1px solid rgba(238,238,238,0.2);margin:0 auto;padding:5px;border-radius:5px}.signup-block-body-input-email label>i,.signup-block-body-input-passwd label>i,.signup-block-body-input-passwd-confirm label>i{padding:5px;padding-right:7px;margin-right:10px;border-right:1px solid rgba(238,238,238,0.2)}.signup-block-body-input-email label>input,.signup-block-body-input-passwd label>input,.signup-block-body-input-passwd-confirm label>input{width:260px;outline:none;border:none;color:#fff;background-color:#2A363B;-webkit-box-shadow:inset 0 0 0 50px #2A363B;-webkit-text-fill-color:rgba(238,238,238,0.7)}.signup-block-body-input-passwd,.signup-block-body-input-passwd-confirm{margin-top:20px}.signup-block-body-input-passwd-logo-error,.signup-block-body-input-passwd-confirm-logo-error{display:flex;margin-top:5px;border-radius:10px;background-color:#ffffff;color:#000000;height:50px;width:330px;flex-dirextion:row;justify-content:flex-start;align-items:center;position:absolute}.signup-block-body-input-passwd-logo-error-icon,.signup-block-body-input-passwd-confirm-logo-error-icon{color:#ffffff;background-color:#FFA300;padding:5px 10px;border-radius:3px;margin:5px}.signup-block-body-input-passwd-logo-error::after,.signup-block-body-input-passwd-confirm-logo-error::after{content:\'\';width:0;height:0;border-left:20px solid transparent;border-right:20px solid transparent;border-bottom:20px solid #ffffff;margin-left:30px;margin-top:-30px;position:absolute}.signup-block-body-input-send-button{margin-top:25px;border:none;padding:10px;width:330px;border-radius:5px;outline:none;background-color:rgba(232,74,95,0.5);color:#fff;font-family:"Noto Sans",sans-serif;font-size:14px}.signup-block-body-input-send-button:hover{cursor:not-allowed}.signup-block-body-rules{width:310px;margin:0 auto;margin-top:25px;font-family:"Noto Sans",sans-serif;font-size:14px}.signup-block-body-rules-button{outline:none;border:none;background-color:#2A363B;color:#E84A5F;font:inherit}.signup-block-body-back{margin-top:50px;padding:15px;color:#fff;font-family:"Noto Sans",sans-serif;font-size:14px}.signup-block-body-back-button{outline:none;border:none;background-color:#2A363B;color:#E84A5F;margin-left:-4px;font-family:"Noto Sans",sans-serif;font-size:14px;font-weight:bold}.signup-block-body-back-button:hover{cursor:pointer;color:#fff}.reset-block{width:470px;background-color:#2A363B;margin:0 auto;margin-top:100px;text-align:center;border-radius:5px;color:#fff}.reset-block-header-img{margin-top:10px}.reset-block-header-name{margin-top:20px;color:#E84A5F;font-size:32px;font-family:"Noto Sans",sans-serif;font-weight:bold}.reset-block-body{margin-top:50px}.reset-block-body-input-passwd{margin-top:20px;width:330px;text-align:left;margin:10px;border:1px solid rgba(238,238,238,0.2);margin:0 auto;padding:5px;border-radius:5px}.reset-block-body-input-passwd label>i{padding:5px;padding-right:7px;margin-right:10px;border-right:1px solid rgba(238,238,238,0.2)}.reset-block-body-input-passwd label>input{width:260px;outline:none;border:none;color:#fff;background-color:#2A363B;-webkit-box-shadow:inset 0 0 0 50px #2A363B;-webkit-text-fill-color:rgba(238,238,238,0.7)}body{min-width:470px}.back-drop{display:block;position:absolute;z-index:-2;top:64px;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.6);min-height:900px}\n',""])},function(o,n,t){"use strict";o.exports=function(o){var n=[];return n.toString=function(){return this.map((function(n){var t=function(o,n){var t=o[1]||"",e=o[3];if(!e)return t;if(n&&"function"==typeof btoa){var r=(l=e,a=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(d," */")),i=e.sources.map((function(o){return"/*# sourceURL=".concat(e.sourceRoot).concat(o," */")}));return[t].concat(i).concat([r]).join("\n")}var l,a,d;return[t].join("\n")}(n,o);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(o,t){"string"==typeof o&&(o=[[null,o,""]]);for(var e={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(e[i]=!0)}for(var l=0;l<o.length;l++){var a=o[l];null!=a[0]&&e[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="(".concat(a[2],") and (").concat(t,")")),n.push(a))}},n}},function(o,n,t){"use strict";var e,r={},i=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},l=function(){var o={};return function(n){if(void 0===o[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(o){t=null}o[n]=t}return o[n]}}();function a(o,n){for(var t=[],e={},r=0;r<o.length;r++){var i=o[r],l=n.base?i[0]+n.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};e[l]?e[l].parts.push(a):t.push(e[l]={id:l,parts:[a]})}return t}function d(o,n){for(var t=0;t<o.length;t++){var e=o[t],i=r[e.id],l=0;if(i){for(i.refs++;l<i.parts.length;l++)i.parts[l](e.parts[l]);for(;l<e.parts.length;l++)i.parts.push(x(e.parts[l],n))}else{for(var a=[];l<e.parts.length;l++)a.push(x(e.parts[l],n));r[e.id]={id:e.id,refs:1,parts:a}}}}function p(o){var n=document.createElement("style");if(void 0===o.attributes.nonce){var e=t.nc;e&&(o.attributes.nonce=e)}if(Object.keys(o.attributes).forEach((function(t){n.setAttribute(t,o.attributes[t])})),"function"==typeof o.insert)o.insert(n);else{var r=l(o.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var s,c=(s=[],function(o,n){return s[o]=n,s.filter(Boolean).join("\n")});function b(o,n,t,e){var r=t?"":e.css;if(o.styleSheet)o.styleSheet.cssText=c(n,r);else{var i=document.createTextNode(r),l=o.childNodes;l[n]&&o.removeChild(l[n]),l.length?o.insertBefore(i,l[n]):o.appendChild(i)}}function u(o,n,t){var e=t.css,r=t.media,i=t.sourceMap;if(r&&o.setAttribute("media",r),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}var g=null,f=0;function x(o,n){var t,e,r;if(n.singleton){var i=f++;t=g||(g=p(n)),e=b.bind(null,t,i,!1),r=b.bind(null,t,i,!0)}else t=p(n),e=u.bind(null,t,n),r=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(t)};return e(o),function(n){if(n){if(n.css===o.css&&n.media===o.media&&n.sourceMap===o.sourceMap)return;e(o=n)}else r()}}o.exports=function(o,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=a(o,n);return d(t,n),function(o){for(var e=[],i=0;i<t.length;i++){var l=t[i],p=r[l.id];p&&(p.refs--,e.push(p))}o&&d(a(o,n),n);for(var s=0;s<e.length;s++){var c=e[s];if(0===c.refs){for(var b=0;b<c.parts.length;b++)c.parts[b]();delete r[c.id]}}}}}]);