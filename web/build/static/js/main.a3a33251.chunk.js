(this.webpackJsonpassignmentfrontend=this.webpackJsonpassignmentfrontend||[]).push([[0],{190:function(e,a,t){},191:function(e,a,t){},319:function(e,a,t){},320:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(44),i=t.n(s),c=(t(190),t.p,t(191),t(18)),o=(t(128),t(63)),d=t(365),l=t(372),j=t(379),b=t(376),u=t(24),h=t(34),m=t.n(h),x="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"",p=t(13),O=t(46),g=function(e,a){switch(a.type){case"LOGIN":return a.payload._id&&a.payload.name&&a.payload.email&&a.payload.contact&&a.payload.website&&a.payload.address?Object(O.a)(Object(O.a)({},e),{},{user:a.payload}):(console.log("invalid data"),e);case"LOGOUT":return Object(O.a)(Object(O.a)({},e),{},{user:null});default:return e}},A=t(1),f=Object(r.createContext)("Initial Value"),v={user:void 0};function w(e){var a=e.children,t=Object(r.useReducer)(g,v),n=Object(p.a)(t,2),s=n[0],i=n[1];return Object(A.jsx)(f.Provider,{value:{state:s,dispatch:i},children:a})}var y=u.a({email:u.b("Enter your email").email("Enter a valid email").required("Email is required"),password:u.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var C=function(){var e=Object(c.f)(),a=Object(r.useContext)(f).dispatch,t=Object(o.a)({validationSchema:y,initialValues:{email:"",password:""},onSubmit:function(e){m.a.post("".concat(x,"/api/v1/login"),{email:e.email,password:e.password},{withCredentials:!0}).then((function(e){console.log("res: ",e.data),e.data.email?(a({type:"LOGIN",payload:{_id:e.data._id,name:e.data.name,email:e.data.email,contact:e.data.contact,website:e.data.website,address:e.data.address}}),alert("login successfull")):alert("invalid credential")}))}});return Object(A.jsxs)("div",{style:{padding:"1rem"},children:[Object(A.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"Log In"}),Object(A.jsx)("br",{}),Object(A.jsx)("form",{onSubmit:t.handleSubmit,children:Object(A.jsx)(b.a,{container:!0,spacing:2,children:Object(A.jsx)(b.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,sx:{width:"50%",margin:"auto"},children:Object(A.jsx)(b.a,{children:Object(A.jsxs)(d.a,{spacing:3,children:[Object(A.jsx)(l.a,{color:"primary",id:"outlined-basic",label:"Email",placeholder:"enter email address",variant:"standard",name:"email",value:t.values.email,onChange:t.handleChange,error:t.touched.email&&Boolean(t.errors.email),helperText:t.touched.email&&t.errors.email}),Object(A.jsx)(l.a,{color:"primary",id:"filled-basic",label:"Password",placeholder:"enter your password",variant:"standard",type:"password",name:"password",value:t.values.password,onChange:t.handleChange,error:t.touched.password&&Boolean(t.errors.password),helperText:t.touched.password&&t.errors.password}),Object(A.jsx)(b.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(j.a,{sx:{marginBottom:"1%"},variant:"contained",color:"inherit",type:"submit",children:"Log in"}),Object(A.jsx)(j.a,{sx:{marginLeft:"1%",marginBottom:"1%"},variant:"text",color:"inherit",type:"submit",onClick:function(){e.push("/signup")},children:"I don't Have an Account"})]})})]})})})})})]})},L=u.a({name:u.b("Enter your Name").required("Name is required"),email:u.b("Enter your email").email("Enter a valid email").required("Email is required"),password:u.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required"),contact:u.b("Enter your Contact").min(11,"invalid number").max(11,"invalid number").required("contact number is required"),address:u.b("Enter your address").required("Address is required"),website:u.b("Enter your profile/URL").url("please enter valid URL e.g: https://somewebsite.com").required("profile/URL is required")});var S=function(){var e=Object(c.f)(),a=Object(o.a)({validationSchema:L,initialValues:{name:"",email:"",password:"",contact:"",address:"",website:""},onSubmit:function(a){m.a.post("".concat(x,"/api/v1/signup"),{name:a.name,email:a.email,password:a.password,contact:a.contact,address:a.address,website:a.website}).then((function(a){console.log("res: ",a.data),"profile created"===a.data?(alert("signup successfully"),setTimeout((function(){e.push("/")}),1e3)):alert("user already exists")}))}});return Object(A.jsxs)("div",{style:{padding:"1rem"},children:[Object(A.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"Sign Up"}),Object(A.jsx)("br",{}),Object(A.jsx)("form",{onSubmit:a.handleSubmit,children:Object(A.jsx)(b.a,{container:!0,spacing:2,children:Object(A.jsx)(b.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,sx:{width:"50%",margin:"auto"},children:Object(A.jsx)(b.a,{children:Object(A.jsxs)(d.a,{spacing:3,children:[Object(A.jsx)(l.a,{color:"secondary",id:"outlined-basic",label:"Name",placeholder:"enter your name",variant:"standard",name:"name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name}),Object(A.jsx)(l.a,{color:"secondary",id:"outlined-basic",label:"Email",placeholder:"enter email address",variant:"standard",name:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(A.jsx)(l.a,{color:"secondary",id:"filled-basic",label:"Password",placeholder:"enter your password",variant:"standard",type:"password",name:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(A.jsx)(l.a,{color:"secondary",id:"filled-basic",label:"Contact",placeholder:"enter your Contact Number",variant:"standard",name:"contact",value:a.values.contact,onChange:a.handleChange,error:a.touched.contact&&Boolean(a.errors.contact),helperText:a.touched.contact&&a.errors.contact}),Object(A.jsx)(l.a,{color:"secondary",id:"filled-basic",label:"address",placeholder:"enter your address",variant:"standard",name:"address",value:a.values.address,onChange:a.handleChange,error:a.touched.address&&Boolean(a.errors.address),helperText:a.touched.address&&a.errors.address}),Object(A.jsx)(l.a,{color:"secondary",id:"outlined-basic",label:"linkedInURL/Profile",placeholder:"enter URL here",variant:"standard",name:"website",value:a.values.website,onChange:a.handleChange,error:a.touched.website&&Boolean(a.errors.website),helperText:a.touched.website&&a.errors.website}),Object(A.jsx)(b.a,{item:!0,xl:6,lg:6,xs:12,sm:12,md:12,children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(j.a,{sx:{marginBottom:"1%"},variant:"contained",color:"inherit",type:"submit",children:"Sign up"}),Object(A.jsx)(j.a,{sx:{marginLeft:"1%",marginBottom:"1%"},variant:"text",color:"inherit",type:"submit",onClick:function(){e.push("/")},children:"I Have an Account"})]})})]})})})})})]})},E=t(169),B=t.p+"static/media/download.84b4112d.jfif",q=t(382),I=t(383),T=t(385),U=t(384),N=t(386),P=t(377),k=t(381),z=t(330),F=t(172),R=t.n(F),G=t(173),K=t.n(G),V=t(171),J=t.n(V),M=t(3),X=t(380),D=t(371),Y=t(387),Q=t(388),H=t(170),Z=t.n(H),W=["children","onClose"],_=Object(M.a)(X.a)((function(e){var a=e.theme;return{"& .MuiDialogContent-root":{padding:a.spacing(2)},"& .MuiDialogActions-root":{padding:a.spacing(1)}}})),$=function(e){var a=e.children,t=e.onClose,r=Object(E.a)(e,W);return Object(A.jsxs)(D.a,Object(O.a)(Object(O.a)({sx:{m:0,p:2}},r),{},{children:[a,t?Object(A.jsx)(k.a,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(A.jsx)(Z.a,{})}):null]}))},ee=u.a({post:u.b("add something ").required("required*")});var ae=function(){var e=r.useState(!1),a=Object(p.a)(e,2),t=a[0],n=a[1],s=function(){n(!1)},i=(Object(c.f)(),Object(r.useContext)(f)),u=i.state,h=i.dispatch,O=Object(o.a)({validationSchema:ee,initialValues:{post:"",createdby:""},onSubmit:function(e){m.a.post("".concat(x,"/api/v1/posts"),{post:e.post,createdby:u.user.name},{withCredentials:!0}).then((function(e){console.log(e.data),E(!S)}))}}),g=Object(r.useState)([]),v=Object(p.a)(g,2),w=v[0],y=v[1],C=Object(r.useState)(!1),L=Object(p.a)(C,2),S=L[0],E=L[1];return Object(r.useEffect)((function(){return m.a.get("".concat(x,"/api/v1/posts"),{withCredentials:!0}).then((function(e){console.log(e.data),console.log("shahzaib"),y(e.data)})),function(){}}),[S]),Object(A.jsxs)("div",{style:{padding:"1rem"},children:[Object(A.jsx)("h1",{style:{margin:"auto",padding:"1rem",textAlign:"center"},children:"POSTS"}),Object(A.jsx)("br",{}),Object(A.jsx)("form",{onSubmit:O.handleSubmit,children:Object(A.jsx)("div",{children:Object(A.jsxs)(b.a,{container:!0,spacing:1,sx:{paddingLeft:"10%",paddingRight:"10%"},children:[Object(A.jsx)(b.a,{item:!0,xl:8,lg:8,xs:12,sm:12,md:12,children:Object(A.jsx)(b.a,{children:Object(A.jsx)(d.a,{spacing:3,children:Object(A.jsx)(l.a,{color:"primary",id:"outlined-basic",variant:"standard",placeholder:"Enter text here",name:"post",value:O.values.post,onChange:O.handleChange,error:O.touched.post&&Boolean(O.errors.post),helperText:O.touched.post&&O.errors.post})})})}),Object(A.jsx)(b.a,{item:!0,xl:2,lg:2,xs:12,sm:4,md:4,children:Object(A.jsx)(b.a,{children:Object(A.jsx)(j.a,{sx:{height:"25px",width:"100%",fontSize:"12px"},variant:"contained",color:"inherit",type:"submit",children:"Create Post"})})}),Object(A.jsx)(b.a,{item:!0,xl:1,lg:1,xs:6,sm:4,md:4,children:Object(A.jsx)(b.a,{children:Object(A.jsx)(j.a,{sx:{height:"25px",width:"100%",fontSize:"12px"},variant:"contained",color:"info",onClick:function(){n(!0)},children:"Profile"})})}),Object(A.jsx)(b.a,{item:!0,xl:1,lg:1,xs:6,sm:4,md:4,children:Object(A.jsx)(b.a,{children:Object(A.jsx)(j.a,{sx:{height:"25px",width:"100%",fontSize:"12px"},variant:"contained",color:"error",onClick:function(){m.a.post("".concat(x,"/api/v1/logout"),{},{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),h({type:"LOGOUT"})}))},children:"Logout"})})})]})})}),Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),u.user.name&&w.map((function(e,a){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(q.a,{sx:{maxWidth:845,margin:"auto"},children:[Object(A.jsx)(I.a,{avatar:Object(A.jsx)(P.a,{sx:{backgroundColor:"transparent"},"aria-label":"profile",children:Object(A.jsx)("img",{style:{width:"50px"},src:B})}),action:Object(A.jsx)(k.a,{"aria-label":"settings",children:Object(A.jsx)(J.a,{})}),title:e.createdby},a),Object(A.jsx)(U.a,{children:Object(A.jsx)(z.a,{variant:"body2",color:"text.secondary",children:e.post},a)}),Object(A.jsx)(T.a,{component:"img",height:"354",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX09PTMzMzJycnPz8/d3d3V1dXi4uLo6Ojw8PDx8fH39/ft7e3Y2NjQ0NDp6enb29uHE20LAAACaklEQVR4nO3b6W6CQBhGYUTWD9T7v9uylLIN6jCk8Cbn+deEGo6DMOAYRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJyFiuzshLesStJAdVZdufEV38LFydkZm6w+IrBJrK86itkxgU1ifnaKmz363QvUvsbjmoNYdjuXPPMQz6R7lfLsGKeq3bd76LvfHwnFIXt0tOKYwjuF51kVtjMUbzqFVmR1/cpK30idwv7qH98yz0SVwvI+XP19JygqhY9xehMnXokihfl0/hZ77a5I4WM2zXz5DKJI4XwKvjHLNGeGRmE1L7w7N7fKeRLSKCy+KGwCnedZjcJofruXuo7SbpwdiRqFlk4D42y9rf0eyOtEjcL5BzFeb2rV5oRApNAmj6QcjyRs8g4sE0UKJ4nxemJq8yGeJ6oURpY/uic26frppy0uJvNEmcI2JM/yovlz8cxlGbhIFCrcsA6cX0/kC52Bt3hMlC90Bk5HUbzQPYL9KA6b6BXmk8/YZuCYqFdYj/f47wL/EtUKrR6/LXsfOCSKFbaBQ+KnwGa79sqpVWjp7x1Ec6B+DhQsHAK7xM+BeoVjYLPzr499eoXTwO+IFfoHihXuWbWgVVh792kV7lt3IlRoe0ZQqvCLax+FZ8c4UUghheebFu6jU1gk++gU7l3t3f2rRmGAyxcGr329cuEh60stunBh2Z3y6yxM/wX52S1u/bf3Ryzzdq9tuIDnYWv1q7NTNlhy0O8t/Nb6/SfLbnHoYbpjSep/sjLfOZ0ZXfTXJKPgH69deAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDyA0uAKIxQw0bjAAAAAElFTkSuQmCC",alt:"picture"}),Object(A.jsxs)(N.a,{disableSpacing:!0,children:[Object(A.jsx)(k.a,{"aria-label":"add to favorites",children:Object(A.jsx)(R.a,{})}),Object(A.jsx)(k.a,{"aria-label":"share",children:Object(A.jsx)(K.a,{})})]})]}),Object(A.jsx)("br",{})]})})),Object(A.jsxs)(_,{sx:{maxWidth:"100%"},onClose:s,"aria-labelledby":"customized-dialog-title",open:t,children:[Object(A.jsx)($,{id:"customized-dialog-title",onClose:s,children:"Profile Details"}),Object(A.jsx)(Y.a,{children:Object(A.jsxs)(z.a,{gutterBottom:!0,children:["Name: ",u.user.name,Object(A.jsx)("br",{}),"Email: ",u.user.email,Object(A.jsx)("br",{}),"Contact: ",u.user.contact,Object(A.jsx)("br",{}),"website: ",u.user.website,Object(A.jsx)("br",{}),"Address: ",u.user.address]})}),Object(A.jsx)(Q.a,{})]})]})};t(319);var te=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("center",{children:Object(A.jsx)("div",{className:"loader"})})})};var re=function(){Object(c.f)();var e=Object(r.useContext)(f),a=e.state,t=e.dispatch;return Object(r.useEffect)((function(){return m.a.get("".concat(x,"/api/v1/posts"),{withCredentials:!0}).then((function(e){console.log("res: ",e.data),e.data.email?t({type:"LOGIN",payload:{_id:e.data._id,name:e.data.name,email:e.data.email,contact:e.data.contact,website:e.data.website,address:e.data.address}}):t({type:"LOGOUT"})})).catch((function(e){t({type:"LOGOUT"})})),function(){}}),[]),Object(A.jsxs)(A.Fragment,{children:[void 0===a.user?Object(A.jsxs)(c.c,{children:[Object(A.jsx)(c.a,{exact:!0,path:"/",children:Object(A.jsx)(te,{})}),Object(A.jsx)(c.a,{exact:!0,path:"/signup",children:Object(A.jsx)(S,{})})]}):null,null===a.user?Object(A.jsxs)(c.c,{children:[Object(A.jsx)(c.a,{exact:!0,path:"/",component:C}),Object(A.jsx)(c.a,{path:"/signup",component:S})]}):null,a.user?Object(A.jsx)(c.c,{children:Object(A.jsx)(c.a,{exact:!0,path:"/",children:Object(A.jsx)(ae,{})})}):null]})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,390)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),r(e),n(e),s(e),i(e)}))},se=t(56);i.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(w,{children:Object(A.jsx)(se.a,{children:Object(A.jsx)(re,{})})})}),document.getElementById("root")),ne()}},[[320,1,2]]]);
//# sourceMappingURL=main.a3a33251.chunk.js.map