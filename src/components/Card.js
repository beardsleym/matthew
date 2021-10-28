const Card = (props) => {
  const {title, text, img, link} = props.project
  const allLogos = props.logos
  const logos = []
  allLogos.forEach((logo) => {
    if (props.project[logo.name]) {
      logos.push(logo)
    }
  })
  // console.log(props.project)
  return ( 
    // Grid column
    <div className="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">  
    <a href={link} target="_blank" rel="noreferrer" className="h-full">
    <div className="flex-1 h-full bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-auto transition duration-200 ease-in-out">
        <img className="w-full image-cover rounded-t-lg transform" src={img} alt="RentReef"></img>  
      <div className="px-6 py-4">
        <div className="font-bold text-gray-800 text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-sm block">
          {text}
          <br />
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-evenly items-center">
        {logos.map((logo) => (
          <div key={logo.name} className="inline-block">
            <img src={logo.img} alt={logo.name} className="w-6 mr-2"/>
          </div>
        ))}
      </div>
    </div>
  </a>
  </div>
  );
}
 
export default Card;
