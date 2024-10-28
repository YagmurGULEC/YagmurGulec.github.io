export default function Professional({state}){
    
    
    return (
    
        <section className="resume-section" id="development">
        <div className="resume-section-content">
            <h2 className="mb-5">{state==="English"?"Professional Development":"Développement Professionnel"}</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Beyond the Cloud Backend Developer Level 2</h3>
                    <div className="subheading mb-3">{state==="English"?"Information and Communications Technology Council(ICTC)" :"Le Conseil des technologies de l'information et des communications (CTIC)"}</div>
                    <p> {state==="English"?"Selected for 10-week customized training program, funded by Upskill Canada (powered by Palette Skills) and the Government of Canada." :"Sélectionné pour un programme de formation personnalisé de 10 semaines, financé par Upskill Canada (powered by Palette Skills) et le gouvernement du Canada."} </p>
                    <p> {state==="English"?"Courses included:":"Cours inclus: "}Git version control, Django Full-stack, Amazon Elastic Kubernetes Service, Microsoft Azure Fundamentals</p>
                    
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{state==="English"? "July 2024 - Present" :"Juillet 2024 - Actuellement"}</span></div>
            </div>
            
            
            
        </div>
    </section>

    )
    
}

