(this["webpackJsonptweets-web"]=this["webpackJsonptweets-web"]||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),u=n(14),l=n(1),i=function(e,t,n,a){var r;a&&(r=JSON.stringify(a));var c=new XMLHttpRequest,o="http://127.0.0.1:8000/api/tweets".concat(t);c.responseType="json",c.open(e,o),c.onload=function(){403===c.status&&("Authentication credentials were not provided."===c.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(c.response,c.status)},c.setRequestHeader("Content-Type","application/json");var u=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var r=n[a].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");u&&(c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",u)),c.onerror=function(e){n({message:"\u041a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430 \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c"},400)},c.send(r)},s=function(e,t,n){var a="/";t&&(a="/?username=".concat(t)),null!==n&&void 0!==n&&(a=n.replace("http://127.0.0.1:8000/api/tweets","")),i("GET",a,e)},f=function(e,t){var n="/feed/";null!==t&&void 0!==t&&(n=t.replace("http://127.0.0.1:8000/api/tweets","/feed/")),i("GET",n,e)},m=function(e,t){i("POST","/create/",t,{content:e})},w=function(e){var t=e.tweet,n=e.action,c=e.setNewTweet,o=e.setDidPerformAction,u=Object(a.useState)(t.likes),s=Object(l.a)(u,2),f=s[0],m=s[1],w=function(e){e.preventDefault(),function(e,t,n){i("POST","/action/",n,{id:e,action:t})}(t.id,n,(function(e,t){200===t?(m(e.likes),o((function(e){return!e}))):201===t?c(e):alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435")}))};switch(n){case"like":return r.a.createElement("button",{onClick:function(e){return w(e)}},f," / Like");case"unlike":return r.a.createElement("button",{onClick:function(e){return w(e)}},f," / Unlike");case"retweet":return r.a.createElement("button",{onClick:function(e){return w(e)}},"Retweet");default:return null}},d=n(2),b=function(e){var t=e.newTweet,n=e.setNewTweet,c=Object(a.useState)([]),o=Object(l.a)(c,2),u=o[0],i=o[1],s=Object(a.useState)(null),m=Object(l.a)(s,2),w=m[0],b=m[1];Object(a.useEffect)((function(){f((function(e,t){200===t&&(i(e.results),b(e.next))}))}),[t]);return r.a.createElement(r.a.Fragment,null,u.map((function(e,t){return r.a.createElement(j,{tweet:e,key:t,setNewTweet:n})})),null!==w&&r.a.createElement("button",{onClick:function(e){if(e.preventDefault(),null!==w){f((function(e,t){200===t&&(i((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e.results))})),b(e.next))}),w)}}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"))},E=function(e){var t=e.username,n=e.newTweet,c=e.setNewTweet,o=Object(a.useState)([]),u=Object(l.a)(o,2),i=u[0],f=u[1],m=Object(a.useState)(null),w=Object(l.a)(m,2),b=w[0],E=w[1];Object(a.useEffect)((function(){s((function(e,t){200===t?(f(e.results),E(e.next)):alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435")}),t)}),[n,t]);return r.a.createElement(r.a.Fragment,null,i.map((function(e,t){return r.a.createElement(j,{tweet:e,key:t,setNewTweet:c})})),null!==b&&r.a.createElement("button",{onClick:function(e){if(e.preventDefault(),null!==b){s((function(e,t){200===t?(f((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e.results))})),E(e.next)):alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435")}),t,b)}}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"))},p=n(15),v=function(e){var t=e.user;return r.a.createElement("a",{href:"/profile/".concat(t.username)},r.a.createElement("div",{style:{color:"#fff",borderRadius:20,width:40,height:40,backgroundColor:"#000"}},t.username[0]))},O=function(e){var t=e.user,n="".concat(t.first_name," - ").concat(t.last_name);return r.a.createElement("div",{style:{color:"#fff",borderRadius:20,backgroundColor:"#000"}},n,r.a.createElement("a",{href:"/profile/".concat(t.username)}," @",t.username," "))},j=function e(t){var n=t.tweet,c=t.setNewTweet,o=t.parent,u=Object(a.useState)(!0),i=Object(l.a)(u,2),s=i[0],f=i[1],m=window.location.pathname.match(Object(p.a)(/([0-9]+)/,{tweetId:1})),d=m?m.groups.tweetId:null,b=!(!d||d!=="".concat(n.id));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{border:"1px solid black",marginBottom:20}},r.a.createElement(v,{user:n.user}),r.a.createElement(O,{user:n.user}),n.content,o?null:r.a.createElement(r.a.Fragment,null,s?r.a.createElement(w,{setDidPerformAction:f,tweet:n,action:"like"}):r.a.createElement(w,{setDidPerformAction:f,tweet:n,action:"unlike"}),r.a.createElement(w,{tweet:n,setNewTweet:c,action:"retweet"})),b?null:r.a.createElement("a",{href:"/".concat(n.id)},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),n.parent&&r.a.createElement("div",{style:{backgroundColor:"#44ffa2"}},r.a.createElement(e,{tweet:n.parent,parent:n.parent,setNewTweet:c}))))},h=function(e){var t=e.username,n=e.canTweet,c=Object(a.useRef)(),o="false"!==n,u=Object(a.useState)([]),i=Object(l.a)(u,2),s=i[0],f=i[1],w=Object(a.useCallback)((function(e){e.preventDefault(),m(c.current.value,(function(e,t){201===t?f(e):alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437")})),c.current.value=""}),[]);return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement("form",{onSubmit:w},r.a.createElement("textarea",{ref:c,name:"content",id:"content",cols:"30",rows:"10"}),r.a.createElement("button",{type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),r.a.createElement(E,{username:t,newTweet:s,setNewTweet:f}))},k=function(e){var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){var t,n;t=function(e,t){200===t?o(e):alert("\u041a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430 \u0441 \u043f\u043e\u0438\u0441\u043a\u043e\u043c \u0432\u0430\u0448\u0435\u0433\u043e \u0442\u0432\u0438\u0442\u0430")},n=e.tweetId,i("GET","/".concat(n),t)}),[]),null===c?null:r.a.createElement(j,{tweet:c})},g=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{username:t.username,canTweet:t.canTweet}))};n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=document.getElementById("tweetme");if(T){var S=JSON.parse(JSON.stringify(T.dataset));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(g,{data:S}))),T)}var y=document.querySelectorAll(".tweetme-detail");y&&y.forEach((function(e){o.a.render(r.a.createElement(k,e.dataset),e)}));var R=document.getElementById("tweetme-feed");R&&o.a.render(r.a.createElement((function(e){e.username;var t=e.canTweet,n=Object(a.useRef)(),c="false"!==t,o=Object(a.useState)([]),u=Object(l.a)(o,2),i=u[0],s=u[1],f=Object(a.useCallback)((function(e){e.preventDefault(),m(n.current.value,(function(e,t){201===t?s(e):alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437")})),n.current.value=""}),[]);return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("form",{onSubmit:f},r.a.createElement("textarea",{ref:n,name:"content",id:"content",cols:"30",rows:"10"}),r.a.createElement("button",{type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),r.a.createElement(b,{newTweet:i,setNewTweet:s}))}),R.dataset),R),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.dcb678e7.chunk.js.map