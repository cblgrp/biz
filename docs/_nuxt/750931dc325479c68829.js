(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(t,e,r){"use strict";var n=r(6),o=r(177)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(78)("find")},177:function(t,e,r){var n=r(21),o=r(77),c=r(22),l=r(17),f=r(178);t.exports=function(t,e){var r=1==t,d=2==t,v=3==t,m=4==t,h=6==t,y=5==t||h,w=e||f;return function(e,f,_){for(var S,x,E=c(e),N=o(E),A=n(f,_,3),I=l(N.length),k=0,j=r?w(e,I):d?w(e,0):void 0;I>k;k++)if((y||k in N)&&(x=A(S=N[k],k,E),t))if(r)j[k]=x;else if(x)switch(t){case 3:return!0;case 5:return S;case 6:return k;case 2:j.push(S)}else if(m)return!1;return h?-1:v||m?m:j}}},178:function(t,e,r){var n=r(179);t.exports=function(t,e){return new(n(t))(e)}},179:function(t,e,r){var n=r(10),o=r(115),c=r(2)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},180:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",(function(){return y}));var o="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,l="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",f=null,d=function(t){return null!==f?f:f=new Promise((function(e,r){if("undefined"!=typeof window)if(window.Stripe&&t&&console.warn(l),window.Stripe)e(window.Stripe);else try{var script=function(){for(var t=document.querySelectorAll('script[src^="'.concat(o,'"]')),i=0;i<t.length;i++){var script=t[i];if(c.test(script.src))return script}return null}();script&&t?console.warn(l):script||(script=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",script=document.createElement("script");script.src="".concat(o).concat(e);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(script),script}(t)),script.addEventListener("load",(function(){window.Stripe?e(window.Stripe):r(new Error("Stripe.js not available"))})),script.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(t){return void r(t)}else e(null)}))},v=function(t,e){if(null===t)return null;var r=t.apply(void 0,n(e));return function(t){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.5.0"})}(r),r},m=Promise.resolve().then((function(){return d(null)})),h=!1;m.catch((function(t){h||console.warn(t)}));var y=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return h=!0,m.then((function(t){return v(t,e)}))}},186:function(t,e,r){"use strict";var n=r(3),o=r(18),c=r(23),l=r(116),f=r(63),d=r(11),v=r(47).f,m=r(64).f,h=r(9).f,y=r(187).trim,w=n.Number,_=w,S=w.prototype,x="Number"==c(r(79)(S)),E="trim"in String.prototype,N=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=E?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(x?d((function(){S.valueOf.call(r)})):"Number"!=c(r))?l(new _(N(e)),r,w):N(e)};for(var A,I=r(8)?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;I.length>k;k++)o(_,A=I[k])&&!o(w,A)&&h(w,A,m(_,A));w.prototype=S,S.constructor=w,r(12)(n,"Number",w)}},187:function(t,e,r){var n=r(6),o=r(24),c=r(11),l=r(188),f="["+l+"]",d=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(t,e,r){var o={},f=c((function(){return!!l[t]()||"​"!="​"[t]()})),d=o[t]=f?e(h):l[t];r&&(o[r]=d),n(n.P+n.F*f,"String",o)},h=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},188:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},189:function(t){t.exports=JSON.parse('{"data":[{"id":"prod_HLxT0JdXxerAjO","sku":"price_HLxTkGNLBtVM87","price":2250,"title":"deposit for 300pcs CBOWL153CORB"}]}')},192:function(t,e,r){"use strict";r.r(e);r(34);var n=r(5),o=(r(176),r(180)),c=(r(186),{props:{value:{type:Number,default:0},symbol:{type:String,default:"$"},currency:{type:Number,default:2}},computed:{}}),l=r(20),f=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this._f("currency")(this.value,{symbol:this.symbol,thousandsSeparator:",",fractionCount:2,fractionSeparator:".",symbolPosition:"front",symbolSpacing:!0}))+"\n")])}),[],!1,null,null,null).exports,d=r(189),v={validate:function(t){var e=t.params;return d.data.find((function(t){return t.id===e.id}))},components:{VPrice:f},data:function(){return{strip:null}},computed:{current:function(){var t=this;return d.data.find((function(e){return e.id===t.$route.params.id}))}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("pk_live_um2oZwUbuSgX1NmcXid6P9De");case 2:t.stripe=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{checkout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.stripe.redirectToCheckout({lineItems:[{price:t.current.sku,quantity:1}],mode:"payment",successUrl:"https://biz.cloudybaylighting.com/success",cancelUrl:"https://biz.cloudybaylighting.com/canceled"});case 2:r=e.sent,(n=r.error)&&(document.getElementById("error-message").textContent=n.message);case 5:case"end":return e.stop()}}),e)})))()}},head:function(){return{title:this.current.title}}},m=Object(l.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"200px"},attrs:{src:"/images/"+t.current.id+".jpg"}}),t._v(" "),r("h2",{staticStyle:{color:"#555555"}},[t._v("\n      "+t._s(t.current.title)+"\n    ")]),t._v(" "),r("h3",[r("VPrice",{attrs:{value:t.current.price}})],1),t._v(" "),r("button",{staticStyle:{cursor:"pointer","background-color":"#6772E5",color:"#FFF",padding:"16px 24px",border:"0","border-radius":"4px","font-size":"1em"},attrs:{id:"checkout-button",role:"link"},on:{click:t.checkout}},[t._v("\n      Checkout\n    ")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t._m(0)]),t._v(" "),r("div",{attrs:{id:"error-message"}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("small",{staticClass:"text-muted"},[this._v("\n        © Cloudy Bay Lighting\n      ")])])}],!1,null,null,null);e.default=m.exports}}]);