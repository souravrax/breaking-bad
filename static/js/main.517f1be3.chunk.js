(this.webpackJsonpbb=this.webpackJsonpbb||[]).push([[0],{16:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=a(3),s=a.n(o),i=a(14),u=a(2),m=(a(22),function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:"https://github.com/bradtraversy/breaking-bad-cast/blob/master/src/img/logo.png?raw=true",alt:""}))}),d=a(15),b=a.n(d);var g=function(e){var t=e.name,a=e.img,n=e.portrayed,c=e.nickname,l=e.birthday,o=e.status;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:a,alt:"Character"})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name : ")," ",n),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname : ")," ",c),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday : ")," ",l),r.a.createElement("li",null,r.a.createElement("strong",null,"Status : ")," ",o)))))},E=function(){return r.a.createElement("img",{src:"https://github.com/bradtraversy/breaking-bad-cast/blob/master/src/img/spinner.gif?raw=true",alt:"Loading",style:{width:"200px",margin:"auto",display:"block"}})};var h=function(e){var t=e.items;return e.isLoading?r.a.createElement(E,null):r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(g,Object.assign({key:e.char_id},e))})))},f=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=(c[0],c[1]);return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Characters",autoFocus:!0,onChange:function(e){var a;a=e.target.value,l(a),t(a),console.log(e.target.value)}})))},p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(u.a)(l,2),d=o[0],g=o[1],E=Object(n.useState)(""),p=Object(u.a)(E,2),v=p[0],w=p[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://www.breakingbadapi.com/api/characters?name=".concat(v));case 2:t=e.sent,c(t.data),g(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v]),r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(f,{getQuery:function(e){w(e)}}),r.a.createElement(h,{isLoading:d,items:a}))};a(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.517f1be3.chunk.js.map