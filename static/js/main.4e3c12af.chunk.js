(this["webpackJsonpprofessional-profile"]=this["webpackJsonpprofessional-profile"]||[]).push([[0],[,,function(e,t,a){},,,,,function(e,t,a){e.exports=a.p+"static/media/profileimage.ac027eb6.jpg"},function(e,t,a){e.exports=a.p+"static/media/hike-finder.c7307c5f.jpg"},function(e,t,a){e.exports=a.p+"static/media/money-money-money.93d675df.jpg"},function(e,t,a){e.exports=a.p+"static/media/noggin-bloggin1.eea153c4.jpg"},function(e,t,a){e.exports=a.p+"static/media/password-generator-markup.0d55b663.jpg"},function(e,t,a){e.exports=a.p+"static/media/safr1.ae823fe5.jpg"},function(e,t,a){e.exports=a.p+"static/media/weather-dashboard.98ea6ab6.jpg"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),l=a.n(r),s=(a(19),a(1));var o=function(e){var t=e.setPageSelected,a=e.pageSelected;return i.a.createElement("nav",{className:"orange lighten-3"},i.a.createElement("ul",{className:"flex-row"},i.a.createElement("li",{className:"mx-2 ".concat("about me"===a?"active":"")},i.a.createElement("a",{"data-testid":"about",href:"#about",onClick:function(){return t("about me")}},"About me")),i.a.createElement("li",{className:"mx-2 ".concat("portfolio"===a?"active":"")},i.a.createElement("a",{"data-testid":"portfolio",href:"#portfolio",onClick:function(){return t("portfolio")}},"Portfolio")),i.a.createElement("li",{className:"mx-2"},i.a.createElement("a",{"data-testid":"contact",href:"#contact",onClick:function(){return t("contact")}},"Contact")),i.a.createElement("li",{className:"mx-2"},i.a.createElement("a",{"data-testid":"resume",href:"#resume",onClick:function(){return t("resume")}},"Resume"))))};a(2);var c=function(e){var t=e.pageSelected,a=e.setPageSelected;return i.a.createElement("header",{className:"flex-row black"},i.a.createElement("h2",{id:"header"},i.a.createElement("a",{"data-testid":"link",href:"/"},i.a.createElement("span",{role:"img","aria-label":"name"})," Jennifer Mulder, CPA")),i.a.createElement(o,{pageSelected:t,setPageSelected:a}))},m=a(7),u=a.n(m);var d=function(e){return i.a.createElement("section",{className:"container"},i.a.createElement("h2",{id:"about"},"About Me"),i.a.createElement("img",{src:u.a,className:"my-2",style:{maxWidth:"65%",width:"50%"},alt:"Jennifer Mulder"}),i.a.createElement("p",{id:"about-me"}," I am a Full-Stack Web developer looking to contribute to software functionality in a creative workspace. As a recent recipient of a certificate in full stack development from the University of California, Berkeley, I have obtained newly practiced skills including: Javascript, NodeJS, and MySQL. With a collective 6 years of experience in both public and industry accounting, I have the necessary capabilities to be an effective contributing team member to any project. In public accounting, I gained the ability to effectively communicate with all management levels on the client side, as well as my team. I am a courageous communicator when it comes to presenting/ suggesting more efficient ways to perform processes as I am self-motivated to always find a better solution. When working on my recent group project to build a full stack application utilizing express and sequelize to build an interactive blog site, I played a leadership role in assessing the skills of those that I was working with and assigning the best fit to each role, while also maintaining organization and adherence to acceptance criteria. I am excited to utilize my skills in an efficient, fast-paced workplace that is equally driven to come up with the next best thing."))},p=a(3),h=a(4);var g=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),a=t[0],r=t[1],l=a.name,o=a.email,c=a.message,m=Object(n.useState)(""),u=Object(s.a)(m,2),d=u[0],g=u[1];function f(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);g(t?"":"Your email is invalid.")}else e.target.value.length?g(""):g("".concat(e.target.name," is required."));d||r(Object(h.a)(Object(h.a)({},a),{},Object(p.a)({},e.target.name,e.target.value)))}return i.a.createElement("section",{className:"row"},i.a.createElement("div",{className:"col s12 m6"},i.a.createElement("h2",{className:"center",id:"contact","data-testid":"h1tag"},"Contact me"),i.a.createElement("h6",{className:"center",htmlFor:"email"},"Email address: jlmulder2014@gmail.com"),i.a.createElement("h6",{className:"center",htmlFor:"email"},"Phone Number: 510.766.6583")),i.a.createElement("div",{className:"col s12 m6"},i.a.createElement("h2",{className:"center",id:"contact","data-testid":"h1tag"},"Send Email"),i.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault()}},i.a.createElement("div",null,i.a.createElement("label",{className:"white-text",htmlFor:"name"},"Name:"),i.a.createElement("input",{className:"input",type:"text",name:"name",defaultValue:l,onBlur:f})),i.a.createElement("div",null,i.a.createElement("label",{className:"white-text",htmlFor:"email"},"Email address:"),i.a.createElement("input",{className:"input",type:"email",name:"email",defaultValue:o,onBlur:f})),i.a.createElement("div",null,i.a.createElement("label",{className:"white-text",htmlFor:"message"},"Message:"),i.a.createElement("textarea",{className:"input",name:"message",rows:"5",defaultValue:c,onBlur:f})),d&&i.a.createElement("div",null,i.a.createElement("p",{className:"error-text"},d)),i.a.createElement("button",{className:"btn-small cyan",type:"submit","data-testid":"button"},"Submit"))))},f=function(e){var t=e.project;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m7"},i.a.createElement("div",{className:"card"},i.a.createElement("a",{href:t.deployed},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{src:t.src,alt:"{project.name} project"}))),i.a.createElement("div",{className:"card-content black-text"},i.a.createElement("span",{className:"card-title black-text"},t.name),i.a.createElement("p",null,t.languages)," ",i.a.createElement("br",null),i.a.createElement("p",null,t.description)," ",i.a.createElement("br",null),i.a.createElement("a",{href:t.deployed},"Deployed application")," ",i.a.createElement("br",null),i.a.createElement("a",{href:t.github},"GitHub repository")))))},b=a(8),E=a.n(b),y=a(9),v=a.n(y),w=a(10),S=a.n(w),k=a(11),N=a.n(k),C=a(12),j=a.n(C),x=a(13),M=a.n(x);var I=function(){var e=[{name:"Hike Finder",languages:"HTML, CSS, Javascript",description:"HIKE FINDER is an easy to use mobile friendly website that allows the user to find a hike in a location of their choosing by zip code, or even a specific hike name. Users can see important details about the hike such as length, altitude, weather conditions, ratings, and more. Users are also presented with a gear checklist allowing them to determine necessary preparation, including whether to take advantage of the handy storefinder feature! HIKE FINDER provides a list of sporting good stores near the user's hike or another desired location to help the user ensure they have everything they need.",src:E.a,deployed:"https://jennifermulder.github.io/explore/",github:"https://github.com/jennifermulder/explore"},{name:"Safr",languages:"HTML, CSS, Javascript, SQL ",description:"CMS-style blog site where users can publish posts, reviews, and safety measures offered by various businesses during COVID-19. Mobile friendly website that allows the users to get up-to-date information regarding dining, entertainment, and the outdoors.",src:j.a,deployed:"https://ssafr.herokuapp.com/login",github:"https://github.com/NGDino/safety-first"},{name:"Noggin Bloggin",languages:"HTML, CSS, Javascript",description:"CMS-style blog site where users can publish articles, blog posts, and thoughts/ opinions. When logged in, the user can create new posts and edit them, as well as comment on the posts of other users. For whatever reason a post is no longer relevant, the use can easily delete their work with the click of a button.",src:S.a,deployed:"https://serene-inlet-06032.herokuapp.com/",github:"https://github.com/jennifermulder/noggin-bloggin"},{name:"BudgetSmart",languages:"HTML, JS, CSS",description:"Built with ReactJs, this smart budgeter allows users to view their current budget transactions. They can input an expense or a deposit when they are not connected to the internet, and will be notified of the completed trasaction update once connection is reestablished. ",src:v.a,deployed:"https://jennifermulder.github.io/food-festival/",github:"https://github.com/jennifermulder/myteam-generator"},{name:"Fair Weather",languages:"HTML, CSS, Javascript",description:"This weather dashboard shows the current day's weather as well as the upcoming five-day forecast. Upon entering the desired city into the search bar, the user is easily able to see an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. Icons of weather conditions help the user easily interpret the weather conditions at a glance. Each city search is stored to be able to be used for future searches, in which the user simply has to click the city button to regenerate the information!",src:M.a,deployed:"https://jennifer.mulder.github.io/fair-weather/",github:"https://github.com/jennifermulder/fair-weather"},{name:"Random Password Generator",languages:"CSS, Javascript",description:"Random password generator, providing the user with a password with the desired length and character criteria (uppercase, lowercase, special characters).",src:N.a,deployed:"https://jennifer.mulder.github.io/random-password/",github:"https://github.com/jennifermulder/random-password"}];return i.a.createElement("section",{className:"container"},i.a.createElement("h2",{id:"portfolio"},"Portfolio")," ",e.map((function(e){return i.a.createElement(f,{key:e.name,name:e.name,project:e})})))};a(20);var A=function(){return i.a.createElement("section",{className:"my-5 container"},i.a.createElement("h2",{id:"about"},"Resume"),i.a.createElement("a",{href:"https://docs.google.com/document/d/1PgVg2DeNrB_QIiBI3yQFI0mzb0J90FR_UCDtqVIn_bU/edit#"},"Download"),i.a.createElement("h4",null,"SUMMARY"),"Full-Stack Web developer and Certified Public Accountant with a background in finance and accounting. Leader in project/ collaboration based settings while also maintaining organization and efficiency to execute tasks. Courageous communicator when presenting/ suggesting more efficient ways to perform processes. Self-motivator driven by an interest in problem solving. Team player exemplifying a \u201cget-it-done\u201d mentality.",i.a.createElement("h4",null,"TECHNICAL SKILLS"),i.a.createElement("p",null,"Languages:HTML, CSS, JavaScript, jQuery, SQL, Java",i.a.createElement("br",null),"Tools/Libraries: Git, Visual Studio, MERN Stack (MongoDB, Express.js, React.js, Node.js), MySQL, SQLite, Sequelize, jest, Bootstrap, Materialize, Handlebars, Local Storage, Session Storage, IndexedDB, Heroku"),i.a.createElement("h4",null,"PROJECTS"),i.a.createElement("h5",null,"HikeFinder")," ",i.a.createElement("p",null,"GitHub: jennifermulder /explore | Deployed: jennifermulder.github.io/explore/"),i.a.createElement("ul",{className:"browser-default"},i.a.createElement("li",null,"  Search application to identify nearby trails and sporting good stores utilizing server-side APIs: Hiking Project, Google Geocode"),i.a.createElement("li",null,"  Managed a team of 4, provided organization/detailed role responsibilities/ assignments to meet requirements. Lead meetings"),i.a.createElement("li",null,"  Core responsibilities: Designed the layout for and built an input driven page utilizing CSS stylings with Materialize"),i.a.createElement("li",null,"  HTML, CSS, JS, Server-Side APIs, Third-Party APIs: Materialize")),i.a.createElement("h5",null,"Safr")," ",i.a.createElement("p",null,"GitHub: NGDino/safety-first | Deployed: ssafr.herokuapp.com/login"),i.a.createElement("ul",{className:"browser-default"},i.a.createElement("li",null,"CMS-style blog site where users can publish posts, reviews, and safety measures offered by various businesses during COVID-19. Mobile friendly website that allows the users to get up-to-date information regarding dining, entertainment, and the outdoors."),i.a.createElement("li",null,"Managed a team of 3, provided organization/detailed role responsibilities/ assignments to meet requirements. Lead meetings"),i.a.createElement("li",null,"Core responsibilities: Back End (Models, Database connection, Authentication, Login)"),i.a.createElement("li",null,"HTML, CSS, JS,  Third-Party APIs: Materialize, Node Js, Express (handlebars - templating, sessions) MySQL, Sequelize, MVC paradigm, Heroku deployment")),i.a.createElement("h4",null,"WORK EXPERIENCE"),i.a.createElement("h5",null,"Senior Revenue Accountant"),"Salesforce.com, Inc. |San Francisco, CA                                                 January 2019 \u2013 Present",i.a.createElement("ul",{className:"browser-default"},i.a.createElement("li",null,"Successfully solves Excel processing limitations by implementing Power Queries and editing formulas to perform functions with large amounts of data, reducing overall key process time required by 60% "),i.a.createElement("li",null,"Thoroughly debugs 100-500 data flow discrepancies between CRM and Revenue Subledger systems, as Subject Matter Expert, identifying root causes, and relying on knowledge base to construct potential solutions "),i.a.createElement("li",null,"Effectively collaborates with management at all levels, making executive decisions and provides suggestions where appropriate, efficiently solving judgement based problems "),i.a.createElement("li",null,"Creatively builds automated solutions to key processes involving repetition/formatting, utilizing Macros/ VBA "),i.a.createElement("li",null,"Routinely reevaluates and redesigns monthly processes in order to reduce redundancies, implemented a front end process that reduced downstream manual data entry by 50% "),i.a.createElement("li",null,"Courageously presented ideas, approach and execution of Revenue Management System Upgrade project to Corporate Accounting Department of 80 people including upper management ")),i.a.createElement("h5",null,"Core Assurance Experienced Associate"),"Pricewaterhouse Coopers LLP |San Francisco/San Jose, CA       September 2016 \u2013 January 2019",i.a.createElement("ul",{className:"browser-default"},i.a.createElement("li",null,"Meticulously performed quarterly analysis of account variances over significant periods against client business expectations utilizing Excel, helping identify any potential errors "),i.a.createElement("li",null,"Strongly coordinated and executed evidence gathering activities in preparation of various filings related to 2 IPOs "),i.a.createElement("li",null,"Assertively served as a liaison between client management and PwC and conducted inquiries with client representatives, strengthening communication and relationships "),i.a.createElement("li",null,"Efficiently lead engagements and instructed multiple subordinates, utilizing project management and leadership skills, reducing planned hours by a 20% average "),i.a.createElement("li",null,"Proficiently performed audit testing with technical accounting standards over areas including earnings per share, stock based compensation, prepayments, accruals and revenue to ensure compliance with US GAAP ")),i.a.createElement("h4",null,"EDUCATION"),i.a.createElement("p",null,"Certificate in Full Stack Web Development  ",i.a.createElement("br",null),"University of California, Berkeley| San Francisco Bay Area, CA                                    May 2020 \u2013 November 2020",i.a.createElement("br",null)),i.a.createElement("p",null,"Bachelor of Arts in Business Management Economics with an emphasis in accounting ",i.a.createElement("br",null),"University of California, Santa Cruz| Santa Cruz, CA                                             September 2011 \u2013 June 2014   ",i.a.createElement("br",null),"Dean\u2019s Honors ",i.a.createElement("br",null),"3.4",i.a.createElement("br",null)))};var P=function(){return i.a.createElement("section",{id:"footer"},i.a.createElement("nav",null,i.a.createElement("ul",{id:"external links"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/jennifermulder",target:"_blank"},i.a.createElement("i",{className:"fab fa-github"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/jennifer-mulder-cpa-2125b571/",target:"blank"},i.a.createElement("i",{className:"fab fa-linkedin"}))))))};var L=function(){var e=Object(n.useState)(["about me","portfolio","contact","resume"]),t=Object(s.a)(e,1)[0],a=Object(n.useState)(t[0]),r=Object(s.a)(a,2),l=r[0],o=r[1];return i.a.createElement("div",{id:"html"},i.a.createElement(c,{pageSelected:l,setPageSelected:o}),i.a.createElement("main",{className:"light-blue darken-4 white-text"},"about me"===l&&i.a.createElement(d,null),"portfolio"===l&&i.a.createElement(I,null),"contact"===l&&i.a.createElement(g,null),"resume"===l&&i.a.createElement(A,null)),i.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.4e3c12af.chunk.js.map