import './About.css'
function About(){
    let message = "The team of HostelHub aims to render the issues faced by hostelers just through a single click"
    return(
        <div>
           <section className="section-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                      <h2 className="section-title">
                        The Team Behind HostelHub
                      </h2>
                      <p className="section-subtitle">{message}
                      </p>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                           <img src="\images\vijay.jpg" className="team-img" alt="pic"></img> 
                           <h3> VIJAY SHARMA </h3>
                           <div className="team-info">
                            <p> Undergrad at NIT PATNA</p>
                           </div>
                           <p> <b>Backend Developers </b>
                            <ul><li>Proficient in backend programming languages Node.js </li>
                            <li>Skilled in database management systems including SQL,MongoDB,Redis with a solid understanding of database design and optimization.</li></ul>
                           </p>
                           <ul className="team-icon">
                            <li className='item'><a href="https://gmail.com/" className="gmail">
                            <i className="fa-solid fa-envelope"></i>
                                </a></li>

                                <li className='item'><a href="https://www.linkedin.com/" className="LinkedIn">
                                <i className="fa-brands fa-linkedin"></i>
                                </a></li>
                           </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                           <img src="/images/swa.jpg" className="team-img" alt="pic"></img> 
                           <h3> SWATI KUMARI </h3>
                           <div className="team-info">
                            <p> Undergrad at NIT PATNA</p>
                           </div>
                           <p> <b>Backend Developer</b>
                            <ul><li>Developed backend services using node.js and next.js.</li>
                            <li>Optimized database queries using MongoDB improve performance resulting in faster response times and enhanced user experience.</li></ul>
                           </p>
                           <ul className="team-icon">
                            <li><a href="https://gmail.com/" className="gmail">
                            <i className="fa-solid fa-envelope"></i>
                                </a></li>

                                <li><a href="https://www.linkedin.com/" className="LinkedIn">
                                <i className="fa-brands fa-linkedin"></i>
                                </a></li>

                           </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                           <img src="/images/mishhu.jpg" className="team-img" alt="pic"></img> 
                           <h3> MISHU </h3>
                           <div className="team-info">
                            <p> Undergrad at NIT PATNA</p>
                           </div>
                           <p> <b>Frontend Developer</b><ul>
                            <li>Proficient in HTML, CSS, and JavaScript</li>
                             <li>Experience with modern frontend frameworks/libraries such as React.js, Bootstrap</li>
                           </ul>
                           </p>
                           <ul className="team-icon">
                            <li><a href="https://gmail.com/" className="gmail">
                            <i className="fa-solid fa-envelope"></i>
                                </a></li>

                                <li><a href="https://www.linkedin.com/in/mishu-3171ab271" className="LinkedIn">
                                <i className="fa-brands fa-linkedin"></i>
                                </a></li>
                           </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                           <img src="images/zikra.jpg" className="team-img" alt="pic"></img> 
                           <h3> ZIKRA SHAMIM </h3>
                           <div className="team-info">
                            <p> Undergrad at NIT PATNA</p>
                           </div>
                           <p><b> Frontend Developer </b><ul>
                            <li> Proficient in HTML, CSS, JavaScript, and react.js of web development principles.</li>
                            <li>Experienced in building responsive websites using frameworks such as Bootstrap and Flexbox.</li>
                            </ul>
                           </p>
                           <ul className="team-icon">
                            <li><a href="https://gmail.com/" className="gmail">
                            <i className="fa-solid fa-envelope"></i>
                                </a></li>

                                <li><a href="https://www.linkedin.com/in/zikra-shamim-19011a271" className="LinkedIn">
                                <i className="fa-brands fa-linkedin"></i>
                                </a></li>
                           </ul>
                        </div>
                    </div>

                </div>
            </div>
           </section>
        </div>
    
    )
}
export default About;