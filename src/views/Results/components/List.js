import ListItem from "./ListItem";

const List = (data) => {
  console.log(data?.data);
  return data?.data?.map((car) => <ListItem key={car.id} {...car} />);
};

export default List;
