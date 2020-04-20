(this["webpackJsonpcovid-web"]=this["webpackJsonpcovid-web"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__1Qa2s",card:"Cards_card__3yo-R",infected:"Cards_infected__24K3P",recovered:"Cards_recovered__2rXQ1",deaths:"Cards_deaths__2j9c6"}},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),u=a(6),s=a.n(u),l=a(10),i=a(72),d=a(73),p=a(83),m=a(82),f=a(223),v=a(227),h=a(224),b=a(225),E=a(32),y=a.n(E),g=a(33),x=a.n(g),C=a(13),w=a.n(C),_=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:w.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,xs:12,md:3,component:v.a,className:x()(w.a.card,w.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19."))),r.a.createElement(f.a,{item:!0,xs:12,md:3,component:v.a,className:x()(w.a.card,w.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),r.a.createElement(f.a,{item:!0,xs:12,md:3,component:v.a,className:x()(w.a.card,w.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))):"Loading..."},O=a(31),j=a(45),k=a(34),D=a.n(k),S="https://covid19.mathdro.id/api",N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get(S);case 3:return t=e.sent,a=t.data,n={confirmed:a.confirmed,recovered:a.recovered,deaths:a.deaths,lastUpdate:a.lastUpdate},e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,data:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=a(79),Q=a.n(V),R=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)({}),d=Object(O.a)(i,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(j.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=p[0]?r.a.createElement(j.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:Q.a.container},u?f:v)},U=a(228),A=a(226),J=a(80),P=a.n(J),G=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(U.a,{className:P.a.formControl},r.a.createElement(A.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},K=a(81),L=a.n(K),M=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:L.a.container},r.a.createElement(_,{data:t}),r.a.createElement(G,{handleCountryChange:this.handleCountryChange}),r.a.createElement(R,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(M,null),document.getElementById("root"))},79:function(e,t,a){e.exports={container:"Charts_container__2fxfQ"}},80:function(e,t,a){},81:function(e,t,a){e.exports={container:"App_container__3_lb3"}},86:function(e,t,a){e.exports=a(206)}},[[86,1,2]]]);
//# sourceMappingURL=main.1f1e579d.chunk.js.map