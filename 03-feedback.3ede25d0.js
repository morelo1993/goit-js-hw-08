var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},a=e.parcelRequire4c75;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in l){var a=l[e];delete l[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},e.parcelRequire4c75=a);var o=a("kEUo3");const n=document.querySelector(".feedback-form"),r=n.elements.email,i=n.elements.message,s=(0,o.throttle)(()=>{let e=r.value,t=i.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:e,message:t}))},500);n.addEventListener("input",s),window.addEventListener("load",function(){let e=localStorage.getItem("feedback-form-state");if(e){let t=JSON.parse(e);r.value=t.email,i.value=t.message}else r.value="",i.value=""}),n.addEventListener("submit",function(e){e.preventDefault();let t=r.value,l=i.value;console.log({email:t,message:l}),localStorage.removeItem("feedback-form-state"),r.value="",i.value=""});
//# sourceMappingURL=03-feedback.3ede25d0.js.map