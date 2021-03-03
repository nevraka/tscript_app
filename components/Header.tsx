const Header = () => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <button className="block h-6 w-8">
        <img
          className="h-full w-full object-cover border-2"
          src="https://www.monologuestories.com/wp-content/plugins/under-construction-page/themes/plain_text/monologue-stories-logo.jpg"
          alt="avatar"
        ></img>
      </button>
      <div>
        <a href="#">Bardaklar</a>
        <a href="#">Tabaklar</a>
        <a href="#">Mumluklar</a>
        <a href="#">Vazolar</a>
      </div>
    </div>
  );
};
export default Header;
