import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Kevassirm from "../../assets/kevassirm.jpg";
import ButtonComponent from "../../common/Button/Button";
import { selectDataClassicCar } from "../../redux/selectors/selectorsClassicsCars";
import { handleSelector } from "../../utils/handleSelector";
import List from "./components/List";
import Loading from "./components/Loading";

const Results = () => {
  const navigate = useNavigate();
  const inforClassicsCars = useSelector(selectDataClassicCar);

  const dataClasicsCars = handleSelector(inforClassicsCars);

  const handleResulteClick = () => navigate("/create/");
  const goBack = () => navigate("/");

  return (
    <div className="flex flex-row">
      <div className="w-2/5 h-screen overflow-y-auto px-10">
        {inforClassicsCars && (
          <div className="flex w-full justify-between my-3">
            <ButtonComponent
              title="Añadir un clasico"
              handle={handleResulteClick}
            />
            <ButtonComponent title="Inicio" handle={goBack} danger={true} />
          </div>
        )}
        {inforClassicsCars ? <List data={dataClasicsCars} /> : <Loading />}
      </div>
      <div className="w-3/5">
        <img
          src={Kevassirm}
          alt="kevassirm"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Results;
