(this["webpackJsonppoker-fe"]=this["webpackJsonppoker-fe"]||[]).push([[0],{100:function(e,a,t){e.exports=t.p+"static/media/40 - planning poker_Meterse en un berenjenal.71045c71.svg"},101:function(e,a,t){e.exports=t.p+"static/media/xs - planning poker_When pigs fly.07fe1f89.svg"},102:function(e,a,t){e.exports=t.p+"static/media/sm - planning poker_Don't put all.405c5c43.svg"},103:function(e,a,t){e.exports=t.p+"static/media/md - planning poker_Squeaking by.d0768281.svg"},104:function(e,a,t){e.exports=t.p+"static/media/lg - planning poker_An arm and a leg.6164385c.svg"},105:function(e,a,t){e.exports=t.p+"static/media/xl - planning poker_Low hanging fruit.7a8b4030.svg"},106:function(e,a,t){e.exports=t.p+"static/media/xxl - planning poker_It ain't rocket science.d0736c84.svg"},107:function(e,a,t){e.exports=t.p+"static/media/planning poker_Eat a brownie.fc9a4c3e.svg"},111:function(e,a,t){e.exports=t(217)},116:function(e,a,t){},209:function(e,a,t){},217:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(18),l=t.n(s),o=(t(116),t(7)),c=t(15),i=t(8),m={pollType:null,sessionId:null,sessionName:null,userName:null,polls:[]};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_POLL_TYPE":e=Object(i.a)({},e,{pollType:a.pollType});break;case"SET_SESSION_ID":e=Object(i.a)({},e,{sessionId:a.sessionId});break;case"SET_SESSION_NAME":e=Object(i.a)({},e,{sessionName:a.sessionName});break;case"SET_USER_NAME":e=Object(i.a)({},e,{userName:a.userName});break;case"SET_POLLS":e=Object(i.a)({},e,{polls:a.polls})}return e},p=Object(c.c)({polling:u}),d=function(e,a){return p(e,a)},E=t(79),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,h=Object(c.e)(d,f(Object(c.a)(E.a))),g=t(108),v=t.n(g),b=t(224),y=t(222),N=t(220),S=function(e){return function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{bg:"dark",expand:"lg"},r.a.createElement(y.a.Brand,{href:"/",className:"text-light"},"Planning Poker"),r.a.createElement(y.a.Toggle,{"aria-controls":"basic-navbar-nav"})),r.a.createElement(N.a,{className:"h-100"},r.a.createElement(e,a)))}},k=t(34),x=t(35),O=t(38),I=t(39),T=function(e){return{type:"SET_POLL_TYPE",pollType:e}},j=function(e){return{type:"SET_SESSION_ID",sessionId:e}},C=function(e){return{type:"SET_SESSION_NAME",sessionName:e}},_=function(e){return{type:"SET_USER_NAME",userName:e}},w=function(e){return{type:"SET_POLLS",polls:e}},P=function(e){var a=function(a){Object(I.a)(n,a);var t=Object(O.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var a=e.props,t=a.pollType,n=a.userName,r=a.sessionId;switch(e.props.match.path){case"/create-session/:sessionId":case"/join-session/:sessionId":break;case"/polling/:sessionId":Boolean(n)&&Boolean(t)&&Boolean(r)||e.redirectToHome()}},e.redirectToHome=function(){window.location.replace("/")},e}return Object(x.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(e,this.props))}}]),n}(r.a.Component);return S(Object(o.b)((function(e){var a=e.polling;return{pollType:a.pollType,sessionId:a.sessionId,sessionName:a.sessionName,userName:a.userName,polls:a.polls}}),(function(e){return{setPollType:T,setPolls:w,setSessionId:j,setSessionName:C}}))(a))},L=t(221),A=t(83),B=t(14),D=t(226),U=t(223),M=t(227),H=function(e){var a=e.history,t=e.setSessionId,s=Object(n.useState)(""),l=Object(B.a)(s,2),o=l[0],c=l[1];return r.a.createElement(D.a,null,r.a.createElement(D.a.Header,{as:"h5",className:"text-center"},"Join Session"),r.a.createElement(D.a.Body,{className:"text-center"},r.a.createElement("div",{className:"d-block mb-2"},r.a.createElement("img",{src:"http://via.placeholder.com/200x200",alt:"join session"})),r.a.createElement(U.a,{onSubmit:function(e){e.preventDefault(),""!==o&&(t(o),a.push("/join-session/".concat(o)))}},r.a.createElement(U.a.Group,{controlId:"sessionId"},r.a.createElement(U.a.Control,{required:!0,type:"text",placeholder:"Enter Session ID",className:"text-center",value:o,onChange:function(e){c(e.target.value)}})),r.a.createElement(M.a,{variant:"primary",type:"submit"},"Join"))))},F=t(84),J=t.n(F),q=function(e){Object(I.a)(t,e);var a=Object(O.a)(t);function t(e){var n;return Object(k.a)(this,t),(n=a.call(this,e)).onChange=function(e){var a=e.target.value;n.setState({pollType:a})},n.onSubmit=function(e){e.preventDefault();var a=J()();n.props.setPollType(n.state.pollType),n.props.setSessionId(a),n.props.history.push("/create-session/".concat(a))},n.state={pollType:"fibnocci"},n}return Object(x.a)(t,[{key:"render",value:function(){var e=this.state.pollType;return r.a.createElement(D.a,{className:"text-center"},r.a.createElement(D.a.Header,{as:"h5"},"Create Session"),r.a.createElement(D.a.Body,null,r.a.createElement("div",{className:"d-block mb-2"},r.a.createElement("img",{src:"http://via.placeholder.com/200x200",alt:"create session"})),r.a.createElement(U.a,{onSubmit:this.onSubmit},r.a.createElement(U.a.Group,{controlId:"sessionId"},r.a.createElement(U.a.Control,{as:"select",onChange:this.onChange,value:e},r.a.createElement("option",{value:"fibnocci"},"Fibonacci"),r.a.createElement("option",{value:"t-shirt"},"T-Shirt"))),r.a.createElement(M.a,{variant:"primary",type:"submit"},"Create"))))}}]),t}(n.Component),G=Object(o.b)(null,(function(e){return{setPollType:function(a){return e(T(a))},setSessionId:function(a){return e(j(a))}}}))((function(e){var a=e.history,t=e.setPollType,n=e.setSessionId;return r.a.createElement(L.a,{className:"align-items-center h-100 mt-5"},r.a.createElement(A.a,{sm:"6"},r.a.createElement(q,{history:a,setPollType:t,setSessionId:n})),r.a.createElement(A.a,{sm:"6 "},r.a.createElement(H,{history:a,setSessionId:n})))})),W=t(110),Y=t(32),R=t(85),X=t.n(R),V=t(56),$=function(){return V.reactLocalStorage.getObject("pokerSession")},z=function(e,a){var t,n=$(),r=n&&n[e]?n[e]:{},s=Object(i.a)({},n,Object(Y.a)({},e,Object(i.a)({},r,{},a)));t=s,V.reactLocalStorage.setObject("pokerSession",t)},K=function(e){var a=$();return a&&a[e]?a[e]:null},Q=function(e){var a=e.history,t=e.sessionId,s=e.setUserName,l=e.setSessionName,o=e.setPollType,c=Object(n.useState)(""),m=Object(B.a)(c,2),u=m[0],p=m[1];return r.a.createElement(D.a,{className:"text-center "},r.a.createElement(D.a.Header,{as:"h5"},"Join Session"),r.a.createElement(D.a.Body,null,r.a.createElement(U.a,{onSubmit:function(e){if(e.preventDefault(),""!==u){var n=K(t);s(u),l(n.sessionName),o(n.pollType),function(e,a){var t=K(a),n=Object(i.a)({},t,{polls:[].concat(Object(W.a)(t.polls),[{userName:e,card:""}])});z(a,n)}(u,t),a.push("/polling/".concat(t))}}},r.a.createElement(U.a.Group,{controlId:"formBasicEmail"},r.a.createElement(U.a.Label,null,"Your Name"),r.a.createElement(U.a.Control,{required:!0,type:"text",placeholder:"Enter your name",className:"text-center",value:u,onChange:function(e){return p(e.target.value)}})),r.a.createElement(M.a,{variant:"primary",type:"submit"},"Join"))))},Z=Object(o.b)(null,(function(e){return{setUserName:function(a){return e(_(a))},setSessionId:function(a){return e(j(a))},setSessionName:function(a){return e(C(a))},setPollType:function(a){return e(T(a))}}}))((function(e){var a=e.history,t=e.match,s=e.setSessionId,l=e.setUserName,o=e.setSessionName,c=e.setPollType;return Object(n.useEffect)((function(){s(t.params.sessionId)}),[t.params.sessionId,s]),r.a.createElement(L.a,{className:"align-items-center h-100 mt-5"},r.a.createElement(A.a,{sm:"6",className:"mx-auto"},r.a.createElement(Q,{history:a,setUserName:l,setSessionName:o,setPollType:c,sessionId:t.params.sessionId})))})),ee=function(e){var a=e.history,t=e.sessionId,s=e.setUserName,l=e.setSessionName,o=e.pollType,c=Object(n.useState)(""),i=Object(B.a)(c,2),m=i[0],u=i[1],p=Object(n.useState)(""),d=Object(B.a)(p,2),E=d[0],f=d[1];return r.a.createElement(D.a,{className:"text-center "},r.a.createElement(D.a.Header,{as:"h5"},"Start New Session"),r.a.createElement(D.a.Body,null,r.a.createElement(U.a,{onSubmit:function(e){e.preventDefault(),""!==m&&""!==E&&(s(E),l(m),function(e,a,t,n){z(t,{creator:e,sessionName:a,pollType:n,polls:[{userName:e,card:""}]})}(E,m,t,o),a.push("/polling/".concat(t)))}},r.a.createElement(U.a.Group,{controlId:"formBasicEmail"},r.a.createElement(U.a.Label,null,"Session Name"),r.a.createElement(U.a.Control,{required:!0,type:"text",name:"sessionName",placeholder:"Enter Session name",className:"text-center",value:m,onChange:function(e){return u(e.target.value)}})),r.a.createElement(U.a.Group,{controlId:"formBasicEmail"},r.a.createElement(U.a.Label,null,"Your Name"),r.a.createElement(U.a.Control,{required:!0,type:"text",name:"userName",placeholder:"Enter your name",className:"text-center",value:E,onChange:function(e){return f(e.target.value)}})),r.a.createElement(M.a,{variant:"primary",type:"submit"},"Join"))))},ae=Object(o.b)((function(e){return{pollType:e.polling.pollType}}),(function(e){return{setSessionName:function(a){return e(C(a))},setUserName:function(a){return e(_(a))}}}))((function(e){var a=e.history,t=e.match,n=e.pollType,s=e.setSessionName,l=e.setUserName;return r.a.createElement(L.a,{className:"align-items-center h-100 mt-5"},r.a.createElement(A.a,{sm:"6",className:"mx-auto"},r.a.createElement(ee,{history:a,pollType:n,sessionId:t.params.sessionId,setSessionName:s,setUserName:l})))})),te=function(e){var a=e.sessionId;return r.a.createElement(U.a,null,r.a.createElement(U.a.Group,{controlId:"pollingLink"},r.a.createElement(U.a.Control,{type:"text",name:"pollingLink",placeholder:"Polling Link",className:"text-center",readOnly:!0,value:"http://localhost:3000/join-session/".concat(a||"")})))},ne=t(225),re=function(e){var a=e.polls,t=[];return Array.isArray(a)&&a.length>0&&(t=a.map((function(e,a){var t=e.userName,n=e.card;return r.a.createElement(ne.a.Item,{key:a},""===n?r.a.createElement("span",{className:"text-warning mr-2",role:"img","aria-label":"exclamation"},"\u2755"):r.a.createElement("span",{className:"text-success mr-2",role:"img","aria-label":"tick"},"\u2714"),t)}))),r.a.createElement(D.a,null,r.a.createElement(D.a.Header,{as:"h5",className:"text-center"},"Members"),r.a.createElement(D.a.Body,{className:"p-0 members-list"},r.a.createElement(ne.a,{variant:"flush"},t)))},se=t(89),le=t.n(se),oe=t(90),ce=t.n(oe),ie=t(91),me=t.n(ie),ue=t(92),pe=t.n(ue),de=t(93),Ee=t.n(de),fe=t(94),he=t.n(fe),ge=t(95),ve=t.n(ge),be=t(96),ye=t.n(be),Ne=t(97),Se=t.n(Ne),ke=t(98),xe=t.n(ke),Oe=t(99),Ie=t.n(Oe),Te=t(100),je=t.n(Te),Ce=t(101),_e=t.n(Ce),we=t(102),Pe=t.n(we),Le=t(103),Ae=t.n(Le),Be=t(104),De=t.n(Be),Ue=t(105),Me=t.n(Ue),He=t(106),Fe=t.n(He),Je=t(107),qe=t.n(Je),Ge={0:le.a,.5:ce.a,1:me.a,2:ye.a,3:xe.a,5:pe.a,8:Ee.a,13:Ie.a,20:he.a,40:je.a,100:ve.a,"?":Se.a,xs:_e.a,s:Pe.a,m:Ae.a,l:De.a,xl:Me.a,xxl:Fe.a,unknown:qe.a},We=function(e){var a=e.value,t=e.label,n=e.handleClick;return a&&Ge[a.toString()]?r.a.createElement(A.a,{sm:"2",className:"text-center mb-2"},r.a.createElement(D.a,{className:"bg-transparent border-0 text-light"},r.a.createElement(D.a.Body,{className:"p-0 cursor-pointer",onClick:function(){return n(a)}},""!==t&&r.a.createElement("p",{className:"text-light mb-0 font-weight-bold"},t),r.a.createElement("img",{src:Ge[a],alt:"value",className:"rounded"})))):r.a.createElement(r.a.Fragment,null)};We.defaultProps={label:"",handleClick:function(e){}};var Ye=We,Re=function(e){var a=e.polls,t=e.showCards,n=[];return Array.isArray(a)&&a.length>0&&(n=a.map((function(e,a){return r.a.createElement(Ye,{key:a,value:t?e.card:"unknown",label:e.userName})}))),r.a.createElement(L.a,{className:"border rounded bg-secondary px-2 py-3 mb-2"},n)},Xe=function(e){var a=e.pollType,t=e.setPolls;return r.a.createElement(L.a,{className:"border rounded px-2 py-3"},"fibnocci"===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,{value:"0",handleClick:t}),r.a.createElement(Ye,{value:"0.5",handleClick:t}),r.a.createElement(Ye,{value:"1",handleClick:t}),r.a.createElement(Ye,{value:"2",handleClick:t}),r.a.createElement(Ye,{value:"3",handleClick:t}),r.a.createElement(Ye,{value:"5",handleClick:t}),r.a.createElement(Ye,{value:"8",handleClick:t}),r.a.createElement(Ye,{value:"13",handleClick:t}),r.a.createElement(Ye,{value:"20",handleClick:t}),r.a.createElement(Ye,{value:"40",handleClick:t}),r.a.createElement(Ye,{value:"100",handleClick:t}),r.a.createElement(Ye,{value:"?",handleClick:t})),"t-shirt"===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,{value:"xs",handleClick:t}),r.a.createElement(Ye,{value:"sm",handleClick:t}),r.a.createElement(Ye,{value:"m",handleClick:t}),r.a.createElement(Ye,{value:"l",handleClick:t}),r.a.createElement(Ye,{value:"xl",handleClick:t}),r.a.createElement(Ye,{value:"xxl",handleClick:t})))},Ve=Object(o.b)((function(e){var a=e.polling,t=a.pollType,n=a.userName,r=a.sessionId,s=a.polls;return{pollType:t,userName:n,sessionName:a.sessionName,sessionId:r,polls:s}}),(function(e){return{setPolls:function(a){return e(w(a))}}}))((function(e){var a=e.pollType,t=e.userName,s=e.sessionId,l=e.sessionName,o=Object(n.useState)([]),c=Object(B.a)(o,2),m=c[0],u=c[1],p=function(e){if(e){var a=K(e);u(a.polls)}},d=Object(n.useCallback)((function(){setTimeout((function(){p(s),d()}),500)}),[s]);Object(n.useEffect)((function(){Array.isArray(m)&&m.length>0||d()}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{className:"justify-content-between h-100 mt-5"},r.a.createElement(A.a,{sm:"4",className:"ml-1"},r.a.createElement("h4",{className:"pt-2"},l)),r.a.createElement(A.a,{sm:"4"},r.a.createElement(te,{sessionId:s}))),r.a.createElement(L.a,{className:"h-100 mt-2"},r.a.createElement(A.a,{sm:"3"},r.a.createElement(re,{polls:m})),r.a.createElement(A.a,{sm:"9"},r.a.createElement(Re,{polls:m,showCards:!!(Array.isArray(m)&&m.length>0)&&""!==m.find((function(e){return e.userName===t})).card}),r.a.createElement(Xe,{pollType:a,setPolls:function(e){!function(e,a,t){var n=K(a),r=X()(n.polls,(function(a){return a.userName===e?Object(i.a)({},a,{card:t}):a})),s=Object(i.a)({},n,{polls:r});z(a,s)}(t,s,e),p(s)}}))))})),$e=(t(209),v()());var ze=function(){return r.a.createElement(o.a,{store:h},r.a.createElement(b.b,{history:$e},r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/polling/:sessionId",component:P(Ve)}),r.a.createElement(b.a,{path:"/create-session/:sessionId",component:P(ae)}),r.a.createElement(b.a,{path:"/join-session/:sessionId",component:S(Z)}),r.a.createElement(b.a,{path:"/",component:S(G)}))))};t(214),t(215),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,a,t){e.exports=t.p+"static/media/0 - planning poker_Here be dragons.ed7886ec.svg"},90:function(e,a,t){e.exports=t.p+"static/media/0.5 - planning poker_Coffee break.564830eb.svg"},91:function(e,a,t){e.exports=t.p+"static/media/1 - planning poker_Low hanging fruit.1c7bf067.svg"},92:function(e,a,t){e.exports=t.p+"static/media/5 - planning poker-Ornitorinco.c42e9a40.svg"},93:function(e,a,t){e.exports=t.p+"static/media/8 - planning poker_An arm and a leg.e7cdcc87.svg"},94:function(e,a,t){e.exports=t.p+"static/media/20 - planning poker_Don't put all .2db23d77.svg"},95:function(e,a,t){e.exports=t.p+"static/media/100 - planning poker_Monster task.ef2886c5.svg"},96:function(e,a,t){e.exports=t.p+"static/media/2 - planning poker_Piece of cake.5ff0669a.svg"},97:function(e,a,t){e.exports=t.p+"static/media/101 - planning poker_When pigs fly.2ef1fb74.svg"},98:function(e,a,t){e.exports=t.p+"static/media/3 - planning poker_It ain't rocket science.d4128a50.svg"},99:function(e,a,t){e.exports=t.p+"static/media/13 - planning poker_Squeaking by.16839e43.svg"}},[[111,1,2]]]);
//# sourceMappingURL=main.fd8489b1.chunk.js.map