import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import classStringFatherOne, {
  classStringInput,
  classStringForm,
  classStringH2,
} from "./styles";
import ButtonComponent from "../../common/Button";
import { saveClassicCar } from "../../redux/actions/actionsClassicsCars";
import { generateId } from "../../utils/generateId";

import Mobster from "../../assets/mobster.png";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, getValues, resetField } = useForm();

  const handleSave = (event) => {
    event.preventDefault();
    const payload = {
      id: generateId(),
      model: getValues("model"),
      yearProduction: getValues("yearProduction"),
      owner: getValues("owner"),
      mileage: getValues("mileage"),
    };

    dispatch(saveClassicCar(JSON.stringify(payload) + ","));

    toast.success("Registro exitoso!", {
      position: "top-right",
    });

    clearClick();
  };

  const clearClick = () => {
    resetField("model");
    resetField("yearProduction");
    resetField("owner");
    resetField("mileage");
  };

  const handleResulteClick = () => navigate("/results/");
  const goBack = () => navigate("/");

  return (
    <div>
      <h2 className={classStringFatherOne}>Registra Tu Clasico</h2>
      <div className="flex w-full justify-center mb-2">
        <div className="p-2 w-full">
          <ButtonComponent
            title="Clasicos"
            danger={true}
            handle={handleResulteClick}
          />
        </div>
        <div className="p-2 w-full">
          <ButtonComponent title="Inicio" handle={goBack} />
        </div>
      </div>
      <div className="flex h-screen overflow-hidden">
        <div className="w-3/5">
          <img
            src={Mobster}
            alt="kevassirm"
            className="w-full h-50 object-cover"
          />
        </div>
        <form onSubmit={handleSave} className={classStringForm}>
          <h2 className={classStringH2}>Modelo</h2>
          <input className={classStringInput} {...register("model")} required />
          <h2 className={classStringH2}>Año de fabricación</h2>
          <input
            type="number"
            className={classStringInput}
            {...register("yearProduction")}
            required
          />
          <h2 className={classStringH2}>Nombre del propietario</h2>
          <input className={classStringInput} {...register("owner")} required />
          <h2 className={classStringH2}>Kilometraje</h2>
          <input
            type="number"
            className={classStringInput}
            {...register("mileage")}
            required
          />
          <div className="flex w-full justify-between my-4">
            <ButtonComponent title="Guardar" />
            <ButtonComponent
              type="button"
              title="Limpiar"
              danger={true}
              handle={clearClick}
            />
          </div>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Create;
