import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className="flex sm:ml-6 ">
      <div className="pt-10 py-1 block self-center">
        <div className=" inline-flex font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <button
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            className="pl-5 pr-5 flex"
            role="menu"
          >
            Bardaklar
            <FontAwesomeIcon
              style={{ alignSelf: 'center', margin: '5px' }}
              icon={faAngleDown}
            />
          </button>
        </div>
        <div className="inline-flex font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <button
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            className="pl-5 pr-5 flex"
            type="button"
            role="menu"
          >
            Tabaklar
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ alignSelf: 'center', margin: '5px' }}
            />
          </button>
        </div>
        <div className="inline-flex font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <button
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            className="pl-5 pr-5 flex"
            type="button"
            role="menu"
          >
            Mumluklar
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ alignSelf: 'center', margin: '5px' }}
            />
          </button>
        </div>
        <div className="inline-flex font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <button
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            className="pl-5 pr-5 flex"
            type="button"
            role="menu"
          >
            Vazolar
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ alignSelf: 'center', margin: '5px' }}
            />
          </button>
        </div>
      </div>
      <img
        className="h-full content-center block h-20 w-24  pt-10 h-auto w-100px "
        src="https://cdn.shopier.net/fetch.php?p=logo_468/yakaart12_alt5.jpg"
        alt="avatar"
      ></img>
      <div className="pt-10 px-8 py-1 block self-center">
        <form>
          <FontAwesomeIcon style={{ marginRight: '20px' }} icon={faSearch} />
          <input type="text" placeholder="Search.." name="search" />
        </form>
      </div>
    </div>
  );
};
export default Header;
