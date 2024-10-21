import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "@/styles/globals.css";
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  },[]);
  return <Component {...pageProps} />;
}


