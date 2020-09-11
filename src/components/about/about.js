import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

      {/* About Section
   ================================================== */}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p align="justify">{resumeData.aboutme}<br/>{resumeData.aboutme2}<br/>
              <b>{resumeData.objective}</b>If you know any opportunities for me,you can <a style={{color: '#0057b3 '}} className="smoothscroll" href="#contact">contact me here</a>
            </p>
            <div className="row">

              <div className="columns download">
                <p>
                  <a href={resumeData.resumeLink} className="button" target="_blank"><i className="fa fa-download" />Download My Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
       </React.Fragment>
    );
  }
};
