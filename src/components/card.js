const Card = (props) => {
  const {title, text, tags, img, link} = props.project
  return ( 
    // Grid column
    <div className="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">  
    <a href={link} target="_blank" rel="noreferrer">
    <div className="flex-1 bg-white rounded-lg shadow-lg overflow-auto">
        <img className="w-full image-cover rounded-t-lg transform transition hover:scale-105 duration-300 ease-in-out" src={img} alt="RentReef"></img>  
      <div className="px-6 py-4">
        <div className="font-bold text-gray-800 text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-sm block">
          {text}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
          )
          )}
      </div>
    </div>
  </a>
  </div>
   );
}
 
export default Card;