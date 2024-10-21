import { FaLinkedin,FaGithub,FaEnvelope} from 'react-icons/fa';  // Import the LinkedIn icon

export default function About() {
    return (
  
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h3 className="mb-0 ">
                    Yagmur GULEC
                  
                </h3>
                <div className="subheading mb-5">
                 
                    <a className="text-info" href="mailto:name@email.com">yagmurgulec89@gmail.com</a>
                </div>
                <p className="lead mb-5">Software developer</p>
            
                <div className="social-icons">
                <a className="btn btn-primary mb-3 mx-3" href="YagmurGulecCV.pdf">Download CV</a>

                  <a
                                    href="https://www.linkedin.com/in/yagmurgulec/"  // Replace with your LinkedIn profile URL
                                    target="_blank"  // Open in new tab
                                    rel="noopener noreferrer"  // Improve security
                                    className="social-icon"  // Optional class for custom styling
                                ><FaLinkedin /> </a>
                                    <a
                                    href="https://www.linkedin.com/in/yagmurgulec/"  // Replace with your LinkedIn profile URL
                                    target="_blank"  // Open in new tab
                                    rel="noopener noreferrer"  // Improve security
                                    className="social-icon"  // Optional class for custom styling
                                >
                                <FaGithub /> </a>
                    </div>
            </div>
        </section>

    );
   }