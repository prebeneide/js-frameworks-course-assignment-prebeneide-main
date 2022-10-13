import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PokemonItem({ name, url }) {
 return (
  <Link to={`detail/${name}`}>
   <h5>{name}</h5>
   <p>{url}</p>
  </Link>
 );
}

PokemonItem.propTypes = {
 name: PropTypes.string.isRequired,
 url: PropTypes.string.isRequired,
};

export default PokemonItem;