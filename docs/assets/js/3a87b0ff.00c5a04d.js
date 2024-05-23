"use strict";(self.webpackChunkklayr_did_docs=self.webpackChunkklayr_did_docs||[]).push([[6820],{876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=p(n),u=i,c=k["".concat(o,".").concat(u)]||k[u]||s[u]||r;return n?a.createElement(c,d(d({ref:t},m),{},{components:n})):a.createElement(c,d({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[k]="string"==typeof e?e:i,d[1]=l;for(var p=2;p<r;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(876));const r={id:"did.DidEndpoint",title:"Interface: DidEndpoint",sidebar_label:"did.DidEndpoint",custom_edit_url:null},d=void 0,l={unversionedId:"klayr-did/interfaces/did.DidEndpoint",id:"klayr-did/interfaces/did.DidEndpoint",title:"Interface: DidEndpoint",description:"did.DidEndpoint",source:"@site/docs/klayr-did/interfaces/did.DidEndpoint.md",sourceDirName:"klayr-did/interfaces",slug:"/klayr-did/interfaces/did.DidEndpoint",permalink:"/docs/klayr-did/interfaces/did.DidEndpoint",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"did.DidEndpoint",title:"Interface: DidEndpoint",sidebar_label:"did.DidEndpoint",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"did.DidDocument",permalink:"/docs/klayr-did/interfaces/did.DidDocument"},next:{title:"did.DidMethod",permalink:"/docs/klayr-did/interfaces/did.DidMethod"}},o={},p=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Methods",id:"methods",level:2},{value:"authorize",id:"authorize",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getConfig",id:"getconfig",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getNonce",id:"getnonce",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"init",id:"init",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"read",id:"read",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}],m={toc:p},k="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/klayr-did/namespaces/did"},"did"),".DidEndpoint"),(0,i.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/klayr-did/classes/DidEndpoint"},(0,i.kt)("inlineCode",{parentName:"a"},"DidEndpoint")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"authorize"},"authorize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"authorize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/klayr-did/namespaces/did#authorizationresult"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthorizationResult")),"[]",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ModuleEndpointContext"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/klayr-did/namespaces/did#authorizationresult"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthorizationResult")),"[]",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"packages/klayr-decentralized-identifier/dist/types/endpoint.d.ts:10"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getconfig"},"getConfig"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getConfig"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/klayr-did/interfaces/did.DidModuleConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"DidModuleConfig")),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ModuleEndpointContext"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/klayr-did/interfaces/did.DidModuleConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"DidModuleConfig")),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"packages/klayr-decentralized-identifier/dist/types/endpoint.d.ts:7"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getnonce"},"getNonce"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getNonce"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ModuleEndpointContext"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"packages/klayr-decentralized-identifier/dist/types/endpoint.d.ts:9"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"init"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/klayr-did/interfaces/did.DidModuleConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"DidModuleConfig")))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"packages/klayr-decentralized-identifier/dist/types/endpoint.d.ts:6"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"read"},"read"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"read"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/klayr-did/interfaces/did.DidDocument"},(0,i.kt)("inlineCode",{parentName:"a"},"DidDocument")),">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ModuleEndpointContext"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/klayr-did/interfaces/did.DidDocument"},(0,i.kt)("inlineCode",{parentName:"a"},"DidDocument")),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"packages/klayr-decentralized-identifier/dist/types/endpoint.d.ts:8"))}s.isMDXComponent=!0}}]);