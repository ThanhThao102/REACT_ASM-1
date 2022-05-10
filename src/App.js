import logo from './Photo.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
  <div className="left_Side">
    <div className="profileText">
      <div className="imgBx">
        <img src={logo}></img>
      </div>
      <h2>
        Thanh Thao Vo
        <br />
        <span>Web Developer</span>
      </h2>
    </div>
    <div className="contactInfo">
      <h3 className="title">Contact Info</h3>
      <ul>
        <li>
          <span className="icon">
            <i className="fa fa-phone" aria-hidden="true" />
          </span>
          <span className="text">+84 344 479 118</span>
        </li>
        <li>
          <span className="icon">
            <i className="fa fa-envelope" aria-hidden="true" />
          </span>
          <span className="text">vothithanhthao102@gmail.com</span>
        </li>
        <li>
          <span className="icon">
            <i className="fa fa-map-marker" aria-hidden="true" />
          </span>
          <span className="text">Thu Duc, Ho Chi Minh City</span>
        </li>
      </ul>
    </div>
    <br /> <br />
    <div className="education">
      <h3 className="title">Education</h3>
      <ul>
        <li>
          <h5>2014 - 2018</h5>
          <h4> Bachelor in English Language</h4>
          <h4>Hutech University</h4>
        </li>
      </ul>
    </div>
    <br /> <br />
    <div className="language">
      <h3 className="title">Languages</h3>
      <ul>
        <li>
          <span className="text">English</span>
          <span className="percent">
            <div style={{ width: "70%" }} />
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div className="right_Side">
    <div className="about">
      <h2 className="title2">Profile</h2>
      <p>
        I have a positive mind and good ability to adapt and create stable
        environment around me.
        <br /> <br /> I am eager to learn, to be challenged in order to grow
        professionally and further improve my dev skills. I am currently looking
        for an opportunity to utilize my dev skills in a challenging working
        environment and be come a valuable asset to the organization that I work
        for.
      </p>
    </div>
    <div className="about">
      <h2 className="title2">Experience</h2>
      <div className="box">
        <div className="year_company">
          <h5>2021 - Present</h5>
          <h5>Vision First Consulting Group</h5>
        </div>
        <div className="text">
          <h4>Processing Officer</h4>
          <ul>
            <li>
              Guide customers to prepare necessary documents to apply for visas.
            </li>
            <li>
              Find out, update information, Visa policy, process of
              student-visitor visas.
            </li>
            <li>
              Fill out the school enrolment forms and prepare for visa
              application.
            </li>
            <li>
              Manage, monitor and remind customers to complete and supplement
              documents until receiving the PR.
            </li>
            <li>
              Organize and store on the data management system and compile the
              company's filing process in a scientific way.
            </li>
            <li>
              Fill out the immigration forms and work permits for settlement.
            </li>
            <li>Plan to process the assigned applications on time.</li>
          </ul>
        </div>
      </div>
      <div className="box">
        <div className="year_company">
          <h5>2019 - 2021</h5>
          <h5>Ally Investment &amp; Immigration Consultant JSC</h5>
        </div>
        <div className="text">
          <h4>Case Processing Officer</h4>
          <ul>
            <li>
              Receive documents from the consultant after the customer signs the
              contract.
            </li>
            <li>Translate and check translation of customers' documents.</li>
            <li>
              Liaise with relevant agencies and organizations to complete visa
              application procedures.
            </li>
            <li>
              Manage, monitor and remind customers to complete and supplement
              documents until receiving the PR
            </li>
            <li>
              Organize and store on the data management system and compile the
              company's filing process in a scientific way
            </li>
            <li>
              Fill out the immigration forms and work permits for settlement.
            </li>
            <li>Plan to process the assigned applications on time.</li>
          </ul>
        </div>
      </div>
      <div className="skills">
        <h2 className="title2">Professional Skills</h2>
        <div className="box">
          <h4>Html</h4>
          <div className="percent">
            <div style={{ width: "70%" }} />
          </div>
        </div>
        <div className="box">
          <h4>CSS</h4>
          <div className="percent">
            <div style={{ width: "70%" }} />
          </div>
        </div>
        <div className="box">
          <h4>Javascript</h4>
          <div className="percent">
            <div style={{ width: "70%" }} />
          </div>
        </div>
        <div className="box">
          <h4>React</h4>
          <div className="percent">
            <div style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
