(this["webpackJsonptweets-web"]=this["webpackJsonptweets-web"]||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=n(11),u=n(1),l=function(e,t,n,a){var r;a&&(r=JSON.stringify(a));var c=new XMLHttpRequest,o="http://127.0.0.1:8000/api/tweets".concat(t);c.responseType="json",c.open(e,o),c.onload=function(){403===c.status&&("Authentication credentials were not provided."===c.response.detail&&(window.location.href="/login?showLoginRequired=true"));n(c.response,c.status)},c.setRequestHeader("Content-Type","application/json");var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var r=n[a].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");i&&(c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",i)),c.onerror=function(e){console.log(e),n({message:"\u041a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430 \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c"},400)},c.send(r)},s=function(e){var t=e.tweet,n=e.action,c=e.setNewTweet,o=e.setDidPerformAction,i=Object(a.useState)(t.likes),s=Object(u.a)(i,2),m=s[0],w=s[1],f=function(e){e.preventDefault(),function(e,t,n){l("POST","/action/",n,{id:e,action:t})}(t.id,n,(function(e,t){200===t?(w(e.likes),o((function(e){return!e}))):201===t?c(e):alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435")}))};switch(n){case"like":return r.a.createElement("button",{onClick:function(e){return f(e)}},m," / Like");case"unlike":return r.a.createElement("button",{onClick:function(e){return f(e)}},m," / Unlike");case"retweet":return r.a.createElement("button",{onClick:function(e){return f(e)}},"Retweet");default:return null}},m=function(e){var t=e.username,n=e.newTweet,c=e.setNewTweet,o=Object(a.useState)([]),i=Object(u.a)(o,2),s=i[0],m=i[1];return Object(a.useEffect)((function(){!function(e,t){var n="/";t&&(n="/?username=".concat(t)),l("GET",n,e)}((function(e,t){200===t?m(e):alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435")}),t)}),[n,t]),s.map((function(e,t){return r.a.createElement(f,{tweet:e,key:t,setNewTweet:c})}))},w=n(12),f=function e(t){var n=t.tweet,c=t.setNewTweet,o=t.parent,i=Object(a.useState)(!0),l=Object(u.a)(i,2),m=l[0],f=l[1],d=window.location.pathname.match(Object(w.a)(/([0-9]+)/,{tweetId:1})),p=d?d.groups.tweetId:null,b=!(!p||p!=="".concat(n.id));return r.a.createElement("div",{style:{border:"1px solid black",marginBottom:20}},n.id," - ",n.content,o?null:r.a.createElement(r.a.Fragment,null,m?r.a.createElement(s,{setDidPerformAction:f,tweet:n,action:"like"}):r.a.createElement(s,{setDidPerformAction:f,tweet:n,action:"unlike"}),r.a.createElement(s,{tweet:n,setNewTweet:c,action:"retweet"})),b?null:r.a.createElement("a",{href:"/".concat(n.id)},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),n.parent&&r.a.createElement("div",{style:{backgroundColor:"#44ffa2"}},r.a.createElement(e,{tweet:n.parent,parent:n.parent,setNewTweet:c})))},d=function(e){var t=e.username,n=e.canTweet,c=Object(a.useRef)(),o="false"!==n,i=Object(a.useState)([]),s=Object(u.a)(i,2),w=s[0],f=s[1],d=Object(a.useCallback)((function(e){e.preventDefault(),function(e,t){l("POST","/create/",t,{content:e})}(c.current.value,(function(e,t){201===t?f(e):alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437")})),c.current.value=""}),[]);return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement("form",{onSubmit:d},r.a.createElement("textarea",{ref:c,name:"content",id:"content",cols:"30",rows:"10"}),r.a.createElement("button",{type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),r.a.createElement(m,{username:t,newTweet:w,setNewTweet:f}))},p=function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){var t,n;t=function(e,t){200===t?o(e):alert("\u041a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430 \u0441 \u043f\u043e\u0438\u0441\u043a\u043e\u043c \u0432\u0430\u0448\u0435\u0433\u043e \u0442\u0432\u0438\u0442\u0430")},n=e.tweetId,l("GET","/".concat(n),t)}),[]),null===c?null:r.a.createElement(f,{tweet:c})},b=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{username:t.username,canTweet:t.canTweet}))};n(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=document.getElementById("tweetme"),v=JSON.parse(JSON.stringify(E.dataset));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(b,{data:v}))),E),document.querySelectorAll(".tweetme-detail").forEach((function(e){o.a.render(r.a.createElement(p,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.6dc46ac1.chunk.js.map