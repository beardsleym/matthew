import './App.css';
import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import jsonProjects from './projects.json'
// import jsonLogos from './logos.json'

ReactGA.initialize('UA-38989539-5', { testMode: process.env.NODE_ENV === 'test' });
// const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base(process.env.REACT_APP_AIRTABLE_BASE);

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});

function App() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('title');
  const [logos, setLogos] = useState([]);
  const [gitMessage, setGitMessage] = useState('');
  // const projects = [
  //   {title: 'RentReef', link: "https://rentreef.com", tags: ["angular","bootstrap", "product"], img: "images/rentreef.png", text:"Peer to peer rental marketplace to rent almost anything"},
  //   {title: 'Showcase Base', link: "https://showcasebase.com", tags: ["nuxt","vuetify", "full-stack"], img: "images/showcasebase.png", text:"Showcase Base connects drama school graduates and the people who want to sign them, cast them, and work with them. All in one place, 24/7."},
  //   {title: 'Tinito.App', link: "https://tinito.app", tags: ["nuxt","vuetify", "full-stack"], img: "images/tinitoapp.png", text:"URL Link Shortener with dashboard, custom links and statistics"},
  //   {title: 'Halal Investors', link: "https://halalinvestors.com", tags: ["vue","tailwindCSS", "full-stack"], img: "images/halalinvestors.png", text:"In addition to examining a company's business and finances, we look at its environmental and social impact as well as its track record for governance (ESG). Our Halal Report Cards give you a quick summary of our comfort level investing in a company."},
  //   {title: 'Beardsley.com.au', link: "https://beardsley.com.au", tags: ["react","tailwindCSS", "full-stack"], img: "images/profilesite.png", text:"Profile site, showcasing a few active projects over the past 12 months"}
  // ]
  //  LOCAL JSON
  // useEffect(()=>{
  //   setProjects([])
  //   setLogos([])
  //   jsonProjects.records.forEach((record) => {
  //     setProjects(projects => projects.concat(record.fields))
  //   })
  //   jsonLogos.records.forEach((record) => {
  //     setLogos(logos => logos.concat(record.fields))
  //   })
  // },[])
  const fetchGitCommits = async () => {
    const response = await fetch(
      'https://web.scraper.workers.dev/?url=https%3A%2F%2Fgithub.com%2Fbeardsleym&selector=.js-yearly-contributions++h2&scrape=text&pretty=true'
    );
    const { result } = await response.json();
    const string = result['.js-yearly-contributions  h2'][0];
    const position = string.indexOf(' ');
    const output = [string.slice(0, position), ' Git ', string.slice(position)].join('');
    setGitMessage(output);
  };
  //  CLOUDFLARE WORKERS KV JSON
  useEffect(() => {
    setProjects([]);
    setLogos([]);
    fetchGitCommits();
    async function fetchData() {
      try {
        const response = await fetch('https://portfolio.uv.workers.dev/api');
        const { logos: kvLogos, projects: kvProjects } = await response.json();
        setProjects(kvProjects);
        setLogos(kvLogos);
      } catch (error) {
        // handle error
      }
    }
    fetchData();
  }, []);
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
    setFilter(event);
    ReactGA.event({
      category: 'NAVIGATION',
      action: 'FILTER_PROJECTS',
      label: event
    });
  };
  return (
    <div className="App">
      <div className="flex flex-col h-screen">
        <Navbar onNavChange={handleNavChange} value={filter} />
        {/* Container */}
        <div className="px-4 mb-auto max-w-screen-xl mx-auto w-full dark:bg-slate-700">
          {/* Grid wrapper */}
          <div className="-mx-4 flex flex-wrap">
            {projects
              .filter((project) => project[filter])
              .map((project) => (
                <Card key={project.title} project={project} logos={logos} />
              ))}
          </div>
        </div>
        <Footer gitMessage={gitMessage} />
      </div>
    </div>
  );
}

export default App;
