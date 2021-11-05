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
      <div className="card bordered shadow-xl h-full flex-1 hover:shadow-2xl transition duration-200 ease-in-out">
        <figure>
          <img className="object-cover object-top h-80 w-full" src={img} alt={title}></img> 
        </figure> 
        <div className="card-body">
          <h2 className="card-title">{title}
            <div className="badge badge-info mx-2"><a href={link} target="_blank" rel="noreferrer" className="h-full">Visit site</a></div>
          </h2> 
          <p className="mb-auto">{text}</p> 
          <div className="">
            <div className="flex items-center justify-center place-self-end">
              {logos.map((logo) => (
                <div key={logo.name} className="inline-block">
                  <img src={logo.img} alt={logo.name} className="w-6 mr-2"/>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="justify-end card-actions">
            <button className="btn btn-secondary">View</button>
          </div> */}
        </div>
      </div> 
    </div> 

    // Grid column
    // <div className="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">  
    //   <a href={link} target="_blank" rel="noreferrer" className="h-full">
    //     <div className="flex-1 h-full bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-auto transition duration-200 ease-in-out">
    //         <img className="w-full image-cover rounded-t-lg transform" src={img} alt="RentReef"></img>  
    //       <div className="px-6 py-4">
    //         <div className="font-bold text-gray-800 text-xl mb-2">{title}</div>
    //         <p className="text-gray-600 text-sm block">
    //           {text}
    //           <br />
    //         </p>
    //       </div>
    //       <div className="px-6 pt-4 pb-2 flex justify-evenly items-center">
    //         {logos.map((logo) => (
    //           <div key={logo.name} className="inline-block">
    //             <img src={logo.img} alt={logo.name} className="w-6 mr-2"/>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </a>
    // </div>
  );
}
 
export default Card;
