"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[9586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Descripci\xf3n general",description:"Descripci\xf3n general de los nodos de Casibase",keywords:["nodos"],authors:["leoil","IsAurora6"]},i=void 0,l={unversionedId:"node/overview",id:"node/overview",title:"Descripci\xf3n general",description:"Descripci\xf3n general de los nodos de Casibase",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/node/overview.md",sourceDirName:"node",slug:"/node/overview",permalink:"/es/docs/node/overview",draft:!1,editUrl:"https://github.com/casibase/casibase-website/edit/master/docs/node/overview.md",tags:[],version:"current",frontMatter:{title:"Descripci\xf3n general",description:"Descripci\xf3n general de los nodos de Casibase",keywords:["nodos"],authors:["leoil","IsAurora6"]},sidebar:"tutorialSidebar",previous:{title:"Nodes",permalink:"/es/docs/category/nodes"},next:{title:"Protocolo de Escritorio Remoto (RDP)",permalink:"/es/docs/node/rdp"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casibase le ayuda a administrar nodos y conectarse de forma remota a sus nodos a trav\xe9s de RDP, VNC, SSH y Telnet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Protocolos"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Shell Seguro"),(0,o.kt)("li",{parentName:"ul"},"Protocolo de Escritorio Remoto"),(0,o.kt)("li",{parentName:"ul"},"Control remoto VNC"),(0,o.kt)("li",{parentName:"ul"},"Protocolo Telnet")),(0,o.kt)("p",null,"Cada nodo tiene los siguientes atributos b\xe1sicos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Organizaci\xf3n"),": la organizaci\xf3n a la que pertenece el nodo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Nombre"),": nombre \xfanico del nodo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Descripci\xf3n"),": descripci\xf3n del nodo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IP"),": nombre de dominio o direcci\xf3n IP."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Protocolo"),": n\xfamero de puerto del protocolo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Puerto"),": n\xfamero de puerto del nodo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Nombre de usuario"),": nombre de usuario para conectarse al nodo, como ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"administrator"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"sa"),", etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Contrase\xf1a"),": contrase\xf1a para conectarse al nodo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sistema operativo"),": sistema operativo del nodo, incluidos ",(0,o.kt)("inlineCode",{parentName:"li"},"Windows")," y ",(0,o.kt)("inlineCode",{parentName:"li"},"Linux"),", utilizado para clasificar nodos."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Etiquetas"),": etiquetas del nodo, utilizadas para clasificar nodos.")),(0,o.kt)("p",null,"En este cap\xedtulo, aprender\xe1 c\xf3mo comenzar a conectarse a sus nodos."),(0,o.kt)("p",null,"\xa1Exploremos juntos!"))}u.isMDXComponent=!0}}]);