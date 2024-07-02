import PropTypes from "prop-types";

import Card from "./../card/card.component.jsx";

import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  monsters: PropTypes.array,
};

export default CardList;
