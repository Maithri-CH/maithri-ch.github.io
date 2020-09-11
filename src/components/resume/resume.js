import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

      {/* Resume Section
   ================================================== */}
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
          {
            resumeData.education && resumeData.education.map((item)=>{
              return(
            <div className="row item">
              <div className="twelve columns">
                <h3>{item.UniversityName}</h3>
                <p className="info">{item.Degree} in {item.specialization}. <span>•</span> <em className="date">{item.MonthOfJoining} {item.YearOfJoining} - {item.MonthOfPassing} {item.YearOfPassing}</em></p>

                <p align="justify">
                  <span style={{color: '#FF8300'}}>Relevant Coursework</span>:{item.RelevantCoursework}
                </p>
                <p align="justify">
                  <span style={{color: '#FF8300'}}>GPA: </span> {item.GPA}
                </p>
              </div>
            </div>
          )
                })
              }
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
          </div>
          <div className="nine columns main-col">
          {
                resumeData.work && resumeData.work.map((item) => {
                  return(
            <div className="row item">
              <div className="twelve columns">
                <h3>{item.Position}</h3>
                <p className="info">{item.CompanyName}<span>•</span> <em className="date">{item.MonthOfJoining}{item.YearOfJoining} - {item.MonthOfLeaving}{item.YearOfLeaving}</em></p>
                <ul>
                  <li>•{item.Responsibility1}</li>
                    <li>•{item.Responsibility2}</li>
                      <li>•{item.Responsibility3}</li>

                </ul>
                <p />
              </div>
              </div>

            )
               })
             }
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Projects
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>
          <div className="nine columns main-col">
          {
                          resumeData.projects && resumeData.projects.map((item) => {
                            return(
            <div className="row item">
              <div className="twelve columns">
                <h3>{item.projectName}</h3>


                <p align="justify">
                </p><ul>
                  <li>•{item.description1} </li>
                  <li>•{item.description2} </li>
                </ul>


                  <span style={{color: '#FF8300'}}>Technology Stack: </span> {item.techStack}
                <br/>
                <a href={item.gitUrl}target="_blank">GitHub Page <i className="fa fa-github" /></a>
                <p />
              </div>
            </div>
          )
                         })
                       }

          </div> {/* main-col end */}
        </div> {/* End Projects */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
          {
                resumeData.skills && resumeData.skills.map((item) => {
                  return(
            <div className="resume-item">
              <h4 className="resume-item-details">{item.skillname}</h4>
              <p className="resume-item-copy">{item.skillList}</p>
            </div>


                      )
            })
          }
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
};
