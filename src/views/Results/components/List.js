import ListItem from "./ListItem";

const List = (data) =>
  data?.data?.map((car) => <ListItem key={car.id} {...car} />);

export default List;
