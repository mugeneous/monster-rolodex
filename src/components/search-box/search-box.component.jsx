import PropTypes from "prop-types";

import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeholder, onFieldHandler } = props;

  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onFieldHandler}
    />
  );
};

SearchBox.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onFieldHandler: PropTypes.func,
};

export default SearchBox;
