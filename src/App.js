import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const projects = [
    {title: 'RentReef', link: "https://rentreef.com", tags: ["angular","bootstrap", "product"], img: "images/rentreef.png", text:"Peep to peer rental marketplace to rent almost anything"},
    {title: 'Showcase Base', link: "https://showcasebase.com", tags: ["nuxt","vuetify", "full-stack"], img: "images/showcasebase.png", text:"Showcase Base connects drama school graduates and the people who want to sign them, cast them, and work with them. All in one place, 24/7."},
    {title: 'Tinito.App', link: "https://tinito.app", tags: ["nuxt","vuetify", "full-stack"], img: "images/tinitoapp.png", text:"URL Link Shortener with dashboard, custom links and statistics"},
    {title: 'Halal Investors', link: "https://halalinvestors.com", tags: ["vue","tailwindCSS", "full-stack"], img: "images/halalinvestors.png", text:"In addition to examining a company's business and finances, we look at its environmental and social impact as well as its track record for governance (ESG). Our Halal Report Cards give you a quick summary of our comfort level investing in a company."},
    {title: 'Beardsley.com.au', link: "https://beardsley.com.au", tags: ["react","tailwindCSS", "full-stack"], img: "images/profilesite.png", text:"Profile site, showcasing a few active projects over the past 12 months"}
  ]
  return (
    <div className="App">
      <Navbar />
      {/* Container */}
      <div class="max-w-screen-xl mx-auto px-4">
        {/* Grid wrapper */}
        <div class="-mx-4 flex flex-wrap">
            {projects.map((project) => (
              <Card project={project}/>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// const colors = [
//   "firebrick",
//   "seagreen",
//   "lightcoral",
//   "darkolivegreen",
//   "lightseagreen",
//   "lightskyblue",
//   "thistle",
//   "orange",
//   "darkkhaki",
// ];

// function changeColour() {
//   document.body.style.background =
//     colors[Math.floor(Math.random() * colors.length)];
// }

// document.body.onload = function () {
//   changeColour()
//   setInterval(()=> {
//     changeColour()
//   },5000)
// };

export default App;
