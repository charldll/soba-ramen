import PropTypes from "prop-types";

const AboutTeamCard = ({ name, description, image }) => {
  return (
    <>
      <div className="flex flex-col items-center text-center md:last:col-span-2 lg:last:col-span-1">
        <img
          src={image}
          alt={`image of ${name}`}
          className="h-50 w-50 transform rounded-full object-cover transition duration-300 hover:scale-110"
        />
        <h2 className="text-menu-red mt-4 text-xl font-semibold">{name}</h2>
        <p className="mt-5 max-w-[26rem] text-gray-700 md:text-justify">
          {description}
        </p>
      </div>
    </>
  );
};

// propTypes after the component is declared
AboutTeamCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default AboutTeamCard;
