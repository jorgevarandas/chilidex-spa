(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(38)},23:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(16),c=a.n(s),r=(a(23),a(2)),l=a(3),o=a(6),u=a(5),m=a(7),p=a(41),h={},d=h.hasOwnProperty,f=function(){function e(){Object(r.a)(this,e)}return Object(l.a)(e,[{key:"addListener",value:function(e,t){d.call(h,e)||(h[e]=[]);var a=h[e].push(t)-1;return{remove:function(){delete h[e][a]}}}},{key:"emitEvent",value:function(e,t){d.call(h,e)&&h[e].forEach(function(e){e(void 0!==t?t:{})})}}]),e}(),v="onstart",g="onchangedroute",E="route",_="update-height",b=function(){function e(t){Object(r.a)(this,e),this.target=t,this.events=new f,this.listenForMessages()}return Object(l.a)(e,[{key:"listenForMessages",value:function(){window.addEventListener("message",this.onMessageReceived.bind(this),!1)}},{key:"sendMessage",value:function(e){var t=JSON.stringify(e);this.target.postMessage(t,"*")}},{key:"onMessageReceived",value:function(e){if("react-devtools-detector"===e.data.source)return!1;var t=JSON.parse(e.data),a=t.action;if(a)switch(a){case"start":this.events.emitEvent(v,{parentURL:t.parentURL})}}}]),e}(),y=a(1),O=a.n(y),N=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).isFirstLoad=!0,e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.events;this.events=e,this.handleLocationChange(this.context.router.history.location),this.unlisten=this.context.router.history.listen(this.handleLocationChange.bind(this))}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"handleLocationChange",value:function(e){this.isFirstLoad||e.pathname===this.lastLocation?this.isFirstLoad=!1:this.events.emitEvent(g,{action:E,route:e.pathname}),this.lastLocation=e.pathname}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component);N.contextTypes={router:O.a.object};var j=a(40),L=a(39),k=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"nav__list"},i.a.createElement("li",{className:"nav__item"},i.a.createElement(L.a,{className:"nav__link",to:"/"},"A\xfame")),i.a.createElement("li",{className:"nav__item"},i.a.createElement(L.a,{className:"nav__link",to:"/about"},"Abaute")),i.a.createElement("li",{className:"nav__item"},i.a.createElement(L.a,{className:"nav__link",to:"/chilies"},"Xiliche")),i.a.createElement("li",{className:"nav__item"},i.a.createElement(L.a,{className:"nav__link",to:"/scovillescale"},"Scoville Scale")))))}}]),t}(n.Component),x=a(10),w=a.n(x),U=function(){function e(t){Object(r.a)(this,e),this.canonicalURL=t.canonicalURL,this.name=t.name,this.prefix=this.key,this.description=t.description}return Object(l.a)(e,[{key:"generateMetatags",value:function(){var e=[];return e.push(i.a.createElement("meta",{key:"".concat(this.prefix,"_charset"),charSet:"utf-8"})),e.push(i.a.createElement("title",{key:"".concat(this.prefix,"_title")},this.name)),e.push(i.a.createElement("meta",{key:"".concat(this.prefix,"_description"),name:"description",content:this.description})),this.canonicalURL&&""!==this.canonicalURL&&e.push(i.a.createElement("link",{key:"".concat(this.prefix,"_canonical"),rel:"canonical",href:this.canonicalURL})),e}}]),e}(),R=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateMetatags",value:function(){var e=this.props,t=e.parentURL,a=e.match,n=e.name,i=t&&""!==t?"".concat(t+a.path):"",s=new U({name:n,canonicalURL:i||"",prefix:"about",description:"De xiliche p\xe9per, also xile, xile p\xe9per, xiliche p\xe9per, or xiliche ferom Nahuatl x\xedlis, is de feruite ofe pelantes belonguinge tu de members ofe de femali Solanaceae"});this.metatags=s.generateMetatags()}},{key:"render",value:function(){return this.updateMetatags(),i.a.createElement("section",{className:"section"},i.a.createElement(w.a,null,this.metatags),i.a.createElement("header",{className:"section__header"},i.a.createElement("h2",{className:"section__title"},"Abaute")),i.a.createElement("div",{className:"section__content"},i.a.createElement("p",{className:"section__paragraph"},"De xiliche p\xe9per, also xile, xile p\xe9per, xiliche p\xe9per, or xiliche ferom Nahuatl x\xedlis, is de feruite ofe pelantes belonguinge tu de members ofe de femali Solanaceae."),i.a.createElement("p",{className:"section__paragraph"},"Aboute tirdy sepicies egexiste as cherubs wit braigtli colured, mousteli sepaicy, feruites."),i.a.createElement("p",{className:"section__paragraph"},"Xiliche p\xe9peres \xe1re uaideli iusede ine mani cuisines tu ade spaicinesse tu diches."),i.a.createElement("p",{className:"section__paragraph"},"De subestances dat guive xili p\xe9pers deir punguenci u\xe9n ingested \xf3r aplaied topicaly ar capsaicin and related capsaicinoids."),i.a.createElement("p",{className:"section__paragraph"},"Cultivares grou in Nort America ande Europe ar belived tu ale derive ferom Capsicum annuum, ande ave uaite, ielou, rede or purpale tu blaque fruites."),i.a.createElement("p",{className:"section__paragraph"},"Ine 2016, uorlde prodaction ofe rou guereene xili p\xe9peres uaze 34.5 milione tonnes, wide Xina producing \xe1lfe ofe de uorlde toutal.")))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).chiliesList=[{name:"Fiery Gut of Doom",heat:"Nuclear"},{name:"Molten Lava",heat:"Nuclear"},{name:"Face Melter",heat:"Nuclear"},{name:"Manly Pepper",heat:"Very Hot"},{name:"Fairy spice",heat:"Mild"}],e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateMetatags",value:function(){var e=this.props,t=e.parentURL,a=e.match,n=e.name,i=t&&""!==t?"".concat(t+a.path):"",s=new U({name:n,canonicalURL:i||"",prefix:"chilies",description:"A bucket full of made up chili species"});this.metatags=s.generateMetatags()}},{key:"generateChilisList",value:function(){for(var e=[],t=0;t<this.chiliesList.length;t++){var a=this.chiliesList[t];e.push(i.a.createElement("li",{key:t},a.name," - ",a.heat))}return e}},{key:"render",value:function(){var e=this.generateChilisList();return this.updateMetatags(),i.a.createElement("section",{className:"section"},i.a.createElement(w.a,null,this.metatags),i.a.createElement("header",{className:"section__header"},i.a.createElement("h2",{className:"section__title"},"Chili Peppers")),i.a.createElement("div",{className:"section__content"},i.a.createElement("ul",{className:"section__list"},e)))}}]),t}(n.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateMetatags",value:function(){var e=this.props,t=e.parentURL,a=e.name,n=t&&""!==t?"".concat(t):"",i=new U({name:a,canonicalURL:n&&""!==n?n:"",prefix:"home",description:"This is but a silly PoC to try to understand some stuff regarding how SEO works within iframes and SPAs"});this.metatags=i.generateMetatags()}},{key:"render",value:function(){return this.updateMetatags(),i.a.createElement("section",{className:"section"},i.a.createElement(w.a,null,this.metatags),i.a.createElement("header",{className:"section__header"},i.a.createElement("h2",{className:"section__title"},"Welcome to Chilidex")),i.a.createElement("div",{className:"section__content"},i.a.createElement("p",{className:"section__paragraph"},"This is but a silly PoC to try to understand some stuff regarding how SEO works within iframes and SPA's"),i.a.createElement("p",{className:"section__paragraph"},"Spicy subject we know... ",i.a.createElement("span",null,"\ud83d\udd25")," ",i.a.createElement("span",null,"\ud83d\udd25")," ",i.a.createElement("span",null,"\ud83d\udd25")," "),i.a.createElement("p",{className:"section__paragraph"},"Mei ",i.a.createElement("strong",null,"*da*")," Guguele ind\xe9cse dize!!! "),i.a.createElement("p",{className:"section__paragraph"},"L\xe9te da cili s\xedzoune bigu\xedne:"),i.a.createElement("aside",{className:"section__well"},i.a.createElement("h3",{className:"section__wellTitle"},"Dide iu nou? ",i.a.createElement("span",null,"\ud83d\udca1")),i.a.createElement("p",{className:"section__wellText"},"Uaile r\xe9de xilis caunte\xedn l\xe1rege amauntes ove vaitamine Si, \xf3dere spicish caunte\xedn siguenificante amauntes ove of provaitamine Ei beita-caroutine. \xcdne adishoune, p\xe9pares \xe0r ei rixe s\xf3rce ove vaitamine Bissix."))))}}]),t}(n.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateMetatags",value:function(){var e=this.props,t=e.parentURL,a=e.match,n=e.name,i=t&&""!==t?"".concat(t+a.path):"",s=new U({name:n,canonicalURL:i||"",prefix:"scovillescale",description:'De Scovillilas squeille iz a m\xe9zuremente ofe de pungenci (spicinesse ore "iit") ofe chili p\xe9pperes ende oder spici fudes'});this.metatags=s.generateMetatags()}},{key:"render",value:function(){return this.updateMetatags(),i.a.createElement("section",{className:"section"},i.a.createElement(w.a,null,this.metatags),i.a.createElement("header",{className:"section__header"},i.a.createElement("h2",{className:"section__title"},"Scovillilas squeille")),i.a.createElement("div",{className:"section__content"},i.a.createElement("p",{className:"section__paragraph"},'De Scovillilas squeille iz a m\xe9zuremente ofe de pungenci (spicinesse ore "iit") ofe chili p\xe9pperes ende oder spici fudes, ez ricordid ine Scovillilas Hiit IUnits (SHU) \xdfeized on de concentracion of capseicinuids, amongue u\xedche capsaicin ize de preduminante cumpunente.'),i.a.createElement("p",{className:"section__paragraph"},"De squeille ize neimed afetere ietz qureator, Americone Fpharmaxist Wisal\xdfur Scovillilas, ooze 191a2 meshod ize kenowne ez th\xdf\xdfe Scoville organol\xe9ptec tezt."),i.a.createElement("p",{className:"section__paragraph"},"Ine de 21set centori, Ai-parfureance liquide cromatugrafy (HPaLC) ize osed tu cuantifie de capsaicoinoid contiente ase en indicatore ofe pongencie. De muxt espediante metode fure xetimetingue SHyU is a su\xdfjequetive ass\xe9ssssmente derivede frum dee capsaicinoid sensitivity \xdfye people experiencede wid eatingue hotte chiliesss.")))}}]),t}(n.Component),z=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.parentURL;return i.a.createElement("div",{className:"App"},i.a.createElement("main",{className:"App-main"},i.a.createElement(j.a,{exact:!0,path:"/",render:function(t){return i.a.createElement(C,Object.assign({},t,{parentURL:e,name:"Chilidex | A\xfame"}))}}),i.a.createElement(j.a,{path:"/about",render:function(t){return i.a.createElement(R,Object.assign({},t,{parentURL:e,name:"Chilidex | Abaute"}))}}),i.a.createElement(j.a,{path:"/chilies",render:function(t){return i.a.createElement(M,Object.assign({},t,{parentURL:e,name:"Chilidex | Xiliche"}))}}),i.a.createElement(j.a,{path:"/scovillescale",render:function(t){return i.a.createElement(S,Object.assign({},t,{parentURL:e,name:"Chilidex | Scovillilas squeille"}))}})),i.a.createElement(k,null))}}]),t}(n.Component),A=(a(35),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).events=new f,e.messageBus=new b(window.parent),e.addListeners(),e.state={parentURL:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addListeners",value:function(){this.events.addListener(v,this.onStart.bind(this)),this.events.addListener(g,this.onRouteChanged.bind(this))}},{key:"onRouteChanged",value:function(e){this.messageBus.sendMessage(e,"*")}},{key:"onStart",value:function(e){this.messageBus.sendMessage({action:_,height:500}),this.setState({parentURL:e.parentURL})}},{key:"render",value:function(){var e=this.state.parentURL;return i.a.createElement(p.a,null,i.a.createElement(N,{events:this.events},i.a.createElement(z,{parentURL:e})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.3fb3f083.chunk.js.map