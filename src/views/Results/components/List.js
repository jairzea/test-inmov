const List = (data) => {
  console.log(data);
  return data?.map((car) => {
    <div key={car.model}></div>;
  });
};

export default List;
