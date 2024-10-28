import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Professional from "@/components/Professional";


export default function Home() {

  return (
    <Layout>
    <Navbar/>
    <About/>
    <hr className="m-0" />
    <Experience/>
    <hr className="m-0" />
    <Education/>
    <hr className="m-0" />
    < Skills/>
    <hr className="m-0" />
    <Professional/>
    </Layout>

  
  );
}

