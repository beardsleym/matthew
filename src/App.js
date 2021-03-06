import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="center-me">
				<img
					className="portrait"
					sizes="(max-width: 1400px) 100vw, 1400px"
					srcSet="./images/matt_vcd2hp_c_scale,w_1052.jpg 1052w"
					src="./images/matt_vcd2hp_c_scale,w_1400.jpg"
					alt=""></img>
					<h2>
						<a rel="me" href="http://au.linkedin.com/in/matthewbeardsley" title="LinkedIn">
							<span className="fab fa-linkedin"></span>
						</a>
					</h2>
			</div>

    </div>
  );
}

const colors = [
  "firebrick",
  "seagreen",
  "lightcoral",
  "darkolivegreen",
  "lightseagreen",
  "lightskyblue",
  "thistle",
  "orange",
  "darkkhaki",
];

function changeColour() {
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
}

document.body.onload = function () {
  changeColour()
  setInterval(()=> {
    changeColour()
  },5000)
};

export default App;
