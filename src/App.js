import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Airtable from 'airtable'
import { useState, useEffect } from 'react';

const base = new Airtable({ apiKey: 'keyiM69EH8mQrMOjp' }).base('appiq1nf2F0a1dSgp');




function App() {
  const [projects, setProjects] = useState([]);
  const [logos, setLogos] = useState([]);
  // const projects = [
  //   {title: 'RentReef', link: "https://rentreef.com", tags: ["angular","bootstrap", "product"], img: "images/rentreef.png", text:"Peer to peer rental marketplace to rent almost anything"},
  //   {title: 'Showcase Base', link: "https://showcasebase.com", tags: ["nuxt","vuetify", "full-stack"], img: "images/showcasebase.png", text:"Showcase Base connects drama school graduates and the people who want to sign them, cast them, and work with them. All in one place, 24/7."},
  //   {title: 'Tinito.App', link: "https://tinito.app", tags: ["nuxt","vuetify", "full-stack"], img: "images/tinitoapp.png", text:"URL Link Shortener with dashboard, custom links and statistics"},
  //   {title: 'Halal Investors', link: "https://halalinvestors.com", tags: ["vue","tailwindCSS", "full-stack"], img: "images/halalinvestors.png", text:"In addition to examining a company's business and finances, we look at its environmental and social impact as well as its track record for governance (ESG). Our Halal Report Cards give you a quick summary of our comfort level investing in a company."},
  //   {title: 'Beardsley.com.au', link: "https://beardsley.com.au", tags: ["react","tailwindCSS", "full-stack"], img: "images/profilesite.png", text:"Profile site, showcasing a few active projects over the past 12 months"}
  // ]
  useEffect(()=>{
    base('projects').select({view: 'Grid view'})
    .eachPage(
      (records, fetchNextPage) => {
        records.forEach((record) => {
          setProjects((projects) => [
            ...projects,
            record.fields,
          ]);
        })
        fetchNextPage();
      }
    );
    base('logos').select({view: 'Grid view'})
    .eachPage(
      (records, fetchNextPage) => {
        records.forEach((record) => {
          setLogos((logos) => [
            ...logos,
            record.fields,
          ]);
        })
        fetchNextPage();
      }
    );
    console.log(logos)
    console.log(projects)
  },[])
  
  return (
    <div className="App">
      <Navbar />
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Grid wrapper */}
        <div className="-mx-4 flex flex-wrap">
            {projects.map((project) => (
              <Card key={project.title} project={project}/>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
