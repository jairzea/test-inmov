import Cadillac from "../../assets/cadillac.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/results/");
  };

  const handleCreateClick = () => {
    navigate("/create/");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/5">
        <img
          src={Cadillac}
          alt="Cadillac"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-3/5 flex justify-center items-center flex-col px-10">
        <h2 className="text-4xl font-bold font-lato">Clasicos de colección</h2>
        {/* <input className="bg-special-gray font-lato w-full my-3 h-9 p-1 border focus:outline-none focus:ring-2 focus:ring-red-hover rounded" /> */}
        <div className="flex w-full justify-between my-3">
          <button
            className="bg-blue text-white hover:bg-blue-hover font-lato w-full shadow-lg h-9 rounded"
            style={{ width: "48%" }}
            onClick={handleCreateClick}
          >
            Añadir un clasico
          </button>
          <button
            className="bg-red text-white hover:bg-red-hover font-lato w-full shadow-lg h-9 rounded"
            style={{ width: "48%" }}
            onClick={handleSearchClick}
          >
            Vehiculos Clasicos añadidos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
