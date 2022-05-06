import ButtonComponent from "../../../common/Button/Button";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => navigate("/create/");
  const goBack = () => navigate("/");

  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-red border-solid rounded-full animate-spin"
      />
      <p className="mt-3">Esperando que añada un clasico...</p>
      <div className="flex w-full justify-between my-3">
        <ButtonComponent
          title="Añadir un clasico"
          handle={handleCreateClick}
        ></ButtonComponent>
        <ButtonComponent
          className="bg-red"
          title="Volver"
          handle={goBack}
        ></ButtonComponent>
      </div>
    </div>
  );
};

export default Loading;
