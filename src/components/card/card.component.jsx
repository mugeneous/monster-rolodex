import PropTypes from "prop-types";

import "./card.styles.css";

const Card = ({ monster: { id, name, email } }) => {
  console.log();
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

Card.propTypes = {
  monster: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default Card;
