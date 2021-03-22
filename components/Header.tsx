import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Products from './Products';

const Header = () => {
  return (
    <div className="flex sm:ml-6 pt-10">
      <img
        className="h-full content-center block h-20 w-32 h-auto w-100px mr-auto "
        src="https://cdn.shopier.net/fetch.php?p=logo_468/yakaart12_alt5.jpg"
        alt="avatar"
      ></img>
      <Products />
      <div className="dropdown table relative mx-8 self-center ml-auto">
        <button className="block self-center">
          <FontAwesomeIcon style={{ marginRight: '20px' }} icon={faSearch} />
        </button>
        <div className="dropdown-menu px-10 py-8 shadow-lg border-2 border-solid border-gray-200 absolute right-0 hidden text-gray-700 pt-1">
          <input
            className="outline-none border border-solid px-2 py-1"
            type="text"
            placeholder="Search.."
            name="search"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
