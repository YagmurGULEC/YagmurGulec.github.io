
export default function Experience({state}) {
  
  const experiences = {
    "English":[
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
    ],
  
    "French": [
      {
        title: "Développeuse Logiciel",
        company: "Riipen Level Up",
        date: " Février 2024 - Actuellement",
        link: "https://levelup.riipen.com/users/EzvbrEYz/feedback",
        description:
          "Travaillé sur plusieurs projets",
        projects: [
          {
            name: "Développement d'un web pour le débruitage audio utilisant des modèles d'IA (en cours).",
            technologies: ["React", "Next.js", "Node.js", "Tensorflow.js","S3 Bucket","MongoDB"]
          
          },
          {
            name: "Conception d'une base de données sécurisée et développement d'une API RESTful pour BoardSpace (en cours). ",
            technologies: ["mySQL", "Relational Database"]
          },
          {
            name: "Développé une application web complète pour découper des vidéos YouTube, les télécharger et exploiter l'API OpenAI pour générer des timestamps vidéo à haut potentiel à partir des sous-titres vidéo.",
            technologies: ["FastAPI", "ffmpeg","Vanilla JS","HTML","CSS","OpenAI API"],
            link: "https://youtu.be/NrRiVp9EfpY",
          },
        ]
      },
      {
        title: "Assistant de recherche (génie mécanique)",
        company: "Université de Sherbrooke, Québec,CA",
        date: " Février 2019 - Septembre 2021",
  
       projects: [
          {
            name: "Implémenté d'un sous-modèle pour l'angle de contact dynamique dans le logiciel de CFD OpenFOAM dans le modèle VOF pour la simulation d'une bulle de vapeur sur une surface solide.",
            technologies: ["C++", "Object-oriented design", "OpenFOAM"]
          },
          {
            name: "Traitement automatisé d'images et analyse de la taille des bulles à l'aide du plugin Java ImageJ",
            technologies: ["ImageJ", "Java"]
          },
         
        ]
      },
      {
        title: "Assistant d'enseignement (Génie mécanique)",
        company: "Izmir Institute of Technology, Turquie",
        date: "Février 2015 - Janvier 2019",
  
       projects: [
          {
          name: "Aidé les étudiants à comprendre les principes clés de la mécanique des fluides.",
          
          },
          {
            name: "Collaboré avec le professeur du cours pour préparer le matériel d'enseignement, y compris les notes de cours et les ensembles de problèmes pour les étudiants de premier cycle.",
            
          },
          {
            name: "Dirigé des séances de récitation pour revoir les techniques de résolution des problèmes de dynamique des fluides, en encourageant l'engagement des étudiants et l'apprentissage actif.",
           
          },
         
        ]
      },
    ],
  }
  
return (

  
  <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">{state ==="English" ? "Experience" :"Expérience"}</h2>
                    {experiences[state].map((experience, index) => (
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={index}>
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{experience.title}</h3>
                                <div className="subheading mb-3">{experience.company}</div>
                                <p>{experience.description}</p>
                                <ul>
                                    {experience.projects.map((desc, index) => (
                                        <li key={index}>{desc.name} {desc.link && (<a href={desc.link} target="_blank" rel="noopener noreferrer">
                                          {state==="English" ? "Youtube Video" :"Vidéo Youtube"}
                                          
                                        </a>)}
                                        {desc.technologies && (<p className="text-info"> {desc.technologies.join(', ')}</p> )}
                                        
                                        </li>
                                    ))}
                                </ul>
                                {experience.link && (
              <a className="text-secondary" href={experience.link} target="_blank" rel="noopener noreferrer">
               {state==="English" ? "My Riipen Level Up Profile" : "Mon Profil Sur Riipen Level Up"}
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
