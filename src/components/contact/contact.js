import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

      {/* Contact Section
   ================================================== */}
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">

            <p align="justify" className="lead">If you are looking to hire me or have any questions, You can either drop a message below or email me
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form action="https://formspree.io/xzbjnodg" method="POST" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" defaultValue size={35} id="contactName" name="contactName" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div>
                  <label htmlFor><span /></label>
                  <button type="submit" formTarget="_blank">Submit</button>
                  {/* <span id="image-loader">
                        <img alt="" src="images/loader.gif" >
                     </span> */}
                </div>
              </fieldset>
            </form> {/* Form End*/}
            {/* contact-warning */}
            <div id="message-warning"> Error!!!</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Contact Details</h4>
              <p className="address">
                Maithri Chullikana House<br />
                Email: <a href="mailto:maithrich3@gmail.com" target="_blank">maithrich3@gmail.com</a><br />
                <a href="https://goo.gl/maps/PoYwzn34Uu5vmYkL7" target="_blank">   {resumeData.address}</a><br />
                <a href="https://goo.gl/maps/PoYwzn34Uu5vmYkL7" target="_blank">   {resumeData.addressLine2}</a><br />
                <span>(669) 294-0586</span>
              </p>
            </div>
          </aside>
        </div>
      </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
};
