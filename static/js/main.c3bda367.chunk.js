(this["webpackJsonpmy-first-react"]=this["webpackJsonpmy-first-react"]||[]).push([[0],{135:function(e,t,a){e.exports={item:"BestFriends_item__37C5x"}},136:function(e,t,a){e.exports=a.p+"static/media/Loading-circles-acs-rectangles.492f13cb.webp"},137:function(e,t,a){e.exports={item:"Preloader_item__1FUAg"}},138:function(e,t,a){e.exports=a.p+"static/media/work_icon.c5c5641b.svg"},139:function(e,t,a){e.exports=a.p+"static/media/no_work_icon.6a84f8e0.svg"},141:function(e,t,a){e.exports={dialogues_content:"Dialogues_dialogues_content__du7kf",item:"Dialogues_item__2fnnk"}},142:function(e,t,a){e.exports={dialogue_item:"PersonDialogue_dialogue_item__2Z1bh"}},143:function(e,t,a){e.exports={item:"CloudSend_item__3zfVR"}},171:function(e,t,a){e.exports=a(299)},253:function(e,t,a){},258:function(e,t,a){e.exports={item:"SidebarFriends_item__X6i6L"}},26:function(e,t,a){e.exports={formControl:"FormsControls_formControl__3sotC",error:"FormsControls_error__3p1eI",formSummaryError:"FormsControls_formSummaryError__3BCwQ",form_item:"FormsControls_form_item__16jZM",remember:"FormsControls_remember__gsKH-",rememberLable:"FormsControls_rememberLable__6LCTh",checkbox:"FormsControls_checkbox__3hP9m"}},296:function(e,t,a){},297:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);a(96),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(6),r=a(130).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2207a5d4-08e2-4a3b-98af-c3bbaf315c7d"}}),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))},i=function(e){return r.post("follow/".concat(e))},o=function(e){return r.delete("follow/".concat(e))},l=function(e){return r.get("profile/"+e)},c=function(e){return r.get("profile/status/"+e)},u=function(e){return r.put("profile/status/",{status:e})},m=function(){return r.get("auth/me")},d=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:a})},p=function(){return r.delete("auth/login")},f={postData:[{id:1,message:"Hi, how are you?",likes:15},{id:2,message:"Love me",likes:10},{id:3,message:"\u042f \u0445\u043e\u0447\u0443 \u043d\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u0443",likes:14}],profile:null,status:""},g=function(e){return{type:"SET_STATUS",status:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:t.newPost,likes:0};return Object.assign({},e,{postData:e.postData.concat(a),newPostText:""});case"SET_USER_PROFILE":return Object.assign({},e,{profile:t.profile});case"SET_STATUS":return Object.assign({},e,{status:t.status});default:return e}},h={userArr:[{id:1,name:"Nastya"},{id:2,name:"Sergey"},{id:3,name:"Sanya"},{id:4,name:"Fedos"},{id:5,name:"Valera"}],messageArr:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"I'm fine"},{id:4,message:"Go home"},{id:5,message:"I go"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var a={id:6,message:t.newMessage};return Object.assign({},e,{messageArr:e.messageArr.concat(a)});default:return e}},b={arrayBest:[{id:1,name:"Nastya"},{id:2,name:"Sergey"},{id:3,name:"Sanya"}],allFriend:[{id:1,name:"Nastya"},{id:2,name:"Sergey"},{id:3,name:"Sanya"},{id:4,name:"Fedos"},{id:5,name:"Valera"},{id:6,name:"Marina"},{id:7,name:"Vasya"},{id:8,name:"Ira"},{id:9,name:"Inna"},{id:10,name:"Kirill"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;arguments.length>1&&arguments[1];return e},O=a(144),S=a(13),N={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},P=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},w=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(S.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(S.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(S.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(S.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(S.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(S.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(S.a)({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(S.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(S.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},j=a(36),y={userId:null,email:null,login:null,isAuth:!1},k=function(e,t,a,n){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:a,isAuth:n}}},I=function(){return function(e){return m().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,r=a.email,s=a.login;e(k(n,r,s,!0))}}))}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(S.a)({},e,{},t.data);default:return e}},A=a(131),T=a(129),M={initialized:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(S.a)({},e,{initialized:!0});default:return e}},F=Object(n.c)({profilePage:E,dialoguesPage:_,friendPage:v,usersPage:C,auth:L,form:T.a,app:x}),U=Object(n.e)(F,Object(n.a)(A.a)),D=U;window.store=U;var R=a(0),z=a.n(R),G=a(61),B=a.n(G),H=a(16),J=a(17),W=a(19),Z=a(18),V=a(20),K=(a(253),a(88)),Q=a.n(K),q=a(10),X=function(e){return z.a.createElement("header",{className:Q.a.header},z.a.createElement("img",{src:"https://cdn.onlinewebfonts.com/svg/img_2401.png",alt:""}),z.a.createElement("div",{className:Q.a.loginBlock},e.isAuth?z.a.createElement("div",null," ",e.login," - ",z.a.createElement("button",{onClick:e.logout},"Logout")," "):z.a.createElement(q.b,{to:"/login"},"Login")))},Y=a(9),$=function(e){function t(){return Object(H.a)(this,t),Object(W.a)(this,Object(Z.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){return z.a.createElement(X,this.props)}}]),t}(z.a.Component),ee=Object(Y.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){p().then((function(t){0===t.data.resultCode&&e(k(null,null,null,!1))}))}}})($),te=a(8),ae=a.n(te),ne=(a(258),a(135),function(e){return z.a.createElement("nav",{className:ae.a.navbar},z.a.createElement("span",{className:ae.a.item},z.a.createElement(q.b,{className:ae.a.navLink,activeClassName:ae.a.activeLink,to:"/profile"},"Profile")),z.a.createElement("span",{className:ae.a.item},z.a.createElement(q.b,{className:ae.a.navLink,activeClassName:ae.a.activeLink,to:"/dialogues"},"Messages")),z.a.createElement("div",{className:"".concat(ae.a.item," ").concat(ae.a.itemDisabled)},z.a.createElement(q.b,{className:ae.a.navLink,activeClassName:ae.a.activeLink,to:"/news"},"News")),z.a.createElement("div",{className:"".concat(ae.a.item," ").concat(ae.a.itemDisabled)},z.a.createElement(q.b,{className:ae.a.navLink,activeClassName:ae.a.activeLink,to:"/music"},"Music")),z.a.createElement("div",{className:"".concat(ae.a.item," ").concat(ae.a.itemDisabled)},z.a.createElement(q.b,{className:ae.a.navLink,activeClassName:ae.a.activeLink,to:"/setting"},"Setting")),z.a.createElement("div",{className:"".concat(ae.a.item," ").concat(ae.a.itemDisabled)},z.a.createElement(q.b,{className:ae.a.navLink,activeClassName:ae.a.activeLink,to:"/friends"},"Friends")),z.a.createElement("div",{className:ae.a.item},z.a.createElement(q.b,{className:ae.a.navLink,activeClassName:ae.a.activeLink,to:"/users"},"Users")))}),re=a(64),se=a.n(re),ie=a(49),oe=a.n(ie),le=a(67),ce=a.n(le),ue=function(e){return z.a.createElement("div",{className:ce.a.item},z.a.createElement("div",{className:ce.a.message},z.a.createElement("img",{src:"https://www.freeiconspng.com/uploads/man-icon-png-29.png",alt:""}),z.a.createElement("p",null,e.message)),z.a.createElement("hr",null),z.a.createElement("div",{className:ce.a.like},z.a.createElement("span",null,"like ",e.like)))},me=a(127),de=a(128),pe=function(e){if(!e)return"Field is required"},fe=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},ge=a(70),Ee=a(26),he=a.n(Ee),_e=function(e){e.input;var t=e.meta,a=(e.child,Object(ge.a)(e,["input","meta","child"])),n=t.touched&&t.error;return z.a.createElement("div",{className:he.a.formControl+" "+(n?he.a.error:"")},z.a.createElement("div",null,a.children),n&&z.a.createElement("span",null,t.error))},be=function(e){var t=e.input,a=(e.meta,e.child,Object(ge.a)(e,["input","meta","child"]));return z.a.createElement(_e,e,z.a.createElement("textarea",Object.assign({},t,a)))},ve=function(e){var t=e.input,a=(e.meta,e.child,Object(ge.a)(e,["input","meta","child"]));return z.a.createElement(_e,e,z.a.createElement("input",Object.assign({},t,a)))},Oe=fe(30),Se=Object(de.a)({form:"post"})((function(e){return z.a.createElement("form",{onSubmit:e.handleSubmit,className:oe.a.add_news},z.a.createElement(me.a,{validate:[pe,Oe],name:"newPost",component:be,placeholder:"Your news"}),z.a.createElement("button",null,"Send"))})),Ne=function(e){var t=e.postData.map((function(e){return z.a.createElement(ue,{message:e.message,like:e.likes,id:e.id,key:e.id})}));return z.a.createElement("div",{className:oe.a.my_posts},z.a.createElement("div",{className:"header_posts"},z.a.createElement("h4",null,"My Posts")),z.a.createElement(Se,{onSubmit:function(t){e.addPost(t.newPost)}}),z.a.createElement("div",{className:oe.a.added_news},t))},Pe=Object(Y.b)((function(e){return{newPostTextChange:e.profilePage.newPostText,postData:e.profilePage.postData}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPost:e}}(t))}}}))(Ne),we=a(51),Ce=a.n(we),je=a(136),ye=a.n(je),ke=a(137),Ie=a.n(ke),Le=function(){return z.a.createElement("div",{className:Ie.a.item},z.a.createElement("img",{alt:"loader",src:ye.a}))},Ae=a(66),Te=a.n(Ae),Me=function(e){function t(){var e,a;Object(H.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(W.a)(this,(e=Object(Z.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,status:a.props.status},a.activeteEditMode=function(){a.state.editMode?(a.setState({editMode:!1}),a.props.updateStatus(a.state.status)):a.setState({editMode:!0})},a.onStatusChange=function(e){a.setState({status:e.currentTarget.value})},a.componentDidUpdate=function(e){e.status!==a.props.status&&a.setState({status:a.props.status})},a}return Object(V.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){return z.a.createElement("div",null,!this.state.editMode&&z.a.createElement("div",null,z.a.createElement("span",{onClick:this.activeteEditMode},this.props.status||"-------")),this.state.editMode&&z.a.createElement("div",null,z.a.createElement("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.activeteEditMode,value:this.state.status})))}}]),t}(z.a.Component),xe=a(138),Fe=a.n(xe),Ue=a(139),De=a.n(Ue),Re=function(e){return e.profile?z.a.createElement("div",{className:Ce.a.profile},z.a.createElement("div",{className:Ce.a.photo},z.a.createElement("img",{src:null!==e.profile.photos.large?e.profile.photos.large:Te.a,alt:""})),z.a.createElement(Me,{status:e.status,updateStatus:e.updateStatus}),z.a.createElement("div",{className:Ce.a.info},z.a.createElement("h3",null,"Information"),z.a.createElement("p",null,"Full Name: ",e.profile.fullName),z.a.createElement("p",null,"Facebook: ",e.profile.contacts.facebook),z.a.createElement("p",null,"Job:",e.profile.lookingForAJob?z.a.createElement("img",{src:Fe.a,alt:"\u0415\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0430"}):z.a.createElement("img",{src:De.a,alt:"\u041d\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u044b"})),z.a.createElement("p",null,e.profile.lookingForAJobDescription),z.a.createElement("p",null,"Status: ",e.profile.aboutMe))):z.a.createElement("div",{className:Ce.a.preloader},z.a.createElement(Le,null))},ze=function(e){return z.a.createElement("div",{className:se.a.content},z.a.createElement("img",{src:"https://avatars.mds.yandex.net/get-pdb/1516664/09249b5a-9f96-419d-8d26-14d33b095ec2/s1200",alt:""}),z.a.createElement(Re,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),z.a.createElement(Pe,null))},Ge=a(31),Be=function(e){return{isAuth:e.auth.isAuth}},He=function(e){var t=function(t){function a(){return Object(H.a)(this,a),Object(W.a)(this,Object(Z.a)(a).apply(this,arguments))}return Object(V.a)(a,t),Object(J.a)(a,[{key:"render",value:function(){return this.props.isAuth?z.a.createElement(e,this.props):z.a.createElement(Ge.a,{to:"/login"})}}]),a}(z.a.Component);return Object(Y.b)(Be)(t)},Je=function(e){function t(){return Object(H.a)(this,t),Object(W.a)(this,Object(Z.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(J.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return z.a.createElement("div",{className:se.a.content},z.a.createElement(ze,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),t}(z.a.Component),We=Object(n.d)(Object(Y.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){l(e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getStatus:function(e){return function(t){c(e).then((function(e){t(g(e.data))}))}},updateStatus:function(e){return function(t){u(e).then((function(a){0===a.data.resultCode&&t(g(e))}))}}}),Ge.f,He)(Je),Ze=(a(296),function(){return z.a.createElement("div",null,z.a.createElement("h1",null,"Setting"))}),Ve=(a(297),function(e){return z.a.createElement("div",null,z.a.createElement("h1",null,"Music"))}),Ke=(a(298),function(e){return z.a.createElement("div",null,z.a.createElement("h1",null,"News"))}),Qe=a(52),qe=a.n(Qe),Xe=function(e){return z.a.createElement("div",{className:qe.a.item},e.users.map((function(t){return z.a.createElement("div",{className:qe.a.user,key:t.id},z.a.createElement("div",{className:qe.a.info},z.a.createElement(q.b,{to:"/profile/"+t.id},z.a.createElement("img",{src:null!==t.photos.small?t.photos.small:Te.a,alt:""})),z.a.createElement("div",null,z.a.createElement("span",null,z.a.createElement("div",null,z.a.createElement("div",null,t.name),z.a.createElement("div",null,"user.surname")),z.a.createElement("div",null,t.status)),z.a.createElement("span",null,z.a.createElement("div",null,"user.location.city"),z.a.createElement("div",null,"user.location.country")))),z.a.createElement("div",{className:qe.a.buttons},t.followed?z.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unollow"):z.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow")))})))},Ye=a(63),$e=a(145),et=a(41),tt=a.n(et),at=a(140),nt=a.n(at),rt=function(e){for(var t=e.totalItemsCount,a=e.pageSize,n=e.currentPage,r=e.onPageChange,s=e.portionSize,i=void 0===s?10:s,o=Math.ceil(t/a),l=[],c=1;c<=o;c++)l.push(c);var u=Math.ceil(o/i),m=Object(R.useState)(1),d=Object($e.a)(m,2),p=d[0],f=d[1],g=(p-1)*i+1,E=p*i;return z.a.createElement("div",{className:tt.a.paginator},p>1&&z.a.createElement("button",{className:tt.a.button,onClick:function(){f(p-1)}},"prev"),l.filter((function(e){return e>=g&&e<=E})).map((function(e){return z.a.createElement("span",{className:nt()(Object(Ye.a)({},tt.a.selectedPage,n===e),tt.a.pageNumber),key:e,onClick:function(t){r(e)}},e)})),u>p&&z.a.createElement("button",{className:tt.a.button,onClick:function(){f(p+1)}},"next"))},st=function(e){function t(){var e,a;Object(H.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(W.a)(this,(e=Object(Z.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){a.props.getUsers(e,a.props.pageSize),a.props.setCurrentPage(e)},a}return Object(V.a)(t,e),Object(J.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return z.a.createElement(z.a.Fragment,null,z.a.createElement(rt,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChanged}),this.props.isFetching?z.a.createElement(Le,null):z.a.createElement(Xe,{totalUsersCount:this.props.totalUsersCount,onPageChanged:this.onPageChanged,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(z.a.Component),it=Object(n.d)(He,Object(Y.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,followingInProgress:e.usersPage.followingInProgress,isFetching:e.usersPage.isFetching}}),{follow:function(e){return function(t){t(w(!0,e)),i(e).then((function(a){0===a.data.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(w(!1,e))}))}},unfollow:function(e){return function(t){t(w(!0,e)),o(e).then((function(a){0===a.data.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(w(!1,e))}))}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},getUsers:function(e,t){return function(a){a(P(!0)),s(e,t).then((function(e){a(P(!1)),a({type:"SET_USERS",users:e.items}),a({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:e.totalCount})}))}}}))(st),ot=a(141),lt=a.n(ot),ct=a(142),ut=a.n(ct),mt=a(93),dt=a.n(mt),pt=function(e){return z.a.createElement("div",{className:dt.a.item},z.a.createElement(q.b,{activeClassName:dt.a.active,to:"/dialogues/"+e.id},z.a.createElement("img",{src:"https://redcdn.net/topicit/images/no-avatar-1.png",alt:""}),e.name))},ft=function(e){var t=e.userArr.map((function(e){return z.a.createElement(pt,{name:e.name,id:e.id,key:e.id})}));return z.a.createElement("div",{className:ut.a.dialogue_item},t)},gt=a(94),Et=a.n(gt),ht=a(69),_t=a.n(ht),bt=function(e){return z.a.createElement("div",{className:_t.a.item},z.a.createElement("div",{className:_t.a.name_photo},z.a.createElement("img",{src:"https://redcdn.net/topicit/images/no-avatar-1.png",alt:""}),z.a.createElement("p",null,e.name)),z.a.createElement("div",{className:_t.a.message},z.a.createElement("p",null,e.message)))},vt=a(143),Ot=a.n(vt),St=fe(100),Nt=Object(de.a)({form:"message"})((function(e){var t=e.newMessageText;return z.a.createElement("form",{onSubmit:e.handleSubmit,className:Ot.a.item},z.a.createElement(me.a,{name:"newMessage",validate:[pe,St],component:be,value:t,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),z.a.createElement("button",null,"Send"))})),Pt=Object(Y.b)((function(e){return{newMessageText:e.dialoguesPage.newMessageText}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND-MESSAGE",newMessage:e}}(t))}}}))((function(e){return z.a.createElement(Nt,{onSubmit:function(t){e.sendMessage(t.newMessage)}})})),wt=function(e){var t=e.messageArr.map((function(e){return z.a.createElement(bt,{name:"Nastya",message:e.message,id:e.id,key:e.id})}));return z.a.createElement("div",{className:Et.a.item},z.a.createElement("div",{className:Et.a.messages},t),z.a.createElement(Pt,null))},Ct=function(e){if(!e.isAuth)return z.a.createElement(Ge.a,{to:"/login"});var t=e.dialoguesPage,a=t.userArr,n=t.messageArr;return z.a.createElement("div",{className:lt.a.dialogues_content},z.a.createElement(ft,{userArr:a}),z.a.createElement(wt,{messageArr:n}))},jt=Object(n.d)(Object(Y.b)((function(e){return{dialoguesPage:e.dialoguesPage}})),He)(Ct),yt=fe(20),kt=Object(de.a)({form:"login"})((function(e){return z.a.createElement("form",{className:he.a.form_item,onSubmit:e.handleSubmit},z.a.createElement("div",null,z.a.createElement(me.a,{component:ve,validate:[pe,yt],name:"email",placeholder:"Email"})),z.a.createElement("div",null,z.a.createElement(me.a,{component:ve,validate:[pe],name:"password",placeholder:"Password",type:"password"})),z.a.createElement("div",{className:he.a.remember},z.a.createElement("div",{className:he.a.rememberLable}," ",z.a.createElement("label",{htmlFor:"rememberMe"},"remember me ")),z.a.createElement("div",{className:he.a.checkbox},z.a.createElement(me.a,{id:"rememberMe",component:ve,name:"rememberMe",type:"checkbox"}))),e.error&&z.a.createElement("div",{className:he.a.formSummaryError},e.error),z.a.createElement("div",null,z.a.createElement("button",null,"Login")))})),It=a(95),Lt=a.n(It),At=function(e){return e.isAuth?z.a.createElement(Ge.a,{to:"/profile"}):z.a.createElement("div",{className:Lt.a.item},z.a.createElement("div",{className:Lt.a.form},z.a.createElement("h3",null,"Login"),z.a.createElement(kt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})))},Tt=Object(Y.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(n){d(e,t,a).then((function(e){if(0===e.data.resultCode)n(I());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";n(Object(j.a)("login",{_error:t}))}}))}}})((function(e){return z.a.createElement(At,{isAuth:e.isAuth,login:e.login})})),Mt=function(e){function t(){return Object(H.a)(this,t),Object(W.a)(this,Object(Z.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(J.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?z.a.createElement("div",{className:"app-wrapper"},z.a.createElement(ee,null),z.a.createElement(ne,null),z.a.createElement("div",{className:"app-wrapper-content"},z.a.createElement(Ge.b,{path:"/",render:function(){return z.a.createElement(Ge.a,{to:"/login"})}}),z.a.createElement(Ge.b,{path:"/profile/:userId?",render:function(){return z.a.createElement(We,null)}}),z.a.createElement(Ge.b,{path:"/dialogues",render:function(){return z.a.createElement(jt,null)}}),z.a.createElement(Ge.b,{path:"/music",render:function(){return z.a.createElement(Ve,null)}}),z.a.createElement(Ge.b,{path:"/news",render:function(){return z.a.createElement(Ke,null)}}),z.a.createElement(Ge.b,{path:"/setting",render:function(){return z.a.createElement(Ze,null)}}),z.a.createElement(Ge.b,{path:"/users",render:function(){return z.a.createElement(it,null)}}),z.a.createElement(Ge.b,{path:"/login",render:function(){return z.a.createElement(Tt,null)}}))):z.a.createElement(Le,null)}}]),t}(z.a.Component),xt=Object(n.d)(Ge.f,Object(Y.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(I());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Mt);B.a.render(z.a.createElement(q.a,null,z.a.createElement(Y.a,{store:D},z.a.createElement(xt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,a){e.exports={paginator:"Paginator_paginator__N5JHp",pageNumber:"Paginator_pageNumber__1Z0_N",selectedPage:"Paginator_selectedPage__4e46b",button:"Paginator_button__6n5Qv"}},49:function(e,t,a){e.exports={my_posts:"MyPosts_my_posts__2RunZ",add_news:"MyPosts_add_news__2gZv9"}},51:function(e,t,a){e.exports={profile:"ProfileInfo_profile__10svT",info:"ProfileInfo_info__3U8dc"}},52:function(e,t,a){e.exports={item:"Users_item__3kEc8",selectedPage:"Users_selectedPage__EDVV3",user:"Users_user__K7ZgD",info:"Users_info__2aAeb"}},64:function(e,t,a){e.exports={content:"Profile_content__bR3gc"}},66:function(e,t,a){e.exports=a.p+"static/media/user-avatar.09001408.png"},67:function(e,t,a){e.exports={item:"Post_item__1MTGV",message:"Post_message__3Ix7v",like:"Post_like__18q8w"}},69:function(e,t,a){e.exports={item:"Message_item__2ezuA",name_photo:"Message_name_photo__1RqyE",message:"Message_message__1OzXO"}},8:function(e,t,a){e.exports={navbar:"Navbar_navbar__4J0zQ",item:"Navbar_item__EaxNm",itemDisabled:"Navbar_itemDisabled__3OlD9",activeLink:"Navbar_activeLink__1hzQr",navLink:"Navbar_navLink__1Cztt"}},88:function(e,t,a){e.exports={header:"Header_header__3yZoK",loginBlock:"Header_loginBlock__3gRxx"}},93:function(e,t,a){e.exports={dialogue_item:"DialogueItem_dialogue_item__BsJ3a",item:"DialogueItem_item__Fk3of",active:"DialogueItem_active__20Cdy"}},94:function(e,t,a){e.exports={item:"PrivateDialogues_item__2Iir5",messages:"PrivateDialogues_messages__RK4uv"}},95:function(e,t,a){e.exports={item:"Login_item__AUJW1",form:"Login_form__1a6iE"}},96:function(e,t,a){}},[[171,1,2]]]);
//# sourceMappingURL=main.c3bda367.chunk.js.map