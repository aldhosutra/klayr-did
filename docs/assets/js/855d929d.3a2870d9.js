"use strict";(self.webpackChunkklayr_did_docs=self.webpackChunkklayr_did_docs||[]).push([[6198],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,y=s["".concat(d,".").concat(f)]||s[f]||u[f]||i;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7896),a=(r(2784),r(876));const i={id:"TransactionPayloadWithoutSignature",title:"Interface: TransactionPayloadWithoutSignature<T>",sidebar_label:"TransactionPayloadWithoutSignature",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"klayr-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature",id:"klayr-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature",title:"Interface: TransactionPayloadWithoutSignature<T>",description:"Type parameters",source:"@site/docs/klayr-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature.md",sourceDirName:"klayr-decentralized-identifier/interfaces",slug:"/klayr-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature",permalink:"/docs/klayr-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TransactionPayloadWithoutSignature",title:"Interface: TransactionPayloadWithoutSignature<T>",sidebar_label:"TransactionPayloadWithoutSignature",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"TransactionPayload",permalink:"/docs/klayr-decentralized-identifier/interfaces/TransactionPayload"},next:{title:"VerificationMethod",permalink:"/docs/klayr-decentralized-identifier/interfaces/VerificationMethod"}},d={},c=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"fee",id:"fee",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"params",id:"params",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"fee"},"fee"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"fee"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-decentralized-identifier/src/types/client.ts#L71"},"packages/klayr-decentralized-identifier/src/types/client.ts:71")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nonce"},"nonce"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"nonce"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-decentralized-identifier/src/types/client.ts#L72"},"packages/klayr-decentralized-identifier/src/types/client.ts:72")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"params"},"params"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"params"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-decentralized-identifier/src/types/client.ts#L73"},"packages/klayr-decentralized-identifier/src/types/client.ts:73")))}u.isMDXComponent=!0}}]);