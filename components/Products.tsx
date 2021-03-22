import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../data.json';

const Products = () => {
  {
    const categories = Array.from(new Set(data.map((d) => d.category)));

    return categories.map((c) => {
      return (
        <div className="py-1 block self-center">
          <div className=" inline-flex font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            <button
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              className="pl-5 pr-5 flex"
              role="menu"
            >
              {c}
              <FontAwesomeIcon
                style={{ alignSelf: 'center', margin: '5px' }}
                icon={faAngleDown}
              />
            </button>
          </div>
        </div>
      );
    });
  }
};
export default Products;
