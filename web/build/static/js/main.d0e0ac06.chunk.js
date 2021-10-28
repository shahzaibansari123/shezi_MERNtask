(this.webpackJsonpassignmentfrontend=this.webpackJsonpassignmentfrontend||[]).push([[0],{188:function(e,a,t){},189:function(e,a,t){},318:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(43),i=t.n(s),o=(t(188),t.p,t(189),t(18)),c=(t(190),t(62)),l=t(362),d=t(369),j=t(376),b=t(373),u=t(24),h=t(51),m=t.n(h),x="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"",p=t(13),O=t(45),g=function(e,a){switch(a.type){case"LOGIN":return a.payload.name&&a.payload.email&&a.payload.contact&&a.payload.website&&a.payload.address?Object(O.a)(Object(O.a)({},e),{},{user:a.payload}):(console.log("invalid data"),e);case"LOGOUT":return Object(O.a)(Object(O.a)({},e),{},{user:null});default:return e}},A=t(1),v=Object(r.createContext)("Initial Value"),f={user:{}};function w(e){var a=e.children,t=Object(r.useReducer)(g,f),n=Object(p.a)(t,2),s=n[0],i=n[1];return Object(A.jsx)(v.Provider,{value:{state:s,dispatch:i},children:a})}var y=u.a({email:u.b("Enter your email").email("Enter a valid email").required("Email is required"),password:u.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var C=function(){var e=Object(o.g)(),a=Object(r.useContext)(v).dispatch,t=Object(c.a)({validationSchema:y,initialValues:{email:"",password:""},onSubmit:function(t){console.log("values: ",t),m.a.post("".concat(x,"/api/v1/login"),{email:t.email,password:t.password}).then((function(t){console.log("res: ",t.data),"Authentication fail"!==t.data?(a({type:"LOGIN",payload:{name:t.data.name,email:t.data.email,contact:t.data.contact,website:t.data.website,address:t.data.address}}),alert("login successfull"),setTimeout((function(){e.push("/posts")}),1e3)):alert("invalid credential")}))}});return Object(A.jsxs)("div",{style:{padding:"1rem"},children:[Object(A.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"Log In"}),Object(A.jsx)("br",{}),Object(A.jsx)("form",{onSubmit:t.handleSubmit,children:Object(A.jsx)(b.a,{container:!0,spacing:2,children:Object(A.jsx)(b.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,sx:{width:"50%",margin:"auto"},children:Object(A.jsx)(b.a,{children:Object(A.jsxs)(l.a,{spacing:3,children:[Object(A.jsx)(d.a,{color:"primary",id:"outlined-basic",label:"Email",placeholder:"enter email address",variant:"standard",name:"email",value:t.values.email,onChange:t.handleChange,error:t.touched.email&&Boolean(t.errors.email),helperText:t.touched.email&&t.errors.email}),Object(A.jsx)(d.a,{color:"primary",id:"filled-basic",label:"Password",placeholder:"enter your password",variant:"standard",type:"password",name:"password",value:t.values.password,onChange:t.handleChange,error:t.touched.password&&Boolean(t.errors.password),helperText:t.touched.password&&t.errors.password}),Object(A.jsx)(b.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(j.a,{sx:{marginBottom:"1%"},variant:"contained",color:"inherit",type:"submit",children:"Log in"}),Object(A.jsx)(j.a,{sx:{marginLeft:"1%",marginBottom:"1%"},variant:"text",color:"inherit",type:"submit",onClick:function(){e.push("/signup")},children:"I don't Have an Account"})]})})]})})})})})]})},S=u.a({name:u.b("Enter your Name").required("Name is required"),email:u.b("Enter your email").email("Enter a valid email").required("Email is required"),password:u.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required"),contact:u.b("Enter your Contact").min(11,"invalid number").max(11,"invalid number").required("contact number is required"),address:u.b("Enter your address").required("Address is required"),website:u.b("Enter your profile/URL").url("please enter valid URL e.g: https://somewebsite.com").required("profile/URL is required")});var L=function(){var e=Object(o.g)(),a=Object(c.a)({validationSchema:S,initialValues:{name:"",email:"",password:"",contact:"",address:"",website:""},onSubmit:function(a){console.log("values: ",a),m.a.post("".concat(x,"/api/v1/signup"),{name:a.name,email:a.email,password:a.password,contact:a.contact,address:a.address,website:a.website}).then((function(a){console.log("res: ",a.data),"profile created"===a.data&&(alert("signup successfully"),setTimeout((function(){e.push("/login")}),1e3))}))}});return Object(A.jsxs)("div",{style:{padding:"1rem"},children:[Object(A.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"Sign Up"}),Object(A.jsx)("br",{}),Object(A.jsx)("form",{onSubmit:a.handleSubmit,children:Object(A.jsx)(b.a,{container:!0,spacing:2,children:Object(A.jsx)(b.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,sx:{width:"50%",margin:"auto"},children:Object(A.jsx)(b.a,{children:Object(A.jsxs)(l.a,{spacing:3,children:[Object(A.jsx)(d.a,{color:"secondary",id:"outlined-basic",label:"Name",placeholder:"enter your name",variant:"standard",name:"name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name}),Object(A.jsx)(d.a,{color:"secondary",id:"outlined-basic",label:"Email",placeholder:"enter email address",variant:"standard",name:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(A.jsx)(d.a,{color:"secondary",id:"filled-basic",label:"Password",placeholder:"enter your password",variant:"standard",type:"password",name:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(A.jsx)(d.a,{color:"secondary",id:"filled-basic",label:"Contact",placeholder:"enter your Contact Number",variant:"standard",name:"contact",value:a.values.contact,onChange:a.handleChange,error:a.touched.contact&&Boolean(a.errors.contact),helperText:a.touched.contact&&a.errors.contact}),Object(A.jsx)(d.a,{color:"secondary",id:"filled-basic",label:"address",placeholder:"enter your address",variant:"standard",name:"address",value:a.values.address,onChange:a.handleChange,error:a.touched.address&&Boolean(a.errors.address),helperText:a.touched.address&&a.errors.address}),Object(A.jsx)(d.a,{color:"secondary",id:"outlined-basic",label:"linkedInURL/Profile",placeholder:"enter URL here",variant:"standard",name:"website",value:a.values.website,onChange:a.handleChange,error:a.touched.website&&Boolean(a.errors.website),helperText:a.touched.website&&a.errors.website}),Object(A.jsx)(b.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(j.a,{sx:{marginBottom:"1%"},variant:"contained",color:"inherit",type:"submit",children:"Sign up"}),Object(A.jsx)(j.a,{sx:{marginLeft:"1%",marginBottom:"1%"},variant:"text",color:"inherit",type:"submit",onClick:function(){e.push("/login")},children:"I Have an Account"})]})})]})})})})})]})},E=t(167),B=t.p+"static/media/download.84b4112d.jfif",q=t(379),I=t(380),P=t(382),T=t(381),k=t(383),R=t(374),U=t(378),z=t(327),F=t(170),N=t.n(F),K=t(171),V=t.n(K),J=t(169),M=t.n(J),X=t(3),G=t(377),D=t(368),Y=t(384),Q=t(385),H=t(168),Z=t.n(H),W=["children","onClose"],$=Object(X.a)(G.a)((function(e){var a=e.theme;return{"& .MuiDialogContent-root":{padding:a.spacing(2)},"& .MuiDialogActions-root":{padding:a.spacing(1)}}})),_=function(e){var a=e.children,t=e.onClose,r=Object(E.a)(e,W);return Object(A.jsxs)(D.a,Object(O.a)(Object(O.a)({sx:{m:0,p:2}},r),{},{children:[a,t?Object(A.jsx)(U.a,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(A.jsx)(Z.a,{})}):null]}))},ee=u.a({post:u.b("add something ").required("required*")});var ae=function(){var e,a=r.useState(!1),t=Object(p.a)(a,2),n=t[0],s=t[1],i=function(){s(!1)},u=Object(o.g)(),h=Object(r.useContext)(v),O=h.state,g=h.dispatch,f=Object(c.a)({validationSchema:ee,initialValues:{post:"",createdby:""},onSubmit:function(e){var a;console.log("values: ",e),(null===O||void 0===O||null===(a=O.user)||void 0===a?void 0:a.name)&&m.a.post("".concat(x,"/api/v1/posts"),{post:e.post,createdby:O.user.name}).then((function(e){console.log(e.data),K(!F)}))}}),w=Object(r.useState)([]),y=Object(p.a)(w,2),C=y[0],S=y[1],L=Object(r.useState)(!1),E=Object(p.a)(L,2),F=E[0],K=E[1];return Object(r.useEffect)((function(){return m.a.get("".concat(x,"/api/v1/posts")).then((function(e){console.log(e.data),S(e.data)})),function(){console.log("post shown")}}),[F]),Object(A.jsxs)("div",{style:{padding:"1rem"},children:[Object(A.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"POSTS"}),Object(A.jsx)("br",{}),Object(A.jsx)("form",{onSubmit:f.handleSubmit,children:Object(A.jsx)("div",{children:Object(A.jsxs)(b.a,{container:!0,spacing:1,sx:{paddingLeft:"10%",paddingRight:"10%"},children:[Object(A.jsx)(b.a,{item:!0,xl:8,lg:8,xs:12,sm:12,md:12,children:Object(A.jsx)(b.a,{children:Object(A.jsx)(l.a,{spacing:3,children:Object(A.jsx)(d.a,{color:"primary",id:"outlined-basic",variant:"standard",placeholder:"Enter text here",name:"post",value:f.values.post,onChange:f.handleChange,error:f.touched.post&&Boolean(f.errors.post),helperText:f.touched.post&&f.errors.post})})})}),Object(A.jsx)(b.a,{item:!0,xl:2,lg:2,xs:12,sm:4,md:4,children:Object(A.jsx)(b.a,{children:Object(A.jsx)(j.a,{sx:{height:"25px",width:"100%",fontSize:"12px"},variant:"contained",color:"inherit",type:"submit",children:"Create Post"})})}),Object(A.jsx)(b.a,{item:!0,xl:1,lg:1,xs:6,sm:4,md:4,children:Object(A.jsx)(b.a,{children:Object(A.jsx)(j.a,{sx:{height:"25px",width:"100%",fontSize:"12px"},variant:"contained",color:"info",onClick:function(){s(!0)},children:"Profile"})})}),Object(A.jsx)(b.a,{item:!0,xl:1,lg:1,xs:6,sm:4,md:4,children:Object(A.jsx)(b.a,{children:Object(A.jsx)(j.a,{sx:{height:"25px",width:"100%",fontSize:"12px"},variant:"contained",color:"error",onClick:function(){u.push("/login"),g({type:"LOGOUT",payload:null})},children:"Logout"})})})]})})}),Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),(null===O||void 0===O||null===(e=O.user)||void 0===e?void 0:e.name)&&C.map((function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(q.a,{sx:{maxWidth:845,margin:"auto"},children:[Object(A.jsx)(I.a,{avatar:Object(A.jsx)(R.a,{sx:{backgroundColor:"transparent"},"aria-label":"profile",children:Object(A.jsx)("img",{style:{width:"50px"},src:B})}),action:Object(A.jsx)(U.a,{"aria-label":"settings",children:Object(A.jsx)(M.a,{})}),title:e.createdby}),Object(A.jsx)(T.a,{children:Object(A.jsx)(z.a,{variant:"body2",color:"text.secondary",children:e.post})}),Object(A.jsx)(P.a,{component:"img",height:"354",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX09PTMzMzJycnPz8/d3d3V1dXi4uLo6Ojw8PDx8fH39/ft7e3Y2NjQ0NDp6enb29uHE20LAAACaklEQVR4nO3b6W6CQBhGYUTWD9T7v9uylLIN6jCk8Cbn+deEGo6DMOAYRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJyFiuzshLesStJAdVZdufEV38LFydkZm6w+IrBJrK86itkxgU1ifnaKmz363QvUvsbjmoNYdjuXPPMQz6R7lfLsGKeq3bd76LvfHwnFIXt0tOKYwjuF51kVtjMUbzqFVmR1/cpK30idwv7qH98yz0SVwvI+XP19JygqhY9xehMnXokihfl0/hZ77a5I4WM2zXz5DKJI4XwKvjHLNGeGRmE1L7w7N7fKeRLSKCy+KGwCnedZjcJofruXuo7SbpwdiRqFlk4D42y9rf0eyOtEjcL5BzFeb2rV5oRApNAmj6QcjyRs8g4sE0UKJ4nxemJq8yGeJ6oURpY/uic26frppy0uJvNEmcI2JM/yovlz8cxlGbhIFCrcsA6cX0/kC52Bt3hMlC90Bk5HUbzQPYL9KA6b6BXmk8/YZuCYqFdYj/f47wL/EtUKrR6/LXsfOCSKFbaBQ+KnwGa79sqpVWjp7x1Ec6B+DhQsHAK7xM+BeoVjYLPzr499eoXTwO+IFfoHihXuWbWgVVh792kV7lt3IlRoe0ZQqvCLax+FZ8c4UUghheebFu6jU1gk++gU7l3t3f2rRmGAyxcGr329cuEh60stunBh2Z3y6yxM/wX52S1u/bf3Ryzzdq9tuIDnYWv1q7NTNlhy0O8t/Nb6/SfLbnHoYbpjSep/sjLfOZ0ZXfTXJKPgH69deAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDyA0uAKIxQw0bjAAAAAElFTkSuQmCC",alt:"picture"}),Object(A.jsxs)(k.a,{disableSpacing:!0,children:[Object(A.jsx)(U.a,{"aria-label":"add to favorites",children:Object(A.jsx)(N.a,{})}),Object(A.jsx)(U.a,{"aria-label":"share",children:Object(A.jsx)(V.a,{})})]})]}),Object(A.jsx)("br",{})]})})),Object(A.jsxs)($,{sx:{maxWidth:"100%"},onClose:i,"aria-labelledby":"customized-dialog-title",open:n,children:[Object(A.jsx)(_,{id:"customized-dialog-title",onClose:i,children:"Profile Details"}),Object(A.jsx)(Y.a,{children:Object(A.jsxs)(z.a,{gutterBottom:!0,children:["Name: ",O.user.name,Object(A.jsx)("br",{}),"Email: ",O.user.email,Object(A.jsx)("br",{}),"Contact: ",O.user.contact,Object(A.jsx)("br",{}),"website: ",O.user.website,Object(A.jsx)("br",{}),"Address: ",O.user.address]})}),Object(A.jsx)(Q.a,{})]})]})};var te=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(o.d,{children:[Object(A.jsx)(o.b,{exact:!0,path:"/",children:Object(A.jsx)(L,{})}),Object(A.jsx)(o.b,{path:"/signup",children:Object(A.jsx)(L,{})}),Object(A.jsx)(o.b,{path:"/login",children:Object(A.jsx)(C,{})}),Object(A.jsx)(o.b,{path:"/posts",children:Object(A.jsx)(ae,{})}),Object(A.jsx)(o.b,{render:function(){return Object(A.jsx)(o.a,{to:{pathname:"/"}})}})]})})},re=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,387)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),r(e),n(e),s(e),i(e)}))},ne=t(55);i.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(w,{children:Object(A.jsx)(ne.a,{children:Object(A.jsx)(te,{})})})}),document.getElementById("root")),re()}},[[318,1,2]]]);
//# sourceMappingURL=main.d0e0ac06.chunk.js.map