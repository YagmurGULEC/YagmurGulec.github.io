import Navbar from "./Navbar";


export default function Layout({ children }) {

    // const router = useRouter();
    // const { locale} = router;  // Get the current locale and supported locales
    // const [selectedLanguage, setSelectedLanguage] = useState('English');
   
    // const handleChange = (e) => {
    
    //  setSelectedLanguage(e.target.innerText);
    //   e.target.innerText === 'French' ? e.target.innerText = 'English' : e.target.innerText = 'French';
   

 
  return (
    <div className="container-fluid p-0">
        {children}
    </div>

  );
}

