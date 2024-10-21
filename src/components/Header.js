// src/components/Header.js

import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaLinkedin,FaGithub,FaEnvelope} from 'react-icons/fa';  // Import the LinkedIn icon

// export  default function LanguageSwitcher() {
//   const router = useRouter();
//   const { locale, locales, asPath } = router;  // Get the current locale and supported locales
//   const [isOpen, setIsOpen] = useState(false); // Manage dropdown open/close state

//   const handleLocaleChange = (e) => {
//     const newLocale = e.target.value;  // Get the selected language from the dropdown
//     router.push(asPath, asPath, { locale: newLocale });  // Change the language by navigating to the new locale
//   };

//   return (
//     <div classNameName="dropdown">
//       <button onClick={() => setIsOpen(!isOpen)} classNameName="dropdown-toggle">
//         Language: {locale}
//       </button>

//       {isOpen && (
//         <ul classNameName="dropdown-menu">
//           {locales.map((loc) => (
//             <li key={loc}>
//               <button value={loc} onClick={handleLocaleChange}>
//                 {loc === 'en' ? 'English' : loc === 'fr' ? 'Français' : 'Español'}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


export default function Header({ selectedLanguage }) {
    console.log(selectedLanguage);

    return (
     
            <header className="bg-dark py-5" id="home">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-circle my-5" src="/images/profile.jpg" alt="..." /></div>
                    <div class="col-lg-8 col-xl-7 col-xxl-6">
                            
                                    <div class="d-flex align-items-center justify-content-center">
                                        <div class="text-center">
                                        <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">Hi, I am Yagmur</h1>
                                <p className="lead fw-normal text-white-50 mb-4">Software developer</p>
                                
                              
                                            <a
                                    href="https://www.linkedin.com/in/yagmurgulec/"  // Replace with your LinkedIn profile URL
                                    target="_blank"  // Open in new tab
                                    rel="noopener noreferrer"  // Improve security
                                    className={styles.iconLink}  // Optional class for custom styling
                                >
                                    <FaLinkedin className={styles.icon} /> </a>
      <a
        href="https://github.com/YagmurGULEC"  // Replace with your LinkedIn profile URL
        target="_blank"  // Open in new tab
        rel="noopener noreferrer"  // Improve security
        className={styles.iconLink}  // Optional class for custom styling
      >
        <FaGithub className={styles.icon} />  {/* LinkedIn icon */}
      </a>
      <a
        href="mailto:yagmurgulec89@gmail.com"  // Replace with your email
        className={styles.iconLink}
      >
        <FaEnvelope className={styles.icon} />  {/* Email icon */}
      </a>

      <a className="btn btn-light btn-lg px-4 me-sm-3" href="/YagmurGulecCV.pdf">Download CV</a>
                                        </div>
                                    </div>
                       
                        </div>
                        </div>
                      
                            
                        
                        </div>
                  
                    
                </div>
          
        </header>

    );
}


