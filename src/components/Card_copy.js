const Card = (props) => {
  const {title, text, tags, img, link} = props.project
  return ( 
    <div className="p-10">  
    <a href={link} target="_blank" rel="noreferrer">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={img} alt="RentReef"></img>  
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
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