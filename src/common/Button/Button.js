import classStringButtonPrimary, { classStringButtonDanger } from "./styles";

const ButtonComponent = ({ handle, title, danger, width, type }) => {
  return (
    <button
      type={type}
      className={danger ? classStringButtonDanger : classStringButtonPrimary}
      style={{ width: width ?? "48%" }}
      onClick={handle}
    >
      {title}
    </button>
  );
};

export default ButtonComponent;
