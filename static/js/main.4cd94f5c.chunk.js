(this["webpackJsonpkeating-portfolio"]=this["webpackJsonpkeating-portfolio"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Earworm","url":"https://earworm.netlify.com/","github":"https://github.com/stephenkeating/earworm-frontend","description":"Name that tune app","shortName":"earworm","tech":["React.js","Ruby on Rails","Spotify APIs","Custom CSS","PostgreSQL","AWS","Datadog"],"bullets":["Created algorithm to match user guesses to track titles, including Jaro-Winkler metric for fuzzy matching","Implemented Spotify APIs on backend to build Ruby on Rails API that called Spotify Web player on the frontend","Deployed to AWS and installed the Datadog agent to monitor analytics and performance","Designed database schema using ActiveRecord and PostgreSQL to allow fast loading of large amounts of data","Wrote responsive interface in consultation with a designer with entirely custom CSS"]},{"title":"5 Games","url":"https://fivegames.netlify.app/playlists/16","github":"https://github.com/5-Games","description":"NBA game playlist curator and sharing app","shortName":"fivegames","tech":["JWT auth","React.js","Redux","Thunk","Hooks","React-Router","Ruby on Rails","Multiple External APIs","NBA.com Web Scraping","PostgreSQL","Custom CSS","Github Team Workflow"],"bullets":["Secured app through JWT authorization and bcrypt","Collected live data from multiple external APIs, info scraped from NBA.com & custom-built API to make app expandable & ready for 2.0 features including data-tracking","Optimized memory and database usage through a custom schema built with Rails, ActiveRecord and PostgreSQL","Designed and implemented fully custom CSS to follow responsive but dynamic and functional design philosophy","Followed modular design patterns in React frontend to allow for adaptability and reusable code base"]},{"title":"Stock Tracker Demo","url":"https://keating-stock-tracker.netlify.com/","github":"https://github.com/stephenkeating/stock-tracker-ttp","description":"Stock portfolio app","shortName":"stocktracker","tech":["JWT auth","React.js","Redux","Thunk","Ruby on Rails","IEX Cloud APIs","PostgreSQL","Custom CSS"],"bullets":["Managed frontend complexity with Redux to load and edit user data across various components of the app","Employed IEX Cloud APIs to get \u201clive\u201d stock price data, storing purchase data to BE and displaying the difference between purchase price and current value"]}]')},,,,function(e,t,a){var r={"./earworm.png":35,"./earworm1.png":21,"./earworm2.png":22,"./fivegames.png":36,"./stocktracker.png":37};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=12},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/earworm1.af488bc6.png"},function(e,t,a){e.exports=a.p+"static/media/earworm2.b9c05896.png"},,,,function(e,t,a){e.exports=a(42)},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/earworm.7b134ae7.png"},function(e,t,a){e.exports=a.p+"static/media/fivegames.f588e8f3.png"},function(e,t,a){e.exports=a.p+"static/media/stocktracker.2dcd5e5f.png"},function(e,t,a){var r={"./earworm1.png":21};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=38},function(e,t,a){var r={"./earworm2.png":22};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=39},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(13),c=a.n(o),l=a(11),i=a(25),s=a(24),m=a(7),p=a(2),u=a(8),d=function(e){var t=e.even,r=e.project,o=r.title,c=r.url,l=r.description,i=(r.tech,r.bullets,r.github),s=r.shortName;return n.a.createElement("div",{className:"project-card"+(t?" even":" odd")},n.a.createElement(m.b,{to:"/".concat(s)},n.a.createElement("div",{className:"project-image-container"},n.a.createElement("img",{className:"project-image",src:a(12)("./".concat(s,".png")),alt:"".concat(o," screenshot")}),n.a.createElement("div",{className:"project-image-overlay"},n.a.createElement("div",{className:"project-image-text"},"\u2192 Project Details")))),n.a.createElement("div",{className:"project-card-title"},n.a.createElement(m.b,{to:"/".concat(s)},o)),n.a.createElement("div",{className:"project-card-description"},l),n.a.createElement("div",{className:"project-card-links"},n.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"Live")," | ",n.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"GitHub")," | ",n.a.createElement(m.b,{to:"/".concat(s)},"Project Details")))},g=function(){return n.a.createElement("h1",null,"My curiosity with tech started early\u2013I was networking computers together in middle school so my friends and I could play video games. That turned into an internship at an internet startup during high school, during which I self-taught programming basics. Out of college, I chose a career in the humanities, achieved ABD for a PhD in philosophy of religion and founded a tutoring company. Now that I\u2019m back in tech, I\u2019m excited to bring my love of learning, collaboration, and scrappy work ethic to my coding career. I\u2019m really proud of Earworm, a \u201cname that tune\u201d game that I built with React.js, Ruby on Rails, and Spotify APIs, and I also recently bought a Raspberry Pi to learn Linux and set up a video server for my 3-year-old (mostly Peppa Pig). I\u2019d love to work at a company where diversity matters, where anyone can have a business impact, and where continuous learning is a core value.")},h={Earworm:function(){Object(r.useEffect)((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}),[]);var e=u[0],t=e.title,o=e.url,c=e.description,l=e.tech,i=e.bullets,s=e.github,m=e.shortName;return n.a.createElement("div",{className:"project-page"},n.a.createElement("h1",{className:"product-page-title"},n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},t)),n.a.createElement("div",{className:"project-page-body"},n.a.createElement("div",{className:"project-page-row"},n.a.createElement("div",{className:"project-page-column left-column"},n.a.createElement("div",{className:"project-page-description"},c),n.a.createElement("div",{className:"project-page-links"},n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"Live")," | ",n.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},"GitHub"))),n.a.createElement("div",{className:"project-page-column"},n.a.createElement("div",{className:"project-page-bullets"},i.map((function(e,t){return n.a.createElement("div",{key:t},"\u2192 ",e)}))))),n.a.createElement("h1",null,n.a.createElement("img",{className:"project-page-image",src:a(12)("./".concat(m,".png")),alt:"".concat(t," screenshot")})),n.a.createElement("div",{className:"project-page-tech"},"Tech used: ",n.a.createElement("br",null),l.map((function(e,t){return n.a.createElement("span",{key:t},(t?" | ":"")+e)}))),n.a.createElement("h1",null,n.a.createElement("img",{className:"project-page-image",src:a(38)("./".concat(m,"1.png")),alt:"".concat(t," screenshot")}),n.a.createElement("img",{className:"project-page-image",src:a(39)("./".concat(m,"2.png")),alt:"".concat(t," screenshot")}))))},FiveGames:function(){Object(r.useEffect)((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}),[]);var e=u[1],t=e.title,o=e.url,c=e.description,l=e.tech,i=e.bullets,s=e.github,m=e.shortName;return n.a.createElement("div",{className:"project-page"},n.a.createElement("h1",{className:"product-page-title"},n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},t)),n.a.createElement("div",{className:"project-page-body"},n.a.createElement("div",{className:"project-page-row"},n.a.createElement("div",{className:"project-page-column left-column"},n.a.createElement("div",{className:"project-page-description"},c),n.a.createElement("div",{className:"project-page-links"},n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"Live")," | ",n.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},"GitHub"))),n.a.createElement("div",{className:"project-page-column"},n.a.createElement("div",{className:"project-page-bullets"},i.map((function(e,t){return n.a.createElement("div",{key:t},"\u2192 ",e)}))))),n.a.createElement("h1",null,n.a.createElement("img",{className:"project-page-image",src:a(12)("./".concat(m,".png")),alt:"".concat(t," screenshot")})),n.a.createElement("div",{className:"project-page-tech"},"Tech used: ",n.a.createElement("br",null),l.map((function(e,t){return n.a.createElement("span",{key:t},(t?" | ":"")+e)})))))},Home:function(){var e=u.map((function(e,t){return n.a.createElement(d,{key:t,project:e,even:t%2===0})}));return n.a.createElement("div",null,n.a.createElement(g,null),n.a.createElement("div",{className:"projects-container"},e))},StockTracker:function(){Object(r.useEffect)((function(){document.querySelector("#root").scrollIntoView({behavior:"smooth"},500)}),[]);var e=u[2],t=e.title,o=e.url,c=e.description,l=e.tech,i=e.bullets,s=e.github,m=e.shortName;return n.a.createElement("div",{className:"project-page"},n.a.createElement("h1",{className:"product-page-title"},n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},t)),n.a.createElement("div",{className:"project-page-body"},n.a.createElement("div",{className:"project-page-row"},n.a.createElement("div",{className:"project-page-column left-column"},n.a.createElement("div",{className:"project-page-description"},c),n.a.createElement("div",{className:"project-page-links"},n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"Live")," | ",n.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},"GitHub"))),n.a.createElement("div",{className:"project-page-column"},n.a.createElement("div",{className:"project-page-bullets"},i.map((function(e,t){return n.a.createElement("div",{key:t},"\u2192 ",e)}))))),n.a.createElement("h1",null,n.a.createElement("img",{className:"project-page-image",src:a(12)("./".concat(m,".png")),alt:"".concat(t," screenshot")})),n.a.createElement("div",{className:"project-page-tech"},"Tech used: ",n.a.createElement("br",null),l.map((function(e,t){return n.a.createElement("span",{key:t},(t?" | ":"")+e)})))))}},f=function(){return n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/fivegames",component:h.FiveGames}),n.a.createElement(p.a,{path:"/earworm",component:h.Earworm}),n.a.createElement(p.a,{exact:!0,path:"/",component:h.Home}),n.a.createElement(p.a,{exact:!0,path:"/stocktracker",component:h.StockTracker}))},E=function(){return n.a.createElement("nav",{className:"nav"},n.a.createElement("div",{className:"nav-link"},n.a.createElement("a",{href:"https://learn.co/stephenmk/resume",target:"_blank",rel:"noopener noreferrer"},"Resume")),n.a.createElement("div",{className:"nav-link"},n.a.createElement("a",{href:"https://www.linkedin.com/in/stephenmkeating/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),n.a.createElement("div",{className:"nav-title"},n.a.createElement(m.b,{to:"/"},"STEPHEN KEATING")),n.a.createElement("div",{className:"nav-link"},n.a.createElement("a",{href:"https://github.com/stephenkeating/",target:"_blank",rel:"noopener noreferrer"},"GitHub")),n.a.createElement("div",{className:"nav-link"},n.a.createElement("a",{href:"mailto:stephen.keating@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Email")))},v=(a(41),function(){return n.a.createElement(m.a,{basename:"/keating-portfolio"},n.a.createElement(E,null),n.a.createElement(f,null))}),b=Object(l.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;t.type,t.payload;return e}),Object(l.a)(s.a));c.a.render(n.a.createElement(i.a,{store:b},n.a.createElement(v,null)),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.4cd94f5c.chunk.js.map