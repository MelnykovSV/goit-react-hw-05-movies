(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[519],{841:function(t,e,n){"use strict";n.d(e,{$u:function(){return h},M1:function(){return v},Wf:function(){return l},r3:function(){return d},tx:function(){return x}});var r=n(5861),o=n(4687),u=n.n(o),c=n(1243),i="https://api.themoviedb.org/3/",s="f5947bee69b0eabce6ba631e79612468";function a(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get(e);case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),r={status:t.t0.response.status,body:t.t0.message},new Error(JSON.stringify(r));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a("".concat(i,"trending/all/day?api_key=").concat(s,"&page=1")));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return a("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(t,"&page=1"))}function d(t){return a("".concat(i,"movie/").concat(t,"?api_key=").concat(s))}function v(t){return a("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s))}function x(t){return a("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s))}},25:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(2791);var r,o=n(168),u=n(7402).Z.div(r||(r=(0,o.Z)(["\n  a {\n    width: fit-content;\n  }\n"]))),c=n(1087),i=n(184),s=function(t){var e=t.errorMessage;return(0,i.jsxs)(u,{children:[(0,i.jsx)("h1",{children:"ERROR"}),(0,i.jsxs)("p",{children:["Something happened. Go back to the ",(0,i.jsx)(c.rU,{to:"/",children:"Home page"})," "]}),(0,i.jsx)("p",{children:e})]})}},1519:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r,o=n(9439),u=n(2791),c=n(168),i=n(7402).Z.div(r||(r=(0,c.Z)([""]))),s=n(7689),a=n(841),f=n(8966),h=n(25),p=n(1648),l=n(6429),d=n.n(l),v=n(184),x=function(){var t=(0,s.UO)().movieId,e=(0,u.useState)("pending"),n=(0,o.Z)(e,2),r=n[0],c=n[1],l=(0,u.useState)({status:null,body:""}),x=(0,o.Z)(l,2),g=x[0],w=x[1],m=(0,u.useState)([]),b=(0,o.Z)(m,2),j=b[0],y=b[1];return(0,u.useEffect)((function(){(0,a.tx)(t).then((function(t){y(t.data.results),c("resolved")})).catch((function(t){w(JSON.parse(t.message)),c("rejected")}))}),[]),"pending"===r?(0,v.jsx)(f.RL,{height:"80",width:"80",radius:"48",color:"#4fa94d",ariaLabel:"watch-loading",wrapperStyle:{},visible:!0}):"rejected"===r?404===g.status?(0,v.jsx)(p.Z,{}):(0,v.jsx)(h.Z,{errorMessage:g.body}):"resolved"===r?j.length?(0,v.jsxs)(i,{children:[(0,v.jsx)("h2",{children:"REVIEWS"}),(0,v.jsx)("ul",{children:j.map((function(t){return(0,v.jsxs)("li",{children:[(0,v.jsx)("p",{children:t.author||"Author name is not found"}),(0,v.jsx)("p",{children:t.content||"Overview content is not found"})]},d()())}))})]}):(0,v.jsx)("div",{children:(0,v.jsx)("p",{children:"No veriews found"})}):void 0}},6429:function(t,e,n){"use strict";t.exports=n(5274)},8857:function(t,e,n){"use strict";var r,o,u,c=n(5408),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){u=!1}function a(t){if(t){if(t!==r){if(t.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==i&&(r=i,s())}function f(){return u||(u=function(){r||a(i);for(var t,e=r.split(""),n=[],o=c.nextValue();e.length>0;)o=c.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||i},characters:function(t){return a(t),r},seed:function(t){c.seed(t),o!==t&&(s(),o=t)},lookup:function(t){return f()[t]},shuffled:f}},7098:function(t,e,n){"use strict";var r,o,u=n(2226);n(8857);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=u(7),e+=u(t),r>0&&(e+=u(r)),e+=u(n)}},2226:function(t,e,n){"use strict";var r=n(8857),o=n(9139),u=n(2483);t.exports=function(t){for(var e,n=0,c="";!e;)c+=u(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return c}},5274:function(t,e,n){"use strict";var r=n(8857),o=n(7098),u=n(6046),c=n(5347)||0;function i(){return o(c)}t.exports=i,t.exports.generate=i,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return c=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=u},6046:function(t,e,n){"use strict";var r=n(8857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},9139:function(t){"use strict";var e,n="object"===typeof window&&(window.crypto||window.msCrypto);e=n&&n.getRandomValues?function(t){return n.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=e},5408:function(t){"use strict";var e=1;t.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(t){e=t}}},5347:function(t){"use strict";t.exports=0},2483:function(t){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),u="";;)for(var c=t(o),i=o;i--;)if((u+=e[c[i]&r]||"").length===+n)return u}}}]);
//# sourceMappingURL=519.5a9a5686.chunk.js.map