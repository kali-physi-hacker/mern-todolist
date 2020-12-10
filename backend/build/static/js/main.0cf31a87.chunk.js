(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a(1),c=a.n(o),r=a(18),s=a.n(r),i=a(7),d=a(9),l=a(3),u="TOGGLE_THEME",h="ADD_TODO_ITEM",j="GET_TODO_ITEMS",b="UPDATE_TODO_ITEM",p="SET_LOADING",O={dark_theme:!1,todoList:[],loading:!1},g=function(t,e){switch(e.type){case u:return Object(l.a)(Object(l.a)({},t),{},{dark_theme:e.theme});case j:return Object(l.a)(Object(l.a)({},t),{},{todoList:e.todoList});case h:return Object(l.a)(Object(l.a)({},t),{},{todoList:[].concat(Object(d.a)(t.todoList),[e.todoItem])});case b:var a=t.todoList.filter((function(t){return t._id!==e.todoItem._id}));return Object(l.a)(Object(l.a)({},t),{},{todoList:[].concat(Object(d.a)(a),[e.todoItem])});case p:return Object(l.a)(Object(l.a)({},t),{},{loading:e.loading});default:return O}},m=function(){var t=Object(o.useContext)(w),e={position:"absolute",width:26,height:26,top:2,left:t.state.dark_theme?36:4,backgroundColor:t.state.dark_theme?"var(--very-dark-blue-top)":"var(--white)",borderRadius:"50%",transition:"all 0.2s ease-out"};return Object(n.jsxs)("p",{style:{display:"inline-flex",alignItems:"center"},onClick:function(e){t.dispatchState({type:u,theme:!t.state.dark_theme})},children:["Dark Mode ",Object(n.jsx)("span",{style:{marginLeft:15,position:"relative",display:"inline-block",width:65,height:30,background:"var(--toggle-dark)",borderRadius:15},children:Object(n.jsx)("span",{style:e})})]})},v=a(4),x=a.n(v),f=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),a=e[0],c=e[1],r=Object(o.useContext)(w),s={margin:"6rem 0rem",height:55,border:"none",outline:"none",padding:"5px 12px",fontSize:24,width:"100%",backgroundColor:r.state.dark_theme?"var(--dark-desaturated-blue)":"var(--white)",color:r.state.dark_theme?"var(--white)":"var(--dark-grayish-blue)"};return Object(n.jsx)("form",{onSubmit:function(t){t.preventDefault(),x.a.post("/api/todos/new",{name:a}).then((function(t){r.dispatchState({type:h,todoItem:t.data})})).catch((function(t){console.log(t)}))},children:Object(n.jsx)("input",{value:a,onChange:function(t){return c(t.target.value)},className:"shadow",style:s,type:"text",placeholder:"Add a new task..."})})},k=(a(41),function(t){var e=Object(o.useContext)(w),a={transition:"all 0.2s ease-in-out",width:"100%",margin:"25px auto",padding:"2rem",borderTop:"5px solid var(--border-top)",borderBottomRightRadius:40,backgroundColor:e.state.dark_theme?"var(--dark-desaturated-blue)":"var(--light-grayish-blue)"};return Object(n.jsx)("div",{className:"shadow",style:a,children:Object(n.jsxs)("p",{style:{fontSize:24},children:[Object(n.jsx)("input",{onChange:function(a){e.dispatchState({type:p,loading:!1}),x.a.put("/api/tasks/".concat(t._id),{completed:!t.completed}).then((function(t){e.dispatchState({type:b,todoItem:t.data}),e.dispatchState({type:p,loading:!1})})).catch((function(t){return console.log(t.response)}))},checked:t.completed,style:{width:20,height:20,marginRight:35},type:"checkbox"}),t.completed?Object(n.jsx)("strike",{children:t.name}):t.name]})})}),y=(a(42),function(){return Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("p",{children:"Loading Tasks"}),Object(n.jsx)("span",{})]})})}),_=function(){var t=Object(o.useContext)(w);return Object(o.useEffect)((function(){x.a.get("/api/todos").then((function(e){t.dispatchState({type:j,todoList:e.data})})).catch((function(t){console.log(t)}))}),[]),Object(n.jsx)("div",{style:{},children:t.state.loading?Object(n.jsx)(y,{}):0===t.state.todoList.length?Object(n.jsx)("h2",{style:{textAlign:"center"},children:"Yay have no tasks \ud83d\ude11"}):t.state.todoList.map((function(t){return Object(n.jsx)(k,Object(l.a)({},t),t._id)}))})},w=c.a.createContext(),C=function(){var t=Object(o.useReducer)(g,O),e=Object(i.a)(t,2),a=e[0],c=e[1],r={backgroundColor:a.dark_theme?"var(--very-dark-blue)":"var(--white-bg)"},s={backgroundColor:a.dark_theme?"var(--very-dark-blue-top)":"var(--very-pale-blue-top)"},d={color:a.dark_theme?"var(--white)":"var(--dark-grayish-blue)"};return Object(n.jsx)("div",{style:r,id:"main",children:Object(n.jsxs)(w.Provider,{value:{state:a,dispatchState:c},children:[Object(n.jsx)("div",{style:s,className:"top-pattern"}),Object(n.jsxs)("div",{style:d,className:"app",children:[Object(n.jsxs)("div",{className:"top",children:[Object(n.jsxs)("div",{className:"left",children:[Object(n.jsx)("h1",{children:"Kali Todo List"}),Object(n.jsx)("span",{children:"Create tasks and complete easily"})]}),Object(n.jsx)(m,{})]}),Object(n.jsx)(f,{}),Object(n.jsx)(_,{})]})]})})},L=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),n(t),o(t),c(t),r(t)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),L()}},[[43,1,2]]]);
//# sourceMappingURL=main.0cf31a87.chunk.js.map