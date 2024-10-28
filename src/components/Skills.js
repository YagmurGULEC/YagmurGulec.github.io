import { FaJsSquare, FaPython, FaDocker } from 'react-icons/fa';

export default function Skills({state})
{
return (


<section className="resume-section" id="skills">
    <div className="resume-section-content">
        <h2 className="mb-5">{state === "English" ? "Skills" : "Compétences"}</h2>
        <div className="subheading mb-3">{state==="English" ? "Programming Languages & Tools" :"Langages de programmation et technologies"}</div>
        <ul className="list-inline dev-icons">
            <li className="list-inline-item"><FaJsSquare title="JavaScript" size={50} /></li>
            <li className="list-inline-item"><FaPython title="Python" size={50} /></li>
            <li className="list-inline-item"><FaDocker title="Docker" size={50} /></li>
            <li className="list-inline-item">  <img src="/icons/redis.svg" alt="Redis Icon" style={{ width: '60px', height: '60px' }} />
            </li>
            <li className="list-inline-item"><img src="/icons/celery.png" alt="Redis Icon" style={{  height: '60px' }} /></li>
            <li className="list-inline-item"><img src="/icons/fastapi.png" alt="Redis Icon" style={{  height: '60px' }} /></li>
        </ul>
        <div className="subheading mb-3">{state==="English" ? "Languages":"Langues" }</div>
        <ul className="fa-ul mb-0">
            <li>    
            {state==="English" ? "English":"Anglais" }
            </li>
            <li>
            {state==="English" ? "French":"Français" }
            </li>
            <li>
             
            {state==="English" ? "Turkish":"Turc" }
           </li>
        </ul>
    </div>
</section>

 )
}