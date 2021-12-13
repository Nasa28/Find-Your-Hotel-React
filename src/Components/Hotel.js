import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = ({ id, name, image }) => (
  <div className="meal-card " data-testid="meal-card" key={id}>
    <Link className="cards " to={`/meal/${id}`}>
      <div>
        <img className="image" src={image} alt={name} />
      </div>
      <div>
        <h3 className="title">{name}</h3>
      </div>
    </Link>
  </div>
);

Meal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Meal;
