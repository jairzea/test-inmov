import { classString } from "../../utils/classString";

const classFatherOne = ["text-3xl", "font-bold", "font-lato", "mt-5"];

const classinput = [
  "bg-special-gray",
  "font-lato",
  "w-full",
  "h-9",
  "mb-3",
  "p-1",
  "border",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-blue-hover",
  "rounded",
];

const classForm = [
  "w-2/5",
  "flex",
  "justify-center",
  "items-center",
  "flex-col px-10",
];

const classH2 = ["text-lg", "font-bold", "font-lato"];

const classStringFatherOne = classString(classFatherOne);
const classStringInput = classString(classinput);
const classStringForm = classString(classForm);
const classStringH2 = classString(classH2);

export {
  classStringFatherOne as default,
  classStringInput,
  classStringForm,
  classStringH2,
};
