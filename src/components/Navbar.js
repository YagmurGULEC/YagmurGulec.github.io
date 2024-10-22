import styles from '../styles/Home.module.css';  // Import component-level CSS module
import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';

// import profileImage from "../../public/images/profile.jpg";

export default function Navbar({ children }) {

    const router = useRouter();
    const { locale} = router;  // Get the current locale and supported locales
    const [selectedLanguage, setSelectedLanguage] = useState('English');
   
    const handleChange = (e) => {
    
     setSelectedLanguage(e.target.innerText);
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
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
           
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#development">Professional Development</a></li>
           
            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >{selectedLanguage}</a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a className="dropdown-item" href="#">French</a></li>
                               
                                </ul>
            </li>
        </ul>
    </div>
</nav>


  );
}

