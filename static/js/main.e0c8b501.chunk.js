(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Toronto Mapple-Leafs",clicked:!1,image:"https://clipart.info/images/ccovers/1526525417Toronto-Nhl-Png-Logo.png"},{id:2,name:"Phoenix Coyotes",clicked:!1,image:"https://clipart.info/images/ccovers/1526525417Phoenix-Coyotes-Arizona-Logo-NHL.png"},{id:3,name:"Colorado Avalanche",clicked:!1,image:"https://clipart.info/images/ccovers/1526525416colorado-avalanche-logo-nhl-png.png"},{id:4,name:"Pittsburgh Penguins",clicked:!1,image:"https://clipart.info/images/ccovers/1526525416pittsburgh-penguins-nhl-logo.gif"},{id:5,name:"Vancouver Canucks",clicked:!1,image:"https://clipart.info/images/ccovers/1526525416vancouver-canucks-nhl-logo-png.png"},{id:6,name:"Anaheim Ducks",clicked:!1,image:"https://clipart.info/images/ccovers/1526525412anaheim-ducks-nhl-logo.png"},{id:7,name:"Chicago Blackhawks",clicked:!1,image:"https://clipart.info/images/ccovers/1526525412Chicago-Blackhawks-nhl-logo.png"},{id:8,name:"New York Rangers",clicked:!1,image:"https://clipart.info/images/ccovers/1526525411New-York-Rangers-Nhl-logo-png.png"},{id:9,name:"Detroit Red Wings",clicked:!1,image:"https://clipart.info/images/ccovers/1526525409Detroit-Red-Wings-logo-png-nhl.png"},{id:10,name:"Ottawa Senators",clicked:!1,image:"https://clipart.info/images/ccovers/1526525408the-ottawa-senators-nhl-logo.png"},{id:11,name:"Columbus Blue Jackets",clicked:!1,image:"https://clipart.info/images/ccovers/1526525410Columbus-Blue-Jackets-Logo-Nhl-Logo.png"},{id:12,name:"Vegas Golden Knights",clicked:!1,image:"https://clipart.info/images/ccovers/1526525410vegas-golden-knights-nhl-logo-official.png"}]},,,function(e,n,t){e.exports=t(19)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(2),c=t.n(i),r=(t(15),function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container text-center"},o.a.createElement("h1",{className:"display-4"},"NHL React Clicky Game!"),o.a.createElement("p",{className:"lead"},"Click on any image to earn a point, but don't click on any picture more than once!")))}),s=t(3),l=t(4),g=t(7),m=t(5),d=t(8),u=(t(16),function(e){return o.a.createElement("div",{className:"allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},o.a.createElement("img",{id:e.name,src:e.image,alt:e.name}))}),h=t(6),p=(t(17),function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=Object(g.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(o)))).state={images:h,message:"Click one of the logos to begin!",score:0,topScore:0},t.handleClick=function(e,n){var a=t.state.images;if(n)return a.forEach(function(e,n){a[n].clicked=!1}),t.setState({image:a.sort(function(){return Math.random()-.5}),message:"You Guessed Incorrectly!",score:0});a.forEach(function(n,t){e===n.id&&(a[t].clicked=!0)});var o=t.state,i=o.topScore,c=o.score+1,r=c>i?c:i;return t.setState({image:a.sort(function(){return Math.random()-.5}),message:"You Guessed Correctly!",score:c,topScore:r})},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid mainCardContainer"},o.a.createElement("div",{className:"gameMessage text-center"},o.a.createElement("p",null,this.state.message)),o.a.createElement("div",{className:"gameScores text-center"},o.a.createElement("p",null,"Score: ",this.state.score," | Top Score: ",this.state.topScore)),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},this.state.images.map(function(n){return o.a.createElement(u,{key:n.id,id:n.id,name:n.name,clicked:n.clicked,image:n.image,handleClick:e.handleClick})}))))}}]),n}(a.Component)),f=(t(18),function(){return o.a.createElement("div",{className:"container-fluid mainContainer"},o.a.createElement(r,null),o.a.createElement(p,null))}),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/clicky-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/clicky-game","/service-worker.js");v?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):k(e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.e0c8b501.chunk.js.map