(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/pexels-photo-66997.d9cb2667.jpeg"},15:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),i=a(2),o=a(13),m=a.n(o),d=(a(37),function(e){var t=e.search,a=e.updateSearch,n=e.getSearchResult;return r.a.createElement("form",{className:"d-flex justify-content-center",onSubmit:n},r.a.createElement("input",{type:"text",placeholder:"City Name",value:t,onChange:a}),r.a.createElement("button",{type:"submit"},"Search"))}),s=function(e){var t=e.weather;return r.a.createElement("div",null,r.a.createElement("div",{className:"weather"},t.temp&&r.a.createElement("div",{className:"weather-details"},r.a.createElement("p",null,"City ",r.a.createElement("span",null,t.name)),r.a.createElement("p",null,"Temprature ",r.a.createElement("span",null,t.temp,"\xb0C")),r.a.createElement("p",null,"Clouds ",r.a.createElement("span",null,t.clouds,"%")),r.a.createElement("p",null,"Condition ",r.a.createElement("span",null,t.weatherDescription)),r.a.createElement("p",null,"Humidity ",r.a.createElement("span",null,t.humidity,"%")),r.a.createElement("p",null,"Wind Speed ",r.a.createElement("span",null,t.windSpeed,"km/h")),r.a.createElement("p",null,"Wind Direction ",r.a.createElement("span",null,t.windDegree,"\xb0")))))},u=a(14),p=a.n(u);var h=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),u=o[0],h=o[1],E=Object(n.useState)({clouds:void 0,humidity:void 0,temp:void 0,name:void 0,weatherDescription:void 0,windSpeed:void 0,windDegree:void 0}),w=Object(i.a)(E,2),v=w[0],f=w[1];Object(n.useEffect)((function(){""!==a&&g()}),[a]);var g=function(){m.a.get("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=a4bdb3ec229b192eb202362ff94e6dce&units=metric")).then((function(e){console.log(e.data),f({clouds:e.data.clouds.all,humidity:e.data.main.humidity,windSpeed:e.data.wind.speed,windDegree:e.data.wind.deg,temp:e.data.main.temp,name:e.data.name,weatherDescription:e.data.weather[0].description})}))};return r.a.createElement("div",{className:"App container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"left p-0 col-lg-8"},r.a.createElement("img",{src:p.a,alt:""}),r.a.createElement("h2",null,(new Date).toDateString())),r.a.createElement("div",{className:"right col-lg-4"},r.a.createElement(d,{search:u,updateSearch:function(e){h(e.target.value)},getSearchResult:function(e){e.preventDefault(),c(u),h("")}}),r.a.createElement(s,{weather:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a3cfb4e4.chunk.js.map