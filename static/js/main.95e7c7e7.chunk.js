(this["webpackJsonpmy-first-react"]=this["webpackJsonpmy-first-react"]||[]).push([[0],{137:function(e,t,a){e.exports=a.p+"static/media/Loading-circles-acs-rectangles.492f13cb.webp"},138:function(e,t,a){e.exports={item:"Preloader_item__1FUAg"}},139:function(e,t,a){e.exports=a.p+"static/media/work_icon.c5c5641b.svg"},140:function(e,t,a){e.exports=a.p+"static/media/no_work_icon.6a84f8e0.svg"},143:function(e,t,a){e.exports={dialogues_content:"Dialogues_dialogues_content__du7kf",item:"Dialogues_item__2fnnk"}},144:function(e,t,a){e.exports={dialogue_item:"PersonDialogue_dialogue_item__2Z1bh"}},145:function(e,t,a){e.exports={item:"CloudSend_item__3zfVR"}},173:function(e,t,a){e.exports=a(299)},178:function(e,t,a){},28:function(e,t,a){e.exports={formControl:"FormsControls_formControl__3sotC",error:"FormsControls_error__3p1eI",formSummaryError:"FormsControls_formSummaryError__3BCwQ",form_item:"FormsControls_form_item__16jZM",remember:"FormsControls_remember__gsKH-",rememberLable:"FormsControls_rememberLable__6LCTh",checkbox:"FormsControls_checkbox__3hP9m"}},299:function(e,t,a){"use strict";a.r(t);a(99),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),s=a(64),o=a.n(s),i=a(22),c=a(23),l=a(25),u=a(24),m=a(26),f=(a(178),a(89)),p=a.n(f),d=a(11),g=function(e){return r.a.createElement("header",{className:p.a.header},r.a.createElement("img",{src:"https://yt3.ggpht.com/a/AATXAJwjqeBPBlUFN7PkmC6KsliyjFJ9tnva3eaSGxnrlQ=s900-c-k-c0xffffffff-no-rj-mo",alt:""}),r.a.createElement("div",{className:p.a.loginBlock},e.isAuth?r.a.createElement("div",null," ",e.login," - ",r.a.createElement("button",{onClick:e.logout},"Logout")," "):r.a.createElement(d.b,{to:"/login"},"Login")))},E=a(9),_=a(10),h=a.n(_),v=a(17),b=a(12),O=a(135).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2207a5d4-08e2-4a3b-98af-c3bbaf315c7d"}}),w={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return O.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))},follow:function(e){return O.post("follow/".concat(e))},unfollow:function(e){return O.delete("follow/".concat(e))}},S=function(e){return O.get("profile/"+e)},N=function(e){return O.get("profile/status/"+e)},P=function(e){return O.put("profile/status/",{status:e})},j=function(){return O.get("auth/me")},y=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return O.post("auth/login",{email:e,password:t,rememberMe:a})},k=function(){return O.delete("auth/login")},C=a(36),I={userId:null,email:null,login:null,isAuth:!1},x=function(e,t,a,n){return{type:"auth/SET_USER_DATA",data:{userId:e,email:t,login:a,isAuth:n}}},A=function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var a,n,r,s,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,s=n.email,o=n.login,t(x(r,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(b.a)({},e,{},t.data);default:return e}},T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(g,this.props)}}]),t}(r.a.Component),U=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:0===e.sent.data.resultCode&&t(x(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(T),D=a(8),F=a.n(D),M=function(){return r.a.createElement("nav",{className:F.a.navbar},r.a.createElement("span",{className:F.a.item},r.a.createElement(d.b,{className:F.a.navLink,activeClassName:F.a.activeLink,to:"/profile"},"Profile")),r.a.createElement("span",{className:F.a.item},r.a.createElement(d.b,{className:F.a.navLink,activeClassName:F.a.activeLink,to:"/dialogues"},"Messages")),r.a.createElement("div",{className:"".concat(F.a.item," ").concat(F.a.itemDisabled)},r.a.createElement(d.b,{className:F.a.navLink,activeClassName:F.a.activeLink,to:"/news"},"News")),r.a.createElement("div",{className:"".concat(F.a.item," ").concat(F.a.itemDisabled)},r.a.createElement(d.b,{className:F.a.navLink,activeClassName:F.a.activeLink,to:"/music"},"Music")),r.a.createElement("div",{className:"".concat(F.a.item," ").concat(F.a.itemDisabled)},r.a.createElement(d.b,{className:F.a.navLink,activeClassName:F.a.activeLink,to:"/setting"},"Setting")),r.a.createElement("div",{className:"".concat(F.a.item," ").concat(F.a.itemDisabled)},r.a.createElement(d.b,{className:F.a.navLink,activeClassName:F.a.activeLink,to:"/friends"},"Friends")),r.a.createElement("div",{className:F.a.item},r.a.createElement(d.b,{className:F.a.navLink,activeClassName:F.a.activeLink,to:"/users"},"Users")))},R=a(67),z=a.n(R),G={postData:[{id:1,message:"Hi, how are you?",likes:15},{id:2,message:"Love me",likes:10},{id:3,message:"\u042f \u0445\u043e\u0447\u0443 \u043d\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u0443",likes:14}],profile:null,status:""},B=function(e){return{type:"SET_STATUS",status:e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var a={id:5,message:t.newPost,likes:0};return Object.assign({},e,{postData:e.postData.concat(a),newPostText:""});case"SET_USER_PROFILE":return Object.assign({},e,{profile:t.profile});case"SET_STATUS":return Object.assign({},e,{status:t.status});case"DELETE_POST":return Object(b.a)({},e,{postData:e.postData.filter((function(e){return e.id!==t.postId}))});default:return e}},H=a(51),W=a.n(H),Z=a(70),V=a.n(Z),K=function(e){return r.a.createElement("div",{className:V.a.item},r.a.createElement("div",{className:V.a.message},r.a.createElement("img",{src:"https://www.freeiconspng.com/uploads/man-icon-png-29.png",alt:""}),r.a.createElement("p",null,e.message)),r.a.createElement("hr",null),r.a.createElement("div",{className:V.a.like},r.a.createElement("span",null,"like ",e.like)))},Q=a(130),q=a(131),X=function(e){if(!e)return"Field is required"},Y=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},$=a(98),ee=a(28),te=a.n(ee),ae=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,s=e.children,o=a&&n;return r.a.createElement("div",{className:te.a.formControl+" "+(o?te.a.error:"")},r.a.createElement("div",null,s),o&&r.a.createElement("span",null,n))},ne=function(e){var t=e.input,a=(e.meta,Object($.a)(e,["input","meta"]));return r.a.createElement(ae,e,r.a.createElement("textarea",Object.assign({},t,a)))},re=function(e){var t=e.input,a=(e.meta,Object($.a)(e,["input","meta"]));return r.a.createElement(ae,e,r.a.createElement("input",Object.assign({},t,a)))},se=function(e,t,a,n,s){return r.a.createElement("div",null,r.a.createElement(Q.a,Object.assign({component:n,validate:a,name:t,placeholder:e},s)))},oe=Y(30),ie=Object(q.a)({form:"post"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:W.a.add_news},r.a.createElement(Q.a,{validate:[X,oe],name:"newPost",component:ne,placeholder:"Your news"}),r.a.createElement("button",null,"Send"))})),ce=r.a.memo((function(e){console.log("lalalal");var t=e.postData.map((function(e){return r.a.createElement(K,{message:e.message,like:e.likes,id:e.id,key:e.id})}));return r.a.createElement("div",{className:W.a.my_posts},r.a.createElement("div",{className:"header_posts"},r.a.createElement("h4",null,"My Posts")),r.a.createElement(ie,{onSubmit:function(t){e.addPost(t.newPost)}}),r.a.createElement("div",{className:W.a.added_news},t))}));console.log("lalalal23");var le=Object(E.b)((function(e){return{newPostTextChange:e.profilePage.newPostText,postData:e.profilePage.postData}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD_POST",newPost:e}}(t))}}}))(ce),ue=a(55),me=a.n(ue),fe=a(137),pe=a.n(fe),de=a(138),ge=a.n(de),Ee=function(){return r.a.createElement("div",{className:ge.a.item},r.a.createElement("img",{alt:"loader",src:pe.a}))},_e=a(69),he=a.n(_e),ve=a(139),be=a.n(ve),Oe=a(140),we=a.n(Oe),Se=a(54),Ne=function(e){var t=Object(n.useState)(!1),a=Object(Se.a)(t,2),s=a[0],o=a[1],i=Object(n.useState)(e.status),c=Object(Se.a)(i,2),l=c[0],u=c[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",null,!s&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-------")),s&&r.a.createElement("div",null,r.a.createElement("input",{onBlur:function(){o(!1),e.updateStatus(l)},onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,value:l})))},Pe=function(e){return e.profile?r.a.createElement("div",{className:me.a.profile},r.a.createElement("div",{className:me.a.photo},r.a.createElement("img",{src:null!==e.profile.photos.large?e.profile.photos.large:he.a,alt:""})),r.a.createElement(Ne,{status:e.status,updateStatus:e.updateStatus}),r.a.createElement("div",{className:me.a.info},r.a.createElement("h3",null,"Information"),r.a.createElement("p",null,"Full Name: ",e.profile.fullName),r.a.createElement("p",null,"Facebook: ",e.profile.contacts.facebook),r.a.createElement("p",null,"Job:",e.profile.lookingForAJob?r.a.createElement("img",{src:be.a,alt:"\u0415\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0430"}):r.a.createElement("img",{src:we.a,alt:"\u041d\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u044b"})),r.a.createElement("p",null,e.profile.lookingForAJobDescription),r.a.createElement("p",null,"Status: ",e.profile.aboutMe))):r.a.createElement("div",{className:me.a.preloader},r.a.createElement(Ee,null))},je=function(e){return r.a.createElement("div",{className:z.a.content},r.a.createElement("img",{src:"https://avatars.mds.yandex.net/get-pdb/1516664/09249b5a-9f96-419d-8d26-14d33b095ec2/s1200",alt:""}),r.a.createElement(Pe,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(le,null))},ye=a(33),ke=function(e){return{isAuth:e.auth.isAuth}},Ce=function(e){var t=function(t){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(ye.a,{to:"/login"})}}]),a}(r.a.Component);return Object(E.b)(ke)(t)},Ie=a(5),xe=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:z.a.content},r.a.createElement(je,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),t}(r.a.Component),Ae=Object(Ie.d)(Object(E.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:n=t.sent,a({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:n=t.sent,a(B(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:0===t.sent.data.resultCode&&a(B(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ye.f,Ce)(xe),Le=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Setting"))},Te=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Music"))},Ue=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"News"))},De=a(43),Fe=a.n(De),Me=function(e){var t=e.user,a=e.followingInProgress,n=e.unfollow,s=e.follow;return r.a.createElement("div",{className:Fe.a.user},r.a.createElement("div",{className:Fe.a.info},r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!==t.photos.small?t.photos.small:he.a,alt:""})),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,"user.surname")),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.city"),r.a.createElement("div",null,"user.location.country")))),r.a.createElement("div",{className:Fe.a.buttons},t.followed?r.a.createElement("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){n(t.id)}},"Unollow"):r.a.createElement("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){s(t.id)}},"Follow")))},Re=function(e){return r.a.createElement("div",{className:Fe.a.item},e.users.map((function(t){return r.a.createElement(Me,{user:t,key:t.id,follow:e.follow,unfollow:e.unfollow,followingInProgress:e.followingInProgress})})))},ze=a(147),Ge=function(e,t,a,n){return e.map((function(e){return e[a]===t?Object(b.a)({},e,{},n):e}))},Be={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},Je=function(e){return{type:"FOLLOW",userId:e}},He=function(e){return{type:"UNFOLLOW",userId:e}},We=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Ze=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},Ve=function(){var e=Object(v.a)(h.a.mark((function e(t,a,n,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ze(!0,a)),e.next=3,n(a);case 3:0===e.sent.data.resultCode&&t(r(a)),t(Ze(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(b.a)({},e,{users:Ge(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(b.a)({},e,{users:Ge(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(b.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(b.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(b.a)({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(b.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(b.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(ze.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Qe=a(66),qe=a(44),Xe=a.n(qe),Ye=a(141),$e=a.n(Ye),et=function(e){for(var t=e.totalItemsCount,a=e.pageSize,s=e.currentPage,o=e.onPageChange,i=e.portionSize,c=void 0===i?10:i,l=Math.ceil(t/a),u=[],m=1;m<=l;m++)u.push(m);var f=Math.ceil(l/c),p=Object(n.useState)(1),d=Object(Se.a)(p,2),g=d[0],E=d[1],_=(g-1)*c+1,h=g*c;return r.a.createElement("div",{className:Xe.a.paginator},g>1&&r.a.createElement("button",{className:Xe.a.button,onClick:function(){E(g-1)}},"prev"),u.filter((function(e){return e>=_&&e<=h})).map((function(e){return r.a.createElement("span",{className:$e()(Object(Qe.a)({},Xe.a.selectedPage,s===e),Xe.a.pageNumber),key:e,onClick:function(t){o(e)}},e)})),f>g&&r.a.createElement("button",{className:Xe.a.button,onClick:function(){E(g+1)}},"next"))},tt=a(142),at=Object(tt.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),nt=function(e){return e.usersPage.pageSize},rt=function(e){return e.usersPage.totalUsersCount},st=function(e){return e.usersPage.currentPage},ot=function(e){return e.usersPage.followingInProgress},it=function(e){return e.usersPage.isFetching},ct=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=a.props,n=t.pageSize,r=t.getUsers,s=t.setCurrentPage;r(e,n),s(e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,a=e.pageSize;this.props.getUsers(t,a)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(et,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChanged}),this.props.isFetching?r.a.createElement(Ee,null):r.a.createElement(Re,{totalUsersCount:this.props.totalUsersCount,onPageChanged:this.onPageChanged,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),lt=Object(Ie.d)(Ce,Object(E.b)((function(e){return{users:at(e),pageSize:nt(e),totalUsersCount:rt(e),currentPage:st(e),followingInProgress:ot(e),isFetching:it(e)}}),{follow:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ve(a,e,w.follow.bind(w),Je);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ve(a,e,w.unfollow.bind(w),He);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},getUsers:function(e,t){return function(){var a=Object(v.a)(h.a.mark((function a(n){var r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(We(!0)),a.next=3,w.getUsers(e,t);case 3:r=a.sent,n(We(!1)),n({type:"SET_USERS",users:r.items}),n({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:r.totalCount});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}))(ct),ut=a(143),mt=a.n(ut),ft=a(144),pt=a.n(ft),dt=a(95),gt=a.n(dt),Et=function(e){return r.a.createElement("div",{className:gt.a.item},r.a.createElement(d.b,{activeClassName:gt.a.active,to:"/dialogues/"+e.id},r.a.createElement("img",{src:"https://redcdn.net/topicit/images/no-avatar-1.png",alt:""}),e.name))},_t=function(e){var t=e.userArr.map((function(e){return r.a.createElement(Et,{name:e.name,id:e.id,key:e.id})}));return r.a.createElement("div",{className:pt.a.dialogue_item},t)},ht=a(96),vt=a.n(ht),bt=a(72),Ot=a.n(bt),wt=function(e){return r.a.createElement("div",{className:Ot.a.item},r.a.createElement("div",{className:Ot.a.name_photo},r.a.createElement("img",{src:"https://redcdn.net/topicit/images/no-avatar-1.png",alt:""}),r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:Ot.a.message},r.a.createElement("p",null,e.message)))},St={userArr:[{id:1,name:"Nastya"},{id:2,name:"Sergey"},{id:3,name:"Sanya"},{id:4,name:"Fedos"},{id:5,name:"Valera"}],messageArr:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"I'm fine"},{id:4,message:"Go home"},{id:5,message:"I go"}]},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var a={id:6,message:t.newMessage};return Object.assign({},e,{messageArr:e.messageArr.concat(a)});default:return e}},Pt=a(145),jt=a.n(Pt),yt=Y(100),kt=Object(q.a)({form:"message"})((function(e){var t=e.newMessageText;return r.a.createElement("form",{onSubmit:e.handleSubmit,className:jt.a.item},r.a.createElement(Q.a,{name:"newMessage",validate:[X,yt],component:ne,value:t,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),r.a.createElement("button",null,"Send"))})),Ct=Object(E.b)((function(e){return{newMessageText:e.dialoguesPage.newMessageText}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND-MESSAGE",newMessage:e}}(t))}}}))((function(e){return r.a.createElement(kt,{onSubmit:function(t){e.sendMessage(t.newMessage)}})})),It=function(e){var t=e.messageArr.map((function(e){return r.a.createElement(wt,{name:"Nastya",message:e.message,id:e.id,key:e.id})}));return r.a.createElement("div",{className:vt.a.item},r.a.createElement("div",{className:vt.a.messages},t),r.a.createElement(Ct,null))},xt=function(e){if(!e.isAuth)return r.a.createElement(ye.a,{to:"/login"});var t=e.dialoguesPage,a=t.userArr,n=t.messageArr;return r.a.createElement("div",{className:mt.a.dialogues_content},r.a.createElement(_t,{userArr:a}),r.a.createElement(It,{messageArr:n}))},At=Object(Ie.d)(Object(E.b)((function(e){return{dialoguesPage:e.dialoguesPage}})),Ce)(xt),Lt=Y(20),Tt=Object(q.a)({form:"login"})((function(e){return r.a.createElement("form",{className:te.a.form_item,onSubmit:e.handleSubmit},se("Email","email",[X,Lt],re),se("Password","password",[X],re,{type:"password"}),r.a.createElement("div",{className:te.a.remember},r.a.createElement("div",{className:te.a.rememberLable},r.a.createElement("label",{htmlFor:"rememberMe"},"remember me ")),r.a.createElement("div",{className:te.a.checkbox},se(null,"rememberMe",null,re,{type:"checkbox"}))),e.error&&r.a.createElement("div",{className:te.a.formSummaryError},e.error),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Ut=a(97),Dt=a.n(Ut),Ft=function(e){var t=e.login;return e.isAuth?r.a.createElement(ye.a,{to:"/profile"}):r.a.createElement("div",{className:Dt.a.item},r.a.createElement("div",{className:Dt.a.form},r.a.createElement("h3",null,"Login"),r.a.createElement(Tt,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}})))},Mt=Object(E.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(){var n=Object(v.a)(h.a.mark((function n(r){var s,o;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y(e,t,a);case 2:0===(s=n.sent).data.resultCode?r(A()):(o=s.data.messages.length>0?s.data.messages[0]:"Some error",r(Object(C.a)("login",{_error:o})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,a=e.login;return r.a.createElement(Ft,{isAuth:t,login:a})})),Rt={initialized:!1},zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(b.a)({},e,{initialized:!0});default:return e}},Gt={arrayBest:[{id:1,name:"Nastya"},{id:2,name:"Sergey"},{id:3,name:"Sanya"}],allFriend:[{id:1,name:"Nastya"},{id:2,name:"Sergey"},{id:3,name:"Sanya"},{id:4,name:"Fedos"},{id:5,name:"Valera"},{id:6,name:"Marina"},{id:7,name:"Vasya"},{id:8,name:"Ira"},{id:9,name:"Inna"},{id:10,name:"Kirill"}]},Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt;arguments.length>1&&arguments[1];return e},Jt=a(146),Ht=a(132),Wt=Object(Ie.c)({profilePage:J,dialoguesPage:Nt,friendPage:Bt,usersPage:Ke,auth:L,form:Ht.a,app:zt}),Zt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ie.d,Vt=Object(Ie.e)(Wt,Zt(Object(Ie.a)(Jt.a)));window.__store__=Vt;var Kt=Vt,Qt=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(U,null),r.a.createElement(M,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(ye.b,{path:"/",render:function(){return r.a.createElement(ye.a,{to:"/login"})}}),r.a.createElement(ye.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Ae,null)}}),r.a.createElement(ye.b,{path:"/dialogues",render:function(){return r.a.createElement(At,null)}}),r.a.createElement(ye.b,{path:"/music",render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(ye.b,{path:"/news",render:function(){return r.a.createElement(Ue,null)}}),r.a.createElement(ye.b,{path:"/setting",render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(ye.b,{path:"/users",render:function(){return r.a.createElement(lt,null)}}),r.a.createElement(ye.b,{path:"/login",render:function(){return r.a.createElement(Mt,null)}}))):r.a.createElement(Ee,null)}}]),t}(r.a.Component),qt=Object(Ie.d)(ye.f,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(A());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Qt),Xt=function(e){return r.a.createElement(d.a,null,r.a.createElement(E.a,{store:Kt},r.a.createElement(qt,null)))};o.a.render(r.a.createElement(Xt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){e.exports={item:"Users_item__3kEc8",selectedPage:"Users_selectedPage__EDVV3",user:"Users_user__K7ZgD",info:"Users_info__2aAeb"}},44:function(e,t,a){e.exports={paginator:"Paginator_paginator__N5JHp",pageNumber:"Paginator_pageNumber__1Z0_N",selectedPage:"Paginator_selectedPage__4e46b",button:"Paginator_button__6n5Qv"}},51:function(e,t,a){e.exports={my_posts:"MyPosts_my_posts__2RunZ",add_news:"MyPosts_add_news__2gZv9"}},55:function(e,t,a){e.exports={profile:"ProfileInfo_profile__10svT",info:"ProfileInfo_info__3U8dc"}},67:function(e,t,a){e.exports={content:"Profile_content__bR3gc"}},69:function(e,t,a){e.exports=a.p+"static/media/user-avatar.09001408.png"},70:function(e,t,a){e.exports={item:"Post_item__1MTGV",message:"Post_message__3Ix7v",like:"Post_like__18q8w"}},72:function(e,t,a){e.exports={item:"Message_item__2ezuA",name_photo:"Message_name_photo__1RqyE",message:"Message_message__1OzXO"}},8:function(e,t,a){e.exports={navbar:"Navbar_navbar__4J0zQ",item:"Navbar_item__EaxNm",itemDisabled:"Navbar_itemDisabled__3OlD9",activeLink:"Navbar_activeLink__1hzQr",navLink:"Navbar_navLink__1Cztt"}},89:function(e,t,a){e.exports={header:"Header_header__3yZoK",loginBlock:"Header_loginBlock__3gRxx"}},95:function(e,t,a){e.exports={dialogue_item:"DialogueItem_dialogue_item__BsJ3a",item:"DialogueItem_item__Fk3of",active:"DialogueItem_active__20Cdy"}},96:function(e,t,a){e.exports={item:"PrivateDialogues_item__2Iir5",messages:"PrivateDialogues_messages__RK4uv"}},97:function(e,t,a){e.exports={item:"Login_item__AUJW1",form:"Login_form__1a6iE"}},99:function(e,t,a){}},[[173,1,2]]]);
//# sourceMappingURL=main.95e7c7e7.chunk.js.map