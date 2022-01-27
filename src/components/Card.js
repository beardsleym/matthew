import PropTypes from 'prop-types';

const Card = ({ project, logos }) => {
  const { title, text, img, link } = project;
  const filteredLogos = [];
  logos.forEach((logo) => {
    if (project[logo.name]) {
      filteredLogos.push(logo);
    }
  });

  const tooltipText = (name) => name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ');

  return (
    // Grid column
    <div className="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
      <div className="card bordered shadow-xl h-full flex-1 hover:shadow-2xl transition duration-200 ease-in-out">
        <figure>
          <img className="object-cover object-top h-80 w-full" src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-info mx-2">
              <a href={link} target="_blank" rel="noreferrer" className="h-full">
                Visit site
              </a>
            </div>
          </h2>
          <p className="mb-auto">{text}</p>
          <div className="">
            <div className="flex items-center justify-center place-self-end">
              {filteredLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="inline-block tooltip"
                  data-tip={tooltipText(logo.name)}>
                  <img src={logo.img} alt={logo.name} className="w-6 mr-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string
  }).isRequired,
  logos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Card;
