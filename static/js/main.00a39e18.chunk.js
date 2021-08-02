(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{229:function(e,t){},339:function(e,t,n){},341:function(e,t,n){},342:function(e,t,n){},343:function(e,t,n){},344:function(e,t,n){},346:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n.n(a),c=n(165),i=n(54),s=n(107),o=n(8),u=n.n(o),l=n(37),d=n(164),j=n.n(d).a.create({timeout:3e4});function p(e){return j(e).then((function(e){return e})).catch((function(e){return e}))}j.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){var t=e.response;return Promise.reject(t)}));var h="api.openweathermap.org/data/2.5/",v="weather",b=Object({NODE_ENV:"production",PUBLIC_URL:"/weatherApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).OPEN_WEATHER_API_KEY||"54a39f3d2957566d9097443072eb5eb2",O="metric",m="imperial";function f(e){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.latitude,a=t.longtitude,e.abrupt("return",p({method:"GET",url:"".concat(h).concat(v,"?lat=").concat(n,"&lon=").concat(a,"&units=metric&appid=").concat(b)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){var n={latitude:t.coords.latitude,longtitude:t.coords.longitude};e(n)}),(function(e){return t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g={namespace:"weather",state:{currentWeather:null},effects:{getGeoLocation:u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.call,e.prev=1,e.next=4,a(w);case 4:return r=e.sent,e.abrupt("return",new Promise((function(e){return e(r)})));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",new Promise((function(t){return t(e.t0)})));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})),fetchCurrentLocationWeather:u.a.mark((function e(t,n){var a,r,c,i,s,o,l,d,j,p,h,v,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j=t.payload,p=n.call,h=n.put,e.next=4,p(f,j);case 4:return v=e.sent,console.log(v),b={cityName:null===v||void 0===v||null===(a=v.data)||void 0===a?void 0:a.name,temp:null===v||void 0===v||null===(r=v.data)||void 0===r||null===(c=r.main)||void 0===c?void 0:c.temp,wind:null===v||void 0===v||null===(i=v.data)||void 0===i?void 0:i.wind,icon:null===v||void 0===v||null===(s=v.data)||void 0===s||null===(o=s.weather[0])||void 0===o?void 0:o.icon,main:null===v||void 0===v||null===(l=v.data)||void 0===l||null===(d=l.weather[0])||void 0===d?void 0:d.main},e.next=9,h({type:"putCurrentWeather",payload:b});case 9:case"end":return e.stop()}}),e)}))},reducers:{putCurrentWeather:function(e,t){var n=t.payload;return Object(s.a)(Object(s.a)({},e),{},{currentWeather:n})}}},N=n(1),y=n(29),W=(n(339),n(2)),C=function(e){var t=e.loading;return Object(W.jsx)(W.Fragment,{children:t&&Object(W.jsx)("div",{className:"loader",children:"Loading..."})})},S=(n(341),Object(a.connect)((function(e){return{weather:e.weather}}))((function(e){var t,n,a,r,c=e.weather.currentWeather,i=e.title,s=e.tempUnit,o=e.isDisplayWind;return Object(W.jsxs)("div",{className:"weatherDetailContainer",children:[Object(W.jsx)("div",{className:"title",children:""===i?"Title of widget".toUpperCase():i.toUpperCase()}),Object(W.jsxs)("div",{className:"detailContainer",children:[Object(W.jsx)("div",{className:"weatherIcon",children:Object(W.jsx)("img",{src:"/images/weather/".concat(null===c||void 0===c?void 0:c.icon,".png"),alt:null===c||void 0===c?void 0:c.main,className:"icon"})}),Object(W.jsxs)("div",{className:"contentDetail",children:[Object(W.jsx)("p",{className:"city",children:null===c||void 0===c?void 0:c.cityName}),Object(W.jsxs)("p",{className:"temp",children:[s===O?Math.round(null===c||void 0===c?void 0:c.temp):Math.round((r=null===c||void 0===c?void 0:c.temp,9*r/5+32)),Object(W.jsx)("span",{className:"tempDegree",children:"\xb0"})]}),Object(W.jsx)("p",{className:"wind",children:o&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("strong",{children:"Wind"}),Object(W.jsx)("span",{className:"direction",children:(a=null===c||void 0===c||null===(t=c.wind)||void 0===t?void 0:t.deg,["N","NE","E","SE","S","SW","W","NW"][Math.round(a/45)%8])}),Math.round(null===c||void 0===c||null===(n=c.wind)||void 0===n?void 0:n.speed),"km/h"]})})]})]})]})}))),T=(n(342),Object(a.connect)((function(e){return{inputs:e.weather.userInput}}))((function(e){var t=e.title,n=e.setTitle,a=e.tempUnit,r=e.setTempUnit,c=e.isDisplayWind,i=e.setIsDisplayWind;return Object(W.jsx)("div",{className:"inputDetailContainer",children:Object(W.jsxs)("table",{className:"detailTable",children:[Object(W.jsx)("tr",{children:Object(W.jsx)("td",{children:"Title"})}),Object(W.jsx)("tr",{children:Object(W.jsx)("td",{children:Object(W.jsx)("input",{type:"text",name:"title",placeholder:"Title of widget",value:t,onChange:function(e){return n(e.target.value)},className:"textInput"})})}),Object(W.jsx)("tr",{children:Object(W.jsx)("td",{children:"Temperature"})}),Object(W.jsx)("tr",{children:Object(W.jsxs)("td",{className:"selection",children:[Object(W.jsxs)("div",{className:"tempUnit",children:[Object(W.jsx)("input",{type:"radio",name:"temperature",value:O,onChange:function(e){return r(e.target.value)},checked:a===O}),"\xb0C"]}),Object(W.jsxs)("div",{className:"tempUnit",children:[Object(W.jsx)("input",{type:"radio",name:"temperature",value:m,onChange:function(e){return r(e.target.value)},checked:a===m}),"\xb0F"]})]})}),Object(W.jsx)("tr",{children:Object(W.jsx)("td",{children:"Wind"})}),Object(W.jsx)("tr",{children:Object(W.jsxs)("td",{className:"selection",children:[Object(W.jsxs)("div",{className:"isDisplayWind",children:[Object(W.jsx)("input",{type:"radio",name:"wind",value:"true",onChange:function(e){return i(!0)},checked:!0===c}),"On"]}),Object(W.jsxs)("div",{className:"isDisplayWind",children:[Object(W.jsx)("input",{type:"radio",name:"wind",value:"false",onChange:function(e){return i(!1)},checked:!1===c}),"Off"]})]})})]})})}))),E=(n(343),Object(a.connect)((function(e){var t=e.weather,n=e.loading;return{weather:t,getLocationLoading:n.effects["weather/getGeoLocation"],fetchWeatherLoading:n.effects["weather/fetchCurrentLocationWeather"]}}))((function(e){var t=e.dispatch,n=e.getLocationLoading,a=e.fetchWeatherLoading,r=Object(N.useState)(null),c=Object(y.a)(r,2),i=c[0],s=c[1],o=Object(N.useState)(null),d=Object(y.a)(o,2),j=d[0],p=d[1],h=Object(N.useState)(!1),v=Object(y.a)(h,2),b=v[0],m=v[1],f=Object(N.useState)(""),x=Object(y.a)(f,2),w=x[0],g=x[1],E=Object(N.useState)(O),D=Object(y.a)(E,2),L=D[0],k=D[1],U=Object(N.useState)(!0),_=Object(y.a)(U,2),P=_[0],I=_[1];return Object(N.useEffect)((function(){return Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t({type:"weather/getGeoLocation"});case 3:n=e.sent,s(n.latitude),p(n.longtitude),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),function(){s(null),p(null),m(!1)}}),[]),Object(N.useEffect)((function(){b||i&&j&&t({type:"weather/fetchCurrentLocationWeather",payload:{latitude:i,longtitude:j}})}),[i,j]),Object(W.jsx)("div",{className:"weatherContainer",children:Object(W.jsx)("div",{className:"contentContainer",children:n||a?Object(W.jsx)(C,{loading:n||a}):Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{className:"inputContainer",children:Object(W.jsx)(T,{title:w,setTitle:g,tempUnit:L,setTempUnit:k,isDisplayWind:P,setIsDisplayWind:I})}),Object(W.jsx)("div",{className:"displayContainer",children:Object(W.jsx)(S,{title:w,tempUnit:L,isDisplayWind:P})})]})})})})));var D=function(e){var t=e.history;return Object(W.jsx)(i.Router,{history:t,children:Object(W.jsx)(i.Route,{path:"/",component:E})})},L=(n(344),r()({history:i.browserHistory}));L.use(Object(c.a)()),L.model(g),L.router(D),L.start("#root")}},[[346,1,2]]]);
//# sourceMappingURL=main.00a39e18.chunk.js.map