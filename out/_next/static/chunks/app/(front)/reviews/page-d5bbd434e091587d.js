(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{6016:function(e,t,n){Promise.resolve().then(n.bind(n,4259))},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var a=n(231),r=n.n(a)},1092:function(e,t,n){"use strict";n.d(t,{G:function(){return r}});var a=n(2265);let r=e=>{let{media:t,number:n}=e,r="(".concat(t,"-width: ").concat(n,"px)"),[i,l]=(0,a.useState)({matches:window.matchMedia(r).matches,media:r});return(0,a.useEffect)(()=>{let e=window.matchMedia(r),t=()=>{l({matches:e.matches,media:r})};return e.addEventListener("change",t),t(),()=>{e.removeEventListener("change",t)}},[r]),i}},4259:function(e,t,n){"use strict";n.d(t,{ReviewsPage:function(){return G}});var a,r=n(7437),i=n(5282),l=n(7451),s=n(6283),o=n(9047),u=n(6219);let c=(0,n(7521).X)(()=>void 0!==window.ScrollTimeline);class m{constructor(e){this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){let t=this.animations.map(t=>{if(!c()||!t.attachTimeline)return t.pause(),function(e,t){let n;let a=()=>{let{currentTime:a}=t,r=(null===a?0:a.value)/100;n!==r&&e(r),n=r};return u.Wi.update(a,!0),()=>(0,u.Pn)(a)}(e=>{t.time=t.duration*e},e);t.attachTimeline(e)});return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}var h=n(8688),f=n(8170),d=n(2714),p=n(8432),g=n(9334),v=n(9470),x=n(9653),y=n(557),A=n(2007),w=n(9924),j=n(3217),b=n(8322);function M(e,t,n,a){var r;return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?n:null!==(r=a.get(t))&&void 0!==r?r:e}let E=(e,t,n)=>{let a=t-e;return((n-e)%a+a)%a+e};var N=n(9379),k=n(8746),S=n(5004);function C(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}function _(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function D(e,t){return t[e]||(t[e]=[]),t[e]}let O=e=>"number"==typeof e,P=e=>e.every(O);function R(e,t,n,a){let r=(0,l.I)(e,a),i=r.length;(0,o.k)(!!i,"No valid element provided.");let u=[];for(let e=0;e<i;e++){let a=r[e];s.R.has(a)||function(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=(0,f.v)(e)?new d.e(t,{enableHardwareAcceleration:!1}):new p.W(t,{enableHardwareAcceleration:!0});n.mount(e),s.R.set(e,n)}(a);let l=s.R.get(a),o={...n};"function"==typeof o.delay&&(o.delay=o.delay(e,i)),u.push(...(0,h.w)(l,{...t,transition:o},{}))}return new m(u)}let T=e=>Array.isArray(e)&&Array.isArray(e[0]),X=function(e,t,n){let r;return r=T(e)?function(e,t,n){let a=[];return(function(e,{defaultTransition:t={},...n}={},a){let r=t.duration||.3,i=new Map,s=new Map,o={},u=new Map,c=0,m=0,h=0;for(let n=0;n<e.length;n++){let i=e[n];if("string"==typeof i){u.set(i,m);continue}if(!Array.isArray(i)){u.set(i.name,M(m,i.at,c,u));continue}let[f,d,p={}]=i;void 0!==p.at&&(m=M(m,p.at,c,u));let g=0,j=(e,n,a,i=0,l=0)=>{let s=Array.isArray(e)?e:[e],{delay:o=0,times:u=(0,A.Y)(s),type:c="keyframes",...f}=n,{ease:d=t.ease||"easeOut",duration:p}=n,j="function"==typeof o?o(i,l):o,b=s.length;if(b<=2&&"spring"===c){let e=100;2===b&&P(s)&&(e=Math.abs(s[1]-s[0]));let t={...f};void 0!==p&&(t.duration=(0,y.w)(p));let n=function(e,t=100){let n=(0,v.S)({keyframes:[0,t],...e}),a=Math.min((0,x.i)(n),x.E);return{type:"keyframes",ease:e=>n.next(a*e).value/t,duration:(0,y.X)(a)}}(t,e);d=n.ease,p=n.duration}null!=p||(p=r);let M=m+j,C=M+p;1===u.length&&0===u[0]&&(u[1]=1);let _=u.length-s.length;_>0&&(0,w.c)(u,_),1===s.length&&s.unshift(null),function(e,t,n,a,r,i){!function(e,t,n){for(let a=0;a<e.length;a++){let r=e[a];r.at>t&&r.at<n&&((0,k.cl)(e,r),a--)}}(e,r,i);for(let s=0;s<t.length;s++){var l;e.push({value:t[s],at:(0,S.t)(r,i,a[s]),easing:(l=s,(0,N.N)(n)?n[E(0,n.length,l)]:n)})}}(a,s,d,u,M,C),g=Math.max(j+p,g),h=Math.max(C,h)};if((0,b.i)(f))j(d,p,D("default",_(f,s)));else{let e=(0,l.I)(f,a,o),t=e.length;for(let n=0;n<t;n++){let a=_(e[n],s);for(let e in d)j(d[e],p[e]?{...p,...p[e]}:{...p},D(e,a),n,t)}}c=m,m+=g}return s.forEach((e,a)=>{for(let r in e){let l=e[r];l.sort(C);let s=[],o=[],u=[];for(let e=0;e<l.length;e++){let{at:t,value:n,easing:a}=l[e];s.push(n),o.push((0,j.Y)(0,h,t)),u.push(a||"easeOut")}0!==o[0]&&(o.unshift(0),s.unshift(s[0]),u.unshift("easeInOut")),1!==o[o.length-1]&&(o.push(1),s.push(null)),i.has(a)||i.set(a,{keyframes:{},transition:{}});let c=i.get(a);c.keyframes[r]=s,c.transition[r]={...t,duration:h,ease:u,times:o,...n}}}),i})(e,t,n).forEach(({keyframes:e,transition:t},n)=>{let r;r=(0,b.i)(n)?(0,g.D)(n,e.default,t.default):R(n,e,t),a.push(r)}),new m(a)}(e,t,void 0):"object"!=typeof t||Array.isArray(t)?(0,g.D)(e,t,n):R(e,t,n,a),a&&a.animations.push(r),r};var I=n(1699),W=n(1092),B=n(7138);let L=e=>{let{imageUrl:t,title:n,imageUrl2X:a,id:l}=e,s=(0,W.G)({media:"max",number:768}),o=(0,i.c)(0),u=(0,i.c)(0),c=(e,t,n)=>Math.max(t,Math.min(e,n));return(0,r.jsxs)(B.default,{href:"/reviews/".concat(l),className:"mx-auto flex max-w-[1100px] flex-col gap-4",children:[(0,r.jsx)("p",{className:"text text-xl font-semibold",children:n}),(0,r.jsx)(I.E.div,{onMouseMove:s.matches?void 0:e=>{let{clientX:t,clientY:n,currentTarget:a}=e,{width:r,height:i,left:l,top:s}=a.getBoundingClientRect(),m=c(-(n-s-i/2)/i*30,-15,15),h=c((t-l-r/2)/r*30,-15,15);o.set(m),u.set(h)},onMouseLeave:s.matches?void 0:()=>{X(o,0,{duration:.5}),X(u,0,{duration:.5})},style:{perspective:1e3},className:"relative",children:(0,r.jsx)(I.E.img,{style:{rotateX:o,rotateY:u,transformStyle:"preserve-3d"},src:t,srcSet:a?"".concat(a," 2x"):void 0,alt:"1",className:"object-contain"})})]})},Y=[{id:1,title:"Creatin",imageUrl:"/image/projects/creatin/logo.png",imageUrl2X:"/image/projects/creatin/logo@2x.png",link:"https://creatin.ru/",subTitle:"Создание для дизайнерской веб-студии - Creatin.",images:["/image/projects/creatin/moreDetails/1.png","/image/projects/creatin/moreDetails/2.png","/image/projects/creatin/moreDetails/3.png","/image/projects/creatin/moreDetails/4.png"],aboutProject:"Компания Creatin обратилась к нам, чтобы заказать корпоративный сайт. В результате мы создали сайт с полноценной админ панелью и так же в результате мы сделали выкладку на VPS сервер."}],q=()=>(0,r.jsxs)("section",{className:"relative py-20 lg:py-24",children:[(0,r.jsxs)("h2",{className:"text mb-16  text-lg font-extrabold md:text-2xl lg:text-4xl",children:["Избранные ",(0,r.jsx)("span",{className:"text-primary-500",children:"проекты"})]}),(0,r.jsx)("div",{className:"grid grid-cols-2 gap-10 max-md:grid-cols-1",children:Y.map((e,t)=>(0,r.jsx)(L,{...e},t))})]}),G=()=>(0,r.jsx)("main",{className:"relative mx-auto max-w-[1280px] px-4",children:(0,r.jsx)(q,{})})},7451:function(e,t,n){"use strict";n.d(t,{I:function(){return r}});var a=n(9047);function r(e,t,n){var r;if("string"==typeof e){let i=document;t&&((0,a.k)(!!t.current,"Scope provided, but no element detected."),i=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},5282:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var a=n(2265),r=n(804),i=n(9791),l=n(458);function s(e){let t=(0,l.h)(()=>(0,r.BX)(e)),{isStatic:n}=(0,a.useContext)(i._);if(n){let[,n]=(0,a.useState)(e);(0,a.useEffect)(()=>t.on("change",n),[])}return t}}},function(e){e.O(0,[19,231,971,23,744],function(){return e(e.s=6016)}),_N_E=e.O()}]);