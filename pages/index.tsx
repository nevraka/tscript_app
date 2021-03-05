import Header from '../components/Header';

const IndexPage = () => {
  return (
    <>
      <Header />
      <div className="flex  p-24 justify-center">
        <img
          className="h-24 w-24 rounded-full mx-0 mr-5"
          src="https://bit.ly/37LLS6l"
        />
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Jake Prins</h2>
          <div className="text-purple-600">JavaScript developer</div>
          <div className="text-gray-600">Twitter: @jakeprins_nl</div>
          <div className="text-gray-600">jakeprins.com</div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
