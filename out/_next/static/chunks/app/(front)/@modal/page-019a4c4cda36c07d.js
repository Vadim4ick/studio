(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976,403,918],{3590:function(e,t,r){Promise.resolve().then(r.bind(r,7610))},7610:function(e,t,r){"use strict";r.d(t,{ModalRequest:function(){return p}});var n=r(7437),a=r(1554),o=r(2265),l=r(5127),i=r(1699),s=r(4839),c=r(6164);function d(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,c.m6)((0,s.W)(t))}let u=e=>{let t=(0,o.useRef)(null),{open:r,children:a,className:s="",onClose:c,close:u}=e,m=(0,o.useCallback)(()=>{c()},[c]),x=(0,o.useCallback)(e=>{t.current&&!t.current.contains(e.target)&&m()},[m]);return(0,o.useEffect)(()=>{let e=window.innerWidth-document.documentElement.clientWidth;return r?(document.addEventListener("mousedown",x),document.body.style.overflow="hidden",document.body.style.paddingRight="".concat(e,"px")):(document.removeEventListener("mousedown",x),document.body.style.overflow="auto",document.body.style.paddingRight="0px"),()=>{document.removeEventListener("mousedown",x),document.body.style.overflow="auto",document.body.style.paddingRight="0px"}},[x,r]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.M,{children:r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.E.div,{className:"relative z-50",ref:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,n.jsxs)("div",{className:d("fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",[s]),children:[a,u&&(0,n.jsx)("button",{className:"w-max",onClick:m,children:u})]})}),(0,n.jsx)("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-black/20 bg-opacity-70"})]})})})};var m=r(7892),x=r(9343),b=r(4883),h=r(6648);let f=()=>{let{register:e,handleSubmit:t,formState:{errors:r}}=(0,x.cI)();return(0,n.jsx)("div",{className:"w-full rounded-lg bg-white md:mt-0",children:(0,n.jsxs)("div",{className:"sm:py-17 m-auto flex w-full flex-col items-center gap-y-7 px-7 py-11",children:[(0,n.jsx)("h1",{className:"text-center text-xl font-bold leading-tight tracking-tight md:text-2xl",children:"Заявка на консультацию"}),(0,n.jsxs)("form",{onSubmit:t(e=>{console.log("data: ",e)}),className:"w-full space-y-4 md:space-y-6",action:"#",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"name",className:d("mb-1 block text-left text-base font-medium text-gray",{"text-hover-700":r.firstName}),children:"Ваше имя"}),(0,n.jsx)("input",{id:"name",className:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full border-b-2 border-b-primary-300 p-2.5 focus:border-b-cardBorderBottom focus:bg-white dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm",type:"text",placeholder:"Иванов ...",...e("firstName",{required:!0,maxLength:80})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"phone",className:d("mb-1 block text-left text-base font-medium text-gray",{"text-hover-700":r.phoneNumber}),children:"Ваш телефон"}),(0,n.jsx)("input",{id:"phone",className:"bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full border-b-2 border-b-primary-300 p-2.5 focus:border-b-cardBorderBottom  dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm",type:"tel",placeholder:"+7...",...e("phoneNumber",{required:!0,minLength:6,maxLength:12})})]}),(0,n.jsx)(b.z,{variant:"secondary",type:"submit",className:"w-full",children:"Отправить"})]}),(0,n.jsx)("p",{className:"text-[10px] font-medium text-gray",children:"Нажимая на кнопку \xabОтправить заявку\xbb, я даю согласие на обработку персональных данных и соглашаюсь c политикой конфиденциальности"}),(0,n.jsxs)("div",{className:"relative flex h-[95px] w-[215px] justify-center rounded-[10px] bg-primary-500 align-middle",children:[(0,n.jsx)(h.default,{src:"/image/magazine.png",alt:"magazine",width:122,height:73,style:{objectFit:"contain"}}),(0,n.jsx)("div",{className:"absolute -right-2 -top-2 flex h-[27px] w-[27px] items-center justify-center rounded-full border-4 border-white bg-gray",children:(0,n.jsx)(h.default,{src:"/image/closed_lock_icon 1.png",width:44,height:44,alt:"",style:{objectFit:"contain",height:"10px",width:"10px",paddingBottom:"1px"}})})]})]})})},p=()=>{let e=(0,m.eY)(a.zo);return(0,n.jsx)(u,{className:"w-full max-w-[500px] px-5",open:e,onClose:a.kX,children:(0,n.jsx)(f,{})})}},1554:function(e,t,r){"use strict";r.d(t,{MP:function(){return i},P7:function(){return c},QG:function(){return o},kX:function(){return s},v:function(){return l},zo:function(){return d}});let n=(0,r(4674).Fj)(),a=n.createEvent(),o=n.createEvent(),l=n.createEvent(),i=n.createEvent(),s=n.createEvent(),c=n.createStore(!1).on(a,()=>!0).on(o,()=>!1).on(l,e=>!e),d=n.createStore(!1).on(i,()=>!0).on(s,()=>!1)},4883:function(e,t,r){"use strict";r.d(t,{z:function(){return o}});var n=r(7437),a=r(4839);let o=e=>{let{children:t,className:r,variant:o="primary",...l}=e;return(0,n.jsx)("button",{className:(0,a.Z)("my-auto text-center text-white",{primary:"btn-primary",secondary:"btn-secondary",green:"btn-green",outline:"btn-outline"}[o],[r]),...l,children:t})}}},function(e){e.O(0,[19,648,858,135,327,971,23,744],function(){return e(e.s=3590)}),_N_E=e.O()}]);