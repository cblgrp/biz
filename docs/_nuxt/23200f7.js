(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{178:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,c="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=null,d=function(t){return null!==l?l:l=new Promise((function(e,r){if("undefined"!=typeof window)if(window.Stripe&&t&&console.warn(c),window.Stripe)e(window.Stripe);else try{var script=function(){for(var t=document.querySelectorAll('script[src^="'.concat(n,'"]')),i=0;i<t.length;i++){var script=t[i];if(o.test(script.src))return script}return null}();script&&t?console.warn(c):script||(script=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",script=document.createElement("script");script.src="".concat(n).concat(e);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(script),script}(t)),script.addEventListener("load",(function(){window.Stripe?e(window.Stripe):r(new Error("Stripe.js not available"))})),script.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(t){return void r(t)}else e(null)}))},f=function(t,e,r){if(null===t)return null;var n=t.apply(void 0,e);return function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.10.0",startTime:e})}(n,r),n},m=Promise.resolve().then((function(){return d(null)})),v=!1;m.catch((function(t){v||console.warn(t)}));var h=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];v=!0;var n=Date.now();return m.then((function(t){return f(t,e,n)}))}},179:function(t,e,r){"use strict";var n=r(4),o=r(18),c=r(21),l=r(116),d=r(61),f=r(10),m=r(47).f,v=r(62).f,h=r(9).f,w=r(180).trim,y=n.Number,_=y,S=y.prototype,E="Number"==c(r(79)(S)),N="trim"in String.prototype,x=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=N?e.trim():w(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(E?f((function(){S.valueOf.call(r)})):"Number"!=c(r))?l(new _(x(e)),r,y):x(e)};for(var I,k=r(8)?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;k.length>C;C++)o(_,I=k[C])&&!o(y,I)&&h(y,I,v(_,I));y.prototype=S,S.constructor=y,r(11)(n,"Number",y)}},180:function(t,e,r){var n=r(6),o=r(22),c=r(10),l=r(181),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t,e,r){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(h):l[t];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},h=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},181:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},182:function(t,e,r){"use strict";r(179);var n={props:{value:{type:Number,default:0},symbol:{type:String,default:"$"},currency:{type:Number,default:2}},computed:{}},o=r(20),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this._f("currency")(this.value,{symbol:this.symbol,thousandsSeparator:",",fractionCount:2,fractionSeparator:".",symbolPosition:"front",symbolSpacing:!0}))+"\n")])}),[],!1,null,null,null);e.a=component.exports},202:function(t,e,r){"use strict";r.r(e);r(34);var n=r(3),o=r(178),c={components:{VPrice:r(182).a},data:function(){return{id:"prod_HjD2AZwDuiCDy5",sku:"price_1H9kctCnHoJFRoKttKEYXgnA",price:2250,title:"CBOWL153CORB 300pcs 30% deposit",stripe:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("pk_live_um2oZwUbuSgX1NmcXid6P9De");case 2:t.stripe=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{checkout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.stripe.redirectToCheckout({lineItems:[{price:t.sku,quantity:1}],mode:"payment",successUrl:"https://biz.cloudybaylighting.com/success",cancelUrl:"https://biz.cloudybaylighting.com/canceled"});case 2:r=e.sent,(n=r.error)&&(document.getElementById("error-message").textContent=n.message);case 5:case"end":return e.stop()}}),e)})))()}},head:function(){return{title:this.title}}},l=r(20),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"200px"},attrs:{src:"/images/"+t.id+".jpg"}}),t._v(" "),r("h2",{staticStyle:{color:"#555555"}},[t._v(t._s(t.title))]),t._v(" "),r("h3",[r("VPrice",{attrs:{value:t.price}})],1),t._v(" "),r("button",{staticStyle:{cursor:"pointer","background-color":"#6772e5",color:"#fff",padding:"16px 24px",border:"0","border-radius":"4px","font-size":"1em"},attrs:{id:"checkout-button",role:"link"},on:{click:t.checkout}},[t._v("\n      Checkout\n    ")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t._m(0)]),t._v(" "),r("div",{attrs:{id:"error-message"}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("small",{staticClass:"text-muted"},[this._v("© Cloudy Bay Lighting")])])}],!1,null,null,null);e.default=component.exports}}]);