import Mobster from "../../../assets/mobster.png";

const ListItem = (props) => {
  return (
    <div
      key={props.id}
      className="flex flex-row w-full mt-16"
      style={{ minWidth: 650 }}
    >
      <div className="w-1/6 w-32">
        <img src={Mobster} alt="Clasico" />
      </div>
      <div className="w-5/6 flex flex-col items-start py-1 px-4">
        <p className="font-lato text-xl font-bold">{props.model}</p>
        <p>
          Año de fabricación: <b>{props.yearProduction}</b>
        </p>
        <p>
          Propietario: <b>{props.owner}</b>
        </p>
        <p>
          Kilometraje: <b>{props.mileage} km.</b>
        </p>
        <p>
          id: <b>{props.id}</b>
        </p>
      </div>
    </div>
  );
};

export default ListItem;
