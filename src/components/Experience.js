
export default function Experience() {

  const experiences = [
    {
      title: "Software Developer",
      company: "Riipen Level Up",
      date: "Febr 2024 - Present",
      link: "https://levelup.riipen.com/users/EzvbrEYz/feedback",
      description:
        "Worked in multiple projects",
      projects: [
        {
          name: "Developing a web for audio denoising using AI models (in progress).",
          technologies: ["React", "Next.js", "Node.js", "Tensorflow.js","S3 Bucket","MongoDB"]
        
        },
        {
          name: "Secure Database Redesign and RESTful API Development for BoardSpace  (in progress)",
          technologies: ["mySQL", "Relational Database"]
        },
        {
          name: "Developed a full-stack web application to trim YouTube videos and download them and leverage the OpenAI API to generate high potential video timestamps from the video subtitles.",
          technologies: ["FastAPI", "ffmpeg","Vanilla JS","HTML","CSS","OpenAI API"],
          link: "https://youtu.be/NrRiVp9EfpY",
        },
      ]
    },
    {
      title: "Research Assistant (Mechanical Engineering)",
      company: "Universite de Sherbrooke, Quebec, Canada",
      date: "Febr 2019 - Sept 2021",

     projects: [
        {
          name: "Implemented a submodel for dynamic contact angle in the OpenFOAM CFD software into the VOF model for the simulation of a vapor bubble on a solid surface.",
          technologies: ["C++", "Object-oriented design", "OpenFOAM"]
        },
        {
          name: "Automated image processing and analysis of the bubble sizes  using ImageJ Java Plugin",
          technologies: ["ImageJ", "Java"]
        },
       
      ]
    },
    {
      title: "Teaching Assistant (Mechanical Engineering)",
      company: "Izmir Institute of Technology, Izmir, Turkey",
      date: "Febr 2015 - Jan 2019",

     projects: [
        {
        name: "Assisted students in understanding key principles of fluid mechanics.",
        
        },
        {
          name: "Collaborated with the course professor to prepare teaching materials, including lecture notes and problem sets for undergraduate students.",
          
        },
        {
          name: "Led recitation sessions to review problem-solving techniques for fluid dynamics problems, fostering student engagement and active learning.",
         
        },
       
      ]
    },
  ]

  
return (

  
  <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    {experiences.map((experience, index) => (
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={index}>
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{experience.title}</h3>
                                <div className="subheading mb-3">{experience.company}</div>
                                <p>{experience.description}</p>
                                <ul>
                                    {experience.projects.map((desc, index) => (
                                        <li key={index}>{desc.name} {desc.link && (<a href={desc.link} target="_blank" rel="noopener noreferrer">
                                          YouTube Video
                                          
                                        </a>)}
                                        {desc.technologies && (<p className="text-info"> {desc.technologies.join(', ')}</p> )}
                                        
                                        </li>
                                    ))}
                                </ul>
                                {experience.link && (
              <a className="text-secondary" href={experience.link} target="_blank" rel="noopener noreferrer">
                My Riipen Level Up Profile
              </a>
            )}
                              
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">{experience.date}</span></div>
                        </div>
                    ))}
                    
                   
                </div>
            </section>

)


}
