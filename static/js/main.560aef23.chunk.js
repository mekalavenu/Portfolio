(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,s){},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(6),a=s.n(n),r=s(3),l=(s(17),s(44)),j=s(45),d=s(0);function o(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(d.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"#intro",className:"logo",children:"VG"}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(l.a,{className:"icon"}),Object(d.jsx)("span",{children:"+91 630 144 166 9"})]}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(j.a,{className:"icon"}),Object(d.jsx)("span",{children:"mekalavenugopalsai@gmail.com"})]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]})})]})})}s(23);var b=s(8);function u(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Student","Web-Designer","Developer"]})}),[]),Object(d.jsxs)("div",{className:"intro",id:"intro",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"assets/vg.png",alt:""})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h2",{children:"Hi There, I'm"}),Object(d.jsx)("h1",{children:"Venugopal Mekala"}),Object(d.jsx)("h3",{children:Object(d.jsx)("span",{ref:e})})]}),Object(d.jsx)("a",{href:"#Skill",children:Object(d.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(24);function h(e){var t=e.id,s=e.title,c=e.active,i=e.setSelected;return Object(d.jsx)("li",{className:c?"SkillList active":"SkillList",onClick:function(){return i(t)},children:s})}s(25);var m=[{id:1,title:"python",img:" ./assets/python.jpeg"},{id:2,title:"C",img:"./assets/C.png"},{id:3,title:"java",img:"./assets/java.jpeg"}],O=[{id:1,title:"HTML",img:"./assets/html.png"},{id:2,title:"CSS",img:"./assets/css.png"},{id:3,title:"Java Script",img:"./assets/js.png"},{id:4,title:"MySQL",img:"./assets/Mysql.png"},{id:5,title:"PHP",img:"./assets/php.png"}],x=[{id:1,title:"OOPS",img:"./assets/oop.jpeg"},{id:2,title:"DSA",img:"./assets/DSA.jpeg"},{id:3,title:"DBMS",img:"./assets/DBMS.png"},{id:4,title:"Cyber Security",img:"./assets/CYBER.jpeg"}];function p(){var e=Object(c.useState)("programingskills"),t=Object(r.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)([]),a=Object(r.a)(n,2),l=a[0],j=a[1];return Object(c.useEffect)((function(){switch(s){default:j(m);break;case"webdevelopmentskills":j(O);break;case"SubjectSkills":j(x)}}),[s]),Object(d.jsxs)("div",{className:"Skill",id:"Skill",children:[Object(d.jsx)("h1",{children:"Technical Skills"}),Object(d.jsx)("ul",{children:[{id:"webdevelopmentskills",title:"webdevelopment skills"},{id:"programingskills",title:"programingskills"},{id:"SubjectSkills",title:"Subject Skills"}].map((function(e){return Object(d.jsx)(h,{title:e.title,active:s===e.id,setSelected:i,id:e.id})}))}),Object(d.jsx)("div",{className:"container",children:l.map((function(e){return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("img",{src:e.img,alt:""}),Object(d.jsx)("h3",{children:e.title})]})}))})]})}s(26);function g(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),s=t[0],i=t[1],n=[{id:"1",icon:"./assets/mobile.png",title:"RESTAURENT WEBSITE",desc:"This is a frontend and backend website which I built in my 4th semester using HTML, CSS, php, MySQL and JavaScript this is a website for book a table and order the food. "},{id:"2",icon:"./assets/globe.png",title:"Doctor consultant website with video call",desc:"This is a frontend and backend website which I built in my 6th semester using HTML, CSS and JavaScript this is a website for consult a doctor."},{id:"3",icon:"./assets/writing.png",title:"Temperature & Humidity Monitor",desc:"This is a frontend and backend website which I built in my 6th semester using HTML, CSS and JavaScript this is a website for consult a doctor."}],a=function(e){i("left"===e?s>0?s-1:2:s<n.length-1?s+1:0)};return Object(d.jsxs)("div",{className:"works",id:"works",children:[Object(d.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:n.map((function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsxs)("div",{className:"leftContainer",children:[Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:e.icon,alt:""})}),Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)("p",{children:e.desc}),Object(d.jsx)("span",{children:"Projects"})]})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("img",{src:" ./assets/proc.png",alt:""})})]})})}))}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return a("left")}}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return a()}})]})}s(27);function f(){return Object(d.jsxs)("div",{className:"Education",id:"Education",children:[Object(d.jsx)("h1",{children:"Education"}),Object(d.jsx)("div",{className:"container",children:[{id:1,name:"Narayana e-techno School",year:"2016",title:"10th Standard ",CGPA:"CGPA : 8.3",course:"course : SSC",icon:"assets/Logo-1.png"},{id:2,name:"SRM University AP",year:"2018-2022",title:"B-TECH",CGPA:"CGPA : 7.65",course:"course : CSE",icon:"assets/Logo-2.png",featured:!0},{id:3,name:"Narayana Jr College",year:"2016-2018",title:"Intermediate",CGPA:"Percentage : 80%",icon:"assets/Logo-1.png",course:"course : MPC"}].map((function(e){return Object(d.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(d.jsx)("h4",{children:e.title}),Object(d.jsxs)("div",{className:"top",children:[Object(d.jsx)("img",{className:"user",src:e.img,alt:""}),Object(d.jsx)("img",{className:"right",src:e.icon,alt:""})]}),Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("h3",{children:e.year}),Object(d.jsx)("h3",{children:e.CGPA}),Object(d.jsx)("h3",{children:e.course}),Object(d.jsx)("div",{className:"bottom"})]})}))})]})}var v=s(9);s(28);function S(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1],n=Object(c.useRef)();return Object(d.jsxs)("div",{className:"contact",id:"contact",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{src:"assets/6685.jpg",alt:""})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("h2",{children:"Contact."}),Object(d.jsxs)("form",{ref:n,onSubmit:function(e){e.preventDefault(),v.a.sendForm("service_w5n2sue","template_2iyp4u9",n.current,"user_IuwLcv4a21RcFBevgDZNR").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),i(!0)},children:[Object(d.jsx)("input",{type:"text",placeholder:"Name",name:"user_name"}),Object(d.jsx)("input",{type:"text",placeholder:"subject",name:"user_subject"}),Object(d.jsx)("input",{type:"text",placeholder:"Email",name:"user_email"}),Object(d.jsx)("textarea",{placeholder:"Message",name:"message"}),Object(d.jsx)("button",{type:"submit",children:"Send"}),s&&Object(d.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}s(29),s(30);function N(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(d.jsx)("div",{className:"menu "+(t&&"active"),children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#intro",children:"Home"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#Skill",children:"Skills"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#works",children:"Projects"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#Education",children:"Education"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var k=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(o,{menuOpen:s,setMenuOpen:i}),Object(d.jsx)(N,{menuOpen:s,setMenuOpen:i}),Object(d.jsxs)("div",{className:"sections",children:[Object(d.jsx)(u,{}),Object(d.jsx)(f,{}),Object(d.jsx)(p,{}),Object(d.jsx)(g,{}),Object(d.jsx)(S,{})]})]})};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.560aef23.chunk.js.map