(this["webpackJsonpaw-app"]=this["webpackJsonpaw-app"]||[]).push([[0],{115:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a,c=n(0),i=n.n(c),r=n(12),s=n.n(r),o=n(13),l=n(18),j=n(188),d=(n(115),n(14)),b=n(15),h=n(17),m=n(16),u=n(171),O=n.p+"static/media/logo-aw.f5e99866.svg",x=n(2),p=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"splash",children:[Object(x.jsx)("img",{src:O,className:"logo",alt:"Awakeri Wetlands"}),Object(x.jsx)(u.a,{component:o.b,to:"/awakeriwetlands",variant:"contained",color:"primary",className:"btn-discover",children:"Discover"})]})}}]),n}(i.a.Component),v=n(73),f=(n(121),{apiKey:"AIzaSyCu0h7knQ2RM4R6RK72is0Cn1zqQvaCGIs",authDomain:"awakeri-wetlands.firebaseapp.com",databaseURL:"https://awakeri-wetlands-default-rtdb.firebaseio.com",projectId:"awakeri-wetlands",storageBucket:"awakeri-wetlands.appspot.com",messagingSenderId:"891400247520",appId:"1:891400247520:web:aef7344764497ce2aed885"}),g=function(){return a||(v.a.initializeApp(f),a=v.a,v.a)},k=(n(45),n(175)),w=n(176),y=n.p+"static/media/img-aw-01.39bd9ba5.jpg",L=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,items:[]},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;g().database().ref("flamelink/environments/production/content/awakeriWetlands/en-US").on("value",(function(t){var n=t.val();e.setState({items:[n],isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items,a={height:180,background:"url("+y+") center / cover no-repeat"};return t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:a}),Object(x.jsx)(k.a,{maxWidth:"sm",spacing:3,children:Object(x.jsx)(w.a,{item:!0,xs:12,children:n.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:e.title}),Object(x.jsx)("article",{dangerouslySetInnerHTML:{__html:"".concat(e.content)}})]})}))})})]}):Object(x.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component),S=n(89),N=n.n(S),F=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("iframe",{src:"https://www.google.com/maps/d/u/0/embed?mid=1DXj0Qt1YC_Zx9zmQR5GvXuaTYUWPt2Vx",width:"100%",height:"480",title:"map",className:"map"}),Object(x.jsx)(u.a,{href:"https://www.google.com/maps/dir//-37.0467323,174.9507655",target:"_blank",variant:"contained",startIcon:Object(x.jsx)(N.a,{}),className:"btn-green btn-directions",children:"Directions"})]})}}]),n}(i.a.Component),_=n(178),C=n(179),M=n(181),W=n(180),I=n(182),D=n(192),B=n(90),T=n.n(B),U=n.p+"static/media/img-aw-03.380ae6c0.jpg",P=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onchange=function(e){a.setState({search:e.target.value})},a.state={isLoaded:!1,items:[],search:""},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;g().database().ref("flamelink/environments/production/content/floraAndFauna/en-US").on("value",(function(t){var n=[];console.log(n);var a=t.val();for(var c in a)n.push(a[c]);e.setState({items:n,isLoaded:!0,search:""})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items,a=e.search,c={height:180,background:"url("+U+") center / cover no-repeat"};console.log(this.state);var i=n.filter((function(e){return-1!==e.plantName.toLowerCase().indexOf(a.toLowerCase())}));return t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:c}),Object(x.jsxs)(k.a,{maxWidth:"sm",spacing:3,children:[Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)("h1",{children:"Flora and Fauna"})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(D.a,{id:"outlined-basic",variant:"outlined",label:"Search Plants",icon:T.a,onChange:this.onchange,style:{marginBottom:40}})}),Object(x.jsx)(w.a,{container:!0,spacing:3,children:i.map((function(e){return Object(x.jsx)(w.a,{item:!0,xs:12,sm:6,children:Object(x.jsx)(_.a,{children:Object(x.jsxs)(C.a,{children:[Object(x.jsx)(W.a,{className:"media",image:e.image,title:e.plantName,component:o.b,to:"/".concat(e.id),children:Object(x.jsx)("span",{className:"cardCat",children:e.latinName})}),Object(x.jsxs)(M.a,{children:[Object(x.jsx)(I.a,{gutterBottom:!0,variant:"h5",component:"h3",children:e.plantName}),Object(x.jsx)(u.a,{size:"small",color:"primary",component:o.b,to:"/".concat(e.id),children:"Learn more"})]})]})},e.id)})}))})]})]}):Object(x.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component),R=n.p+"static/media/img-aw-05.cf0f4128.jpg",A=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,items:[]},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;g().database().ref("flamelink/environments/production/content/history/en-US").on("value",(function(t){var n=t.val();e.setState({items:[n],isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items,a={height:180,background:"url("+R+") center / cover no-repeat"};return t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:a}),Object(x.jsx)(k.a,{maxWidth:"sm",spacing:3,children:Object(x.jsx)(w.a,{item:!0,xs:12,children:n.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:e.title}),Object(x.jsx)("article",{dangerouslySetInnerHTML:{__html:"".concat(e.content)}})]})}))})})]}):Object(x.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component),z=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,items:[]},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;g().database().ref("flamelink/environments/production/content/manaWhenua/en-US").on("value",(function(t){var n=t.val();e.setState({items:[n],isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items,a={height:180,background:"url("+R+") center / cover no-repeat"};return t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:a}),Object(x.jsx)(k.a,{maxWidth:"sm",spacing:3,children:Object(x.jsx)(w.a,{item:!0,xs:12,children:n.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:e.title}),Object(x.jsx)("article",{dangerouslySetInnerHTML:{__html:"".concat(e.content)}})]})}))})})]}):Object(x.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component),H=n(48),E=n(91),Q=n.n(E),q=function(e){var t=e.match;console.log(t);var n=t.params.slug,a=Object(c.useState)(!0),i=Object(H.a)(a,2),r=i[0],s=i[1],l=Object(c.useState)(),j=Object(H.a)(l,2),d=j[0],b=j[1];if(r&&!d&&g().database().ref("flamelink/environments/production/content/floraAndFauna/en-US").child(n).once("value").then((function(e){e.val()&&b(e.val()),s(!1)})),console.log(d),r)return Object(x.jsx)("h1",{children:"Loading..."});var h={height:"100vh",background:"url("+d.image+") center / cover no-repeat"};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:h,children:Object(x.jsxs)("div",{className:"plantbox",children:[Object(x.jsx)("h2",{children:d.plantName}),Object(x.jsx)("span",{children:"Latin:"})," ",d.latinName]})}),Object(x.jsx)(u.a,{component:o.b,to:"/florafauna",variant:"contained",className:"btn-green btn-back",startIcon:Object(x.jsx)(Q.a,{}),children:"Back"})]})},K=n.p+"static/media/img-aw-04.1ca098d2.jpg",V=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,items:[]},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;g().database().ref("flamelink/environments/production/content/tidyKiwi/en-US").on("value",(function(t){var n=t.val();e.setState({items:[n],isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items,a={height:180,background:"url("+K+") center / cover no-repeat"};return t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:a}),Object(x.jsx)(k.a,{maxWidth:"sm",spacing:3,children:Object(x.jsx)(w.a,{item:!0,xs:12,children:n.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:e.title}),Object(x.jsx)("article",{dangerouslySetInnerHTML:{__html:"".concat(e.content)}})]})}))})})]}):Object(x.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component),X=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,items:[]},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;g().database().ref("flamelink/environments/production/content/areasOfInterests/en-US").on("value",(function(t){var n=t.val();e.setState({items:[n],isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items,a={height:180,background:"url("+R+") center / cover no-repeat"};return t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:a}),Object(x.jsx)(k.a,{maxWidth:"sm",spacing:3,children:Object(x.jsx)(w.a,{item:!0,xs:12,children:n.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:e.title}),Object(x.jsx)("article",{dangerouslySetInnerHTML:{__html:"".concat(e.content)}})]})}))})})]}):Object(x.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component),G=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,items:[]},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;g().database().ref("flamelink/environments/production/content/connectingCommunity/en-US").on("value",(function(t){var n=t.val();e.setState({items:[n],isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items,a={height:180,background:"url("+R+") center / cover no-repeat"};return t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:a}),Object(x.jsx)(k.a,{maxWidth:"sm",spacing:3,children:Object(x.jsx)(w.a,{item:!0,xs:12,children:n.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:e.title}),Object(x.jsx)("article",{dangerouslySetInnerHTML:{__html:"".concat(e.content)}})]})}))})})]}):Object(x.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component),Y=n(81),Z=n.n(Y),J=n.p+"static/media/img-aw-06.ec3b7b7e.jpg",$=n(183),ee=n(196),te=n(184),ne=n(185),ae=n(82),ce=n.n(ae),ie=Object($.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function re(){var e=ie(),t={height:180,background:"url("+J+") center / cover no-repeat"};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:t}),Object(x.jsx)(k.a,{maxWidth:"sm",spacing:3,children:Object(x.jsx)(w.a,{container:!0,spacing:3,children:Object(x.jsxs)(w.a,{item:!0,xs:12,children:[Object(x.jsx)("h1",{children:"Report"}),Object(x.jsxs)("div",{className:e.root,children:[Object(x.jsxs)(ee.a,{children:[Object(x.jsx)(te.a,{expandIcon:Object(x.jsx)(ce.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(x.jsx)(I.a,{className:e.heading,children:"Vandalism and Graffiti"})}),Object(x.jsx)(ne.a,{children:Object(x.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),Z.a.sendForm("service_ebqt17o","template_x3okemb",e.target,"user_BV5XrQvn55PMWiaIv2TIZ").then((function(e){console.log(e.text),window.location.href="/thankyou"}),(function(e){console.log(e.text)}))},children:[Object(x.jsx)("input",{type:"hidden",name:"contact_number"}),Object(x.jsxs)(w.a,{container:!0,spacing:3,children:[Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(D.a,{id:"standard-basic",label:"Name",name:"user_name"})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(D.a,{id:"standard-basic",label:"Email",name:"user_email",required:!0,type:"email"})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(D.a,{id:"standard-basic",multiline:!0,rows:4,label:"Message",name:"message"})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",className:"btn-green",children:"Submit"})})]})]})})]}),Object(x.jsxs)(ee.a,{children:[Object(x.jsx)(te.a,{expandIcon:Object(x.jsx)(ce.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(x.jsx)(I.a,{className:e.heading,children:"Illegal Rubbish Dumping"})}),Object(x.jsx)(ne.a,{children:Object(x.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),Z.a.sendForm("service_ebqt17o","template_4zjtbvj",e.target,"user_BV5XrQvn55PMWiaIv2TIZ").then((function(e){console.log(e.text),window.location.href="/thankyou"}),(function(e){console.log(e.text)}))},children:[Object(x.jsx)("input",{type:"hidden",name:"contact_number"}),Object(x.jsxs)(w.a,{container:!0,spacing:3,children:[Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(D.a,{id:"standard-basic",label:"Name",name:"user_name"})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(D.a,{id:"standard-basic",label:"Email",name:"user_email",required:!0,type:"email"})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(D.a,{id:"standard-basic",multiline:!0,rows:4,label:"Message",name:"message"})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",className:"btn-green",children:"Submit"})})]})]})})]})]})]})})})]})}var se=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,items:[]},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;g().database().ref("flamelink/environments/production/content/thankYou/en-US").on("value",(function(t){var n=t.val();e.setState({items:[n],isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items,a={height:180,background:"url("+y+") center / cover no-repeat"};return t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:a}),Object(x.jsx)(k.a,{maxWidth:"sm",spacing:3,children:Object(x.jsx)(w.a,{item:!0,xs:12,children:n.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:e.title}),Object(x.jsx)("article",{dangerouslySetInnerHTML:{__html:"".concat(e.content)}})]})}))})})]}):Object(x.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component),oe=n(83),le=n(195),je=n(194),de=n(130),be=n(177),he=n(186),me=n(93),ue=n.n(me),Oe=n(189),xe=n(187),pe=n(92),ve=n.n(pe),fe=n(19),ge=Object($.a)((function(e){return{drawer:Object(oe.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),h4:{fontSize:"10px"},menuButton:Object(oe.a)({marginRight:e.spacing(2),color:"#BBD629"},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},closeMenuButton:{marginRight:"auto",marginLeft:0}}}));var ke=function(){var e=ge(),t=Object(fe.a)(),n=i.a.useState(!1),a=Object(H.a)(n,2),c=a[0],r=a[1];function s(){r(!c)}var l=Object(x.jsxs)("div",{children:[Object(x.jsx)(be.a,{children:Object(x.jsx)(he.a,{button:!0,component:o.b,to:"/",children:Object(x.jsx)("img",{src:O,alt:"Awakeri Wetlands",width:"80%"})})}),Object(x.jsx)(xe.a,{}),Object(x.jsxs)(be.a,{children:[Object(x.jsx)(he.a,{children:Object(x.jsx)("h4",{children:"Discover"})}),Object(x.jsx)(he.a,{button:!0,component:o.b,to:"/awakeriwetlands",children:"About"}),Object(x.jsx)(he.a,{button:!0,component:o.b,to:"/history",children:"History"}),Object(x.jsx)(he.a,{button:!0,component:o.b,to:"/manawhenua",children:"Mana Whenua"}),Object(x.jsx)(he.a,{button:!0,component:o.b,to:"/florafauna",children:"Flora and Fauna"}),Object(x.jsx)(he.a,{button:!0,component:o.b,to:"/tidykiwi",children:"Tidy Kiwi"}),Object(x.jsx)(he.a,{button:!0,component:o.b,to:"/areas",children:"Areas of Interest"})]}),Object(x.jsx)(xe.a,{}),Object(x.jsx)(be.a,{children:Object(x.jsx)(he.a,{button:!0,component:o.b,to:"/map",children:Object(x.jsx)("h4",{children:"Our Location"})})}),Object(x.jsx)(xe.a,{}),Object(x.jsx)(be.a,{children:Object(x.jsx)(he.a,{button:!0,component:o.b,to:"/community",children:Object(x.jsx)("h4",{children:"Connecting Community"})})}),Object(x.jsx)(xe.a,{}),Object(x.jsx)(be.a,{children:Object(x.jsx)(he.a,{button:!0,component:o.b,to:"/report",children:Object(x.jsx)("h4",{children:"Report"})})})]});return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.a,{}),Object(x.jsx)(Oe.a,{children:Object(x.jsx)(de.a,{color:"inherit","aria-label":"Open drawer",edge:"start",onClick:s,className:e.menuButton,children:Object(x.jsx)(ve.a,{})})}),Object(x.jsxs)("nav",{className:e.drawer,children:[Object(x.jsx)(je.a,{smUp:!0,implementation:"css",children:Object(x.jsxs)(le.a,{variant:"temporary",anchor:"rtl"===t.direction?"right":"left",open:c,onClick:s,classes:{paper:e.drawerPaper},ModalProps:{keepMounted:!0},children:[Object(x.jsx)(de.a,{onClick:s,className:e.closeMenuButton,children:Object(x.jsx)(ue.a,{})}),l]})}),Object(x.jsx)(je.a,{xsDown:!0,implementation:"css",children:Object(x.jsx)(le.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},children:l})})]})]})},we=n(190),ye=n(191),Le=n(94),Se=n.n(Le),Ne=n(96),Fe=n.n(Ne),_e=n(95),Ce=n.n(_e);function Me(){var e=i.a.useState(0),t=Object(H.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)(we.a,{value:n,onChange:function(e,t){a(t)},showLabels:!0,children:[Object(x.jsx)(ye.a,{label:"Discover",component:o.b,to:"/awakeriwetlands",icon:Object(x.jsx)(Se.a,{})}),Object(x.jsx)(ye.a,{label:"Map",component:o.b,to:"/map",icon:Object(x.jsx)(Ce.a,{})}),Object(x.jsx)(ye.a,{label:"Report",component:o.b,to:"/report",icon:Object(x.jsx)(Fe.a,{})})]})}var We=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,photos:[]},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=3103f8ab8cd0e9ed3b325938f3145f95&photoset_id=72157719262174103&format=json&nojsoncallback=1").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,photos:t.photoset.photo})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.photos;return console.log(this.state),t?Object(x.jsxs)("div",{children:["Error: ",t.message]}):n?Object(x.jsxs)(k.a,{maxWidth:"sm",spacing:3,children:[Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)("h1",{children:"Flickr Photos"})}),Object(x.jsx)(w.a,{container:!0,spacing:3,children:Object(x.jsx)(w.a,{item:!0,xs:12,sm:6,children:a.map((function(e){return Object(x.jsx)(_.a,{children:Object(x.jsxs)(C.a,{children:[Object(x.jsx)(W.a,{className:"flickrImg",image:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),title:e.title}),Object(x.jsx)(M.a,{children:Object(x.jsx)(I.a,{gutterBottom:!0,variant:"h5",component:"h3",children:e.title})})]})},e.id)}))})})]}):Object(x.jsx)("div",{children:"Loading..."})}}]),n}(i.a.Component);var Ie=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(j.a,{}),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(ke,{}),Object(x.jsx)(Me,{}),Object(x.jsx)("div",{className:"content",children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(x.jsx)(l.a,{path:"/awakeriwetlands",component:L}),Object(x.jsx)(l.a,{path:"/history",component:A}),Object(x.jsx)(l.a,{path:"/manawhenua",component:z}),Object(x.jsx)(l.a,{path:"/florafauna",component:P}),Object(x.jsx)(l.a,{path:"/tidykiwi",component:V}),Object(x.jsx)(l.a,{path:"/areas",component:X}),Object(x.jsx)(l.a,{path:"/community",component:G}),Object(x.jsx)(l.a,{path:"/map",component:F}),Object(x.jsx)(l.a,{path:"/report",component:re}),Object(x.jsx)(l.a,{path:"/thankyou",component:se}),Object(x.jsx)(l.a,{path:"/flickr",component:We}),Object(x.jsx)(l.a,{path:"/:slug",component:q})]})})]})]})},De=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,198)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(Ie,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");De?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Be(t,e)}))}}(),Te()}},[[128,1,2]]]);
//# sourceMappingURL=main.89a0c658.chunk.js.map