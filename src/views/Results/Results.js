import { useSelector } from "react-redux";
import Kevassirm from "../../assets/kevassirm.jpg";
import { selectDataClassicCar } from "../../redux/selectors/selectorsClassicsCars";
import List from "./components/List";
import Loading from "./components/Loading";

const Results = () => {
  const inforClassicsCars = useSelector(selectDataClassicCar);

  const newInfoClassicCars = inforClassicsCars.substring(
    0,
    inforClassicsCars.length - 1
  );

  const dataClasicsCars = JSON.parse(`[${newInfoClassicCars}]`);

  return (
    <div className="flex flex-row">
      <div className="w-2/5 h-screen overflow-y-auto overflow-x-hidden px-10">
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
