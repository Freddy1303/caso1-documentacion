"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[6194],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>g});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?t.createElement(g,i(i({ref:a},p),{},{components:n})):t.createElement(g,i({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88930:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const s={},i="Plantillas de mensajes",l={unversionedId:"configuracion-inicial/Plantillas-de-mensajes",id:"configuracion-inicial/Plantillas-de-mensajes",title:"Plantillas de mensajes",description:"Las plantillas de mensajes son modelos de mensajes que pueden ser utilizados para enviar un mensaje por WhatsApp a un cliente que no se ha puesto en contacto antes con su empresa o que tiene m\xe1s de 24 horas sin responder a un chat existente.",source:"@site/docs/configuracion-inicial/05-Plantillas-de-mensajes.md",sourceDirName:"configuracion-inicial",slug:"/configuracion-inicial/Plantillas-de-mensajes",permalink:"/documentacion/configuracion-inicial/Plantillas-de-mensajes",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Equipos",permalink:"/documentacion/configuracion-inicial/equipos"},next:{title:"Configuraci\xf3n adicional",permalink:"/documentacion/configuracion-adicional"}},o={},c=[{value:"Requisitos",id:"requisitos",level:2},{value:"Categor\xedas de plantillas admitidas",id:"categor\xedas-de-plantillas-admitidas",level:2},{value:"Agrega muestras en tu plantilla de mensaje",id:"agrega-muestras-en-tu-plantilla-de-mensaje",level:2},{value:"Gu\xeda paso a paso en video",id:"gu\xeda-paso-a-paso-en-video",level:2}],p={toc:c},u="wrapper";function d(e){let{components:a,...s}=e;return(0,r.kt)(u,(0,t.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plantillas-de-mensajes"},"Plantillas de mensajes"),(0,r.kt)("p",null,"Las plantillas de mensajes son modelos de mensajes que pueden ser utilizados para enviar un mensaje por WhatsApp a un cliente que no se ha puesto en contacto antes con su empresa o que tiene m\xe1s de 24 horas sin responder a un chat existente."),(0,r.kt)("p",null,"Esta opci\xf3n ha sido creada para evitar que los clientes reciban mensajes de spam de las empresas y para mantener el elevado valor de WhatsApp como canal de interacci\xf3n entre los clientes y las empresas. Esta es la raz\xf3n por la que los modelos de Mensajes deben ser aprobados previamente."),(0,r.kt)("p",null,"Para comprender bien el funcionamiento de los modelos de mensajes, es necesario comprender el funcionamiento de la ",(0,r.kt)("a",{parentName:"p",href:"https://www.whatsapp.com/legal/business-policy/?lang=es"},"\u201cVentana temporal de 24 horas\u201c"),". Esta ventana corresponde a un periodo de tiempo de 24 horas que empieza en el momento que el cliente se pone en contacto con la empresa a trav\xe9s de WhatsApp o responde a una plantilla enviada por la empresa. Durante estas 24 horas, WhatsApp permite a la empresa comunicarse con el cliente con mensajes de sesi\xf3n (es decir, permite a la empresa escribir libremente al cliente utilizando texto, im\xe1genes, documentos, etc.)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transcurridas las 24 horas desde el \xfaltimo mensaje del cliente (o si el cliente nunca se ha puesto en contacto con su empresa), ser\xe1 necesario utilizar una plantilla de mensaje que debe ser aprobada previamente por WhatsApp.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(79229).Z,width:"919",height:"346"})),(0,r.kt)("h2",{id:"requisitos"},"Requisitos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"La plantilla de mensaje debe aprobarse antes de poder usarla para iniciar una conversaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"Para poder comenzar una conversaci\xf3n iniciada por la empresa, es necesario que el cliente haya aceptado recibir mensajes de tu empresa.")),(0,r.kt)("admonition",{title:"IMPORTANTE:",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"A partir del 1 de Junio del 2023, se cambiar\xe1n las categor\xedas, por favor revisar el ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/documentacion/whatsapp-api-facebook/Actualizaciones-de-precios-basados%20-en-conversaciones-WhatsApp-API-a-partir-del-1-de-Abril-de-2023"},"art\xedculo"),"."))),(0,r.kt)("h2",{id:"categor\xedas-de-plantillas-admitidas"},"Categor\xedas de plantillas admitidas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Marketing:")," env\xeda ofertas promocionales, novedades de productos y m\xe1s con el objetivo de incrementar el reconocimiento y la interacci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Autenticaci\xf3n:")," env\xeda c\xf3digos que permiten a los clientes acceder de manera segura a sus cuentas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Servicios p\xfablicos/Utilidad:")," env\xeda actualizaciones relacionadas con la cuenta y con los pedidos, alertas, etc, con el objetivo de compartir informaci\xf3n importante.")),(0,r.kt)("h2",{id:"agrega-muestras-en-tu-plantilla-de-mensaje"},"Agrega muestras en tu plantilla de mensaje"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Te recomendamos que agregues una muestra antes de enviar la plantilla para su aprobaci\xf3n.")," Las muestras te permiten proporcionar los activos multimedia y los valores de texto de muestra relacionados con las variables de texto o el contenido multimedia que requiere tu plantilla. De esta manera, la tarea de visualizar el modo en que los clientes ver\xe1n tu plantilla es m\xe1s sencilla."),(0,r.kt)("p",null,"Adem\xe1s, si se rechaza la plantilla que enviaste y decides apelar, ser\xe1 necesario, de todos modos, que incluyas una muestra en tu apelaci\xf3n. Por este motivo, es mejor incluir una desde el inicio."),(0,r.kt)("p",null,"Para incluir una muestra en el env\xedo, primero crea la plantilla, agrega las variables necesarias y, luego, haz clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},'"Agregar Muestra"')," "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(69916).Z,width:"1798",height:"442"})),(0,r.kt)("p",null,"En el panel de vista previa ver\xe1s los activos multimedia o los valores de texto de muestra que proporcionaste. Finalmente selecciona el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},'"Listo"')," y envia la plantilla para su aprobaci\xf3n."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(98508).Z,width:"710",height:"312"})),(0,r.kt)("h2",{id:"gu\xeda-paso-a-paso-en-video"},"Gu\xeda paso a paso en video"),(0,r.kt)("p",null,(0,r.kt)("iframe",{width:"100%",height:"505",src:"https://www.youtube.com/embed/HdmZBUs1abc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:"allowfullscreen"})))}d.isMDXComponent=!0},79229:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Plantillas-de-mensajes-01-4b2b57f3207e82936b4b5dff34e52896.png"},69916:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Plantillas-de-mensajes-02-ae9c64322bf9500b1164d17d5844eaee.jpg"},98508:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Plantillas-de-mensajes-03-e8714164001d0333cea85e962e8f32c8.jpg"}}]);