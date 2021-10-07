import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Airtable from 'airtable'
import { useState, useEffect } from 'react'
import jsonProjects from './projects.json'
import jsonLogos from './logos.json'

// const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base(process.env.REACT_APP_AIRTABLE_BASE);

function App() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('title');
  const [logos, setLogos] = useState([]);
  // const projects = [
  //   {title: 'RentReef', link: "https://rentreef.com", tags: ["angular","bootstrap", "product"], img: "images/rentreef.png", text:"Peer to peer rental marketplace to rent almost anything"},
  //   {title: 'Showcase Base', link: "https://showcasebase.com", tags: ["nuxt","vuetify", "full-stack"], img: "images/showcasebase.png", text:"Showcase Base connects drama school graduates and the people who want to sign them, cast them, and work with them. All in one place, 24/7."},
  //   {title: 'Tinito.App', link: "https://tinito.app", tags: ["nuxt","vuetify", "full-stack"], img: "images/tinitoapp.png", text:"URL Link Shortener with dashboard, custom links and statistics"},
  //   {title: 'Halal Investors', link: "https://halalinvestors.com", tags: ["vue","tailwindCSS", "full-stack"], img: "images/halalinvestors.png", text:"In addition to examining a company's business and finances, we look at its environmental and social impact as well as its track record for governance (ESG). Our Halal Report Cards give you a quick summary of our comfort level investing in a company."},
  //   {title: 'Beardsley.com.au', link: "https://beardsley.com.au", tags: ["react","tailwindCSS", "full-stack"], img: "images/profilesite.png", text:"Profile site, showcasing a few active projects over the past 12 months"}
  // ]
  //  JSON
  useEffect(()=>{
    setProjects([])
    setLogos([])
    jsonProjects.records.forEach((record) => {
      setProjects(projects => projects.concat(record.fields))
    })
    jsonLogos.records.forEach((record) => {
      setLogos(logos => logos.concat(record.fields))
    })
  },[])
  // Air table API call, but API key is read and write.
  // useEffect(()=>{
  //   setProjects([])
  //   setLogos([])
  //   base('projects').select({view: 'Grid view'})
  //   .eachPage(
  //     (records, fetchNextPage) => {
  //       records.forEach((record) => {
  //         setProjects(projects => projects.concat(record.fields))
  //       })
  //       fetchNextPage();
  //     }
  //   );
  //   base('logos').select({view: 'Grid view'})
  //   .eachPage(
  //     (records, fetchNextPage) => {
  //       records.forEach((record) => {
  //         setLogos(logos => logos.concat(record.fields))
  //       })
  //       fetchNextPage();
  //     }
  //     );
  // },[])
  const handleNavChange = (event) => {
    setFilter(event)
  }
  return (
    <div className="App">
      <Navbar onNavChange={handleNavChange} value={filter}/>
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Grid wrapper */}
        <div className="-mx-4 flex flex-wrap">
            {projects.filter(project => project[filter]).map((project) => (
              <Card key={project.title} project={project} logos={logos}/>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
