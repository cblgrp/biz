(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{190:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,o="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=null,d=function(e){return null!==l?l:l=new Promise((function(t,r){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(o),window.Stripe)t(window.Stripe);else try{var script=function(){for(var e=document.querySelectorAll('script[src^="'.concat(n,'"]')),i=0;i<e.length;i++){var script=e[i];if(c.test(script.src))return script}return null}();script&&e?console.warn(o):script||(script=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",script=document.createElement("script");script.src="".concat(n).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(script),script}(e)),script.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),script.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(e){return void r(e)}else t(null)}))},f=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.11.0",startTime:t})}(n,r),n},h=Promise.resolve().then((function(){return d(null)})),m=!1;h.catch((function(e){m||console.warn(e)}));var w=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];m=!0;var n=Date.now();return h.then((function(e){return f(e,t,n)}))}},219:function(e,t,r){"use strict";r.r(t);r(39);var n=r(3),c=r(190),o={data:function(){return{strip:null,current:{price:"price_1HeAr5CnHoJFRoKtlWQTubs3",quantity:1,tip:"1016-3069209-$541.69",title:"October1016-54169"}}},head:function(){return{title:this.current.title}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)("pk_live_um2oZwUbuSgX1NmcXid6P9De");case 2:e.stripe=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{checkout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.stripe.redirectToCheckout({lineItems:[{price:e.current.price,quantity:1}],mode:"payment",successUrl:"https://biz.cloudybaylighting.com/success",cancelUrl:"https://biz.cloudybaylighting.com/canceled"});case 2:r=t.sent,(n=r.error)&&(document.getElementById("error-message").textContent=n.message);case 5:case"end":return t.stop()}}),t)})))()}}},l=r(27),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("button",{attrs:{id:"checkout-button",role:"link"},on:{click:this.checkout}},[this._v("\n    Checkout "+this._s(this.current.tip)+"\n  ")]),this._v(" "),t("div",{attrs:{id:"error-message"}})])}),[],!1,null,null,null);t.default=component.exports}}]);