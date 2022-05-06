import Mobster from "../../assets/mobster.png";
import { useSelector, useDispatch } from "react-redux";
import { saveClassicCar } from "../../redux/actions/actionsClassicsCars";

import { selectDataClassicCar } from "../../redux/selectors/selectorsClassicsCars";

const Create = () => {
  const dispatch = useDispatch();
  const inforClassicsCars = useSelector(selectDataClassicCar);

  const handleSave = (event) => {
    event.preventDefault();
    const { target } = event;

    const payload = {
      model: target.model.value,
      yearProduction: target.yearProduction.value,
      owner: target.owner.value,
      mileage: target.mileage.value,
    };

    dispatch(saveClassicCar(payload));
  };

  console.log("inforClassicsCars", inforClassicsCars);

  return (
    <div>
      <div className="w-3/5 flex justify-center items-center flex-col px-10">
        ste - {inforClassicsCars}
      </div>
      <h2 className="text-3xl font-bold font-lato mt-5">Registra Tu Clasico</h2>
      <div className="flex h-screen overflow-hidden">
        <div className="w-3/5">
          <img
            src={Mobster}
            alt="kevassirm"
            className="w-full h-50 object-cover"
          />
        </div>
        <form
          onSubmit={handleSave}
          className="w-2/5 flex justify-center items-center flex-col px-10"
        >
          <h2 className="text-lg font-bold font-lato">Modelo</h2>
          <input
            className="bg-special-gray font-lato w-full h-9 mb-3 p-1 border focus:outline-none focus:ring-2 focus:ring-blue-hover rounded"
            name="model"
          />
          <h2 className="text-lg font-bold font-lato">Año de fabricación</h2>
          <input
            type="number"
            className="bg-special-gray font-lato w-full h-9 mb-3 p-1 border focus:outline-none focus:ring-2 focus:ring-blue-hover rounded"
            name="yearProduction"
          />
          <h2 className="text-lg font-bold font-lato">
            Nombre del propietario
          </h2>
          <input
            className="bg-special-gray font-lato w-full h-9 mb-3 p-1 border focus:outline-none focus:ring-2 focus:ring-blue-hover rounded"
            name="owner"
          />
          <h2 className="text-lg font-bold font-lato">Kilometraje</h2>
          <input
            type="number"
            className="bg-special-gray font-lato w-full h-9 mb-3 p-1 border focus:outline-none focus:ring-2 focus:ring-blue-hover rounded"
            name="mileage"
          />
          <div className="flex w-full justify-between my-4">
            <button className="bg-blue text-white hover:bg-blue-hover font-lato w-full shadow-lg h-9 rounded">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
