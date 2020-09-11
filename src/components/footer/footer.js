import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/* footer
   ================================================== */}
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.linkedin.com/in/maithri-ch/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/maithri-ch" target="_blank"><i className="fa fa-github" /></a></li>
              <li><a href="https://twitter.com/maithri8" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.instagram.com/my3_ch/" target="_blank"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://www.facebook.com/maithri_my3" target="_blank"><i className="fa fa-facebook" /></a></li>
            </ul>
            <ul className="copyright">
              <a className="smoothscroll" href="#home"><li>©  {resumeData.name}</li></a>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
       </React.Fragment>
    );
  }
};
