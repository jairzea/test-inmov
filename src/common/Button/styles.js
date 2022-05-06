import { classString } from "../../utils/classString";

const classButtonPrimary = [
  "bg-blue",
  "text-white",
  "hover:bg-blue-hover",
  "font-lato",
  "w-full shadow-lg",
  "h-9",
  "rounded",
];

const classButtonDanger = [
  "bg-red",
  "text-white",
  "hover:bg-red-hover",
  "font-lato",
  "w-full shadow-lg",
  "h-9",
  "rounded",
];

const classStringButtonPrimary = classString(classButtonPrimary);
const classStringButtonDanger = classString(classButtonDanger);

export { classStringButtonPrimary as default, classStringButtonDanger };
