(this["webpackJsonpfrost-frontend"]=this["webpackJsonpfrost-frontend"]||[]).push([[17],{1106:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Me}));var c,r,a,i,s,o,l,j,b,u,d,O,p,x,f,h,m=t(62),g=t(0),v=t(3),w=t(52),k=t(707),y=t(184),z=t(4),S=t.n(z),F=t(16),E=t(27),B=t(72),C=t(13),K=t.n(C),N=t(725),A=t(17),D=t(37),M=t(41),R=t(77),T=t(734),U=t(141),_=function(){var e=Object(g.useState)([]),n=Object(E.a)(e,2),t=n[0],c=n[1],r=Object(B.m)().account,a=Object(U.a)().fastRefresh;return Object(g.useEffect)((function(){r&&function(){var e=Object(F.a)(S.a.mark((function e(){var n,t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T.a.map((function(e){return{address:Object(M.d)(),name:"pendingKuzo",params:[e.pid,r]}})),e.next=3,Object(D.a)(R,n);case 3:t=e.sent,a=T.a.map((function(e,n){return Object(A.a)(Object(A.a)({},e),{},{balance:new K.a(t[n])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),t},L=t(726),Z=t(736),H=t(15),Q=function(e){var n=e.value,t=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,a=e.prefix,i=Object(Z.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),s=i.countUp,o=i.update,l=Object(g.useRef)(o);return Object(g.useEffect)((function(){l.current(n)}),[n,l]),Object(H.jsxs)(w.B,{bold:!0,fontSize:r,children:[a,s]})},$=function(e){var n=e.earningsSum,t=Object(k.a)();return Object(B.m)().account?Object(H.jsx)(Q,{value:n}):Object(H.jsx)(w.B,{color:"textDisabled",style:{lineHeight:"60px"},children:t(298,"Locked")})},q=function(e){var n=e.cakeBalance,t=Object(k.a)();return Object(B.m)().account?Object(H.jsx)(Q,{value:n,fontSize:"24px"}):Object(H.jsx)(w.B,{color:"textDisabled",style:{lineHeight:"36px"},children:t(298,"Locked")})},P=t(114),G=t(285),I=t(94),J=t(749),V=function(e){var n=Object(g.useState)(new K.a(0)),t=Object(E.a)(n,2),c=t[0],r=t[1],a=Object(B.m)(),i=a.account,s=a.ethereum,o=Object(U.a)().fastRefresh;return Object(g.useEffect)((function(){i&&s&&function(){var n=Object(F.a)(S.a.mark((function n(){var t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(J.b)(s,e,i);case 2:t=n.sent,r(new K.a(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[i,s,e,o]),c},W=function(){var e=Object(g.useState)([]),n=Object(E.a)(e,2),t=n[0],c=n[1],r=Object(B.m)().account,a=Object(U.a)().fastRefresh;return Object(g.useEffect)((function(){r&&function(){var e=Object(F.a)(S.a.mark((function e(){var n,t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T.a.map((function(e){return{address:Object(M.d)(),name:"pendingKuzo",params:[e.pid,r]}})),e.next=3,Object(D.a)(R,n);case 3:t=e.sent,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),t},X=t(709),Y=Object(v.e)(w.h)(c||(c=Object(m.a)(["\nposition: relative;\noverflow: hidden;\nz-index: 2;\n\n&:before {\n  content: ' ';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    opacity: 0.9;\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-color: #3E0880;\n  min-height: 376px;\n  }\n"]))),ee=(v.e.a(r||(r=Object(m.a)(["\n  display: inline-block !important;\n  width: 408px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #490584;\n"]))),Object(v.e)(w.d)(a||(a=Object(m.a)(["\n  background-color: #FFFFFF;\n\tcolor: #7A3AC8;\n\tfont-size: 22px;\n  &:hover {\n\tbackground-color: #490584;\n\tcolor: #FFFFFF;\n  }\n"]))),v.e.div(i||(i=Object(m.a)(["\n  margin-bottom: 16px;\n"])))),ne=v.e.img(s||(s=Object(m.a)(["\n  margin-bottom: 16px;\n"]))),te=v.e.div(o||(o=Object(m.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){e.theme;return"#E9EAEB"})),ce=v.e.div(l||(l=Object(m.a)(["\n  margin-top: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"]))),re=Object(M.a)(),ae=function(){var e=Object(g.useState)(!1),n=Object(E.a)(e,2),t=n[0],c=n[1],r=Object(B.m)().account,a=Object(k.a)(),i=_(),s=Object(X.a)(V(Object(M.a)())),o=Object(P.g)().toNumber(),l=W().reduce((function(e,n){return e+new K.a(n).div(new K.a(10).pow(18)).toNumber()}),0),j=i.filter((function(e){return e.balance.toNumber()>0})),b=Object(N.a)(j.map((function(e){return e.pid}))).onReward,u=Object(g.useCallback)(Object(F.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,b();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[b]),d=Object(g.useCallback)(Object(F.a)(S.a.mark((function e(){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=window.ethereum)){e.next=11;break}return e.prev=2,e.next=5,n.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:re,symbol:"KUZO",decimals:"18",image:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/a9q9vb3gzdnibfegyyma"}}});case 5:e.sent,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])}))),[]);return Object(H.jsx)(Y,{children:Object(H.jsxs)(w.i,{children:[Object(H.jsx)(w.n,{size:"xl",mb:"24px",color:"#FFFFFF",children:a(542,"Farms & Staking")}),Object(H.jsx)(ne,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(H.jsx)(ce,{children:r?Object(H.jsx)(w.d,{id:"harvest-all",disabled:j.length<=0||t,onClick:u,children:t?a(548,"Collecting EAGLE"):a(999,"Harvest all (".concat(j.length,")"))}):Object(H.jsx)(L.a,{})}),Object(H.jsxs)(ee,{children:[Object(H.jsx)(te,{color:"white",children:"KUZO to Harvest"}),Object(H.jsx)($,{earningsSum:l}),Object(H.jsxs)(te,{color:"white",children:["~$",(o*l).toFixed(2)]})]}),Object(H.jsxs)(ee,{children:[Object(H.jsx)(te,{children:"KUZO in Wallet"}),Object(H.jsx)(q,{cakeBalance:s}),Object(H.jsxs)(te,{children:["~$",(o*s).toFixed(2)]})]}),Object(H.jsx)(ce,{children:Object(H.jsxs)(w.d,{onClick:d,size:"sm",style:{marginBottom:0},mb:2,children:["+ Add KUZO to ",Object(H.jsx)("img",{style:{marginLeft:8},width:16,src:"https://kuzo.xyz/images/metamask.png",alt:"metamask logo"})]})})]})})},ie=t(718),se=Object(v.e)(w.h)(j||(j=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  font-color: white;\n  background-color: #3E0880;\n"]))),oe=v.e.div(b||(b=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  font-color: white;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),le=function(){var e=Object(k.a)(),n=function(){var e=Object(U.a)().slowRefresh,n=Object(g.useState)(),t=Object(E.a)(n,2),c=t[0],r=t[1];return Object(g.useEffect)((function(){function e(){return(e=Object(F.a)(S.a.mark((function e(){var n,t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(I.a)(G,Object(M.a)()),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,r(new K.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),t=function(e){var n=Object(g.useState)(new K.a(0)),t=Object(E.a)(n,2),c=t[0],r=t[1],a=Object(U.a)().slowRefresh;return Object(g.useEffect)((function(){!function(){var e=Object(F.a)(S.a.mark((function e(){var n,t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(I.a)(G,Object(M.a)()),e.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:t=e.sent,r(new K.a(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,a]),c}(Object(M.a)()),c=Object(P.c)(),r=Object(P.g)(),a=n?n.minus(t):new ie.a(0),i=Object(X.a)(a),s=r.times(a);return c&&c[0]&&c[0].fKuzoPerBlock&&new ie.a(c[0].fKuzoPerBlock).div(new ie.a(10).pow(18)).toNumber(),Object(H.jsxs)(se,{children:[Object(H.jsxs)(w.i,{children:[Object(H.jsx)(w.n,{size:"xl",mb:"24px",color:"white",children:"KUZO Stats"}),Object(H.jsxs)(oe,{children:[Object(H.jsx)(w.B,{fontSize:"14px",color:"white",children:"Market Cap"}),Object(H.jsx)(Q,{fontSize:"14px",value:Object(X.a)(s),decimals:0,prefix:"$ "})]}),Object(H.jsxs)(oe,{children:[Object(H.jsx)(w.B,{fontSize:"14px",color:"white",children:"Total Minted"}),n&&Object(H.jsx)(Q,{fontSize:"14px",value:Object(X.a)(n),decimals:0})]}),Object(H.jsxs)(oe,{children:[Object(H.jsx)(w.B,{fontSize:"14px",color:"white",children:"Total Burned"}),Object(H.jsx)(Q,{fontSize:"14px",value:Object(X.a)(t),decimals:0})]}),Object(H.jsxs)(oe,{children:[Object(H.jsx)(w.B,{fontSize:"14px",color:"white",children:"Circulating Supply"}),i&&Object(H.jsx)(Q,{fontSize:"14px",value:i,decimals:0})]}),Object(H.jsxs)(oe,{children:[Object(H.jsx)(w.B,{fontSize:"14px",color:"white",children:"Maximum Supply"}),"10,000"]}),Object(H.jsxs)(oe,{children:[Object(H.jsx)(w.B,{fontSize:"14px",color:"white",children:"New KUZO/block"}),Object(H.jsx)(w.B,{bold:!0,fontSize:"14px",color:"white",children:e(539,"0.001")})]})]}),Object(H.jsx)("a",{href:"/pools",children:Object(H.jsx)("img",{src:"images/egg/32.png",alt:"RugDoc Review",width:"624",height:"241"})})]})},je=Object(v.e)(w.h)(u||(u=Object(m.a)(["\n  background-repeat: no-repeat;\n  background-color: #3E0880;\n  background-position: top right;\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),be=function(){var e=Object(k.a)(),n=Object(P.h)();return Object(H.jsx)(je,{children:Object(H.jsxs)(w.i,{children:[Object(H.jsx)(w.n,{size:"lg",mb:"24px",color:"white",children:e(999,"Total Value Locked (TVL)")}),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Q,{value:n.toNumber(),prefix:"$",decimals:2}),Object(H.jsx)(w.B,{color:"white",children:e(999,"Across all Farms and Pools")})]})]})})},ue=t(1100),de=t(318),Oe=Object(v.e)(w.h)(d||(d=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),pe=(v.e.div(O||(O=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(k.a)(),n=Object(de.a)(),t=n.isDark;n.toggleTheme,n.theme;return Object(H.jsx)(Oe,{children:Object(H.jsxs)(w.i,{children:[Object(H.jsx)(w.n,{size:"xl",mb:"24px",color:"#FFFFFF",children:e(10003,"News")}),Object(H.jsx)(ue.a,{dataSource:{sourceType:"profile",screenName:"KuzoDefi"},options:{height:"500",chrome:"noheader, nofooter",width:"1300",theme:t?"dark":"light"}})]})})}),xe=v.e.div(p||(p=Object(m.a)(["\nfont-family: sans-serif;\ncolor: #fbf8f8;\ndisplay: inline-block;\nfont-weight: 100;\ntext-align: center;\nfont-size: 30px;\n"]))),fe=v.e.div(x||(x=Object(m.a)(["\npadding: 10px;\nborder-radius: 3px;\nbackground: #3E0880;\ndisplay: inline-block;\nmargin-right: 10px;\n"]))),he=v.e.span(f||(f=Object(m.a)(["\nborder-radius: 3px;\nbackground: #3E0880;\ndisplay: inline-block;\nmargin-right: 10px;\n"]))),me=v.e.span(h||(h=Object(m.a)(["\nborder-radius: 3px;\ndisplay: inline-block;\npadding-top: 5px;\nfont-size: 16px;\n"])));function ge(e){var n=Date.parse(e)-Date.parse((new Date).toString()),t=Math.floor(n/1e3%60),c=Math.floor(n/1e3/60%60),r=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:r,minutes:c,seconds:t}}var ve,we,ke,ye,ze,Se,Fe,Ee=function(){var e="SMon Nov 15 2021 04:53:06 GMT-0500 (EST)",n=Object(g.useState)(ge(e)),t=Object(E.a)(n,2),c=t[0],r=t[1],a=Object(g.useState)(!1),i=Object(E.a)(a,2),s=i[0],o=i[1];return Object(g.useEffect)((function(){var n=setInterval((function(){var n=ge(e);r((function(e){return n})),n.total<=0?o((function(e){return!1})):o((function(e){return!0}))}),1e3);return function(){return clearInterval(n)}}),[]),s?Object(H.jsx)("div",{children:Object(H.jsxs)("div",{children:[Object(H.jsxs)(w.n,{as:"h2",size:"lg",mb:"20px",color:"white",style:{alignContent:"center",textAlign:"center"},children:["Farm will start from block: ",Object(H.jsx)("a",{style:{marginLeft:"5px",color:"#ffffff"},href:"https://ftmscan.com/block/countdown/18800147",children:"#22111110"})]}),Object(H.jsx)("div",{style:{alignContent:"center",textAlign:"center"},children:Object(H.jsxs)(xe,{children:[Object(H.jsxs)(fe,{children:[Object(H.jsx)(he,{className:"days",children:c.days}),Object(H.jsx)(me,{children:"Days"})]}),Object(H.jsxs)(fe,{children:[Object(H.jsx)(he,{className:"hours",children:c.hours}),Object(H.jsx)(me,{children:"Hours"})]}),Object(H.jsxs)(fe,{children:[Object(H.jsx)(he,{className:"minutes",children:c.minutes}),Object(H.jsx)(me,{children:"Min"})]}),Object(H.jsxs)(fe,{children:[Object(H.jsx)(he,{className:"seconds",children:c.seconds}),Object(H.jsx)(me,{children:"Sec"})]})]})})]})}):Object(H.jsx)("div",{})},Be=v.e.div(ve||(ve=Object(m.a)(["\n  \n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 32px;\n  text-align: center;\n  color: white;\n\n  "," {\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ce=v.e.div(we||(we=Object(m.a)(["\n  margin-bottom: 62px;\n  "," {\n    background-color: #7A98F8;\n    border: 0px solid;\n    border-radius: 20px;\n    margin-bottom: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Ke=v.e.div(ke||(ke=Object(m.a)(["\n  font-size: 40px;\n  font-weight: 600;\n  margin-bottom: 15px;\n  display: none;\n // "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Ne=v.e.div(ye||(ye=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  @media (max-width: 400px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),Ae=Object(v.e)(w.b)(ze||(ze=Object(m.a)(["\n  display: flex;\n\n  align-items: stretch;\n  justify-content: center;\n  margin-bottom: 48px;\n\n  & > div {\n   // grid-column: span 6;\n   grid-column: span 8;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),De=Object(v.e)(y.a)(Se||(Se=Object(m.a)(["\n  width: 100%;\n  max-width: 100%;\n  margin-left: 0;\n  margin-right: 0;\n  padding-top: 20px;\n"]))),Me=(Object(v.e)(y.a)(Fe||(Fe=Object(m.a)(["\n  width: 395px;\n  height: 180px;\n"]))),function(){Object(k.a)();return Object(H.jsxs)(De,{children:[Object(H.jsxs)(Be,{children:[Object(H.jsx)(Ce,{children:Object(H.jsxs)(Be,{children:[Object(H.jsx)(Ke,{children:"Welcome To"}),Object(H.jsx)("img",{src:"images/home/logo.png",alt:"logo"})]})}),Object(H.jsx)(Ee,{})]}),Object(H.jsx)("div",{children:Object(H.jsxs)(Ae,{children:[Object(H.jsx)(ae,{}),Object(H.jsx)(le,{})]})}),Object(H.jsxs)(Ne,{children:[Object(H.jsx)("div",{children:Object(H.jsx)(be,{})}),Object(H.jsx)("a",{href:"/",children:Object(H.jsx)("img",{src:"images/egg/33.png",alt:"Kuzo"})}),Object(H.jsx)("a",{href:"/",children:Object(H.jsx)("img",{src:"images/egg/34.png",alt:"Kuzo"})})]}),Object(H.jsx)(pe,{})]})})},749:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return j}));var c=t(4),r=t.n(c),a=t(16),i=t(142),s=t.n(i),o=t(68),l=function(e,n){return new(new s.a(e).eth.Contract)(o,n)},j=function(){var e=Object(a.a)(r.a.mark((function e(n,t,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(n,t),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,c){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=17.9fd06a6f.chunk.js.map