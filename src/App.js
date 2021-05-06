import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const projects = [
    {title: 'RentReef', link: "https://rentreef.com", tags: ["angular","bootstrap"], img: "images/rentreef.png", text:"Peep to peer rental marketplace to rent almost anything"},
    {title: 'Showcase Base', link: "https://showcasebase.com", tags: ["nuxt","vuetify"], img: "images/showcasebase.png", text:"Showcase Base connects drama school graduates and the people who want to sign them, cast them, and work with them. All in one place, 24/7."},
    {title: 'Tinito.App', link: "https://tinito.app", tags: ["nuxt","vuetify"], img: "images/tinitoapp.png", text:"URL Link Shortener with dashboard, custom links and statistics"},
    {title: 'Halal Investors', link: "https://halalinvestors.com", tags: ["vue","tailwindCSS"], img: "images/halalinvestors.png", text:"In addition to examining a company's business and finances, we look at its environmental and social impact as well as its track record for governance (ESG). Our Halal Report Cards give you a quick summary of our comfort level investing in a company."},
    {title: 'Beardsley.com.au', link: "https://beardsley.com.au", tags: ["react","tailwindCSS"], img: "images/profilesite.png", text:"Profile site, showcasing a few active projects over the past 12 months"}
  ]
  return (
    <div className="App">
      <Navbar />
        <div class="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <Card project={project}/>
          ))}
        </div>
      <div className="center-me">
				<img
					className="w-32 h-32 md:w-48 rounded-full mx-auto"
					sizes="(max-width: 1400px) 100vw, 1400px"
					srcSet="./images/matt_vcd2hp_c_scale,w_1052.jpg 1052w"
					src="./images/matt_vcd2hp_c_scale,w_1400.jpg"
					alt=""></img>
          <h1 className="text-lg font-semibold">Test</h1>
					<h2>
						<a rel="me" href="http://au.linkedin.com/in/matthewbeardsley" title="LinkedIn">
							<span className="fab fa-linkedin"></span>
						</a>
					</h2>
			</div>

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
