import styles from '../styles/Home.module.css';  // Import component-level CSS module
import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import languageState from '../lib/LanguageState';


export default function Navbar({ children }) {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const handleChange = (e) => {
    setSelectedLanguage(e.target.innerText);
    languageState.setSharedState(e.target.innerText);
    e.target.innerText === 'French' ? e.target.innerText = 'English' : e.target.innerText = 'French';
    
    
};
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Yagmur Gulec</span>
        <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/profile.jpg" alt="..." /></span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">{selectedLanguage==="English" ? "About" :"À propos"}</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">{selectedLanguage==="English" ? "Skills" :"Compétences"}</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">{selectedLanguage==="English" ? "Experience" :"Expérience"}</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">{selectedLanguage==="English" ? "Education" :"Formation"}</a></li>
           
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#development">{selectedLanguage==="English"? "Professional Development" :"Développement professionnel"}</a></li>
           
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown"  aria-expanded="false" >{selectedLanguage}</a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                    <li><a className="dropdown-item" href="#" onClick={(e)=>handleChange(e)}>French</a></li>
                
                </ul>
            </li>
        </ul>
    </div>
</nav>


  );
}

