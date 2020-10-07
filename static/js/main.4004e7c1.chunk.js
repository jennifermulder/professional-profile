(this["webpackJsonpprofessional-profile"]=this["webpackJsonpprofessional-profile"]||[]).push([[0],[,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/profileimage.ac027eb6.jpg"},function(e,t,a){e.exports=a.p+"static/media/hike-finder.c7307c5f.jpg"},function(e,t,a){e.exports=a.p+"static/media/money-money-money.93d675df.jpg"},function(e,t,a){e.exports=a.p+"static/media/noggin-bloggin1.eea153c4.jpg"},function(e,t,a){e.exports=a.p+"static/media/password-generator-markup.0d55b663.jpg"},function(e,t,a){e.exports=a.p+"static/media/safr1.ae823fe5.jpg"},function(e,t,a){e.exports=a.p+"static/media/weather-dashboard.98ea6ab6.jpg"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),l=a.n(i),o=(a(19),a(1));var s=function(e){var t=e.setPageSelected;return console.log(e,"coming from nav"),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{"data-testid":"about",href:"#about",onClick:function(){return t("about me")}},"About me")),r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{"data-testid":"portfolio",href:"#portfolio",onClick:function(){return t("portfolio")}},"Portfolio")),r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{"data-testid":"contact",href:"#contact",onClick:function(){return t("contact")}},"Contact")),r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{"data-testid":"resume",href:"#resume",onClick:function(){return t("resume")}},"Resume"))))};var c=function(e){var t=e.pageSelected,a=e.setPageSelected;return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h2",null,r.a.createElement("a",{"data-testid":"link",href:"/"},r.a.createElement("span",{role:"img","aria-label":"camera"})," Jennifer Mulder, CPA")),r.a.createElement(s,{PageSelected:t,setPageSelected:a}))},u=a(7),m=a.n(u);a(5);var d=function(e){return r.a.createElement("section",null,r.a.createElement("h1",{id:"about"},"About Me"),r.a.createElement("img",{src:m.a,className:"my-2",style:{width:"75%"},alt:"Jennifer Mulder"}),r.a.createElement("p",null," I am a Full-Stack Web developer looking to contribute to software functionality in a creative workspace. As a recent recipient of a certificate in full stack development from the University of California, Berkeley, I have obtained newly practiced skills including: Javascript, NodeJS, and MySQL. With a collective 6 years of experience in both public and industry accounting, I have the necessary capabilities to be an effective contributing team member to any project. In public accounting, I gained the ability to effectively communicate with all management levels on the client side, as well as my team. I am a courageous communicator when it comes to presenting/ suggesting more efficient ways to perform processes as I am self-motivated to always find a better solution. When working on my recent group project to build a full stack application utilizing express and sequelize to build an interactive blog site, I played a leadership role in assessing the skills of those that I was working with and assigning the best fit to each role, while also maintaining organization and adherence to acceptance criteria. I am excited to utilize my skills in an efficient, fast-paced workplace that is equally driven to come up with the next best thing."))},p=a(2),g=a(3);var h=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],i=t[1],l=a.name,s=a.email,c=a.message,u=Object(n.useState)(""),m=Object(o.a)(u,2),d=m[0],h=m[1];function f(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),h(t?"":"Your email is invalid.")}else e.target.value.length?h(""):h("".concat(e.target.name," is required."));d||i(Object(g.a)(Object(g.a)({},a),{},Object(p.a)({},e.target.name,e.target.value)))}return r.a.createElement("section",null,r.a.createElement("h1",{"data-testid":"h1tag"},"Contact me"),r.a.createElement("h4",{htmlFor:"email"},"Email address: jlmulder2014@gmail.com"),r.a.createElement("h4",{htmlFor:"email"},"Phone Number: 510.766.6583"),r.a.createElement("h1",{"data-testid":"h1tag"},"Send Email"),r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:l,onBlur:f})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:s,onBlur:f})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:c,onBlur:f})),d&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},d)),r.a.createElement("button",{type:"submit","data-testid":"button"},"Submit")))},f=function(e){var t=e.project;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m7"},r.a.createElement("div",{className:"card"},r.a.createElement("a",{href:t.deployed},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:t.src,alt:"{project.name} project"}),r.a.createElement("span",{className:"card-title"},t.name))),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,t.languages),r.a.createElement("p",null,t.description)," ",r.a.createElement("br",null),r.a.createElement("a",{href:t.deployed},"Deployed application")," ",r.a.createElement("br",null),r.a.createElement("a",{href:t.github},"GitHub repository")))))},b=a(8),E=a.n(b),y=a(9),v=a.n(y),w=a(10),S=a.n(w),k=a(11),C=a.n(k),j=a(12),x=a.n(j),M=a(13),N=a.n(M);var I=function(){var e=[{name:"Hike Finder",languages:"HTML, CSS, Javascript",description:"HIKE FINDER is an easy to use mobile friendly website that allows the user to find a hike in a location of their choosing by zip code, or even a specific hike name. Users can see important details about the hike such as length, altitude, weather conditions, ratings, and more. Users are also presented with a gear checklist allowing them to determine necessary preparation, including whether to take advantage of the handy storefinder feature! HIKE FINDER provides a list of sporting good stores near the user's hike or another desired location to help the user ensure they have everything they need.",src:E.a,deployed:"https://jennifermulder.github.io/explore/",github:"https://github.com/jennifermulder/explore"},{name:"Safr",languages:"HTML, CSS, Javascript, SQL ",description:"CMS-style blog site where users can publish posts, reviews, and safety measures offered by various businesses during COVID-19. Mobile friendly website that allows the users to get up-to-date information regarding dining, entertainment, and the outdoors.",src:x.a,deployed:"https://ssafr.herokuapp.com/login",github:"https://github.com/NGDino/safety-first"},{name:"Noggin Bloggin",languages:"HTML, CSS, Javascript",description:"CMS-style blog site where users can publish articles, blog posts, and thoughts/ opinions. When logged in, the user can create new posts and edit them, as well as comment on the posts of other users. For whatever reason a post is no longer relevant, the use can easily delete their work with the click of a button.",src:S.a,deployed:"https://serene-inlet-06032.herokuapp.com/",github:"https://github.com/jennifermulder/noggin-bloggin"},{name:"BudgetSmart",languages:"HTML, JS, CSS",description:"Built with ReactJs, this smart budgeter allows users to view their current budget transactions. They can input an expense or a deposit when they are not connected to the internet, and will be notified of the completed trasaction update once connection is reestablished. ",src:v.a,deployed:"https://jennifermulder.github.io/food-festival/",github:"https://github.com/jennifermulder/myteam-generator"},{name:"Fair Weather",languages:"HTML, CSS, Javascript",description:"This weather dashboard shows the current day's weather as well as the upcoming five-day forecast. Upon entering the desired city into the search bar, the user is easily able to see an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. Icons of weather conditions help the user easily interpret the weather conditions at a glance. Each city search is stored to be able to be used for future searches, in which the user simply has to click the city button to regenerate the information!",src:N.a,deployed:"https://jennifer.mulder.github.io/fair-weather/",github:"https://github.com/jennifermulder/fair-weather"},{name:"Random Password Generator",languages:"CSS, Javascript",description:"Random password generator, providing the user with a password with the desired length and character criteria (uppercase, lowercase, special characters).",src:C.a,deployed:"https://jennifer.mulder.github.io/random-password/",github:"https://github.com/jennifermulder/random-password"}];return r.a.createElement("section",null,r.a.createElement("h1",null,"Portfolio")," ",e.map((function(e){return r.a.createElement(f,{key:e.name,name:e.name,project:e})})))};var A=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("h1",{id:"about"},"Resume"),r.a.createElement("a",{href:"https://docs.google.com/document/d/1PgVg2DeNrB_QIiBI3yQFI0mzb0J90FR_UCDtqVIn_bU/edit#"},"Download"),r.a.createElement("h4",null,"SUMMARY"),"Full-Stack Web developer and Certified Public Accountant with a background in finance and accounting. Leader in project/ collaboration based settings while also maintaining organization and efficiency to execute tasks. Courageous communicator when presenting/ suggesting more efficient ways to perform processes. Self-motivator driven by an interest in problem solving. Team player exemplifying a \u201cget-it-done\u201d mentality.",r.a.createElement("h4",null,"TECHNICAL SKILLS"),r.a.createElement("p",null,"Languages:HTML, CSS, JavaScript, jQuery, SQL, Java",r.a.createElement("br",null),"Tools/Libraries: Git, Visual Studio, MERN Stack (MongoDB, Express.js, React.js, Node.js), MySQL, SQLite, Sequelize, jest, Bootstrap, Materialize, Handlebars, Local Storage, Session Storage, IndexedDB, Heroku"),r.a.createElement("h4",null,"PROJECTS"),r.a.createElement("h5",null,"HikeFinder")," ",r.a.createElement("p",null,"GitHub: jennifermulder /explore | Deployed: jennifermulder.github.io/explore/",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null," * Search application to identify nearby trails and sporting good stores utilizing server-side APIs: Hiking Project, Google Geocode"),r.a.createElement("li",null," * Managed a team of 4, provided organization/detailed role responsibilities/ assignments to meet requirements. Lead meetings"),r.a.createElement("li",null," * Core responsibilities: Designed the layout for and built an input driven page utilizing CSS stylings with Materialize"),r.a.createElement("li",null," * HTML, CSS, JS, Server-Side APIs, Third-Party APIs: Materialize")),r.a.createElement("h5",null,"Safr"),"GitHub: NGDino/safety-first | Deployed: ssafr.herokuapp.com/login",r.a.createElement("br",null),"* CMS-style blog site where users can publish posts, reviews, and safety measures offered by various businesses during COVID-19. Mobile friendly website that allows the users to get up-to-date information regarding dining, entertainment, and the outdoors.",r.a.createElement("br",null),"* Managed a team of 3, provided organization/detailed role responsibilities/ assignments to meet requirements. Lead meetings",r.a.createElement("br",null),"* Core responsibilities: Back End (Models, Database connection, Authentication, Login)",r.a.createElement("br",null),"* HTML, CSS, JS,  Third-Party APIs: Materialize, Node Js, Express (handlebars - templating, sessions) MySQL, Sequelize, MVC paradigm, Heroku deployment",r.a.createElement("br",null)),r.a.createElement("p",null,r.a.createElement("h4",null,"WORK EXPERIENCE"),r.a.createElement("h5",null,"Senior Revenue Accountant"),"Salesforce.com, Inc. |San Francisco, CA                                                 January 2019 \u2013 Present",r.a.createElement("br",null),"* Successfully solves Excel processing limitations by implementing Power Queries and editing formulas to perform functions with large amounts of data, reducing overall key process time required by 60% ",r.a.createElement("br",null),"* Thoroughly debugs 100-500 data flow discrepancies between CRM and Revenue Subledger systems, as Subject Matter Expert, identifying root causes, and relying on knowledge base to construct potential solutions ",r.a.createElement("br",null),"* Effectively collaborates with management at all levels, making executive decisions and provides suggestions where appropriate, efficiently solving judgement based problems ",r.a.createElement("br",null),"* Creatively builds automated solutions to key processes involving repetition/formatting, utilizing Macros/ VBA ",r.a.createElement("br",null),"* Routinely reevaluates and redesigns monthly processes in order to reduce redundancies, implemented a front end process that reduced downstream manual data entry by 50% ",r.a.createElement("br",null),"* Courageously presented ideas, approach and execution of Revenue Management System Upgrade project to Corporate Accounting Department of 80 people including upper management ",r.a.createElement("br",null)),r.a.createElement("p",null,r.a.createElement("h5",null,"Core Assurance Experienced Associate"),"Pricewaterhouse Coopers LLP |San Francisco/San Jose, CA       September 2016 \u2013 January 2019",r.a.createElement("br",null),"* Meticulously performed quarterly analysis of account variances over significant periods against client business expectations utilizing Excel, helping identify any potential errors ",r.a.createElement("br",null),"* Strongly coordinated and executed evidence gathering activities in preparation of various filings related to 2 IPOs ",r.a.createElement("br",null),"* Assertively served as a liaison between client management and PwC and conducted inquiries with client representatives, strengthening communication and relationships ",r.a.createElement("br",null),"* Efficiently lead engagements and instructed multiple subordinates, utilizing project management and leadership skills, reducing planned hours by a 20% average ",r.a.createElement("br",null),"* Proficiently performed audit testing with technical accounting standards over areas including earnings per share, stock based compensation, prepayments, accruals and revenue to ensure compliance with US GAAP ",r.a.createElement("br",null)),r.a.createElement("h4",null,"EDUCATION"),r.a.createElement("p",null,"Certificate in Full Stack Web Development  ",r.a.createElement("br",null),"University of California, Berkeley| San Francisco Bay Area, CA                                    May 2020 \u2013 November 2020",r.a.createElement("br",null)),r.a.createElement("p",null,"Bachelor of Arts in Business Management Economics with an emphasis in accounting ",r.a.createElement("br",null),"University of California, Santa Cruz| Santa Cruz, CA                                             September 2011 \u2013 June 2014   ",r.a.createElement("br",null),"Dean\u2019s Honors ",r.a.createElement("br",null),"3.4",r.a.createElement("br",null)))};var P=function(){return r.a.createElement("section",{id:"contact-me"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/jennifermulder",target:"_blank"},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/jennifer-mulder-cpa-2125b571/",target:"blank"},r.a.createElement("i",{className:"fab fa-linkedin"}))))))))};var L=function(){var e=Object(n.useState)(["about me","portfolio","contact","resume"]),t=Object(o.a)(e,1)[0],a=Object(n.useState)(t[0]),i=Object(o.a)(a,2),l=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement(c,{pageSelected:l,setPageSelected:s}),r.a.createElement("main",{className:"light-blue darken-4"},"about me"===l&&r.a.createElement(d,null),"portfolio"===l&&r.a.createElement(I,null),"contact"===l&&r.a.createElement(h,null),"resume"===l&&r.a.createElement(A,null)),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.4004e7c1.chunk.js.map