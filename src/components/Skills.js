import { FaJsSquare, FaPython, FaDocker } from 'react-icons/fa';

export default function Skills()
{
return (


<section class="resume-section" id="skills">
    <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>
        <div class="subheading mb-3">Programming Languages & Tools</div>
        <ul class="list-inline dev-icons">
            <li class="list-inline-item"><FaJsSquare title="JavaScript" size={50} /></li>
            <li class="list-inline-item"><FaPython title="Python" size={50} /></li>
            <li class="list-inline-item"><FaDocker title="Docker" size={50} /></li>
            <li class="list-inline-item">Redis</li>
            <li class="list-inline-item">Celery</li>
        </ul>
        <div class="subheading mb-3">Languages</div>
        <ul class="fa-ul mb-0">
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