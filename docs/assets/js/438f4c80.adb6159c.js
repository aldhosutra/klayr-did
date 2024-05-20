"use strict";(self.webpackChunkklayr_did_docs=self.webpackChunkklayr_did_docs||[]).push([[4828],{876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=o(r),s=a,f=m["".concat(p,".").concat(s)]||m[s]||k[s]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:a,l[1]=d;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=r(7896),a=(r(2784),r(876));const i={id:"CipherInterface",title:"Interface: CipherInterface",sidebar_label:"CipherInterface",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"klayr-decentralized-identifier/interfaces/CipherInterface",id:"klayr-decentralized-identifier/interfaces/CipherInterface",title:"Interface: CipherInterface",description:"Properties",source:"@site/docs/klayr-decentralized-identifier/interfaces/CipherInterface.md",sourceDirName:"klayr-decentralized-identifier/interfaces",slug:"/klayr-decentralized-identifier/interfaces/CipherInterface",permalink:"/docs/klayr-decentralized-identifier/interfaces/CipherInterface",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CipherInterface",title:"Interface: CipherInterface",sidebar_label:"CipherInterface",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"BaseResolver",permalink:"/docs/klayr-decentralized-identifier/interfaces/BaseResolver"},next:{title:"CreateParam",permalink:"/docs/klayr-decentralized-identifier/interfaces/CreateParam"}},p={},o=[{value:"Properties",id:"properties",level:2},{value:"decrypt",id:"decrypt",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"encrypt",id:"encrypt",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:o},m="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"decrypt"},"decrypt"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"decrypt"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"jwe"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/klayr-decentralized-identifier/interfaces/JWEDocument"},(0,a.kt)("inlineCode",{parentName:"a"},"JWEDocument"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"keyAgreementKey"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/klayr-decentralized-identifier/modules#keyagreement"},(0,a.kt)("inlineCode",{parentName:"a"},"KeyAgreement")),"  }) => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"jwe")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/klayr-decentralized-identifier/interfaces/JWEDocument"},(0,a.kt)("inlineCode",{parentName:"a"},"JWEDocument")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"keyAgreementKey")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/klayr-decentralized-identifier/modules#keyagreement"},(0,a.kt)("inlineCode",{parentName:"a"},"KeyAgreement")))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L81"},"packages/klayr-decentralized-identifier/src/types/cryptography.ts:81")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"encrypt"},"encrypt"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"encrypt"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"keyResolver"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"url"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"recipients"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"header"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"alg"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"kid"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }  }[]  }) => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/klayr-decentralized-identifier/interfaces/JWEDocument"},(0,a.kt)("inlineCode",{parentName:"a"},"JWEDocument")),">"),(0,a.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/klayr-decentralized-identifier/interfaces/JWEDocument"},(0,a.kt)("inlineCode",{parentName:"a"},"JWEDocument")),">"),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"data")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"keyResolver")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"url"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"recipients")),(0,a.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,a.kt)("inlineCode",{parentName:"td"},"header"),": { ",(0,a.kt)("inlineCode",{parentName:"td"},"alg"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"td"},"kid"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),"  }  }[]")))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/klayr-decentralized-identifier/interfaces/JWEDocument"},(0,a.kt)("inlineCode",{parentName:"a"},"JWEDocument")),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L72"},"packages/klayr-decentralized-identifier/src/types/cryptography.ts:72")))}k.isMDXComponent=!0}}]);