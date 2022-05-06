export const handleSelector = (info) => {
  const newInfoClassicCars = info.substring(0, info.length - 1);

  const dataClasicsCars = JSON.parse(`[${newInfoClassicCars}]`);

  return dataClasicsCars;
};
