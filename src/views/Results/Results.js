import { useSelector } from "react-redux";
import Kevassirm from "../../assets/kevassirm.jpg";
import { selectDataClassicCar } from "../../redux/selectors/selectorsClassicsCars";
import List from "./components/List";
import Loading from "./components/Loading";

const Results = () => {
  const inforClassicsCars = useSelector(selectDataClassicCar);

  // console.log("inforClassicsCars", JSON.parse([]));

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-3/5 flex justify-center items-center flex-col px-10">
        {inforClassicsCars ? <List data={[]} /> : <Loading />}
      </div>
      <div className="w-2/5">
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
