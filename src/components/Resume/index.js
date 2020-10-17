import React from 'react';

import './Resume.css';

function Resume() {
  return (
    <section className="my-5 container">
      <h2 id="about">Resume</h2>
      <a href="https://docs.google.com/document/d/1PgVg2DeNrB_QIiBI3yQFI0mzb0J90FR_UCDtqVIn_bU/edit#">Download</a>
      <h4>SUMMARY</h4>
Full-Stack Web developer and Certified Public Accountant with a background in finance and accounting. Leader in project/ collaboration based settings while also maintaining organization and efficiency to execute tasks. Courageous communicator when presenting/ suggesting more efficient ways to perform processes. Self-motivator driven by an interest in problem solving. Team player exemplifying a “get-it-done” mentality.


      <h4>TECHNICAL SKILLS</h4>

      <p>Languages:HTML, CSS, JavaScript, jQuery, SQL, Java<br />
        Tools/Libraries: Git, Visual Studio, MERN Stack (MongoDB, Express.js, React.js, Node.js), MySQL, SQLite, Sequelize, jest, Bootstrap, Materialize, Handlebars, Local Storage, Session Storage, IndexedDB, Heroku
      </p>

      <h4>PROJECTS</h4>
      <h5>HikeFinder</h5> <p>GitHub: jennifermulder /explore | Deployed: jennifermulder.github.io/explore/</p>
      <ul className="browser-default" >
        <li>  Search application to identify nearby trails and sporting good stores utilizing server-side APIs: Hiking Project, Google Geocode</li>
        <li>  Managed a team of 4, provided organization/detailed role responsibilities/ assignments to meet requirements. Lead meetings</li>
        <li>  Core responsibilities: Designed the layout for and built an input driven page utilizing CSS stylings with Materialize</li>
        <li>  HTML, CSS, JS, Server-Side APIs, Third-Party APIs: Materialize</li>
      </ul>
      <h5>Safr</h5> <p>GitHub: NGDino/safety-first | Deployed: ssafr.herokuapp.com/login</p>
      <ul className="browser-default" >
        <li>CMS-style blog site where users can publish posts, reviews, and safety measures offered by various businesses during COVID-19. Mobile friendly website that allows the users to get up-to-date information regarding dining, entertainment, and the outdoors.</li>
        <li>Managed a team of 3, provided organization/detailed role responsibilities/ assignments to meet requirements. Lead meetings</li>
        <li>Core responsibilities: Back End (Models, Database connection, Authentication, Login)</li>
        <li>HTML, CSS, JS,  Third-Party APIs: Materialize, Node Js, Express (handlebars - templating, sessions) MySQL, Sequelize, MVC paradigm, Heroku deployment</li>
      </ul>

      <h4>WORK EXPERIENCE</h4>
      <h5>Senior Revenue Accountant</h5>
Salesforce.com, Inc. |San Francisco, CA			                                              January 2019 – Present
      <ul className="browser-default" >
        <li>Successfully solves Excel processing limitations by implementing Power Queries and editing formulas to perform functions with large amounts of data, reducing overall key process time required by 60% </li>
        <li>Thoroughly debugs 100-500 data flow discrepancies between CRM and Revenue Subledger systems, as Subject Matter Expert, identifying root causes, and relying on knowledge base to construct potential solutions </li>
        <li>Effectively collaborates with management at all levels, making executive decisions and provides suggestions where appropriate, efficiently solving judgement based problems </li>
        <li>Creatively builds automated solutions to key processes involving repetition/formatting, utilizing Macros/ VBA </li>
        <li>Routinely reevaluates and redesigns monthly processes in order to reduce redundancies, implemented a front end process that reduced downstream manual data entry by 50% </li>
        <li>Courageously presented ideas, approach and execution of Revenue Management System Upgrade project to Corporate Accounting Department of 80 people including upper management </li>
      </ul>
      <h5>Core Assurance Experienced Associate</h5>
Pricewaterhouse Coopers LLP |San Francisco/San Jose, CA			    September 2016 – January 2019
      <ul className="browser-default" >
        <li>Meticulously performed quarterly analysis of account variances over significant periods against client business expectations utilizing Excel, helping identify any potential errors </li>
        <li>Strongly coordinated and executed evidence gathering activities in preparation of various filings related to 2 IPOs </li>
        <li>Assertively served as a liaison between client management and PwC and conducted inquiries with client representatives, strengthening communication and relationships </li>
        <li>Efficiently lead engagements and instructed multiple subordinates, utilizing project management and leadership skills, reducing planned hours by a 20% average </li>
        <li>Proficiently performed audit testing with technical accounting standards over areas including earnings per share, stock based compensation, prepayments, accruals and revenue to ensure compliance with US GAAP </li>
      </ul>
      <h4>EDUCATION</h4>
      <p>Certificate in Full Stack Web Development  <br />
University of California, Berkeley| San Francisco Bay Area, CA	                                   May 2020 – November 2020<br />
      </p>
      <p>
        Bachelor of Arts in Business Management Economics with an emphasis in accounting <br />
University of California, Santa Cruz| Santa Cruz, CA	                                            September 2011 – June 2014   <br />
Dean’s Honors	<br />
3.4<br />
      </p>

    </section>
  );
}

export default Resume;