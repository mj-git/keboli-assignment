(this["webpackJsonpkeboli-mrc"]=this["webpackJsonpkeboli-mrc"]||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(98),t(55)),i=t.n(o),m=t(21),s=t(56),u=t(161),p=t(160),d=t(155),g=t(182),E=t(180),f=t(163),h=t(71),v=t.n(h),b=t(72),x=t.n(b),y=t(156),w=t(157),k=t(158),N=t(159),O=t(73),j=t.n(O),S=t(162),C=t(47),P=t(164),I=t(78),T=t(165),B=t(166),W=t(167),A=t(168),D=t(169),q=t(170),L=t(181),H=t(69),R=t(12),U=t(152),G=t(154),M=t(184),F=t(151),J=Object(H.a)({card:{display:"flex",justifyContent:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},square:{color:"#fff",backgroundColor:F.a[500],display:"inline-block","& p":{margin:"10px 0"}},pos:{marginBottom:12}});function K(e){var a=e.primaryText,t=e.secondaryText,n=e.count,l=J();return r.a.createElement(U.a,{className:l.card},r.a.createElement(G.a,null,r.a.createElement(M.a,{variant:"square",className:l.square},r.a.createElement(C.a,{component:"p"},a[0].toUpperCase())),r.a.createElement(C.a,{className:l.pos,color:"textPrimary"},a),r.a.createElement(C.a,{variant:"h6",component:"p"},n),r.a.createElement(C.a,{color:"textSecondary"},t)))}K.defaultProps={primaryText:"Total Candidates",secondaryText:"Candidates",count:5};var Y=K,z=Object(H.a)((function(e){return{root:{display:"flex",maxHeight:"100vh"},drawer:Object(s.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(s.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(s.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},content:{flexGrow:1,textAlign:"center",padding:e.spacing(3)},widgetGrid:{maxHeight:"50%",overflow:"auto",marginBottom:"0px"},tableHeader:{margin:"12px 0",textAlign:"left",padding:"15px 15px"}}}));var V,$=(V=function(e){var a=e.container,t=z(),n=Object(R.a)(),l=r.a.useState(!1),c=Object(m.a)(l,2),o=c[0],s=c[1],h=r.a.useState(0),b=Object(m.a)(h,2),O=b[0],H=b[1],U=r.a.useState(5),G=Object(m.a)(U,2),M=G[0],F=G[1],J=r.a.useState([]),K=Object(m.a)(J,2),V=K[0],$=K[1],Q=r.a.useState([]),X=Object(m.a)(Q,2),Z=X[0],_=X[1];r.a.useEffect((function(){!function(){var e,a,t;i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(fetch("response.json"));case 2:return e=n.sent,n.next=5,i.a.awrap(e.json());case 5:a=n.sent,t=a.data,$(t);case 8:case"end":return n.stop()}}))}()}),[]),r.a.useEffect((function(){var e,a=[{primaryText:"Total Candidates",count:V.length}];if(V.length){var t=(e="domain",V.reduce((function(a,t){return(a[t[e]]=a[t[e]]||[]).push(t),a}),{})),n=Object.keys(t).map((function(e){return{primaryText:e,count:t[e].length}}));a=a.concat(n)}_(a)}),[V]);var ee=function(){s(!o)},ae=r.a.createElement("div",null,r.a.createElement("div",{className:t.toolbar}),r.a.createElement(d.a,null),r.a.createElement(y.a,null,[{text:"Dashboard",icon:r.a.createElement(v.a,null)},{text:"Logout",icon:r.a.createElement(x.a,null),action:function(){sessionStorage.removeItem("token"),e.history.push("/login")}}].map((function(e){var a=e.text,t=e.icon,n=e.action,l=void 0===n?function(){}:n;return r.a.createElement(w.a,{button:!0,key:a,onClick:function(){return l()}},r.a.createElement(k.a,null,t),r.a.createElement(N.a,{primary:a}))}))));return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,null),r.a.createElement(u.a,{position:"fixed",className:t.appBar},r.a.createElement(S.a,null,r.a.createElement(f.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:ee,className:t.menuButton},r.a.createElement(j.a,null)),r.a.createElement(C.a,{variant:"h6",noWrap:!0},"KEBOLI MRC"))),r.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},r.a.createElement(E.a,{smUp:!0,implementation:"css"},r.a.createElement(g.a,{container:a,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:o,onClose:ee,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},ae)),r.a.createElement(E.a,{xsDown:!0,implementation:"css"},r.a.createElement(g.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},ae))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(P.a,{container:!0,spacing:3,className:t.widgetGrid},Z.map((function(e,a){return r.a.createElement(P.a,{item:!0,xs:3,key:a},r.a.createElement(Y,e))}))),r.a.createElement(I.a,{className:t.tableHeader},r.a.createElement(C.a,{component:"p",color:"primary"},"Scheduled List")),r.a.createElement(I.a,null,r.a.createElement(T.a,{className:t.table},r.a.createElement(B.a,null,r.a.createElement(W.a,null,r.a.createElement(A.a,null,"Candidate Id"),r.a.createElement(A.a,{align:"right"},"Name"),r.a.createElement(A.a,{align:"right"},"Domain"),r.a.createElement(A.a,{align:"right"},"Years of Exp"),r.a.createElement(A.a,{align:"right"},"Recruiter Name"),r.a.createElement(A.a,{align:"right"},"Interview Type"))),r.a.createElement(D.a,null,V.slice(O*M,O*M+M).map((function(e){return r.a.createElement(W.a,{key:e.name},r.a.createElement(A.a,{component:"th",scope:"row"},e.candidateId),r.a.createElement(A.a,{align:"right"},e.name),r.a.createElement(A.a,{align:"right"},e.domain),r.a.createElement(A.a,{align:"right"},e.yearOfExperience),r.a.createElement(A.a,{align:"right"},e.recruiterName),r.a.createElement(A.a,{align:"right"},e.interviewType))}))),r.a.createElement(q.a,null,r.a.createElement(W.a,null,r.a.createElement(L.a,{colSpan:3,count:V.length,rowsPerPage:M,rowsPerPageOptions:[],page:O,onChangePage:function(e,a){H(a)},onChangeRowsPerPage:function(e){F(parseInt(e.target.value,10)),H(0)}})))))))},function(e){var a=r.a.useState(""),t=Object(m.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=sessionStorage.getItem("token");l(a),a||e.history.push("/login")}),[]),n&&r.a.createElement(V,e)}),Q=t(175),X=t(179),Z=t(173),_=t(176),ee=t(74),ae=t.n(ee),te=t(174);function ne(){return r.a.createElement(C.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(Z.a,{color:"inherit",href:"#"},"KEBOLI")," ",(new Date).getFullYear(),".")}var re=Object(H.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var le=t(60),ce=t(32);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=r.a.createElement(le.a,{basename:"/keboli-assignment"},r.a.createElement(ce.c,null,r.a.createElement(ce.a,{exact:!0,path:"/",component:$}),r.a.createElement(ce.a,{path:"/login",component:function(e){var a=re(),t=r.a.useState(""),n=Object(m.a)(t,2),l=n[0],c=n[1],o=r.a.useState(""),i=Object(m.a)(o,2),s=i[0],u=i[1],d=r.a.useState(""),g=Object(m.a)(d,2),E=g[0],f=g[1];return r.a.createElement(te.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(M.a,{className:a.avatar},r.a.createElement(ae.a,null)),r.a.createElement(C.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(C.a,{component:"p",variant:"body2",color:"error"},E),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(X.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoFocus:!0,onChange:function(e){return c(e.target.value)}}),r.a.createElement(X.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return u(e.target.value)}}),r.a.createElement(Q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(a){if(a.preventDefault(),"Admin"===l&&"Admin@1234"===s)return sessionStorage.setItem("token","A123456"),void e.history.push("/");f("Invalid Username or Password")}},"Sign In"))),r.a.createElement(_.a,{mt:8},r.a.createElement(ne,null)))}})));c.a.render(oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,a,t){e.exports=t(106)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.7716e291.chunk.js.map