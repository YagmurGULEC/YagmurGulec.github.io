import { FaJsSquare, FaPython, FaDocker } from 'react-icons/fa';

export default function Skills()
{
return (


<section className="resume-section" id="skills">
    <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
            <li className="list-inline-item"><FaJsSquare title="JavaScript" size={50} /></li>
            <li className="list-inline-item"><FaPython title="Python" size={50} /></li>
            <li className="list-inline-item"><FaDocker title="Docker" size={50} /></li>
            <li className="list-inline-item">Redis</li>
            <li className="list-inline-item">Celery</li>
        </ul>
        <div className="subheading mb-3">Languages</div>
        <ul className="fa-ul mb-0">
            <li>    
                English
            </li>
            <li>
             
              French
            </li>
            <li>
             
             Turkish
           </li>
        </ul>
    </div>
</section>

 )
}