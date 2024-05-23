"use strict";(self.webpackChunkklayr_did_docs=self.webpackChunkklayr_did_docs||[]).push([[3576],{876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(f,d(d({ref:t},s),{},{components:r})):n.createElement(f,d({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,d[1]=l;for(var p=2;p<i;p++)d[p]=r[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7896),a=(r(2784),r(876));const i={id:"did.BaseResolver",title:"Interface: BaseResolver",sidebar_label:"did.BaseResolver",custom_edit_url:null},d=void 0,l={unversionedId:"klayr-did/interfaces/did.BaseResolver",id:"klayr-did/interfaces/did.BaseResolver",title:"Interface: BaseResolver",description:"did.BaseResolver",source:"@site/docs/klayr-did/interfaces/did.BaseResolver.md",sourceDirName:"klayr-did/interfaces",slug:"/klayr-did/interfaces/did.BaseResolver",permalink:"/docs/klayr-did/interfaces/did.BaseResolver",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"did.BaseResolver",title:"Interface: BaseResolver",sidebar_label:"did.BaseResolver",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"did.AuthorizationFactors",permalink:"/docs/klayr-did/interfaces/did.AuthorizationFactors"},next:{title:"did.CipherInterface",permalink:"/docs/klayr-did/interfaces/did.CipherInterface"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"get",id:"get",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4}],s={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/klayr-did/namespaces/did"},"did"),".BaseResolver"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"get"},"get"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"get"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"did?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"url?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }) => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/klayr-did/interfaces/did.DidDocument"},(0,a.kt)("inlineCode",{parentName:"a"},"DidDocument")),">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/klayr-did/interfaces/did.DidDocument"},(0,a.kt)("inlineCode",{parentName:"a"},"DidDocument")),">"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"did?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"url?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/klayr-did/interfaces/did.DidDocument"},(0,a.kt)("inlineCode",{parentName:"a"},"DidDocument")),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"packages/klayr-decentralized-identifier/dist/types/resolver.d.ts:11"))}u.isMDXComponent=!0}}]);