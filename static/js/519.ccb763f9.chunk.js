"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[519],{841:function(n,e,t){t.d(e,{$u:function(){return f},M1:function(){return v},Wf:function(){return h},r3:function(){return l},tx:function(){return w}});var r=t(5861),c=t(4687),i=t.n(c),o=t(1243),a="https://api.themoviedb.org/3/",u="f5947bee69b0eabce6ba631e79612468";function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:throw n.prev=7,n.t0=n.catch(0),console.log(n.t0.message),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("".concat(a,"trending/all/day?api_key=").concat(u,"&page=1")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return s("".concat(a,"search/movie?api_key=").concat(u,"&query=").concat(n,"&page=1"))}function l(n){return s("".concat(a,"movie/").concat(n,"?api_key=").concat(u))}function v(n){return s("".concat(a,"movie/").concat(n,"/credits?api_key=").concat(u))}function w(n){return s("".concat(a,"movie/").concat(n,"/reviews?api_key=").concat(u))}},1519:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r,c=t(9439),i=t(2791),o=t(168),a=t(7402).Z.div(r||(r=(0,o.Z)([""]))),u=t(7689),s=t(841),p=t(8966),f=t(184),d=function(){var n=(0,u.UO)().movieId,e=(0,i.useState)("pending"),t=(0,c.Z)(e,2),r=t[0],o=t[1],d=(0,i.useState)([]),h=(0,c.Z)(d,2),l=h[0],v=h[1];return(0,i.useEffect)((function(){(0,s.tx)(n).then((function(n){v(n.data.results),o("resolved")}))}),[]),"pending"===r?(0,f.jsx)(p.RL,{height:"80",width:"80",radius:"48",color:"#4fa94d",ariaLabel:"watch-loading",wrapperStyle:{},visible:!0}):"resolved"===r?l.length?(0,f.jsxs)(a,{children:[(0,f.jsx)("h2",{children:"REVIEWS"}),(0,f.jsx)("ul",{children:l.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsx)("p",{children:n.author||"Author name is not found"}),(0,f.jsx)("p",{children:n.content||"Overview content is not found"})]})}))})]}):(0,f.jsx)("div",{children:(0,f.jsx)("p",{children:"No veriews found"})}):void 0}}}]);
//# sourceMappingURL=519.ccb763f9.chunk.js.map