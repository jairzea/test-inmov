import { useNavigate } from "react-router-dom";

import ButtonComponent from "../../common/Button/Button";
import Cadillac from "../../assets/cadillac.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => navigate("/results/");
  const handleCreateClick = () => navigate("/create/");

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
        <div className="flex w-full justify-between my-3">
          <ButtonComponent
            title="Añadir un clasico"
            handle={handleCreateClick}
          />
          <ButtonComponent
            title="Vehiculos Clasicos añadidos"
            handle={handleSearchClick}
            danger={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
