var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),u=document.querySelector('input[name="amount"]');function a(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{n?o({position:e,delay:t}):i({position:e,delay:t})}))}document.querySelector('button[type="submit"]').addEventListener("click",(e=>{e.preventDefault();for(let e=0;e<u.value;e++){let t=e*Number(l.value)+Number(r.value);setTimeout((()=>{a(e+1,t).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}),t)}}));
//# sourceMappingURL=03-promises.ec9f2209.js.map